// chart.js
// base class for onChart and offChart

import DOM from "../utils/DOM";
import {
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
} from "../utils/typeChecks";
import CEL from "../components/primitives/canvas";
import StateMachine from "../scaleX/stateMachne";
import { InputController, Keys } from "../input/controller";
import {
  STREAM_ERROR,
  STREAM_NONE,
  STREAM_LISTENING,
  STREAM_STOPPED,
  STREAM_NEWVALUE,
  STREAM_UPDATE,
} from "../definitions/core";
import { BUFFERSIZE } from "../definitions/chart";
import { timestampDiff } from "../utils/time";

export default class Chart {
  #ID;
  #name
  #shortName
  #core;
  #options;
  #parent;
  #stateMachine;

  #elTarget;
  #elCanvas;
  #elViewport;
  #elLegend;
  #elScale;

  #Scale;
  #Time;
  #Graph;
  #Legends;
  #Stream;

  #viewport;
  #layerGrid;
  #layerStream;
  #layerCursor;
  #layersTools = new Map();

  #overlayGrid;
  #overlayIndicators = new Map();
  #overlayTools = new Map();

  #cursorPos = [0, 0];
  #cursorActive = false;
  #cursorClick;

  #settings;
  #streamCandle;
  #title;
  #theme;
  #controller;

  constructor(core, options) {
    this.#core = core;
    if (!isObject(options)) return
    this.#options = {...options}

    this.#name = options.name
    this.#shortName = options.shortName
    this.#elTarget = this.#options.elements.elTarget;
    this.#elScale = this.#options.elements.elScale;
    this.#parent = this.#options.parent;
    this.#theme = core.theme;
    this.#settings = core.settings;

    // process options
    for (const option in this.#options) {
      if (option in this.props()) {
        this.props()[option](this.#options[option])
      }
    }
  }

  log(l) { this.core.log(l) }
  info(i) { this.core.info(i) }
  warn(w) { this.core.warn(w) }
  error(e) { this.core.error(e) }

  set id(id) { this.#ID = id }
  get id() { return (this.#ID) ? `${this.#ID}` : `${this.#core.id}.${this.#name}` }
  get name() { return this.#name }
  get shortName() { return this.#shortName }
  get title() { return this.#title }
  get parent() { return this.#parent }
  get core() { return this.#core }
  get options() { return this.#options }
  get element() { return this.#elTarget }
  get pos() { return this.dimensions }
  get dimensions() { return DOM.elementDimPos(this.#elTarget) }
  set width(w) { this.setWidth(w) }
  get width() { return this.#elTarget.getBoundingClientRect().width }
  set height(h) { this.setHeight(h) }
  get height() { return this.#elTarget.getBoundingClientRect().height }
  get data() {}
  get range() { return this.#core.range }
  get stream() { return this.#Stream }
  get cursorPos() { return this.#cursorPos }
  get cursorActive() { return this.#cursorActive }
  get cursorClick() { return this.#cursorClick }
  get candleW() { return this.#core.Timeline.candleW }
  get theme() { return this.#core.theme }
  get config() { return this.#core.config }
  get scrollPos() { return this.#core.scrollPos }
  get bufferPx() { return this.#core.bufferPx }
  get elCanvas() { return this.#Graph.viewport.scene.canvas }
  get elScale() { return this.#elScale }
  get elLegend() { return this.#elTarget.legend }
  get elViewport() { return this.#elTarget.viewport }
  get viewport() { return this.#viewport }
  set layerWidth(w) { this.#Graph.layerWidth = w }
  get layerWidth() { return this.#Graph.layerWidth }
  set legend(l) { this.#Legends = l }
  get legend() { return this.#Legends }
  set time(t) { this.#Time = t }
  get time() { return this.#Time }
  set scale(s) { this.#Scale = s }
  get scale() { return this.#Scale }
  get axes() { return "x" }
  set graph(g) { this.#Graph = g }
  get graph() { return this.#Graph }
  get viewport() { return this.#Graph.viewport }
  get layerGrid() { return this.#Graph.overlays.get("grid").layer }
  get overlayGrid() { return this.#Graph.overlays.get("grid").instance }
  get overlayTools() { return this.#overlayTools }
  set stateMachine(config) { this.#stateMachine = new StateMachine(config, this) }
  get stateMachine() { return this.#stateMachine }

  start() {
    // X Axis - Timeline
    this.#Time = this.#core.Timeline;

    // create and start overlays
    this.createGraph();

    // Y Axis - Price Scale
    this.#Scale.start(this.name, "yAxis Scale started");

    // draw the chart - grid, candles, volume
    this.draw(this.range);

    // set mouse pointer
    this.setCursor("crosshair");

    // set up event listeners
    this.eventsListen();

    // start State Machine
    stateMachineConfig.context = this;
    this.stateMachine = stateMachineConfig;
    this.stateMachine.start();
  }

  end() {
    this.stateMachine.destroy();
    this.#Scale.end();
    this.#Graph.destroy();

    this.#controller.removeEventListener("mousemove", this.onMouseMove);
    this.#controller.removeEventListener("mouseenter", this.onMouseEnter);
    this.#controller.removeEventListener("mouseout", this.onMouseOut);
    this.#controller.removeEventListener("mousedown", this.onMouseDown);
    this.#controller = null;

    this.off("main_mousemove", this.onMouseMove);
    this.off(STREAM_LISTENING, this.onStreamListening);
    this.off(STREAM_NEWVALUE, this.onStreamNewValue);
    this.off(STREAM_UPDATE, this.onStreamUpdate);
    this.off("setRange", this.draw)
    this.off("scrollUpdate", this.draw)
  }

  eventsListen() {
    // create controller and use 'on' method to receive input events
    // use canvas instead?
    this.#controller = new InputController(this.#elTarget, {
      disableContextMenu: false,
    });
    this.#controller.on("mousemove", this.onMouseMove.bind(this));
    this.#controller.on("mouseenter", this.onMouseEnter.bind(this));
    this.#controller.on("mouseout", this.onMouseOut.bind(this));
    this.#controller.on("mousedown", this.onMouseDown.bind(this));

    // listen/subscribe/watch for parent notifications
    this.on("main_mousemove", this.updateLegends.bind(this));
    this.on(STREAM_LISTENING, this.onStreamListening.bind(this));
    this.on(STREAM_NEWVALUE, this.onStreamNewValue.bind(this));
    this.on(STREAM_UPDATE, this.onStreamUpdate.bind(this));
    // this.on("setRange", this.draw.bind(this))
    // this.on("scrollUpdate", this.draw.bind(this))
  }

  /**
   * Set a custom event listener
   * @param {string} topic
   * @param {function} handler
   * @param {*} context
   */
  on(topic, handler, context) {
    this.#core.on(topic, handler, context);
  }

  /**
   * Remove a custom event listener
   * @param {string} topic
   * @param {function} handler
   */
  off(topic, handler) {
    this.#core.off(topic, handler);
  }

  /**
   * Emit an event with optional data
   * @param {string} topic
   * @param {*} data
   */
  emit(topic, data) {
    this.#core.emit(topic, data);
  }

  onMouseMove(e) {
    this.#cursorPos = [Math.round(e.position.x), Math.round(e.position.y)]
    this.emit(`${this.ID}_mousemove`, this.#cursorPos)
  }

  onMouseEnter(e) {
    this.#cursorActive = true;
    this.#cursorPos = [Math.round(e.position.x), Math.round(e.position.y)];
    this.scale.layerCursor.visible = true
    this.emit(`${this.ID}_mouseenter`, this.#cursorPos);
  }

  onMouseOut(e) {
    this.#cursorActive = false;
    this.#cursorPos = [Math.round(e.position.x), Math.round(e.position.y)];
    this.scale.layerCursor.visible = false
    this.emit(`${this.ID}_mouseout`, this.#cursorPos);
  }

  onMouseDown(e) {
    this.#cursorClick = [Math.floor(e.position.x), Math.floor(e.position.y)];
    if (this.stateMachine.state === "tool_activated")
      this.emit("tool_targetSelected", { target: this, position: e });
  }

  onStreamListening(stream) {
    if (this.#Stream !== stream) this.#Stream = stream;
  }

  onStreamNewValue(value) {
    this.draw(this.range, true);
  }

  props() {
    return {
      // id: (id) => this.setID(id),
      title: (title) => (this.#title = title),
      yAxisDigits: (digits) => this.setYAxisDigits(digits),
    };
  }

  setHeight(h) {
    if (!isNumber(h)) h = this.height || this.#parent.height;

    this.#elTarget.style.height = `${h}px`;
    this.#elScale.style.height = `${h}px`;
    this.elViewport.style.height = `${h}px`;
    this.#Scale.setDimensions({ w: null, h: h });
  }

  /**
 * Set chart dimensions
 * @param {object} dim - dimensions {w:width, h: height}
 */
  setDimensions(dim) {
    const buffer = this.config.buffer || BUFFERSIZE
      let {w, h} = dim
    w = this.width
    h = (h) ? h : this.height
    
    // this.layerWidth = Math.round(w * ((100 + buffer) * 0.01))
    // this.graph.setSize(w, h, this.layerWidth)
    this.graph.setSize(w, h, this.width)
    // element widths are automatically handled by CSS
    this.setHeight(h)
  }

  setCursor(cursor) {
    this.element.style.cursor = cursor
  }

  addTool(tool) {
    let { layerConfig } = this.layerConfig();
    let layer = new CEL.Layer(layerConfig);
    this.#layersTools.set(tool.id, layer);
    this.#viewport.addLayer(layer);

    tool.layerTool = layer;
    this.#overlayTools.set(tool.id, tool);
  }

  addTools(tools) {}

  overlayTools() {
    const tools = [];
    // for (let i = 0; i < this.#layersTools.length; i++) {
    // tools[i] =
    // new indicator(
    //   this.#layersOnChart[i],
    //   this.#Time,
    //   this.#Scale,
    //   this.config)
    // }
    // return tools
  }

  overlayToolAdd(tool) {
    // create new tool layer

    this.#overlayTools.set(tool.id, tool);
  }

  overlayToolDelete(tool) {
    this.#overlayTools.delete(tool);
  }

  drawGrid() {
    this.layerGrid.setPosition(this.#core.scrollPos, 0);
    this.overlayGrid.draw("y");
    this.#Graph.render();
  }

  /**
   * Refresh the entire chart
   */
  refresh() {
    this.#Scale.draw();
    this.draw();
  }

  /**
   * Update chart and indicator legends
   * @param {array} pos - cursor position x, y, defaults to current cursor position
   * @param {array} candle - OHLCV
   */
  updateLegends(pos = this.#cursorPos, candle = false) {
    if (this.#core.isEmpty) return

    const legends = this.#Legends.list;

    for (const legend in legends) {
      this.#Legends.update(legend, { pos, candle });
    }
  }

  render() {
    this.#Graph.render();
    this.#Scale.render()
  }

  draw(range=this.range, update=false) {
    // window.requestAnimationFrame(() =>
      this.#Graph.draw(range, update)
    // )
  }

  drawGrid() {
    this.layerGrid.setPosition(this.core.scrollPos, 0)
    this.overlayGrid.draw("y")
    this.#Graph.render();
  }

  /**
   * Set the entire chart dimensions, this will cascade and resize components
   * @param {number} width - width in pixels, defaults to current width
   * @param {number} height - height in pixels, defaults to current height
   */
  resize(width = this.width, height = this.height) {
    // adjust element, viewport and layers
    // this.setDimensions({ w: width, h: height });
  }

  /**
 * Zoom (contract or expand) range start
 */
  zoomRange() {
    // draw the chart - grid, candles, volume
    this.draw(this.range, true)
    this.emit("zoomDone")
  }
  
}
