function Ol(o, e) {
  for (var i = 0; i < e.length; i++) {
    const s = e[i];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const n in s)
        if (n !== "default" && !(n in o)) {
          const r = Object.getOwnPropertyDescriptor(s, n);
          r && Object.defineProperty(o, n, r.get ? r : {
            enumerable: !0,
            get: () => s[n]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
const Bt = "TradeX-Chart", qt = "TX", Nl = "tradeXutils", Qn = "tradeXmenus", Dl = "tradeXmenu", Jn = "tradeXdividers", er = "tradeXwindows", Il = "tradeXwindow", tr = "tradeXprogress", Rl = 500, kl = "stream_None", Li = "stream_Listening", ir = "stream_Started", _l = "stream_Stopped", $l = "stream_Error", Js = "stream_candleFirst", Je = "stream_candleUpdate", en = "stream_candleNew", Hl = 250, Bl = 8, Ul = 2, zl = 2, jr = 18, Qt = 100, Vt = /^(\d*\.?\d+)\s?(px|em|ex|%|in|cn|mm|pt|pc+)$/igm;
function P(o) {
  return Array.isArray(o);
}
function O(o) {
  return o && typeof o == "function";
}
function w(o) {
  return typeof o == "object" && !Array.isArray(o) && o !== null;
}
function T(o) {
  return typeof o == "number" && !isNaN(o);
}
function I(o) {
  return typeof o == "number" && Math.abs(o % 1) === 0;
}
function Xr(o) {
  return o != null;
}
function F(o) {
  return typeof o == "boolean";
}
function b(o) {
  return typeof o == "string";
}
function Kr(o) {
  return o instanceof Map;
}
function Zr(o) {
  return !!o && (w(o) || O(o)) && O(o.then);
}
function Qr(o) {
  return o instanceof Error;
}
function Jt(o) {
  return !(o && o.constructor === Function) || o.prototype === void 0 || Object.getOwnPropertyNames(o).includes("arguments") || Object.getOwnPropertyNames(o).includes("arguments") || Object.getOwnPropertyNames(o).includes("arguments") ? !1 : Function.prototype !== Object.getPrototypeOf(o) ? !0 : Object.getOwnPropertyNames(o.prototype).length > 1;
}
function Jr(o, e) {
  switch (o) {
    case "array":
      return P(e);
    case "function":
      return O(e);
    case "object":
      return w(e);
    case "integer":
      return I(e);
    case "number":
      return T(e);
    case "valid":
      return Xr(e);
    case "boolean":
      return F(e);
    case "string":
      return b(e);
    case "map":
      return Kr(e);
    case "promise":
      return Zr(e);
    case "error":
      return Qr(e);
    case "class":
      return Jt(e);
    default:
      throw new Error(`No known test for type: ${o}`);
  }
}
function Ls(o) {
  const e = [
    "array",
    "error",
    "class",
    "function",
    "map",
    "promise",
    "object",
    "integer",
    "number",
    "boolean",
    "string"
  ];
  for (let i of e)
    try {
      if (Jr(i, o))
        return i;
    } catch {
      return typeof o;
    }
}
const rf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkType: Jr,
  isArray: P,
  isBoolean: F,
  isClass: Jt,
  isError: Qr,
  isFunction: O,
  isInteger: I,
  isMap: Kr,
  isNumber: T,
  isObject: w,
  isPromise: Zr,
  isString: b,
  isValid: Xr,
  typeOf: Ls
}, Symbol.toStringTag, { value: "Module" })), eo = ["id", "class", "style", "alt", "width", "height", "title"], to = [...eo, "name", "type", "value", "default", "placeholder", "max", "min", "maxlenght", "src", "checked", "disabled", "pattern", "readonly", "required", "size", "step", "multiple", "autofocus", "list", "autocomplete"], io = ["button", "color", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];
function Vl(o, e = document) {
  return e.getElementById(o);
}
function Fl(o, e = document) {
  return e.getElementsByClassName(o);
}
function Wl(o, e = document) {
  return e.getElementsByName(o);
}
function Gl(o, e = document) {
  return e.getElementsByTagName(o);
}
function so(o, e = document) {
  return e.querySelector(o);
}
function no(o, e = document) {
  return e.querySelectorAll(o);
}
function ql(o) {
  return typeof Node == "object" ? o instanceof Node : o && typeof o == "object" && typeof o.nodeType == "number" && typeof o.nodeName == "string";
}
function H(o) {
  return typeof HTMLElement == "object" ? o instanceof HTMLElement : o && typeof o == "object" && o !== null && o.nodeType === 1 && typeof o.nodeName == "string";
}
function ct(o) {
  return H(o) ? !!o && !!(o.offsetWidth || o.offsetHeight || o.getClientRects().length) : !1;
}
function tn(o) {
  if (!H(o))
    return !1;
  const e = o.getBoundingClientRect();
  return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function Yl(o) {
  if (!H(o))
    return !1;
  const e = getComputedStyle(o);
  if (e.display === "none" || e.visibility !== "visible" || parseFloat(e.opacity) < 0.1 || o.offsetWidth + o.offsetHeight + o.getBoundingClientRect().height + o.getBoundingClientRect().width === 0)
    return !1;
  const i = {
    x: o.getBoundingClientRect().left + o.offsetWidth / 2,
    y: o.getBoundingClientRect().top + o.offsetHeight / 2
  };
  if (i.x < 0 || i.x > (document.documentElement.clientWidth || window.innerWidth) || i.y < 0 || i.y > (document.documentElement.clientHeight || window.innerHeight))
    return !1;
  let s = document.elementFromPoint(i.x, i.y);
  do
    if (s === elem)
      return !0;
  while (s = s.parentNode);
  return !1;
}
function sn(o, e) {
  if (nn(o)) {
    var i = window.URL || window.webkitURL || window;
    o = new Blob([o], { type: "image/svg+xml" }), o = i.createObjectURL(o);
  }
  const s = new Image();
  if (s.src = o, O(e))
    s.complete ? e(s) : (s.onload = () => e(s), s.onerror = () => e(!1));
  else
    return new Promise(function(n, r) {
      s.complete ? n(s) : (s.onload = () => n(s), s.onerror = () => r(!1));
    });
}
function nn(o) {
  return b(o) ? /<\s*svg[^>]*>(.*?)<\s*\/\s*svg>/.test(o) : !1;
}
function jl(o) {
  return new Promise((e) => {
    if (document.querySelector(o))
      return e(document.querySelector(o));
    const i = new MutationObserver((s) => {
      document.querySelector(o) && (i.disconnect(), e(document.querySelector(o)));
    });
    i.observe(document.body, {
      childList: !0,
      subtree: !0
    });
  });
}
function ae(o) {
  if (!H(o))
    return !1;
  let e = 0, i = 0, s = o;
  for (; s && s.tagName.toLowerCase() != "body" && !isNaN(s.offsetLeft) && !isNaN(s.offsetTop); )
    e += s.offsetLeft - s.scrollLeft, i += s.offsetTop - s.scrollTop, s = s.offsetParent;
  const n = o.getBoundingClientRect();
  let r = n.right - n.left, a = n.bottom - n.top, l = ct(o), h = tn(o);
  return {
    top: i,
    bottom: i + a,
    left: e,
    right: e + r,
    width: r,
    height: a,
    visible: l,
    viewport: h
  };
}
function Xl(o, e) {
  if (!H(o) || !H(o))
    return !1;
  const i = ae(o), s = ae(e);
  return {
    x: i.top - s.top,
    y: i.left - s.left,
    el1Location: i,
    el2Location: s
  };
}
function ro(o) {
  if (!b(o))
    return !1;
  const e = document.createElement("template");
  return o = o.trim(), e.innerHTML = o, e.content.firstChild;
}
function Kl(o) {
  if (!b(o))
    return !1;
  const e = document.createElement("template");
  return e.innerHTML = o, e.content.childNodes;
}
function vt(o, e, i) {
  if (!nn(o) || !T(i?.w) || !T(i?.h))
    return !1;
  let s = i.w, n = i.h, r = document.createElement("canvas");
  r.width = s, r.height = n;
  let a = ro(o);
  a.style.fill = e, a.setAttribute("width", s), a.setAttribute("height", n), a.xmlns = "http://www.w3.org/2000/svg";
  let l = new XMLSerializer().serializeToString(a), f = "data:image/svg+xml;base64," + btoa(l), g = new Image();
  return g.setAttribute("width", s), g.setAttribute("height", n), g.onload = () => {
    r.getContext("2d").drawImage(g, 0, 0, s, n);
  }, g.src = f, g;
}
function Zl(o) {
  if (!H(o))
    return !1;
  const e = (s) => {
    !o.contains(s.target) && ct(o) && (o.style.display = "none", i());
  }, i = () => {
    document.removeEventListener("click", e);
  };
  document.addEventListener("click", e);
}
function Ql(o, e) {
  if (!H(o))
    return !1;
  const i = (n) => {
    !o.contains(n.target) && ct(o) && (e(), s());
  }, s = () => {
    document.removeEventListener("click", i);
  };
  document.addEventListener("click", i);
}
function oo(o, e) {
  let i, s;
  if (b(o))
    i = document.getElementById(o);
  else if (H(o))
    i = o;
  else
    return !1;
  const n = (i.ownerDocument || document).defaultView;
  return b(e) ? (n && n.getComputedStyle ? (e = e.replace(/([A-Z])/g, "-$1").toLowerCase(), s = document.defaultView.getComputedStyle(i, null).getPropertyValue(e)) : i.currentStyle && (s = i.currentStyle[e]), s) : !1;
}
function Jl(o, e, i, s) {
  let n = rn(o, e, i, s);
  if (n)
    n.i >= 0 ? n.rules[n.i].style[n.property] = n.value : lo(n.styleSheet, n.selector, n.rules, n.index);
  else
    return;
}
function eh(o, e, i) {
  let s = rn(o, e, i, "");
  (s.styleSheet.deleteRule || s.styleSheet.removeRule)(s.i);
}
function rn(o, e, i, s) {
  if (!o || !w(o))
    return null;
  if (o.constructor.name == "HTMLStyleElement")
    o = o.sheet;
  else if (o.constructor.name != "CSSStyleSheet")
    return null;
  let n = ao(e, i, s);
  e = n[0], i = n[1], s = n[2];
  const r = o.cssRules || o.rules;
  for (var a = r.length - 1; a > 0 && r[a].selectorText !== e; --a)
    ;
  return { styleSheet: o, rules: r, selector: e, property: i, value: s, i: a };
}
function ao(o, e, i) {
  return [
    o = o.toLowerCase().replace(/\s+/g, " "),
    e = e.toLowerCase(),
    i = i.toLowerCase()
  ];
}
function lo(o, e, i, s) {
  o.insertRule ? o.insertRule(e + "{" + i + "}", s) : o.addRule(e, i, s);
}
function on(o, e) {
  return !H(o) || !b(e) ? null : o.classList.contains(e) ? o : on(o.parentElement, e);
}
function ho(o, e) {
  let i = b(e?.entry) ? e?.entry : "", n = `${b(e?.label) ? `<label for="${i}">${e.label}</label>` : ""}<input id="${i}" class="subject" `;
  for (let r in e)
    (to.includes(r) || /^(data-[^\t\n\f \/>"'=]+)/g.test(r)) && (n += `${r}="${e[r]}" `);
  return n += `>
`;
}
const of = {
  addCSSRule: lo,
  addStyleRule: Jl,
  deleteStyleRule: eh,
  elementDimPos: ae,
  elementsDistance: Xl,
  findByClass: Fl,
  findByID: Vl,
  findByName: Wl,
  findBySelector: so,
  findBySelectorAll: no,
  findStyleRule: rn,
  findTargetParentWithClass: on,
  fndByTag: Gl,
  getStyle: oo,
  hideOnClickOutside: Zl,
  htmlAttr: eo,
  htmlInput: ho,
  htmlToElement: ro,
  htmlToElements: Kl,
  inputAttr: to,
  inputTypes: io,
  isElement: H,
  isImage: sn,
  isInViewport: tn,
  isNode: ql,
  isSVG: nn,
  isVisible: ct,
  isVisibleToUser: Yl,
  onClickOutside: Ql,
  styleRuleSanitize: ao,
  svgToImage: vt,
  waitForElm: jl
}, th = typeof window < "u" && typeof window.document < "u";
typeof process < "u" && process.versions != null && process.versions.node != null;
typeof window < "u" && window.name === "nodejs" || navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
const ih = ((o) => "onorientationchange" in o || o.matchMedia("(any-pointer:coarse)").matches || !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || "ontouchstart" in o || o.DocumentTouch && document instanceof o.DocumentTouch)(typeof window < "u" ? window : {}), sh = {
  idle: 0,
  dragStart: 1,
  dragging: 2
};
class ot {
  #e = 0;
  #t = 0;
  constructor() {
    if (arguments.length === 1) {
      const { x: e, y: i } = arguments[0];
      this.x = e || 0, this.y = i || 0;
    } else if (arguments.length > 1) {
      const [e, i] = arguments;
      this.x = e || 0, this.y = i || 0;
    }
  }
  set x(e) {
    T(e) && (this.#e = e);
  }
  get x() {
    return this.#e;
  }
  set y(e) {
    T(e) && (this.#t = e);
  }
  get y() {
    return this.#t;
  }
  clone() {
    return new ot(this.x, this.y);
  }
}
function nh(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var co = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(o) {
  (function(e, i, s, n) {
    var r = ["", "webkit", "Moz", "MS", "ms", "o"], a = i.createElement("div"), l = "function", h = Math.round, p = Math.abs, f = Date.now;
    function g(c, u, m) {
      return setTimeout(D(c, m), u);
    }
    function C(c, u, m) {
      return Array.isArray(c) ? (S(c, m[u], m), !0) : !1;
    }
    function S(c, u, m) {
      var v;
      if (c)
        if (c.forEach)
          c.forEach(u, m);
        else if (c.length !== n)
          for (v = 0; v < c.length; )
            u.call(m, c[v], v, c), v++;
        else
          for (v in c)
            c.hasOwnProperty(v) && u.call(m, c[v], v, c);
    }
    function M(c, u, m) {
      var v = "DEPRECATED METHOD: " + u + `
` + m + ` AT 
`;
      return function() {
        var x = new Error("get-stack-trace"), E = x && x.stack ? x.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", A = e.console && (e.console.warn || e.console.log);
        return A && A.call(e.console, v, E), c.apply(this, arguments);
      };
    }
    var k;
    typeof Object.assign != "function" ? k = function(u) {
      if (u === n || u === null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var m = Object(u), v = 1; v < arguments.length; v++) {
        var x = arguments[v];
        if (x !== n && x !== null)
          for (var E in x)
            x.hasOwnProperty(E) && (m[E] = x[E]);
      }
      return m;
    } : k = Object.assign;
    var ue = M(function(u, m, v) {
      for (var x = Object.keys(m), E = 0; E < x.length; )
        (!v || v && u[x[E]] === n) && (u[x[E]] = m[x[E]]), E++;
      return u;
    }, "extend", "Use `assign`."), we = M(function(u, m) {
      return ue(u, m, !0);
    }, "merge", "Use `assign`.");
    function B(c, u, m) {
      var v = u.prototype, x;
      x = c.prototype = Object.create(v), x.constructor = c, x._super = v, m && k(x, m);
    }
    function D(c, u) {
      return function() {
        return c.apply(u, arguments);
      };
    }
    function L(c, u) {
      return typeof c == l ? c.apply(u && u[0] || n, u) : c;
    }
    function de(c, u) {
      return c === n ? u : c;
    }
    function Q(c, u, m) {
      S(pt(u), function(v) {
        c.addEventListener(v, m, !1);
      });
    }
    function pe(c, u, m) {
      S(pt(u), function(v) {
        c.removeEventListener(v, m, !1);
      });
    }
    function be(c, u) {
      for (; c; ) {
        if (c == u)
          return !0;
        c = c.parentNode;
      }
      return !1;
    }
    function xe(c, u) {
      return c.indexOf(u) > -1;
    }
    function pt(c) {
      return c.trim().split(/\s+/g);
    }
    function qe(c, u, m) {
      if (c.indexOf && !m)
        return c.indexOf(u);
      for (var v = 0; v < c.length; ) {
        if (m && c[v][m] == u || !m && c[v] === u)
          return v;
        v++;
      }
      return -1;
    }
    function ui(c) {
      return Array.prototype.slice.call(c, 0);
    }
    function On(c, u, m) {
      for (var v = [], x = [], E = 0; E < c.length; ) {
        var A = u ? c[E][u] : c[E];
        qe(x, A) < 0 && v.push(c[E]), x[E] = A, E++;
      }
      return m && (u ? v = v.sort(function(J, re) {
        return J[u] > re[u];
      }) : v = v.sort()), v;
    }
    function di(c, u) {
      for (var m, v, x = u[0].toUpperCase() + u.slice(1), E = 0; E < r.length; ) {
        if (m = r[E], v = m ? m + x : u, v in c)
          return v;
        E++;
      }
      return n;
    }
    var ja = 1;
    function Xa() {
      return ja++;
    }
    function Nn(c) {
      var u = c.ownerDocument || c;
      return u.defaultView || u.parentWindow || e;
    }
    var Ka = /mobile|tablet|ip(ad|hone|od)|android/i, Dn = "ontouchstart" in e, Za = di(e, "PointerEvent") !== n, Qa = Dn && Ka.test(navigator.userAgent), Nt = "touch", Ja = "pen", ns = "mouse", el = "kinect", tl = 25, ne = 1, tt = 2, q = 4, me = 8, pi = 1, Dt = 2, It = 4, Rt = 8, kt = 16, Re = Dt | It, it = Rt | kt, In = Re | it, Rn = ["x", "y"], mi = ["clientX", "clientY"];
    function Ce(c, u) {
      var m = this;
      this.manager = c, this.callback = u, this.element = c.element, this.target = c.options.inputTarget, this.domHandler = function(v) {
        L(c.options.enable, [c]) && m.handler(v);
      }, this.init();
    }
    Ce.prototype = {
      handler: function() {
      },
      init: function() {
        this.evEl && Q(this.element, this.evEl, this.domHandler), this.evTarget && Q(this.target, this.evTarget, this.domHandler), this.evWin && Q(Nn(this.element), this.evWin, this.domHandler);
      },
      destroy: function() {
        this.evEl && pe(this.element, this.evEl, this.domHandler), this.evTarget && pe(this.target, this.evTarget, this.domHandler), this.evWin && pe(Nn(this.element), this.evWin, this.domHandler);
      }
    };
    function il(c) {
      var u, m = c.options.inputClass;
      return m ? u = m : Za ? u = os : Qa ? u = yi : Dn ? u = as : u = gi, new u(c, sl);
    }
    function sl(c, u, m) {
      var v = m.pointers.length, x = m.changedPointers.length, E = u & ne && v - x === 0, A = u & (q | me) && v - x === 0;
      m.isFirst = !!E, m.isFinal = !!A, E && (c.session = {}), m.eventType = u, nl(c, m), c.emit("hammer.input", m), c.recognize(m), c.session.prevInput = m;
    }
    function nl(c, u) {
      var m = c.session, v = u.pointers, x = v.length;
      m.firstInput || (m.firstInput = kn(u)), x > 1 && !m.firstMultiple ? m.firstMultiple = kn(u) : x === 1 && (m.firstMultiple = !1);
      var E = m.firstInput, A = m.firstMultiple, Z = A ? A.center : E.center, J = u.center = _n(v);
      u.timeStamp = f(), u.deltaTime = u.timeStamp - E.timeStamp, u.angle = rs(Z, J), u.distance = fi(Z, J), rl(m, u), u.offsetDirection = Hn(u.deltaX, u.deltaY);
      var re = $n(u.deltaTime, u.deltaX, u.deltaY);
      u.overallVelocityX = re.x, u.overallVelocityY = re.y, u.overallVelocity = p(re.x) > p(re.y) ? re.x : re.y, u.scale = A ? ll(A.pointers, v) : 1, u.rotation = A ? al(A.pointers, v) : 0, u.maxPointers = m.prevInput ? u.pointers.length > m.prevInput.maxPointers ? u.pointers.length : m.prevInput.maxPointers : u.pointers.length, ol(m, u);
      var _e = c.element;
      be(u.srcEvent.target, _e) && (_e = u.srcEvent.target), u.target = _e;
    }
    function rl(c, u) {
      var m = u.center, v = c.offsetDelta || {}, x = c.prevDelta || {}, E = c.prevInput || {};
      (u.eventType === ne || E.eventType === q) && (x = c.prevDelta = {
        x: E.deltaX || 0,
        y: E.deltaY || 0
      }, v = c.offsetDelta = {
        x: m.x,
        y: m.y
      }), u.deltaX = x.x + (m.x - v.x), u.deltaY = x.y + (m.y - v.y);
    }
    function ol(c, u) {
      var m = c.lastInterval || u, v = u.timeStamp - m.timeStamp, x, E, A, Z;
      if (u.eventType != me && (v > tl || m.velocity === n)) {
        var J = u.deltaX - m.deltaX, re = u.deltaY - m.deltaY, _e = $n(v, J, re);
        E = _e.x, A = _e.y, x = p(_e.x) > p(_e.y) ? _e.x : _e.y, Z = Hn(J, re), c.lastInterval = u;
      } else
        x = m.velocity, E = m.velocityX, A = m.velocityY, Z = m.direction;
      u.velocity = x, u.velocityX = E, u.velocityY = A, u.direction = Z;
    }
    function kn(c) {
      for (var u = [], m = 0; m < c.pointers.length; )
        u[m] = {
          clientX: h(c.pointers[m].clientX),
          clientY: h(c.pointers[m].clientY)
        }, m++;
      return {
        timeStamp: f(),
        pointers: u,
        center: _n(u),
        deltaX: c.deltaX,
        deltaY: c.deltaY
      };
    }
    function _n(c) {
      var u = c.length;
      if (u === 1)
        return {
          x: h(c[0].clientX),
          y: h(c[0].clientY)
        };
      for (var m = 0, v = 0, x = 0; x < u; )
        m += c[x].clientX, v += c[x].clientY, x++;
      return {
        x: h(m / u),
        y: h(v / u)
      };
    }
    function $n(c, u, m) {
      return {
        x: u / c || 0,
        y: m / c || 0
      };
    }
    function Hn(c, u) {
      return c === u ? pi : p(c) >= p(u) ? c < 0 ? Dt : It : u < 0 ? Rt : kt;
    }
    function fi(c, u, m) {
      m || (m = Rn);
      var v = u[m[0]] - c[m[0]], x = u[m[1]] - c[m[1]];
      return Math.sqrt(v * v + x * x);
    }
    function rs(c, u, m) {
      m || (m = Rn);
      var v = u[m[0]] - c[m[0]], x = u[m[1]] - c[m[1]];
      return Math.atan2(x, v) * 180 / Math.PI;
    }
    function al(c, u) {
      return rs(u[1], u[0], mi) + rs(c[1], c[0], mi);
    }
    function ll(c, u) {
      return fi(u[0], u[1], mi) / fi(c[0], c[1], mi);
    }
    var hl = {
      mousedown: ne,
      mousemove: tt,
      mouseup: q
    }, cl = "mousedown", ul = "mousemove mouseup";
    function gi() {
      this.evEl = cl, this.evWin = ul, this.pressed = !1, Ce.apply(this, arguments);
    }
    B(gi, Ce, {
      handler: function(u) {
        var m = hl[u.type];
        m & ne && u.button === 0 && (this.pressed = !0), m & tt && u.which !== 1 && (m = q), this.pressed && (m & q && (this.pressed = !1), this.callback(this.manager, m, {
          pointers: [u],
          changedPointers: [u],
          pointerType: ns,
          srcEvent: u
        }));
      }
    });
    var dl = {
      pointerdown: ne,
      pointermove: tt,
      pointerup: q,
      pointercancel: me,
      pointerout: me
    }, pl = {
      2: Nt,
      3: Ja,
      4: ns,
      5: el
    }, Bn = "pointerdown", Un = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Bn = "MSPointerDown", Un = "MSPointerMove MSPointerUp MSPointerCancel");
    function os() {
      this.evEl = Bn, this.evWin = Un, Ce.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    B(os, Ce, {
      handler: function(u) {
        var m = this.store, v = !1, x = u.type.toLowerCase().replace("ms", ""), E = dl[x], A = pl[u.pointerType] || u.pointerType, Z = A == Nt, J = qe(m, u.pointerId, "pointerId");
        E & ne && (u.button === 0 || Z) ? J < 0 && (m.push(u), J = m.length - 1) : E & (q | me) && (v = !0), !(J < 0) && (m[J] = u, this.callback(this.manager, E, {
          pointers: m,
          changedPointers: [u],
          pointerType: A,
          srcEvent: u
        }), v && m.splice(J, 1));
      }
    });
    var ml = {
      touchstart: ne,
      touchmove: tt,
      touchend: q,
      touchcancel: me
    }, fl = "touchstart", yl = "touchstart touchmove touchend touchcancel";
    function zn() {
      this.evTarget = fl, this.evWin = yl, this.started = !1, Ce.apply(this, arguments);
    }
    B(zn, Ce, {
      handler: function(u) {
        var m = ml[u.type];
        if (m === ne && (this.started = !0), !!this.started) {
          var v = vl.call(this, u, m);
          m & (q | me) && v[0].length - v[1].length === 0 && (this.started = !1), this.callback(this.manager, m, {
            pointers: v[0],
            changedPointers: v[1],
            pointerType: Nt,
            srcEvent: u
          });
        }
      }
    });
    function vl(c, u) {
      var m = ui(c.touches), v = ui(c.changedTouches);
      return u & (q | me) && (m = On(m.concat(v), "identifier", !0)), [m, v];
    }
    var wl = {
      touchstart: ne,
      touchmove: tt,
      touchend: q,
      touchcancel: me
    }, bl = "touchstart touchmove touchend touchcancel";
    function yi() {
      this.evTarget = bl, this.targetIds = {}, Ce.apply(this, arguments);
    }
    B(yi, Ce, {
      handler: function(u) {
        var m = wl[u.type], v = xl.call(this, u, m);
        v && this.callback(this.manager, m, {
          pointers: v[0],
          changedPointers: v[1],
          pointerType: Nt,
          srcEvent: u
        });
      }
    });
    function xl(c, u) {
      var m = ui(c.touches), v = this.targetIds;
      if (u & (ne | tt) && m.length === 1)
        return v[m[0].identifier] = !0, [m, m];
      var x, E, A = ui(c.changedTouches), Z = [], J = this.target;
      if (E = m.filter(function(re) {
        return be(re.target, J);
      }), u === ne)
        for (x = 0; x < E.length; )
          v[E[x].identifier] = !0, x++;
      for (x = 0; x < A.length; )
        v[A[x].identifier] && Z.push(A[x]), u & (q | me) && delete v[A[x].identifier], x++;
      if (Z.length)
        return [
          On(E.concat(Z), "identifier", !0),
          Z
        ];
    }
    var Cl = 2500, Vn = 25;
    function as() {
      Ce.apply(this, arguments);
      var c = D(this.handler, this);
      this.touch = new yi(this.manager, c), this.mouse = new gi(this.manager, c), this.primaryTouch = null, this.lastTouches = [];
    }
    B(as, Ce, {
      handler: function(u, m, v) {
        var x = v.pointerType == Nt, E = v.pointerType == ns;
        if (!(E && v.sourceCapabilities && v.sourceCapabilities.firesTouchEvents)) {
          if (x)
            Tl.call(this, m, v);
          else if (E && Sl.call(this, v))
            return;
          this.callback(u, m, v);
        }
      },
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    function Tl(c, u) {
      c & ne ? (this.primaryTouch = u.changedPointers[0].identifier, Fn.call(this, u)) : c & (q | me) && Fn.call(this, u);
    }
    function Fn(c) {
      var u = c.changedPointers[0];
      if (u.identifier === this.primaryTouch) {
        var m = { x: u.clientX, y: u.clientY };
        this.lastTouches.push(m);
        var v = this.lastTouches, x = function() {
          var E = v.indexOf(m);
          E > -1 && v.splice(E, 1);
        };
        setTimeout(x, Cl);
      }
    }
    function Sl(c) {
      for (var u = c.srcEvent.clientX, m = c.srcEvent.clientY, v = 0; v < this.lastTouches.length; v++) {
        var x = this.lastTouches[v], E = Math.abs(u - x.x), A = Math.abs(m - x.y);
        if (E <= Vn && A <= Vn)
          return !0;
      }
      return !1;
    }
    var Wn = di(a.style, "touchAction"), Gn = Wn !== n, qn = "compute", Yn = "auto", ls = "manipulation", st = "none", _t = "pan-x", $t = "pan-y", vi = Pl();
    function hs(c, u) {
      this.manager = c, this.set(u);
    }
    hs.prototype = {
      set: function(c) {
        c == qn && (c = this.compute()), Gn && this.manager.element.style && vi[c] && (this.manager.element.style[Wn] = c), this.actions = c.toLowerCase().trim();
      },
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      compute: function() {
        var c = [];
        return S(this.manager.recognizers, function(u) {
          L(u.options.enable, [u]) && (c = c.concat(u.getTouchAction()));
        }), El(c.join(" "));
      },
      preventDefaults: function(c) {
        var u = c.srcEvent, m = c.offsetDirection;
        if (this.manager.session.prevented) {
          u.preventDefault();
          return;
        }
        var v = this.actions, x = xe(v, st) && !vi[st], E = xe(v, $t) && !vi[$t], A = xe(v, _t) && !vi[_t];
        if (x) {
          var Z = c.pointers.length === 1, J = c.distance < 2, re = c.deltaTime < 250;
          if (Z && J && re)
            return;
        }
        if (!(A && E) && (x || E && m & Re || A && m & it))
          return this.preventSrc(u);
      },
      preventSrc: function(c) {
        this.manager.session.prevented = !0, c.preventDefault();
      }
    };
    function El(c) {
      if (xe(c, st))
        return st;
      var u = xe(c, _t), m = xe(c, $t);
      return u && m ? st : u || m ? u ? _t : $t : xe(c, ls) ? ls : Yn;
    }
    function Pl() {
      if (!Gn)
        return !1;
      var c = {}, u = e.CSS && e.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(m) {
        c[m] = u ? e.CSS.supports("touch-action", m) : !0;
      }), c;
    }
    var wi = 1, Te = 2, mt = 4, Ye = 8, Ue = Ye, Ht = 16, ke = 32;
    function ze(c) {
      this.options = k({}, this.defaults, c || {}), this.id = Xa(), this.manager = null, this.options.enable = de(this.options.enable, !0), this.state = wi, this.simultaneous = {}, this.requireFail = [];
    }
    ze.prototype = {
      defaults: {},
      set: function(c) {
        return k(this.options, c), this.manager && this.manager.touchAction.update(), this;
      },
      recognizeWith: function(c) {
        if (C(c, "recognizeWith", this))
          return this;
        var u = this.simultaneous;
        return c = bi(c, this), u[c.id] || (u[c.id] = c, c.recognizeWith(this)), this;
      },
      dropRecognizeWith: function(c) {
        return C(c, "dropRecognizeWith", this) ? this : (c = bi(c, this), delete this.simultaneous[c.id], this);
      },
      requireFailure: function(c) {
        if (C(c, "requireFailure", this))
          return this;
        var u = this.requireFail;
        return c = bi(c, this), qe(u, c) === -1 && (u.push(c), c.requireFailure(this)), this;
      },
      dropRequireFailure: function(c) {
        if (C(c, "dropRequireFailure", this))
          return this;
        c = bi(c, this);
        var u = qe(this.requireFail, c);
        return u > -1 && this.requireFail.splice(u, 1), this;
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function(c) {
        return !!this.simultaneous[c.id];
      },
      emit: function(c) {
        var u = this, m = this.state;
        function v(x) {
          u.manager.emit(x, c);
        }
        m < Ye && v(u.options.event + jn(m)), v(u.options.event), c.additionalEvent && v(c.additionalEvent), m >= Ye && v(u.options.event + jn(m));
      },
      tryEmit: function(c) {
        if (this.canEmit())
          return this.emit(c);
        this.state = ke;
      },
      canEmit: function() {
        for (var c = 0; c < this.requireFail.length; ) {
          if (!(this.requireFail[c].state & (ke | wi)))
            return !1;
          c++;
        }
        return !0;
      },
      recognize: function(c) {
        var u = k({}, c);
        if (!L(this.options.enable, [this, u])) {
          this.reset(), this.state = ke;
          return;
        }
        this.state & (Ue | Ht | ke) && (this.state = wi), this.state = this.process(u), this.state & (Te | mt | Ye | Ht) && this.tryEmit(u);
      },
      process: function(c) {
      },
      getTouchAction: function() {
      },
      reset: function() {
      }
    };
    function jn(c) {
      return c & Ht ? "cancel" : c & Ye ? "end" : c & mt ? "move" : c & Te ? "start" : "";
    }
    function Xn(c) {
      return c == kt ? "down" : c == Rt ? "up" : c == Dt ? "left" : c == It ? "right" : "";
    }
    function bi(c, u) {
      var m = u.manager;
      return m ? m.get(c) : c;
    }
    function Oe() {
      ze.apply(this, arguments);
    }
    B(Oe, ze, {
      defaults: {
        pointers: 1
      },
      attrTest: function(c) {
        var u = this.options.pointers;
        return u === 0 || c.pointers.length === u;
      },
      process: function(c) {
        var u = this.state, m = c.eventType, v = u & (Te | mt), x = this.attrTest(c);
        return v && (m & me || !x) ? u | Ht : v || x ? m & q ? u | Ye : u & Te ? u | mt : Te : ke;
      }
    });
    function xi() {
      Oe.apply(this, arguments), this.pX = null, this.pY = null;
    }
    B(xi, Oe, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: In
      },
      getTouchAction: function() {
        var c = this.options.direction, u = [];
        return c & Re && u.push($t), c & it && u.push(_t), u;
      },
      directionTest: function(c) {
        var u = this.options, m = !0, v = c.distance, x = c.direction, E = c.deltaX, A = c.deltaY;
        return x & u.direction || (u.direction & Re ? (x = E === 0 ? pi : E < 0 ? Dt : It, m = E != this.pX, v = Math.abs(c.deltaX)) : (x = A === 0 ? pi : A < 0 ? Rt : kt, m = A != this.pY, v = Math.abs(c.deltaY))), c.direction = x, m && v > u.threshold && x & u.direction;
      },
      attrTest: function(c) {
        return Oe.prototype.attrTest.call(this, c) && (this.state & Te || !(this.state & Te) && this.directionTest(c));
      },
      emit: function(c) {
        this.pX = c.deltaX, this.pY = c.deltaY;
        var u = Xn(c.direction);
        u && (c.additionalEvent = this.options.event + u), this._super.emit.call(this, c);
      }
    });
    function cs() {
      Oe.apply(this, arguments);
    }
    B(cs, Oe, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [st];
      },
      attrTest: function(c) {
        return this._super.attrTest.call(this, c) && (Math.abs(c.scale - 1) > this.options.threshold || this.state & Te);
      },
      emit: function(c) {
        if (c.scale !== 1) {
          var u = c.scale < 1 ? "in" : "out";
          c.additionalEvent = this.options.event + u;
        }
        this._super.emit.call(this, c);
      }
    });
    function us() {
      ze.apply(this, arguments), this._timer = null, this._input = null;
    }
    B(us, ze, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        threshold: 9
      },
      getTouchAction: function() {
        return [Yn];
      },
      process: function(c) {
        var u = this.options, m = c.pointers.length === u.pointers, v = c.distance < u.threshold, x = c.deltaTime > u.time;
        if (this._input = c, !v || !m || c.eventType & (q | me) && !x)
          this.reset();
        else if (c.eventType & ne)
          this.reset(), this._timer = g(function() {
            this.state = Ue, this.tryEmit();
          }, u.time, this);
        else if (c.eventType & q)
          return Ue;
        return ke;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(c) {
        this.state === Ue && (c && c.eventType & q ? this.manager.emit(this.options.event + "up", c) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)));
      }
    });
    function ds() {
      Oe.apply(this, arguments);
    }
    B(ds, Oe, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [st];
      },
      attrTest: function(c) {
        return this._super.attrTest.call(this, c) && (Math.abs(c.rotation) > this.options.threshold || this.state & Te);
      }
    });
    function ps() {
      Oe.apply(this, arguments);
    }
    B(ps, Oe, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: Re | it,
        pointers: 1
      },
      getTouchAction: function() {
        return xi.prototype.getTouchAction.call(this);
      },
      attrTest: function(c) {
        var u = this.options.direction, m;
        return u & (Re | it) ? m = c.overallVelocity : u & Re ? m = c.overallVelocityX : u & it && (m = c.overallVelocityY), this._super.attrTest.call(this, c) && u & c.offsetDirection && c.distance > this.options.threshold && c.maxPointers == this.options.pointers && p(m) > this.options.velocity && c.eventType & q;
      },
      emit: function(c) {
        var u = Xn(c.offsetDirection);
        u && this.manager.emit(this.options.event + u, c), this.manager.emit(this.options.event, c);
      }
    });
    function Ci() {
      ze.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    B(Ci, ze, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10
      },
      getTouchAction: function() {
        return [ls];
      },
      process: function(c) {
        var u = this.options, m = c.pointers.length === u.pointers, v = c.distance < u.threshold, x = c.deltaTime < u.time;
        if (this.reset(), c.eventType & ne && this.count === 0)
          return this.failTimeout();
        if (v && x && m) {
          if (c.eventType != q)
            return this.failTimeout();
          var E = this.pTime ? c.timeStamp - this.pTime < u.interval : !0, A = !this.pCenter || fi(this.pCenter, c.center) < u.posThreshold;
          this.pTime = c.timeStamp, this.pCenter = c.center, !A || !E ? this.count = 1 : this.count += 1, this._input = c;
          var Z = this.count % u.taps;
          if (Z === 0)
            return this.hasRequireFailures() ? (this._timer = g(function() {
              this.state = Ue, this.tryEmit();
            }, u.interval, this), Te) : Ue;
        }
        return ke;
      },
      failTimeout: function() {
        return this._timer = g(function() {
          this.state = ke;
        }, this.options.interval, this), ke;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == Ue && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    });
    function Ve(c, u) {
      return u = u || {}, u.recognizers = de(u.recognizers, Ve.defaults.preset), new ms(c, u);
    }
    Ve.VERSION = "2.0.7", Ve.defaults = {
      domEvents: !1,
      touchAction: qn,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [ds, { enable: !1 }],
        [cs, { enable: !1 }, ["rotate"]],
        [ps, { direction: Re }],
        [xi, { direction: Re }, ["swipe"]],
        [Ci],
        [Ci, { event: "doubletap", taps: 2 }, ["tap"]],
        [us]
      ],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var Ml = 1, Kn = 2;
    function ms(c, u) {
      this.options = k({}, Ve.defaults, u || {}), this.options.inputTarget = this.options.inputTarget || c, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = c, this.input = il(this), this.touchAction = new hs(this, this.options.touchAction), Zn(this, !0), S(this.options.recognizers, function(m) {
        var v = this.add(new m[0](m[1]));
        m[2] && v.recognizeWith(m[2]), m[3] && v.requireFailure(m[3]);
      }, this);
    }
    ms.prototype = {
      set: function(c) {
        return k(this.options, c), c.touchAction && this.touchAction.update(), c.inputTarget && (this.input.destroy(), this.input.target = c.inputTarget, this.input.init()), this;
      },
      stop: function(c) {
        this.session.stopped = c ? Kn : Ml;
      },
      recognize: function(c) {
        var u = this.session;
        if (!u.stopped) {
          this.touchAction.preventDefaults(c);
          var m, v = this.recognizers, x = u.curRecognizer;
          (!x || x && x.state & Ue) && (x = u.curRecognizer = null);
          for (var E = 0; E < v.length; )
            m = v[E], u.stopped !== Kn && (!x || m == x || m.canRecognizeWith(x)) ? m.recognize(c) : m.reset(), !x && m.state & (Te | mt | Ye) && (x = u.curRecognizer = m), E++;
        }
      },
      get: function(c) {
        if (c instanceof ze)
          return c;
        for (var u = this.recognizers, m = 0; m < u.length; m++)
          if (u[m].options.event == c)
            return u[m];
        return null;
      },
      add: function(c) {
        if (C(c, "add", this))
          return this;
        var u = this.get(c.options.event);
        return u && this.remove(u), this.recognizers.push(c), c.manager = this, this.touchAction.update(), c;
      },
      remove: function(c) {
        if (C(c, "remove", this))
          return this;
        if (c = this.get(c), c) {
          var u = this.recognizers, m = qe(u, c);
          m !== -1 && (u.splice(m, 1), this.touchAction.update());
        }
        return this;
      },
      on: function(c, u) {
        if (c !== n && u !== n) {
          var m = this.handlers;
          return S(pt(c), function(v) {
            m[v] = m[v] || [], m[v].push(u);
          }), this;
        }
      },
      off: function(c, u) {
        if (c !== n) {
          var m = this.handlers;
          return S(pt(c), function(v) {
            u ? m[v] && m[v].splice(qe(m[v], u), 1) : delete m[v];
          }), this;
        }
      },
      emit: function(c, u) {
        this.options.domEvents && Ll(c, u);
        var m = this.handlers[c] && this.handlers[c].slice();
        if (!(!m || !m.length)) {
          u.type = c, u.preventDefault = function() {
            u.srcEvent.preventDefault();
          };
          for (var v = 0; v < m.length; )
            m[v](u), v++;
        }
      },
      destroy: function() {
        this.element && Zn(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    };
    function Zn(c, u) {
      var m = c.element;
      if (m.style) {
        var v;
        S(c.options.cssProps, function(x, E) {
          v = di(m.style, E), u ? (c.oldCssProps[v] = m.style[v], m.style[v] = x) : m.style[v] = c.oldCssProps[v] || "";
        }), u || (c.oldCssProps = {});
      }
    }
    function Ll(c, u) {
      var m = i.createEvent("Event");
      m.initEvent(c, !0, !0), m.gesture = u, u.target.dispatchEvent(m);
    }
    k(Ve, {
      INPUT_START: ne,
      INPUT_MOVE: tt,
      INPUT_END: q,
      INPUT_CANCEL: me,
      STATE_POSSIBLE: wi,
      STATE_BEGAN: Te,
      STATE_CHANGED: mt,
      STATE_ENDED: Ye,
      STATE_RECOGNIZED: Ue,
      STATE_CANCELLED: Ht,
      STATE_FAILED: ke,
      DIRECTION_NONE: pi,
      DIRECTION_LEFT: Dt,
      DIRECTION_RIGHT: It,
      DIRECTION_UP: Rt,
      DIRECTION_DOWN: kt,
      DIRECTION_HORIZONTAL: Re,
      DIRECTION_VERTICAL: it,
      DIRECTION_ALL: In,
      Manager: ms,
      Input: Ce,
      TouchAction: hs,
      TouchInput: yi,
      MouseInput: gi,
      PointerEventInput: os,
      TouchMouseInput: as,
      SingleTouchInput: zn,
      Recognizer: ze,
      AttrRecognizer: Oe,
      Tap: Ci,
      Pan: xi,
      Swipe: ps,
      Pinch: cs,
      Rotate: ds,
      Press: us,
      on: Q,
      off: pe,
      each: S,
      merge: we,
      extend: ue,
      assign: k,
      inherit: B,
      bindFn: D,
      prefixed: di
    });
    var Al = typeof e < "u" ? e : typeof self < "u" ? self : {};
    Al.Hammer = Ve, typeof n == "function" && n.amd ? n(function() {
      return Ve;
    }) : o.exports ? o.exports = Ve : e[s] = Ve;
  })(window, document, "Hammer");
})(co);
var hi = co.exports;
const rh = nh(hi), $e = /* @__PURE__ */ Ol({
  __proto__: null,
  default: rh
}, [hi]), uo = 1, po = 2, As = 4, oh = {
  mousedown: uo,
  mousemove: po,
  mouseup: As
};
function ah(o, e) {
  for (let i = 0; i < o.length; i++)
    if (e(o[i]))
      return !0;
  return !1;
}
function lh(o) {
  const e = o.prototype.handler;
  o.prototype.handler = function(s) {
    const n = this.store;
    s.button > 0 && s.type === "pointerdown" && (ah(n, (r) => r.pointerId === s.pointerId) || n.push(s)), e.call(this, s);
  };
}
function hh(o) {
  o.prototype.handler = function(i) {
    let s = oh[i.type];
    s & uo && i.button >= 0 && (this.pressed = !0), s & po && i.which === 0 && (s = As), this.pressed && (s & As && (this.pressed = !1), this.callback(this.manager, s, {
      pointers: [i],
      changedPointers: [i],
      pointerType: "mouse",
      srcEvent: i
    }));
  };
}
lh(hi.PointerEventInput);
hh(hi.MouseInput);
const ch = hi.Manager;
let ji = class {
  constructor(e, i, s) {
    this.element = e, this.callback = i, this.options = { enable: !0, ...s };
  }
};
const uh = $e ? [
  [$e.Pan, { event: "tripan", pointers: 3, threshold: 0, enable: !1 }],
  [$e.Rotate, { enable: !1 }],
  [$e.Pinch, { enable: !1 }],
  [$e.Swipe, { enable: !1 }],
  [$e.Pan, { threshold: 0, enable: !1 }],
  [$e.Press, { enable: !1 }],
  [$e.Tap, { event: "doubletap", taps: 2, enable: !1 }],
  [$e.Tap, { event: "anytap", enable: !1 }],
  [$e.Tap, { enable: !1 }]
] : null, sr = {
  tripan: ["rotate", "pinch", "pan"],
  rotate: ["pinch"],
  pinch: ["pan"],
  pan: ["press", "doubletap", "anytap", "tap"],
  doubletap: ["anytap"],
  anytap: ["tap"]
}, dh = {
  doubletap: ["tap"]
}, ph = {
  pointerdown: "pointerdown",
  pointermove: "pointermove",
  pointerup: "pointerup",
  touchstart: "pointerdown",
  touchmove: "pointermove",
  touchend: "pointerup",
  mousedown: "pointerdown",
  mousemove: "pointermove",
  mouseup: "pointerup"
}, an = {
  KEY_EVENTS: ["keydown", "keyup"],
  MOUSE_EVENTS: ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout", "mouseleave"],
  WHEEL_EVENTS: [
    "wheel",
    "mousewheel"
  ]
}, mh = {
  tap: "tap",
  anytap: "anytap",
  doubletap: "doubletap",
  press: "press",
  pinch: "pinch",
  pinchin: "pinch",
  pinchout: "pinch",
  pinchstart: "pinch",
  pinchmove: "pinch",
  pinchend: "pinch",
  pinchcancel: "pinch",
  rotate: "rotate",
  rotatestart: "rotate",
  rotatemove: "rotate",
  rotateend: "rotate",
  rotatecancel: "rotate",
  tripan: "tripan",
  tripanstart: "tripan",
  tripanmove: "tripan",
  tripanup: "tripan",
  tripandown: "tripan",
  tripanleft: "tripan",
  tripanright: "tripan",
  tripanend: "tripan",
  tripancancel: "tripan",
  pan: "pan",
  panstart: "pan",
  panmove: "pan",
  panup: "pan",
  pandown: "pan",
  panleft: "pan",
  panright: "pan",
  panend: "pan",
  pancancel: "pan",
  swipe: "swipe",
  swipeleft: "swipe",
  swiperight: "swipe",
  swipeup: "swipe",
  swipedown: "swipe"
}, nr = {
  click: "tap",
  anyclick: "anytap",
  dblclick: "doubletap",
  mousedown: "pointerdown",
  mousemove: "pointermove",
  mouseup: "pointerup",
  mouseover: "pointerover",
  mouseout: "pointerout",
  mouseleave: "pointerleave"
}, fh = typeof navigator < "u" && navigator.userAgent ? navigator.userAgent.toLowerCase() : "", yt = typeof window < "u" ? window : global;
let Os = !1;
try {
  const o = {
    get passive() {
      return Os = !0, !0;
    }
  };
  yt.addEventListener("test", null, o), yt.removeEventListener("test", null);
} catch {
  Os = !1;
}
const gh = fh.indexOf("firefox") !== -1, { WHEEL_EVENTS: yh } = an, rr = "wheel", or = 4.000244140625, vh = 40, wh = 0.25;
class bh extends ji {
  constructor(e, i, s) {
    super(e, i, s), this.handleEvent = (n) => {
      if (!this.options.enable)
        return;
      let r = n.deltaY;
      yt.WheelEvent && (gh && n.deltaMode === yt.WheelEvent.DOM_DELTA_PIXEL && (r /= yt.devicePixelRatio), n.deltaMode === yt.WheelEvent.DOM_DELTA_LINE && (r *= vh)), r !== 0 && r % or === 0 && (r = Math.floor(r / or)), n.shiftKey && r && (r = r * wh), this.callback({
        type: rr,
        center: {
          x: n.clientX,
          y: n.clientY
        },
        delta: -r,
        srcEvent: n,
        pointerType: "mouse",
        target: n.target
      });
    }, this.events = (this.options.events || []).concat(yh), this.events.forEach((n) => e.addEventListener(n, this.handleEvent, Os ? { passive: !1 } : !1));
  }
  destroy() {
    this.events.forEach((e) => this.element.removeEventListener(e, this.handleEvent));
  }
  enableEventType(e, i) {
    e === rr && (this.options.enable = i);
  }
}
const { MOUSE_EVENTS: xh } = an, ar = "pointermove", lr = "pointerover", hr = "pointerout", cr = "pointerenter", ur = "pointerleave";
class Ch extends ji {
  constructor(e, i, s) {
    super(e, i, s), this.handleEvent = (r) => {
      this.handleOverEvent(r), this.handleOutEvent(r), this.handleEnterEvent(r), this.handleLeaveEvent(r), this.handleMoveEvent(r);
    }, this.pressed = !1;
    const { enable: n } = this.options;
    this.enableMoveEvent = n, this.enableLeaveEvent = n, this.enableEnterEvent = n, this.enableOutEvent = n, this.enableOverEvent = n, this.events = (this.options.events || []).concat(xh), this.events.forEach((r) => e.addEventListener(r, this.handleEvent));
  }
  destroy() {
    this.events.forEach((e) => this.element.removeEventListener(e, this.handleEvent));
  }
  enableEventType(e, i) {
    e === ar && (this.enableMoveEvent = i), e === lr && (this.enableOverEvent = i), e === hr && (this.enableOutEvent = i), e === cr && (this.enableEnterEvent = i), e === ur && (this.enableLeaveEvent = i);
  }
  handleOverEvent(e) {
    this.enableOverEvent && e.type === "mouseover" && this._emit(lr, e);
  }
  handleOutEvent(e) {
    this.enableOutEvent && e.type === "mouseout" && this._emit(hr, e);
  }
  handleEnterEvent(e) {
    this.enableEnterEvent && e.type === "mouseenter" && this._emit(cr, e);
  }
  handleLeaveEvent(e) {
    this.enableLeaveEvent && e.type === "mouseleave" && this._emit(ur, e);
  }
  handleMoveEvent(e) {
    if (this.enableMoveEvent)
      switch (e.type) {
        case "mousedown":
          e.button >= 0 && (this.pressed = !0);
          break;
        case "mousemove":
          e.which === 0 && (this.pressed = !1), this.pressed || this._emit(ar, e);
          break;
        case "mouseup":
          this.pressed = !1;
          break;
      }
  }
  _emit(e, i) {
    this.callback({
      type: e,
      center: {
        x: i.clientX,
        y: i.clientY
      },
      srcEvent: i,
      pointerType: "mouse",
      target: i.target
    });
  }
}
const { KEY_EVENTS: Th } = an, dr = "keydown", pr = "keyup";
class Sh extends ji {
  constructor(e, i, s) {
    super(e, i, s), this.handleEvent = (n) => {
      const r = n.target || n.srcElement;
      r.tagName === "INPUT" && r.type === "text" || r.tagName === "TEXTAREA" || (this.enableDownEvent && n.type === "keydown" && this.callback({
        type: dr,
        srcEvent: n,
        key: n.key,
        target: n.target
      }), this.enableUpEvent && n.type === "keyup" && this.callback({
        type: pr,
        srcEvent: n,
        key: n.key,
        target: n.target
      }));
    }, this.enableDownEvent = this.options.enable, this.enableUpEvent = this.options.enable, this.events = (this.options.events || []).concat(Th), e.tabIndex = this.options.tabIndex || 0, e.style.outline = "none", this.events.forEach((n) => e.addEventListener(n, this.handleEvent));
  }
  destroy() {
    this.events.forEach((e) => this.element.removeEventListener(e, this.handleEvent));
  }
  enableEventType(e, i) {
    e === dr && (this.enableDownEvent = i), e === pr && (this.enableUpEvent = i);
  }
}
const mr = "contextmenu";
class Eh extends ji {
  constructor(e, i, s) {
    super(e, i, s), this.handleEvent = (n) => {
      this.options.enable && this.callback({
        type: mr,
        center: {
          x: n.clientX,
          y: n.clientY
        },
        srcEvent: n,
        pointerType: "mouse",
        target: n.target
      });
    }, e.addEventListener("contextmenu", this.handleEvent);
  }
  destroy() {
    this.element.removeEventListener("contextmenu", this.handleEvent);
  }
  enableEventType(e, i) {
    e === mr && (this.options.enable = i);
  }
}
const Ns = 1, Ui = 2, Ds = 4, Ph = {
  pointerdown: Ns,
  pointermove: Ui,
  pointerup: Ds,
  mousedown: Ns,
  mousemove: Ui,
  mouseup: Ds
}, Mh = 1, Lh = 2, Ah = 3, Oh = 0, Nh = 1, Dh = 2, Ih = 1, Rh = 2, kh = 4;
function _h(o) {
  const e = Ph[o.srcEvent.type];
  if (!e)
    return null;
  const { buttons: i, button: s, which: n } = o.srcEvent;
  let r = !1, a = !1, l = !1;
  return e === Ds || e === Ui && !Number.isFinite(i) ? (r = n === Mh, a = n === Lh, l = n === Ah) : e === Ui ? (r = !!(i & Ih), a = !!(i & kh), l = !!(i & Rh)) : e === Ns && (r = s === Oh, a = s === Nh, l = s === Dh), { leftButton: r, middleButton: a, rightButton: l };
}
function $h(o, e) {
  const i = o.center;
  if (!i)
    return null;
  const s = e.getBoundingClientRect(), n = s.width / e.offsetWidth || 1, r = s.height / e.offsetHeight || 1, a = {
    x: (i.x - s.left - e.clientLeft) / n,
    y: (i.y - s.top - e.clientTop) / r
  };
  return { center: i, offsetCenter: a };
}
const fs = {
  srcElement: "root",
  priority: 0
};
class Hh {
  constructor(e) {
    this.handleEvent = (i) => {
      if (this.isEmpty())
        return;
      const s = this._normalizeEvent(i);
      let n = i.srcEvent.target;
      for (; n && n !== s.rootElement; ) {
        if (this._emit(s, n), s.handled)
          return;
        n = n.parentNode;
      }
      this._emit(s, "root");
    }, this.eventManager = e, this.handlers = [], this.handlersByElement = /* @__PURE__ */ new Map(), this._active = !1;
  }
  isEmpty() {
    return !this._active;
  }
  add(e, i, s, n = !1, r = !1) {
    const { handlers: a, handlersByElement: l } = this;
    let h = fs;
    typeof s == "string" || s && s.addEventListener ? h = { ...fs, srcElement: s } : s && (h = { ...fs, ...s });
    let p = l.get(h.srcElement);
    p || (p = [], l.set(h.srcElement, p));
    const f = {
      type: e,
      handler: i,
      srcElement: h.srcElement,
      priority: h.priority
    };
    n && (f.once = !0), r && (f.passive = !0), a.push(f), this._active = this._active || !f.passive;
    let g = p.length - 1;
    for (; g >= 0 && !(p[g].priority >= f.priority); )
      g--;
    p.splice(g + 1, 0, f);
  }
  remove(e, i) {
    const { handlers: s, handlersByElement: n } = this;
    for (let r = s.length - 1; r >= 0; r--) {
      const a = s[r];
      if (a.type === e && a.handler === i) {
        s.splice(r, 1);
        const l = n.get(a.srcElement);
        l.splice(l.indexOf(a), 1), l.length === 0 && n.delete(a.srcElement);
      }
    }
    this._active = s.some((r) => !r.passive);
  }
  _emit(e, i) {
    const s = this.handlersByElement.get(i);
    if (s) {
      let n = !1;
      const r = () => {
        e.handled = !0;
      }, a = () => {
        e.handled = !0, n = !0;
      }, l = [];
      for (let h = 0; h < s.length; h++) {
        const { type: p, handler: f, once: g } = s[h];
        if (f({
          ...e,
          type: p,
          stopPropagation: r,
          stopImmediatePropagation: a
        }), g && l.push(s[h]), n)
          break;
      }
      for (let h = 0; h < l.length; h++) {
        const { type: p, handler: f } = l[h];
        this.remove(p, f);
      }
    }
  }
  _normalizeEvent(e) {
    const i = this.eventManager.getElement();
    return {
      ...e,
      ..._h(e),
      ...$h(e, i),
      preventDefault: () => {
        e.srcEvent.preventDefault();
      },
      stopImmediatePropagation: null,
      stopPropagation: null,
      handled: !1,
      rootElement: i
    };
  }
}
const Bh = {
  events: null,
  recognizers: null,
  recognizerOptions: {},
  Manager: ch,
  touchAction: "none",
  tabIndex: 0
};
class Uh {
  constructor(e = null, i) {
    this._onBasicInput = (n) => {
      const { srcEvent: r } = n, a = ph[r.type];
      a && this.manager.emit(a, n);
    }, this._onOtherEvent = (n) => {
      this.manager.emit(n.type, n);
    }, this.options = { ...Bh, ...i }, this.events = /* @__PURE__ */ new Map(), this.setElement(e);
    const { events: s } = this.options;
    s && this.on(s);
  }
  getElement() {
    return this.element;
  }
  setElement(e) {
    if (this.element && this.destroy(), this.element = e, !e)
      return;
    const { options: i } = this, s = i.Manager;
    this.manager = new s(e, {
      touchAction: i.touchAction,
      recognizers: i.recognizers || uh
    }).on("hammer.input", this._onBasicInput), i.recognizers || Object.keys(sr).forEach((n) => {
      const r = this.manager.get(n);
      r && sr[n].forEach((a) => {
        r.recognizeWith(a);
      });
    });
    for (const n in i.recognizerOptions) {
      const r = this.manager.get(n);
      if (r) {
        const a = i.recognizerOptions[n];
        delete a.enable, r.set(a);
      }
    }
    this.wheelInput = new bh(e, this._onOtherEvent, {
      enable: !1
    }), this.moveInput = new Ch(e, this._onOtherEvent, {
      enable: !1
    }), this.keyInput = new Sh(e, this._onOtherEvent, {
      enable: !1,
      tabIndex: i.tabIndex
    }), this.contextmenuInput = new Eh(e, this._onOtherEvent, {
      enable: !1
    });
    for (const [n, r] of this.events)
      r.isEmpty() || (this._toggleRecognizer(r.recognizerName, !0), this.manager.on(n, r.handleEvent));
  }
  destroy() {
    this.element && (this.wheelInput.destroy(), this.moveInput.destroy(), this.keyInput.destroy(), this.contextmenuInput.destroy(), this.manager.destroy(), this.wheelInput = null, this.moveInput = null, this.keyInput = null, this.contextmenuInput = null, this.manager = null, this.element = null);
  }
  on(e, i, s) {
    this._addEventHandler(e, i, s, !1);
  }
  once(e, i, s) {
    this._addEventHandler(e, i, s, !0);
  }
  watch(e, i, s) {
    this._addEventHandler(e, i, s, !1, !0);
  }
  off(e, i) {
    this._removeEventHandler(e, i);
  }
  _toggleRecognizer(e, i) {
    const { manager: s } = this;
    if (!s)
      return;
    const n = s.get(e);
    if (n && n.options.enable !== i) {
      n.set({ enable: i });
      const r = dh[e];
      r && !this.options.recognizers && r.forEach((a) => {
        const l = s.get(a);
        i ? (l.requireFailure(e), n.dropRequireFailure(a)) : l.dropRequireFailure(e);
      });
    }
    this.wheelInput.enableEventType(e, i), this.moveInput.enableEventType(e, i), this.keyInput.enableEventType(e, i), this.contextmenuInput.enableEventType(e, i);
  }
  _addEventHandler(e, i, s, n, r) {
    if (typeof e != "string") {
      s = i;
      for (const f in e)
        this._addEventHandler(f, e[f], s, n, r);
      return;
    }
    const { manager: a, events: l } = this, h = nr[e] || e;
    let p = l.get(h);
    p || (p = new Hh(this), l.set(h, p), p.recognizerName = mh[h] || h, a && a.on(h, p.handleEvent)), p.add(e, i, s, n, r), p.isEmpty() || this._toggleRecognizer(p.recognizerName, !0);
  }
  _removeEventHandler(e, i) {
    if (typeof e != "string") {
      for (const a in e)
        this._removeEventHandler(a, e[a]);
      return;
    }
    const { events: s } = this, n = nr[e] || e, r = s.get(n);
    if (r && (r.remove(e, i), r.isEmpty())) {
      const { recognizerName: a } = r;
      let l = !1;
      for (const h of s.values())
        if (h.recognizerName === a && !h.isEmpty()) {
          l = !0;
          break;
        }
      l || this._toggleRecognizer(a, !1);
    }
  }
}
class fr {
  #e = [
    "pointerdown",
    "pointerup",
    "pointerover",
    "pointerenter",
    "pointerout",
    "pointerleave",
    "pointermove",
    "pointercancel",
    "gotpointercapture",
    "lostpointercapture",
    "click",
    "dblclick",
    "anyclick",
    "wheel",
    "contextmenu",
    "pointerdrag",
    "pointerdragend",
    "pan",
    "panstart",
    "panmove",
    "panup",
    "pandown",
    "panleft",
    "panright",
    "panend",
    "pancancel"
  ];
  #t;
  #i = {
    left: !1
  };
  constructor(e) {
    this.#t = e;
  }
  has(e) {
    return this.#e.indexOf(e) != -1;
  }
  on(e, i, s, n) {
    let r = i;
    switch (e) {
      case "pointerdown":
        r = function(a) {
          a.leftButton && (this.#t.pad.left = !0), this.#t.onPointerDown(a), i(this.#t.pointerEventData(a));
        };
        break;
      case "pointerup":
        r = function(a) {
          this.#t.onPointerUp(a), i(this.#t.pointerEventData(a));
        };
        break;
      case "pointermove":
        r = function(a) {
          this.#t.motion(a), i(this.#t.pointerEventData(a));
        };
        break;
      case "click":
      case "dbclick":
      case "pointerenter":
      case "pointerleave":
      case "pointerout":
      case "pointerover":
      case "contextmenu":
        r = function(a) {
          this.#t.location(a), i(this.#t.pointerEventData(a));
        };
        break;
      case "wheel":
        r = function(a) {
          this.#t.wheeldelta = a, i(this.#t.pointerEventData(a));
        };
        break;
      case "pointercancel":
      case "gotpointercapture":
      case "lostpointercapture":
        r = function(a) {
          i(a);
        };
        break;
      case "pointerdrag":
        r = function(a) {
          this.#t.motion(a), i(this.#t.pointerEventData(a));
        }, this.#t.agent.on("panstart", this.#t.startPointerDrag.bind(this.#t)), e = "panmove";
        break;
      case "pointerdragend":
        r = function(a) {
          this.#t.motion(a), this.#t.endPointerDrag(a), i(this.#t.pointerEventData(a));
        }, e = "panend";
        break;
    }
    return n ? this.#t.agent.once(e, r.bind(this), s) : this.#t.agent.on(e, r.bind(this), s), r;
  }
  off(e, i, s) {
    this.#t.agent.off(e, i, s);
  }
}
class gr {
  #e = [
    "rotate",
    "rotatestart",
    "rotatemove",
    "rotateend",
    "rotatecancel",
    "pinch",
    "pinchin",
    "pinchout",
    "pinchstart",
    "pinchmove",
    "pinchend",
    "pinchcancel",
    "swipe",
    "swipeleft",
    "swiperight",
    "swipeup",
    "swipedown",
    "tripan",
    "tripanstart",
    "tripanmove",
    "tripanup",
    "tripandown",
    "tripanleft",
    "tripanright",
    "tripanend",
    "tripancancel"
  ];
  #t;
  constructor(e) {
    this.#t = e;
  }
  has(e) {
    return this.#e.indexOf(e) != -1;
  }
  on(e, i, s, n) {
    let r = i;
    return n ? this.#t.agent.once(e, r.bind(this), s) : this.#t.agent.on(e, r.bind(this), s), r;
  }
  off(e, i, s) {
    this.#t.agent.off(e, i, s);
  }
}
class yr {
  #e = [
    "keydown",
    "keyup"
  ];
  #t;
  constructor(e) {
    this.#t = e;
  }
  has(e) {
    return this.#e.indexOf(e) != -1;
  }
  on(e, i, s, n) {
    let r = i;
    return n ? this.#t.agent.once(e, r.bind(this), s) : this.#t.agent.on(e, r.bind(this), s), r;
  }
  off(e, i, s) {
    this.#t.agent.off(e, i, s);
  }
}
const zh = {
  element: void 0,
  contextMenu: !0,
  panX: !0,
  panY: !0
};
class He {
  #e;
  #t;
  #i;
  #r;
  #s = [];
  #n = null;
  #o = null;
  #a = null;
  #c;
  #l = !1;
  #h;
  pad = { left: !1 };
  constructor(e, i) {
    if (this.#e = { ...zh, ...i }, this.#r = sh.idle, this.#c = ih, this.#t = e, !this.#t && this.#e.elementId && (this.#t = document.getElementById(this.#e.elementId)), !H(this.#t))
      throw "Must specify an element to receive user input.";
    this.#e.contextMenu || (window.oncontextmenu = (r) => (r.preventDefault(), !1));
    const n = {
      recognizerOptions: {
        pan: { threshold: this.#c ? 10 : 0 },
        pinch: { threshold: 0 }
      }
    };
    this.#i = new Uh(this.#t, n), this.pointerInit();
  }
  get agent() {
    return this.#i;
  }
  get pointer() {
    return this.#n instanceof fr ? this.#n : (this.#n = new fr(this), this.#n);
  }
  get touch() {
    return this.#a instanceof gr ? this.#a : (this.#a = new gr(this), this.#a);
  }
  get key() {
    return this.#o instanceof yr ? this.#o : (this.#o = new yr(this), this.#o);
  }
  get status() {
    return this.#r;
  }
  get element() {
    return this.#t;
  }
  get isTouch() {
    return this.#c;
  }
  get isPan() {
    return this.#l;
  }
  set wheeldelta(e) {
    this.#h = e.delta;
  }
  get wheeldelta() {
    return this.#h;
  }
  destroy() {
    for (let e of this.#s)
      this.off(e.event, e.handler, e.options);
    this.#i.destroy(), this.#n = void 0, this.#o = void 0, this.#a = void 0;
  }
  isValid(e, i) {
    return !!(b(e) || O(i));
  }
  validOptions(e) {
    return w(e) && F(e) ? e : void 0;
  }
  on(e, i, s, n = !1) {
    if (!this.isValid(e, i))
      return !1;
    this.pointer.has(e) ? this.#n.on(e, i, s, n) : this.touch.has(e) ? this.#a.on(e, i, s, n) : this.key.has(e) ? this.#o.on(e, i, s, n) : this.#t.addEventListener(e, i, this.validOptions(s)), this.#s.push({ event: e, handler: i, options: s });
  }
  off(e, i, s) {
    this.#n?.has(e) ? this.#n.off(e, i, s) : this.#a?.has(e) ? this.#a.off(e, i, s) : this.#o?.has(e) ? this.#o.off(e, i, s) : this.#t.removeEventListener(e, i, this.validOptions(s));
    for (let n of this.#s)
      if (n.event === e && n.handler === i && n.options === s) {
        let r = this.#s.indexOf(n);
        this.#s.splice(r, 1);
      }
  }
  once(e, i, s) {
    this.on(e, i, s, !0);
  }
  setCursor(e) {
    this.#t.style.cursor = e;
  }
  pointerInit() {
    this.clientPosPrev = new ot([null, null]), this.position = new ot([0, 0]), this.movement = new ot([0, 0]), this.dragstart = new ot([null, null]), this.dragend = new ot([null, null]), this.dragCheckThreshold = 3, this.dragStatus = !1, this.wheeldelta = 0, this.pointerButtons = [!1, !1, !1, !1, !1], this.pointerdrag = new Event("pointerdrag"), this.pointerdragend = new Event("pointerdragend");
  }
  pointerEventData(e) {
    return {
      isProcessed: !1,
      pointerType: e.pointerType,
      position: this.position.clone(),
      movement: this.movement.clone(),
      dragstart: this.dragstart.clone(),
      dragend: this.dragend.clone(),
      wheeldelta: this.wheeldelta,
      buttons: this.pointerButtons,
      domEvent: e,
      timeStamp: Date.now()
    };
  }
  motion(e) {
    let i = { left: 0, top: 0 };
    try {
      i = e.srcEvent.target?.getBoundingClientRect();
    } catch {
    }
    const s = e.srcEvent.clientX || this.position.x, n = e.srcEvent.clientY || this.position.y;
    this.movement.x = s - this.clientPosPrev.x, this.movement.y = n - this.clientPosPrev.y, this.position.x = s - i.left, this.position.y = n - i.top, this.clientPosPrev.x = s, this.clientPosPrev.y = n;
  }
  location(e) {
    let i = { left: 0, top: 0 };
    try {
      i = e.srcEvent.target?.getBoundingClientRect();
    } catch {
    }
    this.clientPosPrev.x = e.srcEvent.clientX, this.clientPosPrev.y = e.srcEvent.clientY, this.position.x = e.srcEvent.clientX - i.left, this.position.y = e.srcEvent.clientY - i.top, this.movement.x = 0, this.movement.y = 0;
  }
  onPointerDown(e) {
    this.location(e), this.pointerButtons[e.srcEvent.button] = !0;
  }
  onPointerUp(e) {
    this.location(e), this.pointerButtons[e.srcEvent.button] = !1;
  }
  startPointerDrag(e) {
    this.#l = !0, this.onPointerDown(e);
  }
  endPointerDrag(e) {
    this.#l = !1;
  }
}
function Vh(o, e) {
  return o = Math.ceil(o) + 1, e = Math.floor(e), Math.floor(Math.random() * (e - o) + o);
}
function Ai(o) {
  const e = {};
  return e.value = o, e.sign = !!o, e.integers = mo(o), e.decimals = Fh(o), e.total = e.integers + e.decimals, e;
}
function mo(o) {
  return (Math.log10((o ^ o >> 31) - (o >> 31)) | 0) + 1;
}
function ye(o, e = 0) {
  var i = o * Math.pow(10, e), s = Math.round(i), n = (i > 0 ? i : -i) % 1 === 0.5 ? s % 2 === 0 ? s : s - 1 : s;
  return n / Math.pow(10, e);
}
function Fh(o) {
  if (typeof o != "number" && (o = parseFloat(o)), isNaN(o) || !isFinite(o))
    return 0;
  for (var e = 1, i = 0; Math.round(o * e) / e !== o && (e *= 10, e !== 1 / 0); )
    i++;
  return i;
}
function Is(o, e) {
  const i = Ai(o);
  if (I(e))
    return `${new Number(i.value).toFixed(e)}`;
  let { sign: s, integers: n, decimals: r, value: a } = i;
  e = isNaN(e) ? jr : e, r = R(r, 0, e), a = new Number(a).toFixed(r);
  let l = `${a}`, h = "", p = 0, f = 0;
  return s = s ? 0 : 1, s > 0 && (h += "-", p++), n == 0 ? (h += "0", p++) : (h += l.slice(p, n), p += n), r != 0 && (h += `${l.slice(p)}`, n <= 1 ? f = r : n > 3 ? f = 2 : n >= 2 && (f = 3)), h = Number.parseFloat(h).toFixed(f), h;
}
function Wh(o) {
  return Math.log(o) / Math.log(10);
}
function R(o, e, i) {
  return Math.min(i, Math.max(e, o));
}
class zi {
  #e;
  #t;
  #i = !0;
  #r = !1;
  #s = si;
  #n = yn;
  indexStart = 0;
  indexEnd = gs;
  valueMin = 0;
  valueMax = 1;
  valueDiff = 1;
  volumeMin = 0;
  volumeMax = 0;
  volumeDiff = 0;
  valueMinIdx = 0;
  valueMaxIdx = 0;
  volumeMinIdx = 0;
  volumeMaxIdx = 0;
  old = {};
  #o = Bs;
  #a = gs;
  #c = xr;
  #l = Cr;
  #h = this.#e?.MainPane?.graph?.width || this.#e?.parentElement.clientWidth || Tr;
  #p = br;
  anchor;
  constructor(e, i, s = {}) {
    if (!w(s) || !(s?.core instanceof N))
      return !1;
    this.#i = !0, this.setConfig(s), this.#e = s.core, this.#o = this.#e.config?.range?.initialCnt || s.data?.initialCnt || this.#o, (!I(e) || this.isPastLimit(e)) && (e = this.data.length - this.#o), (!I(i) || this.isFutureLimit(i)) && (i = this.data.length), i - e > this.#h && (i = i - (i - e - this.#h)), `${this.maxMinPriceVol.toString()}`;
    const n = s?.interval || si;
    if (this.data.length == 0) {
      let r = Date.now();
      e = this.rangeLimit * -2, i = this.rangeLimit * 2, this.#s = n, this.#n = wt(this.interval), this.anchor = r - r % n;
    } else
      this.data.length < 2 ? (this.#s = n, this.#n = wt(this.interval)) : (this.#s = Rs(this.data), this.#n = wt(this.interval));
    i == 0 && this.data.length >= this.rangeLimit ? i = this.rangeLimit : i == 0 && (i = this.data.length), this.set(e, i);
  }
  get allData() {
    return this.#e?.allData;
  }
  get data() {
    return this.allData?.data || [];
  }
  get dataLength() {
    return this.allData?.data.length ? this.allData.data.length - 1 : 0;
  }
  get Length() {
    return this.indexEnd - this.indexStart;
  }
  get timeDuration() {
    return this.timeFinish - this.timeStart;
  }
  get timeMin() {
    return this.value(this.indexStart)[0];
  }
  get timeMax() {
    return this.value(this.indexEnd)[0];
  }
  get rangeDuration() {
    return this.timeMax - this.timeMin;
  }
  get timeStart() {
    return this.value(0)[0];
  }
  get timeFinish() {
    return this.value(this.dataLength)[0];
  }
  set interval(e) {
    this.#s = e;
  }
  get interval() {
    return this.#s;
  }
  set intervalStr(e) {
    this.#n = e;
  }
  get intervalStr() {
    return this.#n;
  }
  get timeFrame() {
    return this.#n;
  }
  get timeFrameMS() {
    return this.#s;
  }
  get indexed() {
    return this.#r;
  }
  get pastLimitIndex() {
    return this.limitPast * -1;
  }
  get futureLimitIndex() {
    return this.dataLength + this.limitFuture - 1;
  }
  set initialCnt(e) {
    I(e) && (this.#o = e);
  }
  get initialCnt() {
    return this.#o;
  }
  get limitFuture() {
    return this.#a;
  }
  get limitPast() {
    return this.#c;
  }
  get minCandles() {
    return this.#l;
  }
  get maxCandles() {
    return this.#h;
  }
  get yAxisBounds() {
    return this.#p;
  }
  get rangeLimit() {
    return this.#a;
  }
  end() {
  }
  isFutureLimit(e = this.indexEnd) {
    if (I(e))
      return e > this.futureLimitIndex;
  }
  isPastLimit(e = this.indexStart) {
    if (I(e))
      return e < this.pastLimitIndex;
  }
  set(e = 0, i = this.dataLength, s = this.maxCandles) {
    if (!I(e) || !I(i) || !I(s))
      return !1;
    e = e | 0, i = i | 0, s = s | 0, s = R(s, this.minCandles, this.maxCandles), e > i && ([e, i] = [i, e]), i = R(i, e + this.minCandles, e + s);
    let n = i - e;
    e = R(e, this.limitPast * -1, this.dataLength + this.limitFuture - this.minCandles - 1), i = R(i, e + this.minCandles, this.dataLength + this.limitFuture - 1), e = i - e < n ? e - (n - (i - e)) : e;
    const r = e, a = i, l = this.indexStart, h = this.indexEnd;
    let p = this.Length;
    this.indexStart = e, this.indexEnd = i, p -= this.Length;
    let f = this.maxMinPriceVol({ data: this.data, start: this.indexStart, end: this.indexEnd, that: this });
    return this.setMaxMin(f), this.setConfig({ maxCandles: s }), this.#e.emit("setRange", [r, a, l, h]), !0;
  }
  setConfig(e) {
    if (!w(e))
      return !1;
    this.#o = I(e?.initialCnt) ? e.initialCnt : Bs, this.#a = I(e?.limitFuture) ? e.limitFuture : gs, this.#c = I(e?.limitPast) ? e.limitPast : xr, this.#l = I(e?.minCandles) ? e.minCandles : Cr, this.#h = I(e?.maxCandles) ? e.maxCandles : Tr, this.#p = T(e?.yAxisBounds) ? e.yAxisBounds : br;
  }
  setMaxMin(e) {
    for (let i in e)
      this.old[i] = this[i], this[i] = e[i];
    this.scale = this.dataLength != 0 ? this.Length / this.dataLength : 1;
  }
  value(e, i = "chart") {
    let s;
    if (i == "chart")
      s = this.data;
    else if (s = this.getDataById(i), !s)
      return null;
    I(e) || (e = s.length - 1);
    let n = s[e];
    if (n !== void 0)
      return n;
    {
      const r = s.length - 1;
      return n = [null, null, null, null, null, null], s.length < 1 ? (n[0] = Date.now() + this.interval * e, n) : e < 0 ? (n[0] = s[0][0] + this.interval * e, n) : e > r ? (n[0] = s[r][0] + this.interval * (e - r), n) : null;
    }
  }
  valueByTS(e, i = "") {
    if (!I(e) || !b(i))
      return !1;
    const s = this.getTimeIndex(e);
    switch (i) {
      case "chart":
        break;
      case "primary":
        break;
      case "secondary":
        break;
      case "dataset":
        break;
      case "all":
        break;
      default:
        if (i.length === 0)
          return this.value(s);
        i.split("_");
        break;
    }
  }
  getDataById(e) {
    if (!b(e))
      return !1;
    const i = e.split("_");
    switch (i[1]) {
      case "chart":
        return this.data;
      case "primary":
        for (let s of this.allData.primaryPane)
          if (i[2] in s)
            return s[i[2]];
        return !1;
      case "secondary":
        for (let s of this.allData.secondaryPane)
          if (i[2] in s)
            return s[i[2]];
        return !1;
      case "datasets":
        for (let s of this.allData.datasets)
          if (i[2] in s)
            return s[i[2]];
        return !1;
      default:
        return !1;
    }
  }
  getTimeIndex(e) {
    if (!I(e))
      return !1;
    e = e - e % this.interval;
    let i = this.data.length > 0 ? this.data[0][0] : this.anchor;
    return e === i ? 0 : e < i ? (i - e) / this.interval * -1 : (e - i) / this.interval;
  }
  inRange(e) {
    return e >= this.timeMin && e <= this.timeMax;
  }
  inPriceHistory(e) {
    return e >= this.timeStart && e <= this.timeFinish;
  }
  inRenderRange(e) {
    let i = this.getTimeIndex(e), s = this.#e.rangeScrollOffset;
    return i >= this.indexStart - s && i <= this.indexEnd + s;
  }
  rangeIndex(e) {
    return this.getTimeIndex(e) - this.indexStart;
  }
  maxMinPriceVol(e) {
    let { data: i, start: s, end: n, that: r } = { ...e }, a = ye(this.#e.bufferPx / this.#e.candleW);
    if (a = I(a) ? a : 0, s = I(s) ? s - a : 0, s = s > 0 ? s : 0, n = typeof n == "number" ? n : i?.length - 1, i.length == 0)
      return {
        valueLo: 0,
        valueHi: 1,
        valueMin: 0,
        valueMax: 1,
        volumeMin: 0,
        volumeMax: 0,
        valueMinIdx: 0,
        valueMaxIdx: 0,
        volumeMinIdx: 0,
        volumeMaxIdx: 0
      };
    let l = i.length - 1, h = de(s, 0, l), p = de(n, 0, l), f = i[h][3], g = i[h][2], C = i[h][5], S = i[h][5], M = h, k = h, ue = h, we = h;
    for (; h++ < p; )
      i[h][3] < f && (f = i[h][3], M = h), i[h][2] > g && (g = i[h][2], k = h), i[h][5] < C && (C = i[h][5], ue = h), i[h][5] > S && (S = i[h][5], we = h);
    let B = g - f, D = f, L = g;
    return f -= B * r.yAxisBounds, f = f > 0 ? f : 0, g += B * r.yAxisBounds, B = g - f, {
      valueLo: D,
      valueHi: L,
      valueMin: f,
      valueMax: g,
      valueDiff: g - f,
      volumeMin: C,
      volumeMax: S,
      volumeDiff: S - C,
      valueMinIdx: M,
      valueMaxIdx: k,
      volumeMinIdx: ue,
      volumeMaxIdx: we
    };
    function de(Q, pe, be) {
      return Math.min(be, Math.max(pe, Q));
    }
  }
  snapshot(e, i) {
    return {
      snapshot: !0,
      ts: Date.now(),
      data: this.data,
      dataLength: this.dataLength,
      Length: this.Length,
      timeDuration: this.timeDuration,
      timeMin: this.timeMin,
      timeMax: this.timeMax,
      rangeDuration: this.rangeDuration,
      timeStart: this.timeStart,
      timeFinish: this.timeFinish,
      interval: this.interval,
      intervalStr: this.intervalStr
    };
  }
}
function Rs(o) {
  let e = Math.min(o.length - 1, 99), i = 1 / 0;
  return o.slice(0, e).forEach((s, n) => {
    let r = o[n + 1][0] - s[0];
    r === r && r < i && (i = r);
  }), i;
}
function Gh(o, e) {
  if (!(o instanceof Yt))
    return !1;
  const i = o.range.data || [], s = i.length;
  I(e) || (I(i[s - 1][0]) ? e = i[s - 1][0] : e = Date.now());
  let n, r = o.timeFrameMS;
  return e = e - e % r, i.length === 0 ? n = !1 : e === i[0][0] ? n = 0 : e < i[0][0] ? n = Math.floor((i[0][0] - e) / r) * -1 : n = Math.floor((e - i[0][0]) / r), n;
}
const qh = ["y", "M", "d", "h", "m", "s", "ms"], Yh = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"], jh = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Xh = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], fo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Kh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], go = 1231006505e3, Ke = 1, X = 1e3, K = X * 60, ie = K * 60, z = ie * 24, Pt = z * 7, ve = z * 30;
function yo(o = 3, e = !1) {
  let i = fo[o % 12] * z;
  return e && o > 0 && (i += z), i;
}
const Pe = z * 365, ei = {
  y: Pe,
  M: ve,
  w: Pt,
  d: z,
  h: ie,
  m: K,
  s: X,
  u: Ke
}, vo = {
  years: Pe,
  months: ve,
  weeks: Pt,
  days: z,
  hours: ie,
  minutes: K,
  seconds: X,
  milliseconds: Ke
}, Zh = { ...ei, ...vo }, ci = {
  YEARS10: [Pe * 10, "years"],
  YEARS5: [Pe * 5, "years"],
  YEARS3: [Pe * 3, "years"],
  YEARS2: [Pe * 2, "years"],
  YEARS: [Pe, "years"],
  MONTH6: [ve * 6, "months"],
  MONTH4: [ve * 4, "months"],
  MONTH3: [ve * 3, "months"],
  MONTH2: [ve * 2, "months"],
  MONTH: [ve, "months"],
  DAY15: [z * 15, "years"],
  DAY10: [z * 10, "days"],
  DAY7: [z * 7, "days"],
  DAY5: [z * 5, "days"],
  DAY3: [z * 3, "days"],
  DAY2: [z * 2, "days"],
  DAY: [z, "days"],
  HOUR12: [ie * 12, "hours"],
  HOUR6: [ie * 6, "hours"],
  HOUR4: [ie * 4, "hours"],
  HOUR2: [ie * 2, "hours"],
  HOUR: [ie, "hours"],
  MINUTE30: [K * 30, "minutes"],
  MINUTE15: [K * 15, "minutes"],
  MINUTE10: [K * 10, "minutes"],
  MINUTE5: [K * 5, "minutes"],
  MINUTE2: [K * 2, "minutes"],
  MINUTE: [K, "minutes"],
  SECOND30: [X * 30, "seconds"],
  SECOND15: [X * 15, "seconds"],
  SECOND10: [X * 10, "seconds"],
  SECOND5: [X * 5, "seconds"],
  SECOND2: [X * 2, "seconds"],
  SECOND: [X, "seconds"],
  MILLISECOND500: [Ke * 500, "milliseconds"],
  MILLISECOND250: [Ke * 250, "milliseconds"],
  MILLISECOND100: [Ke * 100, "milliseconds"],
  MILLISECOND50: [Ke * 50, "milliseconds"],
  MILLISECOND: [Ke, "milliseconds"]
}, Qh = () => {
  const o = Object.values(ci), e = [];
  for (let i = o.length; --i; i > 0)
    e[i] = o[i][0];
  return e;
}, Ft = Qh(), Jh = () => {
  const o = Object.values(ci), e = [];
  for (let i = o.length; --i; i > 0)
    e[i] = o[i][1];
  return e;
}, ks = Jh(), ec = Object.keys(ci), tc = () => {
  const o = {};
  for (const [e, i] of Object.entries(ci))
    o[e] = i[0];
  return o;
}, ic = tc();
function sc() {
  const o = (/* @__PURE__ */ new Date()).getTimezoneOffset();
  return Object.prototype.hasOwnProperty.call(timezones, o) ? timezones[o.toString()] : "Etc/UTC";
}
function nc() {
  const o = {};
  for (let e in ei) {
    let i = 0;
    o[e] = [];
    do
      o[e].push(Math.round(ei[e] * i)), i += 0.125;
    while (i < 1);
  }
  return o;
}
function wo(o) {
  const e = new Date(o).getTime();
  return T(e);
}
function bo(o, e = go, i = Date.now()) {
  return wo(o) ? o > e && o < i : !1;
}
function Ut(o, e, i) {
  o = new Date(o), e = new Date(e);
  var s = e.getTime(), n = o.getTime();
  return parseInt((s - n) / i);
}
const je = {
  inSeconds: function(o, e) {
    return Ut(o, e, X);
  },
  inMinutes: function(o, e) {
    return Ut(o, e, K);
  },
  inHours: function(o, e) {
    return Ut(o, e, ie);
  },
  inDays: function(o, e) {
    return Ut(o, e, z);
  },
  inWeeks: function(o, e) {
    return Ut(o, e, Pt);
  },
  inMonths: function(o, e) {
    o = new Date(o), e = new Date(e);
    let i = o.getUTCFullYear(), s = e.getUTCFullYear(), n = o.getUTCMonth();
    return e.getUTCMonth() + 12 * s - (n + 12 * i);
  },
  inYears: function(o, e) {
    let i = new Date(o);
    return new Date(e).getUTCFullYear() - i.getUTCFullYear();
  }
};
function rc(o, e) {
  let i = je.inYears(o, e), s = je.inMonths(o, e), n = je.inWeeks(o, e), r = je.inDays(o, e), a = je.inHours(o, e), l = je.inMinutes(o, e), h = je.inSeconds(o, e), p = new Date(e).getTime() - new Date(o).getTime();
  return {
    y: i,
    M: s,
    w: n,
    d: r,
    h: a,
    m: l,
    s: h,
    ms: p,
    years: i,
    months: s,
    weeks: n,
    days: r,
    hours: a,
    minutes: l,
    seconds: h,
    milliseconds: p
  };
}
function _s(o) {
  let e = X;
  return b(o) ? (e = ti(o), e ? o = o : (e = X, o = "1s")) : o = "1s", { tf: o, ms: e };
}
function ti(o) {
  if (!b(o))
    return !1;
  const e = /([0-9]{1,2})([s|m|h|d|w|M|y])/gm;
  let i;
  return (i = e.exec(o)) !== null ? ei[i[2]] * i[1] : !1;
}
function ln(o) {
  let e = Math.floor(o / 1e3), i = Math.floor(e / 60);
  e = e % 60;
  let s = Math.floor(i / 60);
  i = i % 60;
  let n = Math.floor(s / 24);
  s = s % 24;
  let r = Math.floor(n / 7);
  n = n % 7;
  let a = Math.floor(r / 4), l = Math.floor(r / 52), h = r % 4;
  return a = a % 13, {
    y: l,
    M: a,
    w: h,
    d: n,
    h: s,
    m: i,
    s: e,
    years: l,
    months: a,
    weeks: h,
    days: n,
    hours: s,
    minutes: i,
    seconds: e
  };
}
function wt(o) {
  const e = ln(o);
  for (const i in e)
    if (e[i])
      return `${e[i]}${i}`;
}
function xo(o) {
  return o ? new Date(o).getUTCSeconds() : null;
}
function hn(o) {
  return new Date(o).setUTCMilliseconds(0, 0);
}
function Co(o) {
  return o ? new Date(o).getUTCMinutes() : null;
}
function cn(o) {
  return new Date(o).setUTCSeconds(0, 0);
}
function To(o) {
  return o ? new Date(o).getUTCHours() : null;
}
function un(o) {
  return new Date(o).setUTCMinutes(0, 0, 0);
}
function dn(o) {
  return o ? new Date(o).getUTCDate() : null;
}
function oc(o, e = "en-GB", i = "short") {
  return new Date(o).toLocaleDateString(e, { weekday: i });
}
function ii(o) {
  return new Date(o).setUTCHours(0, 0, 0, 0);
}
function pn(o) {
  if (o)
    return new Date(o).getUTCMonth();
}
function So(o, e = "en-GB", i = "short") {
  return new Date(o).toLocaleDateString(e, { month: i });
}
function mn(o) {
  let e = new Date(o);
  return Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    1
  );
}
function Eo(o) {
  let e = (pn(o) + 1) % 12;
  return o += yo(e, Xi(o)), o;
}
function Po(o) {
  if (o)
    return new Date(o).getUTCFullYear();
}
function fn(o) {
  return Date.UTC(new Date(o).getUTCFullYear());
}
function Mo(o) {
  return o = o + Pe + z, Xi(o), o;
}
function Xi(o) {
  let i = new Date(o).getUTCFullYear();
  return i & 3 ? !1 : i % 100 != 0 || i % 400 == 0;
}
function ac(o) {
  let e = new Date(o), i = e.getUTCMonth(), s = e.getUTCDate(), n = dayCount[i] + s;
  return i > 1 && Xi() && n++, n;
}
function Oi(o, e) {
  return {
    years: (s) => fn(s),
    months: (s) => mn(s),
    weeks: (s) => ii(s),
    days: (s) => ii(s),
    hours: (s) => un(s),
    minutes: (s) => cn(s),
    seconds: (s) => hn(s)
  }[e](o);
}
function lc(o, e) {
  let i, s;
  switch (e) {
    case "years":
      i = fn(o), s = Mo(o);
      break;
    case "months":
      i = mn(o), s = Eo(o);
      break;
    case "weeks":
      i = ii(o), s = i + z;
      break;
    case "days":
      i = ii(o), s = i + z;
      break;
    case "hours":
      i = un(o), s = i + ie;
      break;
    case "minutes":
      i = cn(o), s = i + K;
      break;
    case "seconds":
      i = hn(o), s = i + X;
  }
  return { start: i, end: s };
}
function $s(o) {
  let { h: e, m: i } = gn(o);
  return e == 0 && i == 0 ? `${d}` : `${e}:${i}`;
}
function hc(o) {
  let { h: e, m: i, s } = gn(o);
  return e == 0 && i == 0 && s == 0 ? `${d}` : `${e}:${i}:${s}`;
}
function Hs(o) {
  let { h: e, m: i, s } = gn(o);
  return e == 0 && i == 0 && s == 0 ? `${d}` : `${i}:${s}`;
}
function gn(o) {
  let e, i, s, n;
  return e = String(dn(o)), i = String(To(o)).padStart(2, "0"), s = String(Co(o)).padStart(2, "0"), n = String(xo(o)).padStart(2, "0"), { d: e, h: i, m: s, s: n };
}
function cc(o, e) {
  let i = 1 / 0, s = null, n = -1;
  for (let r = 0; r < e.length; r++) {
    let a = e[r][0];
    Math.abs(a - o) < i && (i = Math.abs(a - o), s = e[r], n = r);
  }
  return [n, s];
}
class Yt {
  #e = {};
  #t = jt();
  #i = Intl.DateTimeFormat().resolvedOptions().timeZone;
  constructor(e) {
    e instanceof zi && (this.#e = e), this.setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get range() {
    return this.#e;
  }
  get timeFrameMS() {
    return this.#e.interval;
  }
  get timeFrame() {
    return this.#e.intervalStr;
  }
  set timeZone(e) {
    this.setTimeZone(e);
  }
  get timeZone() {
    return this.#i;
  }
  set timeZoneOffset(e) {
    this.#t = T(e) ? e : (/* @__PURE__ */ new Date()).getTimezoneOffset();
  }
  get timeZoneOffset() {
    return this.#t;
  }
  get indexed() {
    return this.#e.indexed;
  }
  setTimeZone(e) {
    Intl.supportedValuesOf("timeZone").includes(e) && (this.#i = e, this.#t = jt(e));
  }
  getTimezoneOffset(e, i) {
    jt(e, i);
  }
  getIANATimeZones(e) {
    Lo(e);
  }
}
function Lo(o = "en-US") {
  const e = {};
  return Intl.supportedValuesOf("timeZone").forEach((i) => {
    let s = jt(i, o);
    e[i] = s;
  }), e;
}
function jt(o = Intl.DateTimeFormat().resolvedOptions().timeZone, e = "en-US") {
  const i = /* @__PURE__ */ new Date(), s = i.toLocaleString(e, { timeZone: o }), n = i.toLocaleString(e);
  return -((Date.parse(n) - Date.parse(s)) / 36e5 + i.getTimezoneOffset() / 60);
}
const uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BTCGENESIS: go,
  DAY_MS: z,
  HM: $s,
  HMS: hc,
  HOUR_MS: ie,
  IANATimeZones: Lo,
  MILLISECOND: Ke,
  MINUTE_MS: K,
  MONTHMAP: Kh,
  MONTHR_MS: ve,
  MONTH_MS: yo,
  MS: Hs,
  SECOND_MS: X,
  TIMESCALES: Ft,
  TIMESCALESKEYS: ec,
  TIMESCALESRANK: ks,
  TIMESCALESVALUES: ci,
  TIMESCALESVALUESKEYS: ic,
  TIMEUNITS: qh,
  TIMEUNITSLONG: Yh,
  TIMEUNITSVALUES: Zh,
  TIMEUNITSVALUESLONG: vo,
  TIMEUNITSVALUESSHORT: ei,
  TimeData: Yt,
  WEEK_MS: Pt,
  YEAR_MS: Pe,
  buildSubGrads: nc,
  dayCntInc: jh,
  dayCntLeapInc: Xh,
  dayOfYear: ac,
  day_start: ii,
  getTimezone: sc,
  getTimezoneOffset: jt,
  get_day: dn,
  get_dayName: oc,
  get_hour: To,
  get_minute: Co,
  get_month: pn,
  get_monthName: So,
  get_second: xo,
  get_year: Po,
  hour_start: un,
  interval2MS: ti,
  isLeapYear: Xi,
  isTimeFrame: _s,
  isValidTimeInRange: bo,
  isValidTimestamp: wo,
  minute_start: cn,
  monthDayCnt: fo,
  month_start: mn,
  ms2Interval: wt,
  ms2TimeUnits: ln,
  nearestTs: cc,
  nextMonth: Eo,
  nextYear: Mo,
  second_start: hn,
  time_start: Oi,
  timestampDiff: je,
  timestampDifference: rc,
  unitRange: lc,
  year_start: fn
}, Symbol.toStringTag, { value: "Module" })), dc = K, yn = "1m", si = dc, pc = 6, vr = 0.05, mc = 100, wr = 100, Me = ["default", "percent", "log"], br = 0.3;
class Ni {
  static default = new Ni("default");
  static percent = new Ni("percent");
  static log = new Ni("log");
  constructor(e) {
    this.name = e;
  }
}
const Bs = 30, gs = 200, xr = 200, Cr = 20, Tr = 1920, Ki = 5, Sr = 50, Er = 30, fc = 8, Us = 30, Ao = [!0, "top"];
class Se {
  static t = 0;
  static o = 1;
  static h = 2;
  static l = 3;
  static c = 4;
  static v = 5;
}
const Di = {
  mainPane: {},
  primaryPane: {},
  secondaryPane: {},
  scale: {},
  timeline: {}
};
Array.from(Object.keys(Di));
class fe {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h;
  static dividerList = {};
  static divideCnt = 0;
  static class = Jn;
  static name = "Dividers";
  static type = "divider";
  static create(e, i) {
    const s = `${i.core.id}_divider_${++fe.divideCnt}`;
    return i.id = s, fe.dividerList[s] = new fe(e, i), fe.dividerList[s];
  }
  static destroy() {
    for (let e in fe.dividerList)
      fe.dividerList[e].destroy(), delete fe.dividerList[e];
  }
  static defaultNode() {
    return `
  <div slot="widget" class="${Jn}" style="position: absolute;"></div>
  `;
  }
  constructor(e, i) {
    const s = { ...i };
    this.#s = e, this.#t = s.core, this.#i = s, this.#r = s.core.theme, this.#e = s.id, this.#n = s.chartPane, this.#o = e.elements[fe.type], this.init();
  }
  get el() {
    return this.#a;
  }
  get id() {
    return this.#e;
  }
  get chartPane() {
    return this.#n;
  }
  get config() {
    return this.#t.config;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return ae(this.#a);
  }
  get height() {
    return this.#a.getBoundingClientRect().height;
  }
  set cursor(e) {
    this.setCursorStyle(e);
  }
  get cursor() {
    return this.#l;
  }
  get type() {
    return fe.type;
  }
  init() {
    this.mount();
  }
  start() {
    this.cursor = "row-resize", this.eventsListen();
  }
  destroy() {
    this.#h.destroy(), this.el.remove(), delete fe.dividerList[this.id];
  }
  eventsListen() {
    this.#h = new He(this.#a, { disableContextMenu: !1 }), this.#h.on("pointerover", this.onMouseEnter.bind(this)), this.#h.on("pointerout", this.onMouseOut.bind(this)), this.#h.on("pointerdrag", this.onPointerDrag.bind(this)), this.#h.on("pointerdragend", this.onPointerDragEnd.bind(this));
  }
  on(e, i, s = this) {
    this.#t.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#t.off(e, i, s);
  }
  emit(e, i) {
    this.#t.emit(e, i);
  }
  onMouseEnter() {
    this.#a.style.background = this.#r.divider.active, this.#t.MainPane.onMouseEnter();
  }
  onMouseOut() {
    this.#a.style.background = this.#r.divider.idle, this.#t.MainPane.onMouseEnter();
  }
  onPointerDrag(e) {
    this.#c = this.#t.MainPane.cursorPos, this.#a.style.background = this.#r.divider.active, this.emit(`${this.id}_pointerdrag`, this.#c), this.emit("divider_pointerdrag", {
      id: this.id,
      e,
      pos: this.#c,
      chartPane: this.chartPane
    }), this.chartPane.resize();
  }
  onPointerDragEnd(e) {
    this.#a.style.background = this.#r.divider.idle, this.#c = this.#t.MainPane.cursorPos, this.emit(`${this.id}_pointerdragend`, this.#c), this.emit("divider_pointerdragend", {
      id: this.id,
      e,
      pos: this.#c,
      chartPane: this.chartPane
    }), this.chartPane.resize();
  }
  mount() {
    this.#o.lastElementChild == null ? this.#o.innerHTML = this.dividerNode() : this.#o.lastElementChild.insertAdjacentHTML("afterend", this.dividerNode()), this.#a = so(`#${this.#e}`, this.#o);
  }
  dividerNode() {
    let e = this.#t.theme, i = this.#n.pos.top - ae(this.#o).top;
    this.#t.elBody.width - this.#t.elBody.scale.width;
    let s = T(this.config.dividerHeight) ? this.config.dividerHeight : fc, n = this.#t.elBody.tools.width;
    switch (i -= s / 2, e.tools.location) {
      case "left":
        break;
      case !1:
      case "none":
      case "right":
        n *= -1;
        break;
    }
    const r = `position: absolute; top: ${i}px; left: ${n}px; z-index:100; width: 100%; height: ${s}px; background: ${e.divider.idle};`, a = `width: 100%; margin: 3.5px 0; border: 0; border-top: ${e.divider.style} ${e.divider.line};`;
    return `
      <div id="${this.#e}" class="divider" style="${r}"><hr style="${a}"></div>
    `;
  }
  setPos() {
    let e = this.#n.pos.top - ae(this.#o).top;
    e = e - this.height / 2 + 1, this.#a.style.top = `${e}px`, this.#a.style.left = `${this.#t.elBody.tools.width}px`;
  }
  setWidth() {
    this.#a.style.width = `${this.#t.elMain.width + this.#t.elBody.scale.width}px`, this.#a.style.left = `${this.#t.elBody.tools.width}px`;
  }
  setCursorStyle(e) {
    b(e) && (this.#l = e, this.#a.style.cursor = e);
  }
  hide() {
    this.#a.style.display = "none";
  }
  show() {
    this.#a.style.display = "block";
  }
}
const gc = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4" ><path d="M471.993 112h-89.2l-16.242-46.75a32.023 32.023 0 00-30.229-21.5H175.241a31.991 31.991 0 00-30.294 21.691L129.1 112H40a24.027 24.027 0 00-24 24v312a24.027 24.027 0 0024 24h431.993a24.027 24.027 0 0024-24V136a24.027 24.027 0 00-24-24zm-8 328H48.007V144h104.01l23.224-68.25h161.081l23.71 68.25h103.961z" class="ci-primary"></path><path d="M256 168a114 114 0 10114 114 114.13 114.13 0 00-114-114zm0 196a82 82 0 1182-82 82.093 82.093 0 01-82 82z"></path></svg>', yc = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><path d="M376 160v32h65.372L252 381.373l-72-72L76.686 412.686l22.628 22.628L180 354.627l72 72 212-211.999V280h32V160H376z"></path><path d="M48 104H16v392h480v-32H48V104z"></path></svg>', vc = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><path d="M271.514 95.5h-32v178.111l115.613 54.948 13.737-28.902-97.35-46.268V95.5z"></path><path d="M256 16C123.452 16 16 123.452 16 256s107.452 240 240 240 240-107.452 240-240S388.548 16 256 16zm0 448c-114.875 0-208-93.125-208-208S141.125 48 256 48s208 93.125 208 208-93.125 208-208 208z"></path></svg>', Oo = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><path d="M245.151 168a88 88 0 1088 88 88.1 88.1 0 00-88-88zm0 144a56 56 0 1156-56 56.063 56.063 0 01-56 56z"></path><path d="M464.7 322.319l-31.77-26.153a193.081 193.081 0 000-80.332l31.77-26.153a19.941 19.941 0 004.606-25.439l-32.612-56.483a19.936 19.936 0 00-24.337-8.73l-38.561 14.447a192.038 192.038 0 00-69.54-40.192l-6.766-40.571A19.936 19.936 0 00277.762 16H212.54a19.937 19.937 0 00-19.728 16.712l-6.762 40.572a192.03 192.03 0 00-69.54 40.192L77.945 99.027a19.937 19.937 0 00-24.334 8.731L21 164.245a19.94 19.94 0 004.61 25.438l31.767 26.151a193.081 193.081 0 000 80.332l-31.77 26.153A19.942 19.942 0 0021 347.758l32.612 56.483a19.937 19.937 0 0024.337 8.73l38.562-14.447a192.03 192.03 0 0069.54 40.192l6.762 40.571A19.937 19.937 0 00212.54 496h65.222a19.936 19.936 0 0019.728-16.712l6.763-40.572a192.038 192.038 0 0069.54-40.192l38.564 14.449a19.938 19.938 0 0024.334-8.731l32.609-56.487a19.939 19.939 0 00-4.6-25.436zm-50.636 57.12l-48.109-18.024-7.285 7.334a159.955 159.955 0 01-72.625 41.973l-10 2.636L267.6 464h-44.89l-8.442-50.642-10-2.636a159.955 159.955 0 01-72.625-41.973l-7.285-7.334-48.117 18.024L53.8 340.562l39.629-32.624-2.7-9.973a160.9 160.9 0 010-83.93l2.7-9.972L53.8 171.439l22.446-38.878 48.109 18.024 7.285-7.334a159.955 159.955 0 0172.625-41.973l10-2.636L222.706 48H267.6l8.442 50.642 10 2.636a159.955 159.955 0 0172.625 41.973l7.285 7.334 48.109-18.024 22.447 38.877-39.629 32.625 2.7 9.972a160.9 160.9 0 010 83.93l-2.7 9.973 39.629 32.623z"></path></svg>', wc = '<svg width="46.08" height="46.08" version="1.1" viewBox="-51.2 -51.2 614.4 614.4"><rect x="16" y="240.18" width="188.84" height="31.635"/><g transform="translate(-3.3234e-7 -112.18)"><rect x="307.16" y="352.37" width="188.84" height="31.635"/></g><rect transform="rotate(-90)" x="-496" y="240.18" width="188.84" height="31.635"/><rect transform="rotate(-90)" x="-204.84" y="240.18" width="188.84" height="31.635"/></svg>', bc = '<svg width="46.08" height="46.08" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.535 3H21a1 1 0 011 1v16a1 1 0 01-1 1H6.535a1 1 0 01-.832-.445l-5.333-8a1 1 0 010-1.11l5.333-8A1 1 0 016.535 3zm.535 2l-4.666 7 4.666 7H20V5H7.07zM13 10.586l2.828-2.829 1.415 1.415L14.414 12l2.829 2.828-1.415 1.415L13 13.414l-2.828 2.829-1.415-1.415L11.586 12 8.757 9.172l1.415-1.415L13 10.586z"></path></svg>', xc = '<svg width="46.08" height="46.08" version="1.1" viewBox="-51.2 -51.2 614.4 614.4"><g stroke-width="30.155"><rect x="14.757" y="240.92" width="482.49" height="30.155" rx="15.078"/><rect x="14.757" y="147" width="482.49" height="30.155" rx="15.078"/><rect x="14.757" y="334.84" width="482.49" height="30.155" rx="15.078"/></g ><g transform="translate(5.937 -288.34)"><path d="m23.904 712.34c-8.3532 0-15.078 6.7252-15.078 15.078s6.7249 15.078 15.078 15.078h173.93c-0.65295-3.3651-2.0312-6.4697-2.0312-10.026 0-7.1393 1.5573-13.888 4.0625-20.13zm276.35 0c2.5051 6.2423 4.0365 12.991 4.0365 20.13 0 3.5554-1.3526 6.6618-2.0052 10.026h173.93c8.3532 0 15.078-6.7252 15.078-15.078s-6.7249-15.078-15.078-15.078z"/><path d="m250.06 759.97c17.965 0 32.545-14.58 32.545-32.545 0-17.965-14.58-32.545-32.545-32.545-17.965 0-32.545 14.58-32.545 32.545 0 17.965 14.58 32.545 32.545 32.545zm0 21.697c-29.964 0-54.242-24.279-54.242-54.242 0-29.964 24.279-54.242 54.242-54.242 29.964 0 54.242 24.279 54.242 54.242 0 29.964-24.279 54.242-54.242 54.242z" stroke-width="21.697"/></g ><path d="m144.05 18.672c-24.694 0-45.285 16.595-51.849 39.167h-62.37c-8.3532 0-15.078 6.7252-15.078 15.078s6.7249 15.078 15.078 15.078h62.37c6.5639 22.572 27.155 39.167 51.849 39.167s45.285-16.595 51.849-39.167h120.03c6.5639 22.572 27.155 39.167 51.849 39.167 24.694 0 45.285-16.595 51.849-39.167h62.552c8.3532 0 15.078-6.7252 15.078-15.078s-6.7249-15.078-15.078-15.078h-62.552c-6.5639-22.572-27.155-39.167-51.849-39.167-24.694 0-45.285 16.595-51.849 39.167h-120.03c-6.5639-22.572-27.155-39.167-51.849-39.167zm0 21.693c17.965 0 32.552 14.587 32.552 32.552 0 17.965-14.587 32.552-32.552 32.552-17.965 1e-5 -32.552-14.587-32.552-32.552 0-17.965 14.587-32.552 32.552-32.552zm223.72 0c17.965 0 32.552 14.587 32.552 32.552 0 17.965-14.587 32.552-32.552 32.552-17.965 0-32.552-14.587-32.552-32.552 0-17.965 14.587-32.552 32.552-32.552z" stroke-width="30.155"/></svg>', nt = '<svg width="46.08" height="46.08" version="1.1" viewBox="-51.2 -51.2 614.4 614.4"><g transform="matrix(21.697 0 0 21.697 -47.758 -47.758)"><path d="m7.354 21.354 14-14-0.707-0.707-14 14z"/><path d="m22.5 7c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5-1.5 0.672-1.5 1.5 0.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm-17 16c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5-1.5 0.672-1.5 1.5 0.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"/></g></svg>', Cc = '<svg width="46.08" height="46.08" viewBox="0 0 32 32"><path d="M 3.2758709,20.241377 11.758622,28.72413 28.72413,11.758622 20.241377,3.2758709 Z m 2.1206881,0 1.5905161,-1.590515 3.7112049,3.711203 1.060342,-1.060345 -3.7112027,-3.711204 1.0603441,-1.060344 2.1206876,2.12069 1.060346,-1.060346 -2.120689,-2.120688 1.060343,-1.060344 3.711203,3.711203 L 16,17.060346 l -3.711203,-3.711208 1.060341,-1.060341 2.12069,2.120687 1.060344,-1.060346 -2.120688,-2.120687 1.060344,-1.060343 3.711204,3.711205 1.060345,-1.060345 -3.711205,-3.7112046 1.060344,-1.0603441 2.120687,2.1206887 1.060346,-1.0603446 -2.120687,-2.1206883 1.590515,-1.5905161 6.362065,6.362063 -14.84482,14.84482 z" style="stroke-width:0.749776" /></svg>', Tc = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><g id="g930" transform="matrix(21.128963,0,0,21.128963,-29.235597,-50.369964)"><path clip-rule="evenodd" d="m 4.5,5 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 0 0 0,-3 z M 2,6.5 A 2.5,2.5 0 0 1 6.95,6 H 24 V 7 H 6.95 A 2.5,2.5 0 0 1 2,6.5 Z M 4.5,15 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 0 0 0,-3 z M 2,16.5 A 2.5,2.5 0 0 1 6.95,16 h 13.1 a 2.5,2.5 0 1 1 0,1 H 6.95 A 2.5,2.5 0 0 1 2,16.5 Z M 22.5,15 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 0 0 0,-3 z m -18,6 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 0 0 0,-3 z M 2,22.5 A 2.5,2.5 0 0 1 6.95,22 H 24 v 1 H 6.95 A 2.5,2.5 0 0 1 2,22.5 Z" id="path908" /><path clip-rule="evenodd" d="M 22.4,8.94 21.01,9.57 20.6,8.66 21.99,8.03 Z m -4,1.8 -1.39,0.63 -0.41,-0.91 1.39,-0.63 z m -4,1.8 -1.4,0.63 -0.4,-0.91 1.39,-0.63 z m -4,1.8 L 9,14.97 8.6,14.06 9.99,13.43 Z" id="path910" /></g></svg>', Sc = '<svg width="46.08" height="46.08" viewBox="-51.2 -51.2 614.4 614.4"><path d="M231.359 147l-80.921 205h45.155l15.593-39.5h89.628l15.593 39.5h45.155l-80.921-205zm-3.594 123.5L256 198.967l28.235 71.533z"></path><path d="M384 56H128V16H16v112h40v256H16v112h112v-40h256v40h112V384h-40V128h40V16H384zM48 96V48h48v48zm48 368H48v-48h48zm288-40H128v-40H88V128h40V88h256v40h40v256h-40zm80-8v48h-48v-48zM416 48h48v48h-48z"></path></svg>', Ec = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><g id="g718" transform="translate(0,1.2499996)"><path d="M 7.5010125,7.9560661 5.355012,10.103066 c -0.472,0.472 -1.18,-0.2360003 -0.708,-0.7080003 L 7.6470125,6.3950659 c 0.195364,-0.195858 0.512636,-0.195858 0.708,0 l 3.0000005,2.9999998 c 0.472,0.472 -0.236,1.1800003 -0.708,0.7080003 L 8.5010125,7.9560661 c -0.431103,-0.417289 -0.523896,-0.423024 -1,0 z" style="" id="path566-5" /><path d="m 7.4989873,5.5439348 -2.1460003,-2.147 c -0.472,-0.472 -1.18,0.236 -0.708,0.708 l 3.0000003,3 c 0.1953639,0.195858 0.5126361,0.195858 0.708,0 l 2.9999997,-3 c 0.472,-0.472 -0.236,-1.18 -0.708,-0.708 l -2.1459997,2.147 c -0.4311027,0.417289 -0.5238956,0.423024 -1,0 z" style="" id="path566-6-3" /></g></svg>', Pc = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><path d="m 7.4989873,7.7026182 -2.1460003,2.147 c -0.472,0.4719998 -1.18,-0.236 -0.708,-0.708 l 3.0000003,-3 c 0.1953639,-0.1958581 0.5126361,-0.1958581 0.708,0 l 2.9999997,3 c 0.472,0.472 -0.236,1.1799998 -0.708,0.708 l -2.1459997,-2.147 c -0.4311027,-0.417289 -0.5238956,-0.423024 -1,0 z" style="" id="path566-6-3" /></svg>', Mc = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><path d="m 7.4989873,8.2973819 -2.1460003,-2.147 c -0.472,-0.472 -1.18,0.236 -0.708,0.708 l 3.0000003,3 c 0.1953639,0.1958581 0.5126361,0.1958581 0.708,0 l 2.9999997,-3 c 0.472,-0.472 -0.236,-1.18 -0.708,-0.708 l -2.1459997,2.147 c -0.4311027,0.417289 -0.5238956,0.423024 -1,0 z" style="" id="path566-6-3" /></svg>', Lc = '<svg width="46.08" height="46.08" version="1.1" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"> <path d="m1 14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1zm15 0a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-8.5-2.5a0.5 0.5 0 0 0 1 0v-5.793l2.146 2.147a0.50063 0.50063 0 1 0 0.708-0.708l-3-3a0.5 0.5 0 0 0-0.708 0l-3 3a0.50063 0.50063 0 0 0 0.708 0.708l2.146-2.147z" fill-rule="evenodd"/></svg>', Ac = '<svg width="46.08" height="46.08" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M 15,2 A 1,-1 0 0 0 14,1 H 2 A 1,-1 0 0 0 1,2 v 12 a 1,-1 0 0 0 1,1 h 12 a 1,-1 0 0 0 1,-1 z M 0,2 A 2,-2 0 0 1 2,0 h 12 a 2,-2 0 0 1 2,2 v 12 a 2,-2 0 0 1 -2,2 H 2 A 2,-2 0 0 1 0,14 Z m 8.5,2.5 a 0.5,-0.5 0 0 0 -1,0 v 5.793 L 5.354,8.146 A 0.5006316,-0.5006316 0 1 0 4.646,8.854 l 3,3 a 0.5,-0.5 0 0 0 0.708,0 l 3,-3 A 0.5006316,-0.5006316 0 0 0 10.646,8.146 L 8.5,10.293 Z" id="path2" /></svg>', Oc = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><g id="g687" transform="translate(15.647255,-0.0288128)"><path d="m -8.1462425,10.484879 -2.1460005,2.146999 c -0.472,0.472 -1.18,-0.236 -0.708,-0.708 l 3.0000005,-2.9999994 c 0.195364,-0.195858 0.512636,-0.195858 0.708,0 l 3.0000005,2.9999994 c 0.472,0.472 -0.236,1.18 -0.708,0.708 l -2.1460005,-2.146999 c -0.431103,-0.417289 -0.523896,-0.423024 -1,0 z" style="" id="path566-5" /><path d="m -8.1482677,5.5727476 -2.1460003,-2.147 c -0.472,-0.472 -1.18,0.236 -0.708,0.708 l 3.0000003,3 c 0.1953639,0.195858 0.5126361,0.195858 0.708,0 l 2.9999997,-3 c 0.472,-0.472 -0.236,-1.18 -0.708,-0.708 l -2.1459997,2.147 c -0.4311027,0.417289 -0.5238956,0.423024 -1,0 z" style="" id="path566-6-3" /></g></svg>', Nc = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><g id="g611" transform="translate(0.2050748,-0.8829888)"><path d="m 7.2959375,11.933818 -2.146,-2.1469999 c -0.472,-0.4719998 -1.18,0.2359999 -0.708,0.7079999 l 3,3 c 0.195364,0.195858 0.512636,0.195858 0.708,0 l 3.0000005,-3 c 0.472,-0.472 -0.236,-1.1799997 -0.708,-0.7079999 L 8.2959375,11.933818 c -0.431103,0.417289 -0.523896,0.423024 -1,0 z" style="" id="path566" /><path d="m 7.2939123,5.8321596 -2.146,2.147 c -0.4719998,0.472 -1.1799998,-0.236 -0.708,-0.708 l 3,-3 c 0.1953639,-0.195858 0.5126361,-0.195858 0.708,0 l 2.9999997,3 c 0.472,0.472 -0.236,1.18 -0.708,0.708 l -2.1459997,-2.147 c -0.4311027,-0.417289 -0.5238956,-0.423024 -1,0 z" style="" id="path566-6" /></g></svg>', Dc = '<svg style="width: 46px; height: 46px" viewBox="-1.6 -1.6 19.2 19.2"><path d="M 15,2 C 15,1.4477153 14.552285,1 14,1 H 2 C 1.4477153,1 1,1.4477153 1,2 v 12 c 0,0.552285 0.4477153,1 1,1 h 12 c 0.552285,0 1,-0.447715 1,-1 z M 0,2 C 0,0.8954305 0.8954305,0 2,0 h 12 c 1.104569,0 2,0.8954305 2,2 v 12 c 0,1.104569 -0.895431,2 -2,2 H 2 C 0.8954305,16 0,15.104569 0,14 Z" id="path2" /><path d="m 11.500447,8.5 c 0.666666,0 0.666666,-1 0,-1 H 4.444275 c -0.1571231,0 -0.224029,0.07336 -0.2978281,0.1459999 -0.1958579,0.195364 -0.1958579,0.5126361 0,0.7080001 0,0 0.113806,0.146 0.320186,0.146 z" style="" id="path887" /></svg>', Ic = '<svg style="height:46px;width:46px" version="1.1" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"> <g fill-rule="evenodd">  <path d="m15 2c0-0.55228-0.44772-1-1-1h-12c-0.55228 0-1 0.44772-1 1v12c0 0.55228 0.44772 1 1 1h12c0.55228 0 1-0.44772 1-1zm-15 0c0-1.1046 0.89543-2 2-2h12c1.1046 0 2 0.89543 2 2v12c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2z"/>  <path d="m4.4449 4.097c-0.01964 0-0.037678 0.0018-0.054687 0.0039-0.017011 0.0022-0.034068 0.0058-0.048828 0.0098-0.014761 4e-3 -0.028126 0.0081-0.041016 0.01367-0.012889 0.0056-0.025711 0.01268-0.037109 0.01953-0.022796 0.01371-0.041442 0.02783-0.060547 0.04492s-0.038191 0.03653-0.056641 0.05469c-0.024482 0.02442-0.046092 0.05037-0.064453 0.07813-0.018362 0.02775-0.032681 0.05776-0.044922 0.08789s-0.021223 0.06023-0.027344 0.0918c-0.00612 0.03156-0.00977 0.06366-0.00977 0.0957 0 8e-3 -4.378e-4 0.01543 0 0.02344v1.2988c0 0.02083 6.41e-5 0.04102 0.00195 0.06055 0.00189 0.01953 0.0061 0.03841 0.00977 0.05664 0.00366 0.01823 0.00836 0.03581 0.013672 0.05273 0.00531 0.01693 0.010742 0.0332 0.017578 0.04883 0.013672 0.03125 0.029785 0.0599 0.048828 0.08594s0.041016 0.04948 0.064453 0.07031 0.049316 0.03906 0.076172 0.05469c0.026855 0.01563 0.054687 0.02865 0.083984 0.03906 0.029297 0.01042 0.059082 0.01823 0.089844 0.02344 0.030762 0.0052 0.0625 0.0078 0.09375 0.0078s0.062988-0.0026 0.09375-0.0078 0.060547-0.01302 0.089844-0.02344 0.057129-0.02344 0.083984-0.03906c0.026855-0.01563 0.052734-0.03385 0.076172-0.05469 0.023437-0.02083 0.04541-0.04427 0.064453-0.07031s0.035156-0.05469 0.048828-0.08594c0.00684-0.01563 0.012268-0.0319 0.017578-0.04883s0.01001-0.0345 0.013672-0.05273c0.00366-0.01823 0.00787-0.03711 0.00977-0.05664 0.00189-0.01953 0.00195-0.03971 0.00195-0.06055v-0.82227h6v0.98633c0 0.02083 2e-3 0.04102 0.0039 0.06055s0.0042 0.03841 0.0078 0.05664c0.0037 0.01823 0.0084 0.03581 0.01367 0.05273 0.0053 0.01693 0.01074 0.0332 0.01758 0.04883 0.01367 0.03125 0.03174 0.0599 0.05078 0.08594s0.03906 0.04948 0.0625 0.07031 0.04932 0.03906 0.07617 0.05469c0.02686 0.01563 0.05469 0.02865 0.08399 0.03906 0.0293 0.01042 0.06104 0.01823 0.0918 0.02344 0.03076 0.0052 0.06055 0.0078 0.0918 0.0078s0.06299-0.0026 0.09375-0.0078 0.06055-0.01302 0.08984-0.02344c0.0293-0.01042 0.05908-0.02344 0.08594-0.03906 0.02686-0.01563 0.05078-0.03385 0.07422-0.05469 0.02344-0.02083 0.04541-0.04427 0.06445-0.07031s0.03516-0.05469 0.04883-0.08594c0.0068-0.01563 0.01422-0.0319 0.01953-0.04883 0.0053-0.01693 0.01001-0.0345 0.01367-0.05273 0.0037-0.01823 0.0059-0.03711 0.0078-0.05664s2e-3 -0.03971 2e-3 -0.06055v-1.4629c3.25e-4 -0.0078 0-0.01563 0-0.02344 0-0.03125-0.0026-0.06299-0.0078-0.09375s-0.01302-0.06055-0.02344-0.08984c-0.01042-0.0293-0.02344-0.05713-0.03906-0.08398-0.01563-0.02685-0.03385-0.05273-0.05469-0.07617-0.02083-0.02344-0.04427-0.04541-0.07031-0.06445s-0.05469-0.03516-0.08594-0.04883c-0.01563-0.0068-0.0319-0.01227-0.04883-0.01758-0.01693-0.0053-0.0345-0.01001-0.05273-0.01367-0.01823-0.0037-0.03711-0.0059-0.05664-0.0078s-0.03971-0.0039-0.06055-0.0039h-6.5z"/>  <path d="m11.555 11.903c0.01964 0 0.03768-0.0018 0.05469-0.0039 0.01701-0.0022 0.03407-0.0058 0.04883-0.0098s0.02813-0.0081 0.04102-0.01367c0.01289-0.0056 0.02571-0.01268 0.03711-0.01953 0.0228-0.01371 0.04144-0.02783 0.06055-0.04492 0.0191-0.01709 0.03819-0.03653 0.05664-0.05469 0.02448-0.02442 0.04609-0.05037 0.06445-0.07813 0.01836-0.02775 0.03268-0.05776 0.04492-0.08789s0.02122-0.06023 0.02734-0.0918c0.0061-0.03156 0.0098-0.06366 0.0098-0.0957 0-8e-3 4.38e-4 -0.01543 0-0.02344v-1.2988c0-0.02083-6.4e-5 -0.04102-2e-3 -0.06055-0.0019-0.01953-0.0061-0.03841-0.0098-0.05664s-0.0084-0.03581-0.01367-0.05273c-0.0053-0.01693-0.01074-0.0332-0.01758-0.04883-0.01367-0.03125-0.02979-0.0599-0.04883-0.08594s-0.04102-0.04948-0.06445-0.07031c-0.02344-0.02083-0.04932-0.03906-0.07617-0.05469s-0.05469-0.02865-0.08398-0.03906c-0.0293-0.01042-0.05908-0.01823-0.08984-0.02344-0.03076-0.0052-0.0625-0.0078-0.09375-0.0078s-0.06299 0.0026-0.09375 0.0078-0.06055 0.01302-0.08984 0.02344c-0.0293 0.01042-0.05713 0.02344-0.08398 0.03906-0.02685 0.01563-0.05273 0.03385-0.07617 0.05469-0.02344 0.02083-0.04541 0.04427-0.06445 0.07031s-0.03516 0.05469-0.04883 0.08594c-0.0068 0.01563-0.01227 0.0319-0.01758 0.04883-0.0053 0.01693-0.01001 0.0345-0.01367 0.05273-0.0037 0.01823-0.0079 0.03711-0.0098 0.05664s-0.0019 0.03971-0.0019 0.06055v0.82227h-6v-0.98633c0-0.02083-2e-3 -0.04102-0.0039-0.06055s-0.0042-0.03841-0.0078-0.05664c-0.0037-0.01823-0.0084-0.03581-0.01367-0.05273-0.0053-0.01693-0.01074-0.0332-0.01758-0.04883-0.01367-0.03125-0.03174-0.0599-0.05078-0.08594s-0.03906-0.04948-0.0625-0.07031-0.04932-0.03906-0.07617-0.05469c-0.02686-0.01563-0.05469-0.02865-0.08399-0.03906-0.0293-0.01042-0.06104-0.01823-0.0918-0.02344-0.03076-0.0052-0.06055-0.0078-0.0918-0.0078s-0.06299 0.0026-0.09375 0.0078-0.06055 0.01302-0.08984 0.02344c-0.0293 0.01042-0.05908 0.02344-0.08594 0.03906-0.02686 0.01563-0.05078 0.03385-0.07422 0.05469-0.02344 0.02083-0.04541 0.04427-0.06445 0.07031s-0.03516 0.05469-0.04883 0.08594c-0.0068 0.01563-0.01422 0.0319-0.01953 0.04883-0.0053 0.01693-0.01001 0.03451-0.01367 0.05273-0.0037 0.01823-0.0059 0.03711-0.0078 0.05664s-2e-3 0.03971-2e-3 0.06055v1.4629c-3.25e-4 0.0078 0 0.01563 0 0.02344 0 0.03125 0.0026 0.06299 0.0078 0.09375s0.01302 0.06055 0.02344 0.08984c0.01042 0.0293 0.02344 0.05713 0.03906 0.08398 0.01563 0.02685 0.03385 0.05273 0.05469 0.07617 0.02083 0.02344 0.04427 0.04541 0.07031 0.06445s0.05469 0.03516 0.08594 0.04883c0.01563 0.0068 0.0319 0.01227 0.04883 0.01758 0.01693 0.0053 0.0345 0.01001 0.05273 0.01367 0.01823 0.0037 0.03711 0.0059 0.05664 0.0078s0.03971 0.0039 0.06055 0.0039h6.5z"/></g></svg>', Rc = '<svg style="height:46px;width:46px" version="1.1" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"> <path d="m15 2c0-0.55228-0.44772-1-1-1h-12c-0.55228 0-1 0.44772-1 1v12c0 0.55228 0.44772 1 1 1h12c0.55228 0 1-0.44772 1-1zm-15 0c0-1.1046 0.89543-2 2-2h12c1.1046 0 2 0.89543 2 2v12c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2z" fill-rule="evenodd"/> <path d="m13.291 7.7876c-1.0729-2.491-3.0911-4.0365-5.2687-4.0365-2.1776 0-4.1958 1.5456-5.2687 4.0365a0.53112 0.53112 0 0 0 0 0.4249c1.0729 2.491 3.0911 4.0365 5.2687 4.0365 2.1776 0 4.1959-1.5456 5.2687-4.0365a0.53112 0.53112 0 0 0 0-0.4249zm-5.2687 3.3992c-1.6836 0-3.277-1.2163-4.1958-3.1867 0.91884-1.9705 2.5122-3.1867 4.1958-3.1867 1.6837 0 3.277 1.2163 4.1959 3.1867-0.91884 1.9705-2.5122 3.1867-4.1959 3.1867zm0-5.3112a2.1245 2.1245 0 1 0 2.1245 2.1245 2.1245 2.1245 0 0 0-2.1245-2.1245zm0 3.1867a1.0622 1.0622 0 1 1 1.0622-1.0622 1.0622 1.0622 0 0 1-1.0622 1.0622z" stroke-width=".53112"/></svg>', kc = '<svg style="height:46px;width:46px" version="1.1" viewBox="-1.6 -1.6 19.2 19.2" xmlns="http://www.w3.org/2000/svg"> <path d="m15 2c0-0.55228-0.44772-1-1-1h-12c-0.55228 0-1 0.44772-1 1v12c0 0.55228 0.44772 1 1 1h12c0.55228 0 1-0.44772 1-1zm-15 0c0-1.1046 0.89543-2 2-2h12c1.1046 0 2 0.89543 2 2v12c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2z" fill-rule="evenodd"/> <path d="m13.291 7.7876c-1.0729-2.491-3.0911-4.0365-5.2687-4.0365-2.1776 0-4.1958 1.5456-5.2687 4.0365a0.53112 0.53112 0 0 0 0 0.4249c1.0729 2.491 3.0911 4.0365 5.2687 4.0365 2.1776 0 4.1959-1.5456 5.2687-4.0365a0.53112 0.53112 0 0 0 0-0.4249zm-5.2687 3.3992c-1.6836 0-3.277-1.2163-4.1958-3.1867 0.91884-1.9705 2.5122-3.1867 4.1958-3.1867 1.6837 0 3.277 1.2163 4.1959 3.1867-0.91884 1.9705-2.5122 3.1867-4.1959 3.1867zm0-5.3112a2.1245 2.1245 0 1 0 2.1245 2.1245 2.1245 2.1245 0 0 0-2.1245-2.1245zm0 3.1867a1.0622 1.0622 0 1 1 1.0622-1.0622 1.0622 1.0622 0 0 1-1.0622 1.0622z" stroke-width=".53112"/> <path d="m12.757 3.0055c-0.11087 0.0051358-0.22696 0.051177-0.33008 0.1543l-4.9883 4.9902c-0.061946 0.061947-0.086644 0.12038-0.097656 0.17773l-4.8184 4.8164c-0.1111 0.1111-0.1066 0.2109-0.10742 0.31445-3.5e-4 0.27663 0.22337 0.50035 0.5 0.5 0 0 0.18415 0.022881 0.33008-0.12305l4.9746-4.9727c0.06758-0.06758 0.10951-0.13979 0.13281-0.21289l4.7832-4.7832c0.36828-0.36828 0.017071-0.87967-0.37891-0.86133z" fill-rule="evenodd"/></svg>', _c = '<svg class="ov-icon" width="46.08" height="46.08" version="1.1" viewBox="-1.6 -1.6 19.2 19.2"><path d="m14 15c0.55228 0 1-0.44772 1-1v-12c0-0.55228-0.44772-1-1-1h-12c-0.55228 0-1 0.44772-1 1v12c0 0.55228 0.44772 1 1 1zm0-15c1.1046 0 2 0.89543 2 2v12c0 1.1046-0.89543 2-2 2h-12c-1.1046 0-2-0.89543-2-2v-12c0-1.1046 0.89543-2 2-2z" fill-rule="evenodd"/><g transform="translate(-1.1585)" fill-rule="evenodd">  <path d="m8.2964 7.5-2.147-2.146c-0.472-0.472 0.236-1.18 0.708-0.708l3 3c0.19586 0.19536 0.19586 0.51264 0 0.708l-3 3c-0.472 0.472-1.18-0.236-0.708-0.708l2.147-2.146c0.41729-0.4311 0.42302-0.5239 0-1z"/>  <path d="m12.323 4.4996c0-0.66667-1-0.66667-1 0v7.0562c0 0.15712 0.07336 0.22403 0.146 0.29783 0.19536 0.19586 0.51264 0.19586 0.708 0 0 0 0.146-0.11381 0.146-0.32019z"/></g></svg>', $c = '<svg class="ov-icon" width="46.08" height="46.08" version="1.1" viewBox="-1.6 -1.6 19.2 19.2"><path d="m2 15c-0.55228 0-1-0.44772-1-1v-12c0-0.55228 0.44772-1 1-1h12c0.55228 0 1 0.44772 1 1v12c0 0.55228-0.44772 1-1 1zm0-15c-1.1046 0-2 0.89543-2 2v12c0 1.1046 0.89543 2 2 2h12c1.1046 0 2-0.89543 2-2v-12c0-1.1046-0.89543-2-2-2z" fill-rule="evenodd"/><g transform="matrix(-1 0 0 1 17.159 0)" fill-rule="evenodd">  <path d="m8.2964 7.5-2.147-2.146c-0.472-0.472 0.236-1.18 0.708-0.708l3 3c0.19586 0.19536 0.19586 0.51264 0 0.708l-3 3c-0.472 0.472-1.18-0.236-0.708-0.708l2.147-2.146c0.41729-0.4311 0.42302-0.5239 0-1z"/>  <path d="m12.323 4.4996c0-0.66667-1-0.66667-1 0v7.0562c0 0.15712 0.07336 0.22403 0.146 0.29783 0.19536 0.19586 0.51264 0.19586 0.708 0 0 0 0.146-0.11381 0.146-0.32019z"/></g></svg>', Hc = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 336.96 336.36" xmlns="http://www.w3.org/2000/svg"><path d="m0 0 168.48 336.36 168.48-336.36z"/></svg>', Bc = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 336.96 336.36" xmlns="http://www.w3.org/2000/svg"><path d="m0 336.36 168.48-336.36 168.48 336.36z"/></svg>', Uc = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0 70.67-28.66 134.68-74.99 181.01s-110.34 74.99-181.01 74.99c-70.68 0-134.69-28.66-181.01-74.99-46.33-46.33-74.99-110.34-74.99-181.01 0-70.68 28.66-134.69 74.99-181.01 46.32-46.33 110.33-74.99 181.01-74.99 70.67 0 134.68 28.66 181.01 74.99 46.33 46.32 74.99 110.33 74.99 181.01zm-204.29-21.97v-67.04c0-7.53-6.19-13.72-13.73-13.72h-75.96c-7.53 0-13.72 6.17-13.72 13.72v67.03h-42.84c-16.5 0-24.78 19.64-13.86 31.54l94.74 110.57c7.44 9 21.03 9.01 28.66 0.37l93.71-111.31c10.69-12.27 1.64-31.14-14.19-31.16h-42.81zm105.52 179.2c40.22-40.24 65.11-95.84 65.11-157.23 0-61.4-24.89-117-65.11-157.23-40.24-40.23-95.84-65.11-157.23-65.11-61.4 0-117 24.88-157.23 65.11s-65.11 95.83-65.11 157.23c0 61.39 24.88 116.99 65.11 157.23 40.23 40.22 95.83 65.11 157.23 65.11 61.39 0 116.99-24.89 157.23-65.11z" fill-rule="nonzero"/></svg>', zc = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0-70.67-28.66-134.68-74.99-181.01s-110.34-74.99-181.01-74.99c-70.68 0-134.69 28.66-181.01 74.99-46.33 46.33-74.99 110.34-74.99 181.01 0 70.68 28.66 134.69 74.99 181.01 46.32 46.33 110.33 74.99 181.01 74.99 70.67 0 134.68-28.66 181.01-74.99 46.33-46.32 74.99-110.33 74.99-181.01zm-204.29 21.97v67.04c0 7.53-6.19 13.72-13.73 13.72h-75.96c-7.53 0-13.72-6.17-13.72-13.72v-67.03h-42.84c-16.5 0-24.78-19.64-13.86-31.54l94.74-110.57c7.44-9 21.03-9.01 28.66-0.37l93.71 111.31c10.69 12.27 1.64 31.14-14.19 31.16zm105.52-179.2c40.22 40.24 65.11 95.84 65.11 157.23 0 61.4-24.89 117-65.11 157.23-40.24 40.23-95.84 65.11-157.23 65.11-61.4 0-117-24.88-157.23-65.11s-65.11-95.83-65.11-157.23c0-61.39 24.88-116.99 65.11-157.23 40.23-40.22 95.83-65.11 157.23-65.11 61.39 0 116.99 24.89 157.23 65.11z" fill-rule="nonzero"/></svg>', Vc = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256c0-70.67-28.66-134.68-74.98-181.02C390.69 28.66 326.68 0 256 0S121.31 28.66 74.98 74.98C28.66 121.32 0 185.33 0 256c0 70.68 28.66 134.69 74.98 181.02C121.31 483.34 185.32 512 256 512c70.67 0 134.69-28.66 181.02-74.98C483.34 390.69 512 326.68 512 256zm-160.23-21.5h-43.38v-67.93c0-7.63-6.27-13.9-13.91-13.9H217.5c-7.62 0-13.9 6.25-13.9 13.9v67.92h-43.41c-16.71 0-25.11 19.9-14.05 31.96l96.01 112.05c7.54 9.12 21.31 9.12 29.04.37l94.96-112.8c10.83-12.43 1.66-31.55-14.38-31.57z"/></svg>', Fc = '<svg clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0 70.67-28.66 134.68-74.98 181.02-46.33 46.32-110.34 74.98-181.02 74.98s-134.69-28.66-181.02-74.98c-46.32-46.34-74.98-110.35-74.98-181.02 0-70.68 28.66-134.69 74.98-181.02 46.33-46.32 110.34-74.98 181.02-74.98 70.67 0 134.69 28.66 181.02 74.98 46.32 46.33 74.98 110.34 74.98 181.02zm-160.23 21.5h-43.38v67.93c0 7.63-6.27 13.9-13.91 13.9h-76.98c-7.62 0-13.9-6.25-13.9-13.9v-67.92h-43.41c-16.71 0-25.11-19.9-14.05-31.96l96.01-112.05c7.54-9.12 21.31-9.12 29.04-0.37l94.96 112.8c10.83 12.43 1.66 31.55-14.38 31.57z"/></svg>', Wc = '<svg width="800px" height="800px" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">  <defs>   <clipPath id="clipPath1">    <path d="m6.1885 15.281v-9.0209h3.1721q1.0764 0 1.6765 0.65299 0.63822 0.71345 0.63822 1.7171 0 0.58043-0.22862 1.0158-0.21909 0.42323-0.743 0.84646 1.1812 0.87065 1.1812 2.1887 0 0.53206-0.19051 1.0762-0.19051 0.53206-0.51439 0.87065-0.60964 0.65299-1.7908 0.65299zm1.467-7.4731v2.0315h1.5813q1.0383 0 1.0383-1.0158 0-1.0158-1.0383-1.0158zm0 3.5793v2.3459h1.7432q1.0859 0 1.0859-1.1609 0-1.185-1.0859-1.185zm9.6876-5.1271h1.467v6.1066q0 1.4874-0.69538 2.2854-0.80016 0.91902-2.1242 0.91902t-2.1242-0.91902q-0.69538-0.79809-0.69538-2.2854v-6.1066h1.4574v6.1066q0 1.6083 1.3622 1.6083 1.3526 0 1.3526-1.6083zm6.2108 5.6834v3.3375h-1.467v-3.3375l-2.3528-5.6834h1.6289l1.4479 3.9784 1.3622-3.9784h1.6384z" display="none" stroke-width=".041213" style="white-space:pre" aria-label="BUY"/>    <path class="powerclip" d="m-5-5h42v42.001h-42zm11.189 20.281h3.2006q1.1812 0 1.7908-0.65299 0.32387-0.33859 0.51439-0.87065 0.19051-0.54416 0.19051-1.0762 0-1.3181-1.1812-2.1887 0.52391-0.42323 0.743-0.84646 0.22862-0.43532 0.22862-1.0158 0-1.0037-0.63822-1.7171-0.60012-0.65299-1.6765-0.65299h-3.1721zm1.467-7.4731v2.0315h1.5813q1.0383 0 1.0383-1.0158 0-1.0158-1.0383-1.0158zm0 3.5793v2.3459h1.7432q1.0859 0 1.0859-1.1609 0-1.185-1.0859-1.185zm9.6876-5.1271v6.1066q0 1.6083-1.3526 1.6083-1.3622 0-1.3622-1.6083v-6.1066h-1.4574v6.1066q0 1.4874 0.69538 2.2854 0.80016 0.91902 2.1242 0.91902t2.1242-0.91902q0.69538-0.79809 0.69538-2.2854v-6.1066zm6.2108 5.6834 2.2576-5.6834h-1.6384l-1.3622 3.9784-1.4479-3.9784h-1.6289l2.3528 5.6834v3.3375h1.467z" stroke-width=".041213" style="white-space:pre"/>   </clipPath>  </defs>  <g clip-path="url(#clipPath1)" fill="none" fill-rule="evenodd">   <g id="Icon-Set" transform="translate(-360 -255)" fill="#000">    <path d="m386.67 255h-21.334c-2.945 0-5.333 2.371-5.333 5.297v12.33c0 2.924 2.055 4.813 5 4.813h6.639l4.361 9.561 4.361-9.561h6.639c2.945 0 5-1.889 5-4.813v-12.33c0-2.926-2.388-5.297-5.333-5.297z"/>   </g>  </g> </svg>', Gc = '<svg width="800px" height="800px" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">  <defs>   <clipPath id="clipPath4">    <path d="m10.026 8.6238h-1.2531q-0.06962-1.4148-1.3576-1.4148-0.51344 0-0.81803 0.30231-0.30458 0.30231-0.30458 0.81019 0 0.49579 0.25237 0.74972 0.26107 0.24185 0.97467 0.43532l1.0182 0.26603q0.90505 0.24185 1.3054 0.83437 0.40901 0.59252 0.40901 1.6566 0 1.3785-0.7049 2.1524-0.69619 0.77391-1.958 0.77391-1.2444 0-1.9406-0.76182-0.68749-0.77391-0.74841-2.225h1.2967q0.03481 0.72554 0.40901 1.1125t1.053 0.38696q0.60917 0 0.95727-0.32649 0.3568-0.32649 0.3568-0.89483 0-0.54416-0.27848-0.83437-0.27848-0.30231-0.94856-0.4716l-0.90505-0.25394q-0.99208-0.26603-1.4098-0.81019-0.41772-0.55625-0.41772-1.6083 0-1.3181 0.64398-2.0436 0.65268-0.73763 1.8188-0.73763 1.4185 0 2.0886 1.0278 0.46123 0.71345 0.46123 1.8743zm2.5672 2.3822v2.3459h3.5245v1.5478h-4.8559v-9.0209h4.6993v1.5478h-3.3678v2.0315h3.1155v1.5478zm5.9612-5.1271v7.4731h3.1068v1.5478h-4.4469v-9.0209zm5.439 0v7.4731h3.1068v1.5478h-4.4469v-9.0209z" display="none" stroke-width=".039392" style="white-space:pre" aria-label="SELL"/>    <path class="powerclip" d="m-5-5h42v42.001h-42zm15.026 13.624q0-1.1609-0.46123-1.8743-0.67009-1.0278-2.0886-1.0278-1.1661 0-1.8188 0.73763-0.64398 0.72554-0.64398 2.0436 0 1.052 0.41772 1.6083 0.41772 0.54416 1.4098 0.81019l0.90505 0.25394q0.67009 0.16929 0.94856 0.4716 0.27848 0.29022 0.27848 0.83437 0 0.56834-0.3568 0.89483-0.3481 0.32649-0.95727 0.32649-0.67879 0-1.053-0.38696-0.3742-0.38695-0.40901-1.1125h-1.2967q0.060917 1.4511 0.74841 2.225 0.69619 0.76182 1.9406 0.76182 1.2619 0 1.958-0.77391 0.7049-0.77391 0.7049-2.1524 0-1.0641-0.40901-1.6566-0.40031-0.59252-1.3054-0.83437l-1.0182-0.26603q-0.7136-0.19348-0.97467-0.43532-0.25237-0.25394-0.25237-0.74972 0-0.50788 0.30458-0.81019t0.81803-0.30231q1.288 0 1.3576 1.4148zm2.5672 2.3822h3.1155v-1.5478h-3.1155v-2.0315h3.3678v-1.5478h-4.6993v9.0209h4.8559v-1.5478h-3.5245zm5.9612-5.1271h-1.3402v9.0209h4.4469v-1.5478h-3.1068zm5.439 0h-1.3402v9.0209h4.4469v-1.5478h-3.1068z" stroke-width=".039392" style="white-space:pre"/>   </clipPath>  </defs>  <path d="m26.667 0h-21.334c-2.945 0-5.333 2.371-5.333 5.297v12.33c0 2.924 2.055 4.813 5 4.813h6.639l4.361 9.561 4.361-9.561h6.639c2.945 0 5-1.889 5-4.813v-12.33c0-2.926-2.388-5.297-5.333-5.297z" clip-path="url(#clipPath4)" fill-rule="evenodd"/> </svg>', qc = '<svg width="493px" height="512px" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" version="1.1" viewBox="0 0 493 511.77" xmlns="http://www.w3.org/2000/svg"><path d="m33.11 458.2 104.5-79.1c3.09-3 7.08-4.47 11.08-4.45l302.6-0.08c2.67 0 5.09-1.08 6.78-2.77 1.74-1.81 2.84-4.24 2.84-6.87v-323.2c0-2.59-1.12-5-2.86-6.74-1.78-1.78-4.2-2.9-6.76-2.9h-409.56c-2.54 0-4.94 1.14-6.72 2.92s-2.92 4.18-2.92 6.72c0 793.72 1.02 39.329 1.02 416.47zm90.6-229.77c10.9 0 19.74 8.85 19.74 19.74s-8.84 19.73-19.74 19.73c-10.89 0-19.73-8.84-19.73-19.73s8.84-19.74 19.73-19.74zm0-101.14c10.9 0 19.74 8.85 19.74 19.74s-8.84 19.74-19.74 19.74c-10.89 0-19.73-8.85-19.73-19.74s8.84-19.74 19.73-19.74zm61.72 138.89c-9.95 0-18.02-8.07-18.02-18.01 0-9.95 8.07-18.02 18.02-18.02h185.56c9.95 0 18.01 8.07 18.01 18.02 0 9.94-8.06 18.01-18.01 18.01zm0-101.13c-9.95 0-18.02-8.07-18.02-18.02 0-9.94 8.07-18.01 18.02-18.01h185.56c9.95 0 18.01 8.07 18.01 18.01 0 9.95-8.06 18.02-18.01 18.02zm-30.38 241.61-125.97 99.69c-2.96 3.32-7.24 5.42-12.01 5.42-8.85 0-17.07-7.1228-17.07-15.963v-454.08c0-11.4 4.77-21.88 12.31-29.42s18.02-12.31 29.42-12.31h409.56c11.4 0 21.9 4.74 29.45 12.29 7.5 7.51 12.26 17.96 12.26 29.44v323.2c0 11.48-4.7 21.95-12.24 29.49-7.61 7.54-18.05 12.24-29.47 12.24z" fill-rule="nonzero"/></svg>', Yc = '<svg width="800px" height="800px" fill="none" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.746 2.7281c-5.1207-2.0689-10.949 0.40512-13.018 5.5258-2.0689 5.1207 0.40512 10.949 5.5258 13.018 5.1207 2.0689 10.949-0.40508 13.018-5.5258 2.0689-5.1207-0.40508-10.949-5.5258-13.018zm-1.3378 8.3035-1.2703-0.51325c-0.21854-0.08829-0.32785-0.13246-0.3683-0.22775-0.04045-0.09529 0.0037-0.20461 0.09201-0.42314l1.6595-4.1073c0.33362-0.82575 0.50047-1.2387 0.33474-1.3523-0.16582-0.11359-0.49058 0.19103-1.1403 0.8003l-4.7426 4.4469c-1.0274 0.96338-1.541 1.445-1.4405 1.9835 0.10054 0.53837 0.75347 0.80216 2.0594 1.3298l1.2703 0.51325c0.21854 0.08829 0.32785 0.13246 0.3683 0.22775 0.04045 0.09529-0.0037 0.20461-0.09201 0.42314l-1.6595 4.1073c-0.33365 0.82582-0.50047 1.2387-0.33475 1.3523 0.16582 0.1136 0.49059-0.19104 1.1403-0.80025l4.7425-4.4469c1.0275-0.96346 1.5411-1.4451 1.4406-1.9836-0.10057-0.53838-0.75352-0.80218-2.0594-1.3298z" clip-rule="evenodd" fill-rule="evenodd"/></svg>', jc = '<svg enable-background="new 0 0 100 100" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">  <g>   <rect transform="scale(-1)" x="-15" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>   <rect transform="scale(-1)" x="-36.25" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" begin="0.1s" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>   <rect transform="scale(-1)" x="-57.5" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" begin="0.3s" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>   <rect transform="scale(-1)" x="-78.75" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" begin="0.5s" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>   <rect transform="scale(-1)" x="-100" y="-100" width="15" height="100">    <animate attributeName="height" attributeType="XML" begin="0.1s" dur="1s" repeatCount="indefinite" values="30; 100; 30"/>   </rect>  </g> </svg>', Xc = '<svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">   <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">      <animateTransform         attributeName="transform"         attributeType="XML"         type="rotate"         dur="3s"         from="0 50 50"         to="360 50 50"         repeatCount="indefinite" />  </path> <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5  L82,35.7z">      <animateTransform         attributeName="transform"         attributeType="XML"         type="rotate"         dur="2s"         from="0 50 50"         to="360 50 50"         repeatCount="indefinite" />  </path>   <path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">      <animateTransform         attributeName="transform"         attributeType="XML"         type="rotate"         dur="1s"         from="0 50 50"         to="360 50 50"         repeatCount="indefinite" />  </path></svg>', We = 300, Xt = 400, Kc = `${Xt}px`, No = `${We}px`, Do = "100%", Io = "100%", Fe = 30, zs = 35, vn = 25, Ro = 25, Vs = vn + Ro, Fs = 60, bt = "normal", xt = 12, ys = "normal", Ct = "Avenir, Helvetica, Arial, sans-serif", wn = "#141414", bn = "#333", xn = "#cccccc", ni = "#888888", Mt = "#cccccc", ko = "25px", Zc = "position: relative;", $ = {
  COLOUR_BG: wn,
  COLOUR_BORDER: bn,
  COLOUR_TXT: xn,
  COLOUR_ICON: ni,
  COLOUR_ICONHOVER: Mt,
  BORDER_THICKNESS: 0,
  FONTWEIGHT: bt,
  FONTSIZE: xt,
  FONTSTYLE: ys,
  FONTFAMILY: Ct,
  FONT: `${ys} ${xt}px ${bt} ${Ct}`,
  FONTSTRING: `font-style: ${ys}; font-size: ${xt}px; font-weight: ${bt}; font-family: ${Ct};`
}, Ae = {
  fontSize: xt,
  fontWeight: bt,
  fontFamily: Ct,
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 2,
  paddingBottom: 2,
  borderWidth: 1,
  txtCol: "#000000",
  bakCol: "#cccccc",
  stroke: "#ffffff",
  fill: "#888888"
}, Ze = {
  COLOUR_ICON: ni,
  COLOUR_ICONHOVER: Mt,
  ICONSIZE: ko
}, Tt = {
  COLOUR_ICON: ni,
  COLOUR_ICONHOVER: Mt,
  ICONSIZE: ko
}, vs = {
  COLOUR_BG: wn,
  COLOUR_BORDER: bn,
  COLOUR_TXT: xn
}, Xe = {
  COLOUR_BG: wn,
  COLOUR_BORDER: bn,
  COLOUR_TXT: xn,
  SHADOW: "rgb(0,0,0) 0px 20px 30px -10px",
  CONTENT: "padding: 1em",
  TITLE: "padding: 2px 1em 5px; background: #333; white-space: nowrap;"
}, Qc = {
  FILL: Mt + "88"
}, te = {
  CANDLE_SOLID: "candle_solid",
  CANDLE_HOLLOW: "candle_hollow",
  CANDLE_UP_HOLLOW: "candle_up_hollow",
  CANDLE_DOWN_HOLLOW: "candle_down_hollow",
  OHLC: "ohlc",
  AREA: "area",
  LINE: "line"
}, Ti = {
  COLOUR_CANDLE_UP: "#00F04088",
  COLOUR_CANDLE_DN: "#F0004088",
  COLOUR_WICK_UP: "#0F4",
  COLOUR_WICK_DN: "#F04"
}, Ii = {
  COLOUR_VOLUME_UP: "#00F04044",
  COLOUR_VOLUME_DN: "#F0004044",
  ONCHART_VOLUME_HEIGHT: 15
}, Jc = 1.75, Pr = bt, Ri = xt, ki = Ct, Ie = {
  COLOUR_TICK: "#888",
  COLOUR_LABEL: "888",
  COLOUR_CURSOR: "#000",
  COLOUR_CURSOR_BG: "#CCC",
  FONTFAMILY: ki,
  FONTSIZE: Ri,
  FONTWEIGHT: Pr,
  FONT_LABEL: `${Pr} ${Ri}px ${ki}`,
  FONT_LABEL_BOLD: `bold ${Ri}px ${ki}`
}, Mr = bt, Lr = xt, Ar = Ct, rt = {
  COLOUR_TICK: "#888",
  COLOUR_LABEL: "888",
  COLOUR_CURSOR: "#000",
  COLOUR_CURSOR_BG: "#CCC",
  FONTFAMILY: Ar,
  FONTSIZE: Lr,
  FONTWEIGHT: Mr,
  FONT_LABEL: `${Mr} ${Lr}px ${Ar}`,
  FONT_LABEL_BOLD: `bold ${Ri}px ${ki}`
}, _o = {
  COLOUR_GRID: "#222"
}, eu = {
  width: 1,
  stroke: "#ccc",
  dash: [1, 1]
}, ws = {
  text: $.FONTSTRING,
  font: $.FONT,
  colour: $.COLOUR_TXT
}, Si = {
  ACTIVE: "#888888C0",
  IDLE: "#FFFFFF00",
  LINE: $.COLOUR_BORDER,
  STYLE: "1px solid"
}, tu = {
  FONTSIZE: 50,
  FONTWEIGHT: "bold",
  FONTFAMILY: $.FONTFAMILY,
  COLOUR: "#181818",
  IMGWIDTH: "200",
  IMGHEIGHT: "200"
}, iu = {
  passive: {
    stroke: "#000",
    fill: "#ccc",
    width: 1,
    radius: 6
  },
  hover: {
    stroke: "#800",
    fill: "#fff",
    width: 1,
    radius: 6
  },
  active: {
    stroke: "#800",
    fill: "#fff",
    width: 1,
    radius: 6
  }
}, bs = { arrowDown: Hc, arrowUp: Bc, arrowDownRound: Uc, arrowUpRound: zc, arrowDownRoundSolid: Vc, arrowUpRoundSolid: Fc, buySolid: Wc, sellSolid: Gc }, Or = { noteSolid: qc, lightning: Yc }, Zi = {
  candle: {
    Type: te.CANDLE_SOLID,
    UpBodyColour: Ti.COLOUR_CANDLE_UP,
    UpWickColour: Ti.COLOUR_WICK_UP,
    DnBodyColour: Ti.COLOUR_CANDLE_DN,
    DnWickColour: Ti.COLOUR_WICK_DN
  },
  volume: {
    Height: Ii.ONCHART_VOLUME_HEIGHT,
    UpColour: Ii.COLOUR_VOLUME_UP,
    DnColour: Ii.COLOUR_VOLUME_DN
  },
  xAxis: {
    colourTick: rt.COLOUR_TICK,
    colourLabel: rt.COLOUR_LABEL,
    colourCursor: rt.COLOUR_CURSOR,
    colourCursorBG: rt.COLOUR_CURSOR_BG,
    fontFamily: rt.FONTFAMILY,
    fontSize: rt.FONTSIZE,
    fontWeight: rt.FONTWEIGHT,
    line: "#656565",
    slider: "#555555",
    handle: "#55555588",
    icon: ni,
    iconHover: Mt
  },
  yAxis: {
    colourTick: Ie.COLOUR_TICK,
    colourLabel: Ie.COLOUR_LABEL,
    colourCursor: Ie.COLOUR_CURSOR,
    colourCursorBG: Ie.COLOUR_CURSOR_BG,
    fontFamily: Ie.FONTFAMILY,
    fontSize: Ie.FONTSIZE,
    fontWeight: Ie.FONTWEIGHT,
    line: "#656565"
  },
  chart: {
    Background: $.COLOUR_BG,
    BorderColour: $.COLOUR_BORDER,
    BorderThickness: $.BORDER_THICKNESS,
    TextColour: $.COLOUR_TXT,
    FontWeight: $.FONTWEIGHT,
    FontSize: $.FONTSIZE,
    FontStyle: $.FONTSTYLE,
    FontFamily: $.FONTFAMILY,
    Font: $.FONT,
    FontString: $.FONTSTRING,
    GridColour: _o.COLOUR_GRID
  },
  primaryPane: {
    separator: "#666"
  },
  secondaryPane: {
    separator: "#666"
  },
  tools: {
    location: !1
  },
  utils: {
    location: !1
  },
  time: {
    navigation: !1,
    font: ws.font,
    colour: "#96a9db",
    handleColour: "#586ea6"
  },
  legend: {
    font: ws.font,
    colour: ws.colour,
    controls: !0,
    controlsColour: "#aaa",
    controlsOver: "#fff",
    controlsW: 18,
    controlsH: 18
  },
  icon: {
    colour: ni,
    hover: Mt
  },
  divider: {
    active: Si.ACTIVE,
    idle: Si.IDLE,
    line: Si.LINE,
    style: Si.STYLE
  },
  window: Xe,
  watermark: tu,
  trades: {
    iconBuy: bs.arrowUp,
    iconSell: bs.arrowDown,
    iconHeight: 30,
    iconWidth: 30,
    iconMinDim: 10,
    buyColour: "#0f0",
    sellColour: "#f00",
    defaultIcons: bs,
    offset: 10
  },
  events: {
    iconEvent: Or.lightning,
    iconHeight: 30,
    iconWidth: 30,
    iconMinDim: 10,
    iconColour: "#ccc",
    defaultIcons: Or,
    offset: 10
  },
  drawing: {
    node: iu
  }
}, su = `
<style id="txc_CSSVars">
  --txc-background: #141414:
  --txc-border-color: #888;
  --txc-time-scrollbar-color: #888;
  --txc-time-handle-color: #888;
  --txc-time-slider-color: #888;
  --txc-time-cursor-fore: #222;
  --txc-time-cursor-back: #ccc;
  --txc-time-icon-color: #888;
  --txc-time-icon-hover-color: #888;
</style>`, nu = `
<style id="txc_globalCSS">
  tradex-chart {
    content-visibility: auto;
    display: flex;
    width: var(--txc-width, 100%);
    height: var(--txc-height, 100%);
    min-width: var(--txc-min-width, ${Kc});
    min-height: var(--txc-min-height, ${No});
    max-width: var(--txc-max-width, ${Do});
    max-height: var(--txc-max-height, ${Io});
    overflow: hidden;
    background: var(--txc-background, ${$.COLOUR_BG});
    font: var(--txc-font, ${$.FONT});
  }
  .tradeXchart .tradeXtime .navigation { 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 2px;
  }
  .tradeXchart .tradeXtime .navigation .icon { 
    flex-basis: 20px;
   }
  .tradeXchart .tradeXtime .navigation #tScrollBar { 
    height: 20px; 
    border: 1px solid; 
    border-radius: 3px; 
    flex-basis: 100%;
    overflow: hidden;
  }
  .tradeXchart .tradeXtime .navigation #tScrollBar .handle { 
    height: 18px; 
    border-radius: 2px; 
    margin: 1px;
  }

  tradex-grid {
    position: absolute;
  }
</style>
`, xs = "Empty", $o = {
  id: void 0,
  title: xs,
  symbol: xs,
  width: Do,
  height: Io,
  utils: {},
  tools: {},
  timeFrame: "1m",
  range: {
    startTS: void 0
  },
  theme: Zi,
  watermark: {
    display: !1,
    text: xs
  },
  trades: {
    display: !0,
    displayInfo: !0
  },
  precision: jr,
  isCrypto: !0,
  logs: !1,
  infos: !0,
  warnings: !0,
  highLow: !1,
  errors: !0,
  stream: {},
  maxCandleUpdate: 250,
  talib: void 0,
  wasm: void 0,
  state: {},
  callbacks: {}
};
class Ho {
  #e;
  #t;
  #i;
  constructor(e) {
    this.#t = e, this.#e = this.#t.core, this.#i = this.#e.Chart;
  }
  get core() {
    return this.#e;
  }
  get chart() {
    return this.#i;
  }
  get parent() {
    return this.#t;
  }
  get theme() {
    return this.#e.theme;
  }
  get width() {
    return this.#i.width;
  }
  get height() {
    return this.#i.height;
  }
  get data() {
    return this.#i.data;
  }
  get range() {
    return this.#i.range;
  }
  get yDigits() {
    return this.#i.yAxisDigits;
  }
}
class _i extends Ho {
  #e = 4;
  #t;
  #i = !0;
  constructor(e) {
    super(e);
  }
  get range() {
    return this.parent.range;
  }
  get width() {
    return this.core.MainPane.width;
  }
  get interval() {
    return this.range.interval;
  }
  get intervalStr() {
    return this.range.intervalStr;
  }
  get timeStart() {
    return this.range.timeStart;
  }
  get timeFinish() {
    return this.range.timeFinish;
  }
  get rangeDuration() {
    return this.range.rangeDuration;
  }
  get rangeLength() {
    return this.range.Length;
  }
  get indexStart() {
    return this.range.indexStart;
  }
  get indexEnd() {
    return this.range.indexEnd;
  }
  get timeMax() {
    return this.range.timeMax;
  }
  get timeMin() {
    return this.range.timeMin;
  }
  get candleW() {
    return this.width / this.range.Length;
  }
  get candlesOnLayer() {
    return ye(this.core.Chart.layerWidth / this.candleW);
  }
  get xAxisRatio() {
    return this.width / this.range.rangeDuration;
  }
  set xAxisTicks(e) {
    this.#e = T(e) ? e : 0;
  }
  get xAxisTicks() {
    return this.#e;
  }
  get xAxisGrads() {
    return this.#t;
  }
  get scrollOffsetPx() {
    return this.core.scrollPos % this.candleW;
  }
  get bufferPx() {
    return this.core.bufferPx;
  }
  xPos(e) {
    return ye(this.range.rangeIndex(e) * this.candleW + this.candleW * 0.5);
  }
  t2Index(e) {
    return this.range.rangeIndex(e);
  }
  t2Pixel(e) {
    return this.xPos(e);
  }
  pixel2T(e) {
    let i = this.pixel2Index(e);
    return this.range.value(i)[0];
  }
  pixel2Index(e) {
    e -= this.candleW / 2;
    let i = this.range.indexStart, s = ye(e / this.candleW);
    return i + s;
  }
  pixelOHLCV(e) {
    let i = this.pixel2Index(e);
    return this.range.value(i);
  }
  xPosSnap2CandlePos(e) {
    let i = e % this.candleW, s = i ? this.candleW / 2 : 0;
    return ye(e - i + s);
  }
  xPos2Time(e) {
    return this.pixel2T(e);
  }
  xPos2Index(e) {
    return this.pixel2Index(e);
  }
  xPosOHLCV(e) {
    return this.pixelOHLCV(e);
  }
  initXAxisGrads() {
    this.#t = this.calcXAxisGrads();
  }
  doCalcXAxisGrads(e) {
    this.#t = this.calcXAxisGrads(e);
  }
  calcXAxisGrads(e = this.range.snapshot()) {
    const i = {
      entries: {},
      values: [],
      major: [],
      minor: []
    }, s = ln(e.rangeDuration);
    i.units = s;
    for (let f in s)
      if (s[f] > 0) {
        i.units = [f, f], i.timeSpan = `${s[f]} ${f}`;
        break;
      }
    const n = e.interval, { xStep: r, rank: a } = this.xStep(e), l = this.pixel2T(this.width) + r;
    let h = e.timeMin - e.timeMin % r - r, p = h;
    for (; h < l; ) {
      let f = Oi(h, "years"), g = Oi(h, "months"), C = Oi(h, "days");
      !(f in i.entries) && f >= p ? i.entries[f] = [this.dateTimeValue(f, n, a), this.t2Pixel(f), f, "major"] : !(g in i.entries) && g >= p ? i.entries[g] = [this.dateTimeValue(g, n, a), this.t2Pixel(g), g, "major"] : !(C in i.entries) && C >= p && (i.entries[C] = [this.dateTimeValue(C, n, a), this.t2Pixel(C), C, "major"]), i.entries[h] = [this.dateTimeValue(h, n, a), this.t2Pixel(h), h, "minor"], h += r;
    }
    return i.values = Object.values(i.entries), i;
  }
  xStep(e) {
    let i = mc, s = this.#i ? e.interval : 1, n = Ft[0], r = ye(this.width / e.Length), a = ks[0], l = Ft.indexOf(s);
    for (; l-- >= 0 && !(r * (Ft[l] / s) >= i); )
      ;
    return n = Ft[l], a = ks[l], { xStep: n, rank: a };
  }
  dateTimeValue(e, i, s) {
    if (e / z % 1 === 0) {
      const n = dn(e);
      return n === 1 ? pn(e) === 0 ? Po(e) : So(e) : n;
    } else
      switch (s) {
        case "milliseconds":
          return Hs(e);
        case "seconds":
          return Hs(e);
        case "minutes":
          return $s(e);
        case "hours":
          return $s(e);
      }
  }
}
class Kt extends Ho {
  #e;
  #t;
  #i;
  #r = Me[0];
  #s = "automatic";
  #n = {
    automatic: {
      get max() {
        return this.range?.valueMax;
      },
      get min() {
        return this.range?.valueMin;
      },
      get mid() {
        return this.range?.valueMin + this.range?.valueDiff * 0.5;
      },
      get diff() {
        return this.range?.valueDiff;
      },
      get zoom() {
        return 1;
      },
      get offset() {
        return 0;
      },
      range: null
    },
    manual: {
      max: 1,
      min: 0,
      mid: 0.5,
      diff: 1,
      zoom: 1,
      offset: 0
    }
  };
  #o = 1.04;
  #a = wr;
  #c = pc;
  #l = 3;
  #h;
  #p;
  #u;
  constructor(e, i, s = Me[0], n) {
    super(e), this.#i = i, this.#t = e, this.#e = e.parent, this.yAxisType = s, n = n || this.core.range, this.setRange(n);
  }
  get chart() {
    return this.#i;
  }
  get range() {
    return this.#u;
  }
  get height() {
    return this.chart.height;
  }
  get rangeH() {
    return this.#u.diff * this.yAxisPadding;
  }
  get yAxisRatio() {
    return this.getYAxisRatio();
  }
  get yAxisPrecision() {
    return this.yAxisCalcPrecision;
  }
  set yAxisPadding(e) {
    this.#o = e;
  }
  get yAxisPadding() {
    return this.#o;
  }
  set yAxisType(e) {
    this.#r = Me.includes(e) ? e : Me[0];
  }
  get yAxisType() {
    return this.#r;
  }
  set yAxisStep(e) {
    this.#a = T(e) ? e : wr;
  }
  get yAxisStep() {
    return this.#a;
  }
  set yAxisTicks(e) {
    this.#l = T(e) ? e : 0;
  }
  get yAxisTicks() {
    return this.#l;
  }
  get yAxisGrads() {
    return this.#h;
  }
  get yAxisDigits() {
    return this.parent.digitCnt;
  }
  get step() {
    return this.#p;
  }
  set mode(e) {
    this.setMode(e);
  }
  get mode() {
    return this.#s;
  }
  set offset(e) {
    this.setOffset(e);
  }
  get offset() {
    return this.#u.offset;
  }
  set zoom(e) {
    this.setZoom(e);
  }
  get zoom() {
    return this.#u.zoom;
  }
  getYAxisRatio() {
    return this.height / this.#u.diff;
  }
  yAxisRangeBounds() {
  }
  yAxisLog() {
  }
  yAxisCntDigits(e) {
    return Ai(e);
  }
  yAxisCalcPrecision() {
    let e = mo(this.#u.max);
    return this.yDigits - e;
  }
  yAxisCursor() {
  }
  yPos(e) {
    switch (this.yAxisType) {
      case "percent":
        return ye(this.p100toPixel(e));
      case "log":
        return ye(this.$2Pixel(Wh(e)));
      default:
        return ye(this.$2Pixel(e));
    }
  }
  yPos2Price(e) {
    return this.pixel2$(e);
  }
  $2Pixel(e) {
    const i = e - this.#u.min;
    return this.height - i * this.yAxisRatio;
  }
  lastYData2Pixel(e) {
    let i = e - this.core.stream.lastPriceMin;
    return this.height - i * this.yAxisRatio;
  }
  pixel2$(e) {
    let i = (this.height - e) / this.height, s = this.#u.diff * i;
    return this.#u.min + s;
  }
  p100toPixel(e) {
    let i = this.#u.max, s = this.height / (i - this.#u.min);
    return Math.floor(i - this.#u.max), (e - i) * -1 * s;
  }
  yAxisTransform() {
  }
  setMode(e) {
    if (!["automatic", "manual"].includes(e))
      return !1;
    const i = this.#n;
    return this.mode == "automatic" && e == "manual" ? (i.manual.zoom = 0, i.manual.max = this.#u.valueMax, i.manual.min = this.#u.valueMin, this.#s = e, this.core.emit("yaxis_setmode", { mode: e, axis: this })) : this.mode == "manual" && e == "automatic" && (i.manual.zoom = 0, this.#s = e, this.core.emit("yaxis_setmode", { mode: e, axis: this })), !0;
  }
  setOffset(e) {
    if (!T(e) || e == 0 || this.#s !== "manual")
      return !1;
    const i = this.#n;
    let s = this.pixel2$(e * -1), n = this.pixel2$(this.height - e), r = s - n;
    i.manual.min = n, i.manual.max = s, i.manual.mid = r / 2, i.manual.diff = r, i.manual.zoom = 0;
  }
  setZoom(e) {
    if (!T(e) || this.#s !== "manual")
      return !1;
    const i = this.#n;
    let s = i.manual.min, n = i.manual.max;
    const r = n - s, a = r * 0.01, l = e * a;
    s -= l, n += l, !(n < s || s <= 1 / 0 * -1 || n >= 1 / 0) && (i.manual.max = n, i.manual.min = s, i.manual.mid = r / 2, i.manual.diff = r, i.manual.zoom = l, this.calcGradations());
  }
  setRange(e) {
    this.#n.automatic.range = e, this.#u = new Proxy(e, {
      get: (i, s) => {
        const n = this.#s, r = this.#n;
        switch (s) {
          case "max":
            return r[n][s];
          case "min":
            return r[n][s];
          case "mid":
            return r[n][s];
          case "diff":
            return r[n][s];
          case "zoom":
            return r[n][s];
          case "offset":
            return r[n][s];
          default:
            return i[s];
        }
      }
    });
  }
  calcGradations() {
    let e, i, s;
    switch (this.yAxisType) {
      case "percent":
        e = this.#u.max > -10 ? this.#u.max : 110, i = this.#u.min > -10 ? this.#u.min : -10, s = this.#u.offset, this.#h = this.gradations(e + s, i + s);
        break;
      default:
        e = this.#u.max > 0 ? this.#u.max : 1, i = this.#u.min > 0 ? this.#u.min : 0, s = this.#u.offset, this.#h = this.gradations(e + s, i + s);
        break;
    }
    return this.#h;
  }
  gradations(e, i, s = !0) {
    let n;
    const r = [];
    let a = this.niceNumber();
    var l = Math.ceil(i / a) * a, h = Math.floor(e / a) * a;
    let p = this.height, f = (h - l) / a;
    this.height / f;
    let g = Ai(a), C;
    this.#p = g;
    for (var S = l; S <= h; S += a)
      n = Ai(S), C = Is(S, g.decimals), p = this.yPos(C), r.push([C, p, n]);
    return r;
  }
  niceNumber(e = this.rangeH) {
    const i = e / (this.height / (this.core.theme.yAxis.fontSize * Jc));
    let s = Math.pow(10, Math.ceil(Math.log10(i)));
    return i < 0.25 * s ? s = 0.25 * s : i < 0.5 * s && (s = 0.5 * s), s;
  }
}
function Cn(o, e) {
  return Math.round(o.measureText(e).width);
}
function At(o = Ae.fontSize, e = Ae.fontWeight, i = Ae.fontFamily) {
  return `${e} ${o}px ${i}`;
}
function Qi(o, e, i) {
  o.font = At(i?.fontSize, i?.fontWeight, i?.fontFamily);
  const s = Cn(o, e), n = i?.paddingLeft || 0, r = i?.paddingRight || 0, a = i?.borderWidth || 0;
  return n + r + s + a * 2;
}
function Ji(o) {
  const e = o?.paddingTop || 0, i = o?.paddingBottom || 0, s = o?.borderWidth || 0, n = o?.fontSize || 0;
  return e + i + n + s * 2;
}
function Bo(o, e, i, s) {
  o.fillStyle = s?.colour, o.font = At(s?.fontSize, s?.fontWeight, s?.fontFamily), o.textAlign = s?.textAlign || "start", o.textBaseline = s?.textBaseLine || "alphabetic", o.direction = s?.direction || "inherit", o.lineWidth = s?.width, o.strokeStyle = s?.border, s?.stroke ? o.strokeText(s?.text, e, i, s?.max) : o.fillText(s?.text, e, i, s?.max);
}
function Lt(o, e, i, s, n) {
  o.save(), o.font = At(n?.fontSize, n?.fontWeight, n?.fontFamily), o.textBaseline = "top", o.fillStyle = n?.bakCol || Ae.bakCol;
  let r = n?.width || Qi(o, e, n), a = n?.height || Ji(n);
  o.fillRect(i, s, r, a), o.fillStyle = n?.txtCol || Ae.txtCol, i = i + n?.paddingLeft, s = s + n?.paddingTop, o.fillText(`${e}`, i, s), o.restore();
}
function Uo(o, e, i, s, n, r) {
  o.lineWidth = r?.width || Ae.borderWidth, o.strokeStyle = r?.border || Ae.stroke, o.beginPath(), o.rect(e, i, s, n), o.stroke();
}
function Tn(o, e, i, s, n, r) {
  o.fillStyle = r?.fill || Ae.fill, o.fillRect(e, i, s, n);
}
function ru(o, e, i, s, n, r) {
  b(r.fill) && Tn(o, e, i, s, n, r), T(r.width) && r.width > 0 && Uo(o, e, i, s, n, r);
}
function zo(o, e, i, s, n, r, a) {
  o.lineWidth = a?.width || Ae.borderWidth, o.strokeStyle = a?.border || Ae.stroke, Fo(o, e, i, s, n, r), o.stroke();
}
function Vo(o, e, i, s, n, r, a) {
  o.fillStyle = a?.fill || Ae.fill, Fo(o, e, i, s, n, r), o.fill();
}
function Fo(o, e, i, s, n, r) {
  o.beginPath(), o.moveTo(e + r, i), o.arcTo(e + s, i, e + s, i + n, r), o.arcTo(e + s, i + n, e, i + n, r), o.arcTo(e, i + n, e, i, r), o.arcTo(e, i, e + s, i, r), o.closePath();
}
function ou(o, e, i, s, n, r, a) {
  b(a.fill) && Vo(o, e, i, s, n, r, a?.fill), T(a.width) && a.width > 0 && zo(o, e, i, s, n, r, a?.border, a?.width);
}
function $i(o, e = [], i = []) {
  let [s, n, r, a] = e;
  const l = o.createLinearGradient(s, n, r, a);
  let h = 0, p = 1 / (i.length - 1);
  for (let f of i)
    l.addColorStop(h, f), h += p;
  o.fillStyle = l;
}
function ut(o, e, i, s) {
  b(e) && (o.fillStyle = e, o.fill()), T(s) && s > 0 && (o.lineWidth = s, o.strokeStyle = i || Ae.stroke, o.stroke());
}
function Wo(o, e, i, s, n, r, a) {
  if (!(n < 3)) {
    var l = Math.PI * 2 / n;
    o.beginPath(), o.translate(e, i), o.rotate(r * Math.PI / 180), o.moveTo(s, 0);
    for (var h = 1; h < n; h++)
      o.lineTo(s * Math.cos(l * h), s * Math.sin(l * h));
    o.closePath(), ut(o, a?.fill, a?.stroke, a?.width);
  }
}
function au(o, e, i) {
  if (e.length > 0) {
    o.beginPath();
    var s = e[0];
    o.moveTo(s.x, s.y);
    for (var n = 1; n < e.length; ++n)
      s = e[n], o.lineTo(s.x, s.y);
    o.closePath(), ut(o, i?.fill, i?.stroke, i?.width);
  }
}
function lu(o, e, i, s, n) {
  Wo(o, e, i, s, 3, n?.rotate || 0, n), ut(o, n?.fill, n?.stroke, n?.width);
}
function hu(o, e, i, s, n, r) {
  o.beginPath(), o.moveTo(e - s / 2, i), o.lineTo(e, i - n / 2), o.lineTo(e + s / 2, i), o.lineTo(e, i + n / 2), o.closePath(), ut(o, r?.fill, r?.stroke, r?.width);
}
function Ot(o, e, i, s = () => {
}) {
  o.save();
  const n = i.width || 1;
  o.lineWidth = n, n % 2 && o.translate(0.5, 0.5), o.strokeStyle = i.stroke, P(i.dash) && o.setLineDash(i.dash), o.beginPath();
  let r = !0;
  e.forEach((a) => {
    a && a.x !== null && (r ? (o.moveTo(a.x, a.y), r = !1) : o.lineTo(a.x, a.y));
  }), O(s) && s(), o.restore();
}
function cu(o, e, i) {
  Ot(o, e, i, () => {
    o.stroke();
  });
}
function uu(o, e, i, s) {
  Ot(o, e, i, () => {
    o.closePath();
  }), ut(o, s?.fill, s?.stroke, s?.size);
}
function du(o, e, i) {
  o.beginPath(), o.moveTo(e[0].x, e[0].y);
  for (var s = i ?? 1, n = 0; n < e.length - 1; n++) {
    var r = n > 0 ? e[n - 1] : e[0], a = e[n], l = e[n + 1], h = n != e.length - 2 ? e[n + 2] : l, p = a.x + (l.x - r.x) / 6 * s, f = a.y + (l.y - r.y) / 6 * s, g = l.x - (h.x - a.x) / 6 * s, C = l.y - (h.y - a.y) / 6 * s;
    o.bezierCurveTo(p, f, g, C, l.x, l.y);
  }
  o.stroke();
}
function ri(o, e, i, s, n) {
  Ot(o, [{ x: i, y: e }, { x: s, y: e }], n, () => {
    o.stroke(), o.closePath();
  });
}
function pu(o, e, i, s, n) {
  const r = [{ x: e, y: i }, { x: e, y, bottom: s }];
  Ot(o, r, n, () => {
    o.stroke(), o.closePath();
  });
}
function mu(o, e, i) {
  Ot(o, e, i, () => {
    o.stroke(), o.closePath();
  });
}
function fu(o, e, i, s, n) {
  o.beginPath(), o.arc(e, i, s, 0, Math.PI * 2), o.closePath(), ut(o, n?.fill, n?.stroke, n?.width);
}
function Sn(o, e, i, s, n, r) {
  for (let a = 0; a < i; a++)
    for (let l = 0; l < s; l++)
      l % 2 == 0 && a % 2 == 0 || l % 2 != 0 && a % 2 != 0 ? o.fillStyle = n : o.fillStyle = r, o.fillRect(l * e, a * e, e, e);
}
function gu(o) {
  return o.ownerDocument && o.ownerDocument.defaultView && o.ownerDocument.defaultView.devicePixelRatio || 2;
}
function Go(o, e, i, s, n, r, a, l, h, p) {
  o.drawImage(e, i, s, n, r, a, l, h, p);
}
function qo(o, e) {
  let i = o.naturalWidth || o.width, s = o.naturalHeight || o.height;
  return e === void 0 && (e = Yo(i, s)), e.ctx.drawImage(o, 0, 0), e;
}
const yu = {
  red: "#FF0000FF",
  green: "#00FF00FF",
  blue: "#0000FFFF",
  alpa: "#000000FF"
};
function Wt(o, e) {
  const i = qo(e), s = i.ctx;
  return s.fillStyle = yu[o], s.globalCompositeOperation = "multiply", s.fillRect(0, 0, s.canvas.width, s.canvas.height), s.globalCompositeOperation = "destination-in", s.drawImage(e, 0, 0), s.globalCompositeOperation = "source-over", i;
}
function vu(o) {
  return {
    red: Wt("red", o),
    green: Wt("green", o),
    blue: Wt("blue", o),
    alpha: Wt("alpha", o)
  };
}
function Yo(o, e) {
  const i = document.createElement("canvas");
  return i.ctx = i.getContext("2d", { willReadFrequently: !0 }), i.width = o || i.ctx.canvas.width, i.height = e || i.ctx.canvas.height, i;
}
const V = {
  createCanvas: Yo,
  imageToCanvas: qo,
  separateRGB: vu,
  getChannel: Wt,
  getPixelRatio: gu,
  fillStroke: ut,
  linearGradient: $i,
  calcTextWidth: Cn,
  createFont: At,
  getTextRectHeight: Ji,
  getTextRectWidth: Qi,
  renderImage: Go,
  renderText: Bo,
  renderTextBG: Lt,
  renderPath: Ot,
  renderPathStroke: cu,
  renderPathClosed: uu,
  renderSpline: du,
  renderLine: mu,
  renderLineHorizontal: ri,
  renderLineVertical: pu,
  renderCircle: fu,
  renderRect: ru,
  renderRectFill: Tn,
  renderRectStroke: Uo,
  renderRectRound: ou,
  renderRectRoundFill: Vo,
  renderRectRoundStroke: zo,
  renderPolygonRegular: Wo,
  renderPolygonIrregular: au,
  renderDiamond: hu,
  renderTriangle: lu,
  renderCheckerBoard: Sn
};
class W {
  static isOverlay = !0;
  #e;
  #t;
  #i = {};
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h = {
    valueMax: null,
    valueMin: null,
    indexStart: null,
    Length: null,
    rowsW: null,
    rowsH: null,
    refresh: !1,
    resize: !1
  };
  id;
  constructor(e, i = !1, s = !1, n, r, a = {}) {
    this.#t = r.core, this.#e = r, this.#i = r.core.config, this.#o = e, this.#a = e.scene, this.#c = e.hit, this.#s = i, this.#n = s, this.#l = a, this.on("global_resize", this.onResize, this);
  }
  get core() {
    return this.#t;
  }
  get parent() {
    return this.#e;
  }
  get target() {
    return this.#o;
  }
  get config() {
    return this.#i;
  }
  get params() {
    return this.#l;
  }
  get range() {
    return this.#t.range;
  }
  get state() {
    return this.#t.state;
  }
  get scene() {
    return this.#a;
  }
  get hit() {
    return this.#c;
  }
  get theme() {
    return this.#t.theme;
  }
  get chart() {
    return this.#e.parent.parent;
  }
  get chartData() {
    return this.#i.state.allData.data;
  }
  get xAxis() {
    return this.getXAxis();
  }
  get yAxis() {
    return this.getYAxis();
  }
  get overlay() {
    return this.#l.overlay;
  }
  get overlayData() {
    return this.#l.overlay.data;
  }
  get data() {
    return this.#l.overlay.data;
  }
  get stateMachine() {
    return this.#t.stateMachine;
  }
  get context() {
    return this.contextIs();
  }
  set position(e) {
    this.#o.setPosition(e[0], e[1]);
  }
  destroy() {
    this.#t.hub.expunge(this), "overlay" in this.#l && "data" in this.#l.overlay && delete this.#l.overlay.data;
  }
  on(e, i, s = this) {
    this.#t.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#t.off(e, i, s);
  }
  expunge(e = this) {
    this.#t.expunge(e);
  }
  emit(e, i) {
    this.core.emit(e, i);
  }
  onResize() {
    this.#h.resize = !0;
  }
  setSize(e, i) {
    this.#o.setSize(e, i), this.#h.refresh = !0;
  }
  setRefresh() {
    this.#h.refresh = !0;
  }
  getXAxis() {
    return this.#s instanceof _i ? this.#s : this.core.Chart.time.xAxis instanceof _i ? this.core.Chart.time.xAxis : "time" in this.#e ? this.#e.time.xAxis : !1;
  }
  getYAxis() {
    return this.#n instanceof Kt ? this.#n : this.chart.yAxis instanceof Kt ? this.chart.yAxis : "scale" in this.#e ? this.#e.scale.yAxis : !1;
  }
  contextIs() {
    return !this.#s && !this.#n ? "chart" : this.#s instanceof _i ? "timeline" : this.#n instanceof Kt ? "scale" : !1;
  }
  mustUpdate() {
    const e = this.#t.range, i = this.#h;
    return this.#t.MainPane.elRows, i.valueMax !== e.valueMax || i.valueMin !== e.valueMin || i.indexStart !== e.indexStart || i.Length !== e.Length || i.refresh || i.resize ? this.#h : !1;
  }
  updated() {
    const e = this.#t.range, i = this.#h, s = this.#t.MainPane.elRows;
    i.valueMax = e.valueMax, i.valueMin = e.valueMin, i.indexStart = e.indexStart, i.Length = e.Length, i.rowsW = s.width, i.rowsH = s.height, i.rowsW = s.width, i.rowsH = s.height, i.refresh = !1, i.resize = !1;
  }
  plot(e, i, s) {
    const n = this.scene.context, r = e;
    switch (n.save(), i) {
      case "createCanvas":
        V[i](r[0], r[1]);
        break;
      case "fillStroke":
        V[i](n, r[0], r[1], r[2]);
        break;
      case "renderLine":
        V[i](n, r, s);
        break;
      case "renderLineHorizontal":
        V[i](n, r[0], r[1], r[2], s);
        break;
      case "renderLineVertical":
        V[i](n, r[0], r[1], r[2], s);
        break;
      case "renderPath":
        V[i](n, r, s.style, s);
        break;
      case "renderPathStroke":
        V[i](n, r, s.style);
        break;
      case "renderPathClosed":
        V[i](n, r, s.style, s);
        break;
      case "renderSpline":
        V[i](n, r, s);
        break;
      case "renderRect":
        V[i](n, r[0], r[1], r[2], r[3], s);
        break;
      case "renderRectFill":
        V[i](n, r[0], r[1], r[2], r[3], s);
        break;
      case "renderRectStroke":
        V[i](n, r[0], r[1], r[2], r[3], s);
        break;
      case "renderRectRound":
        V[i](n, r[0], r[1], r[2], r[3], r[4], s);
        break;
      case "renderRectRoundFill":
        V[i](n, r[0], r[1], r[2], r[3], r[4], s);
        break;
      case "renderRectRoundStroke":
        V[i](n, r[0], r[1], r[2], r[3], r[4], s);
        break;
      case "renderPolygonRegular":
        V[i](n, r[0], r[1], r[2], r[3], r[4], s);
        break;
      case "renderPolygonIrregular":
        V[i](n, r, s);
        break;
      case "renderTriangle":
        V[i](n, r[0], r[1], r[2], s);
        break;
      case "renderDiamond":
        V[i](n, r[0], r[1], r[2], r[3], s);
        break;
      case "renderCircle":
        V[i](n, r[0], r[1], r[2], s);
        break;
      case "renderImage":
        V[i](n, s.src, r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]);
      case "renderText":
        V[i](n, r[0], r[1], s);
        break;
      case "renderTextBG":
        V[i](n, r[0], r[1], r[2], s);
        break;
    }
    n.restore();
  }
  clear() {
    this.scene.clear();
  }
}
let wu = Object.prototype.hasOwnProperty;
function bu(o, e, i = void 0) {
  const s = (r) => String.prototype.split.call(e, r).filter(Boolean).reduce((a, l) => a != null ? a[l] : a, o), n = s(/[,[\]]+?/) || s(/[,[\].]+?/);
  return n === void 0 || n === o ? i : n;
}
function xu(o, e, i) {
  if (e.length === 0)
    return;
  let s = o, n = e[e.length - 1];
  if (e.length === 1)
    return w(s) ? s[n] = i : void 0;
  for (let r = 0; r < e.length - 1; r++) {
    let a = e[r];
    (!wu.call(s, a) || !w(s[a])) && (s[a] = {}), s = s[a];
  }
  return s[n] = i;
}
function Cu(o, e) {
  let i = Object.getPrototypeOf(e);
  for (; o--; )
    i = Object.getPrototypeOf(i);
  return i;
}
function et(o, e) {
  return !w(o) || !w(e) ? e : (Object.keys(e).forEach((i) => {
    const s = o[i], n = e[i];
    Array.isArray(s) && Array.isArray(n) ? o[i] = et(s.concat([]), n) : w(s) && w(n) ? o[i] = et(Object.assign({}, s), n) : o[i] = n;
  }), o);
}
function he(o, e = !0) {
  if (o === null || typeof o != "object" || "isActiveClone" in o)
    return o;
  let i;
  o instanceof Date ? i = new o.constructor() : i = Array.isArray(o) ? [] : {};
  for (let s in o)
    Object.prototype.hasOwnProperty.call(o, s) && (o.isActiveClone = null, i[s] = he(o[s], !1), delete o.isActiveClone);
  return i;
}
function jo(o, e) {
  if (o == null)
    return String(o);
  switch (typeof o) {
    case "string":
      return '"' + o + '"';
    case "function":
      return o.toString();
    case "object":
      let i = Array(e || 1).join("	"), s = Array.isArray(o);
      return "{["[+s] + Object.keys(o).map(function(n) {
        return `
	` + i + n + ": " + jo(o[n], (e || 1) + 1);
      }).join(",") + `
` + i + "}]"[+s];
    default:
      return o.toString();
  }
}
function Xo(o, e) {
  if (w(o))
    for (let i in o)
      typeof o[i] == "object" && o[i] !== null ? Xo(o[i], e) : o.hasOwnProperty(i) && e(i, o[i]);
}
const Ko = (o, e, i) => {
  if (o.Id === e)
    return i(o);
  for (let s in o)
    o[s] !== null && typeof o[s] == "object" && (o[s] = Ko(o[s], e, i));
  return o;
};
function Tu(o, e) {
  o.split(".");
}
function En(o, e, i) {
  const [s, ...n] = e.split(".");
  return {
    ...o,
    [s]: n.length ? En(o[s], n.join("."), i) : i
  };
}
function Ws(o, e) {
  return e.split(".").reduce((s, n) => s && s[n] !== "undefined" ? s[n] : void 0, o);
}
class Su {
  constructor() {
    this.nodes = [];
  }
  get size() {
    return this.nodes.length;
  }
  get head() {
    return this.size ? this.nodes[0] : null;
  }
  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }
  insertAt(e, i) {
    const s = this.nodes[e - 1] || null, n = this.nodes[e] || null, r = { value: i, next: n, previous: s };
    s && (s.next = r), n && (n.previous = r), this.nodes.splice(e, 0, r);
  }
  insertFirst(e) {
    this.insertAt(0, e);
  }
  insertLast(e) {
    this.insertAt(this.size, e);
  }
  getAt(e) {
    return this.nodes[e];
  }
  removeAt(e) {
    const i = this.nodes[e - 1] || null, s = this.nodes[e + 1] || null;
    return i && (i.next = s), s && (s.previous = i), this.nodes.splice(e, 1);
  }
  clear() {
    this.nodes = [];
  }
  reverse() {
    this.nodes = this.nodes.reduce((e, { value: i }) => {
      const s = e[0] || null, n = { value: i, next: s, previous: null };
      return s && (s.previous = n), [n, ...e];
    }, []);
  }
  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}
function oi(o, e) {
  if (!P(o) || !P(e) || o.length !== e.length)
    return !1;
  let i = o.length;
  for (; i--; ) {
    if (P(o[i]) || P(e[i])) {
      if (!oi(o[i], e[i]))
        return !1;
      continue;
    }
    if (w(o[i]) || w(o[i])) {
      if (!w(o[i], e[i]))
        return !1;
      continue;
    }
    if (o[i] !== e[i])
      return !1;
  }
  return !0;
}
function Eu(o, e) {
  let i = 1 / 0, s = -1, n = null, r = 0;
  for (; r++ < e.length; ) {
    let a = e[r], l = Math.abs(a - o);
    l < i && (i = l, s = r, n = a);
  }
  return [s, n];
}
function Zo(o, e, i) {
  let s = o[e];
  o.splice(e, 1), o.splice(i, 0, s);
}
function Qo(o, e, i) {
  [o[e], o[i]] = [o[i], o[e]];
}
function Pn(o, e) {
  return P(e) ? P(o) ? o.every((i) => e.includes(i)) : e.includes(o) : !1;
}
const Pu = (o) => [...new Set(o)], Mu = (o, e) => Object.values(o.reduce((i, s) => (i[e(s)] = s, i), {})), Lu = (o, e) => o.filter((i) => e.includes(i)), Vi = (o, e) => o.filter((i) => !e.includes(i)), Au = (o, e) => Vi(o, e).concat(Vi(e, o)), Ou = (o, e) => Vi(o, e).concat(e);
function Zt(o, e) {
  if (!w(o) || !w(e))
    return !1;
  const i = Object.keys(o).sort(), s = Object.keys(e).sort();
  return i.length !== s.length ? !1 : i.every((r, a) => {
    const l = o[r], h = e[s[a]];
    return P(l) || P(h) ? oi(l, h) : w(l) || w(h) ? Zt(l, h) : l === h;
  });
}
function se(o = "ID") {
  T(o) ? o = o.toString() : b(o) || (o = "ID"), o = Be(o);
  const e = Date.now().toString(36), i = Math.random().toString(36).substring(2, 5);
  return `${o}_${e}_${i}`;
}
function Be(o) {
  return String(o).replace(/ |,|;|:|\.|#/g, "_");
}
function Nu(o, e, i) {
  e = e || "", i = i || 512;
  let s = atob(o), n = [];
  for (let a = 0; a < s.length; a += i) {
    let l = s.slice(a, a + i), h = new Array(l.length);
    for (let f = 0; f < l.length; f++)
      h[f] = l.charCodeAt(f);
    let p = new Uint8Array(h);
    n.push(p);
  }
  return new Blob(n, { type: e });
}
function Du(o, e) {
  return e instanceof Map ? {
    dataType: "Map",
    value: [...e.entries()]
  } : e;
}
function Iu(o, e) {
  return typeof e == "object" && e !== null && e.dataType === "Map" ? new Map(e.value) : e;
}
const Jo = (o) => o.entries().next().value, ea = (o) => o.entries().next().value[0], ta = (o) => o.entries().next().value[1], ia = (o) => [...o].pop(), sa = (o) => [...o.keys()].pop(), na = (o) => [...o.values()].pop();
class ce extends Map {
  constructor(e) {
    super(e);
  }
  indexOfKey(e) {
    return [...this.keys()].indexOf(e);
  }
  indexOfValue(e) {
    return [...this.values()].indexOf(e);
  }
  entryAtIndex(e) {
    return [...this.entries()][e];
  }
  keyAtIndex(e) {
    return [...this.keys()][e];
  }
  valueAtIndex(e) {
    return [...this.values()][e];
  }
  insert(e, i, s) {
    return this.insertIndex(s, e, i);
  }
  remove(e) {
    return this.removeIndex(e);
  }
  firstEntry() {
    return Jo(this);
  }
  firstKey() {
    return ea(this);
  }
  firstValue() {
    return ta(this);
  }
  lastEntry() {
    return ia(this);
  }
  lastKey() {
    return sa(this);
  }
  lastValue() {
    return na(this);
  }
  prevCurrNext(e) {
    let i = curr = next = null;
    for (let s of this)
      if (i = curr, curr = s, s.key == e)
        break;
    return { prev: i, curr, next };
  }
  union(...e) {
    if (typeof super.prototype.union == "function")
      super.union(...e);
    else
      for (const i of e)
        for (const s of i)
          this.set(...s);
  }
  setMultiple(e) {
    return P(e) ? (e.forEach(([i, s]) => this.set(i, s)), !0) : !1;
  }
  populate(e) {
    return P(e) ? (this.clear(), e.forEach(([i, s]) => this.set(i, s)), !0) : !1;
  }
  insertIndex(e, i, s) {
    if (!T(e))
      return !1;
    const n = [...this];
    return n.splice(e, 0, [i, s]), this.populate(n), !0;
  }
  removeIndex(e) {
    if (!T(e))
      return !1;
    const i = [...this];
    return i.splice(e, 1), this.populate(i), !0;
  }
  swapIndices(e, i) {
    if (!T(e) || !T(i))
      return !1;
    const s = [...this];
    return Qo(s, e, i), this.populate(s), !0;
  }
  swapKeys(e, i) {
    const s = [...this], n = s.findIndex(([a]) => a === e), r = s.findIndex(([a]) => a === i);
    return [s[n], s[r]] = [s[r], s[n]], this.clear(), s.forEach(([a, l]) => this.set(a, l)), !0;
  }
}
function Le(o, e = 100, i, s = !1) {
  let n;
  return function() {
    let r = i || this, a = arguments, l = function() {
      n = null, s || o.apply(r, a);
    }, h = s && !n;
    clearTimeout(n), n = setTimeout(l, e), h && o.apply(r, a);
  };
}
function ra(o, e = 250, i) {
  let s, n, r = function() {
    let l = i || this, h = /* @__PURE__ */ new Date(), p = arguments;
    s && h < s + e ? (clearTimeout(n), n = setTimeout(function() {
      s = h, o.apply(l, p);
    }, e)) : (s = h, o.apply(l, p));
  };
  function a() {
    timeout && (clearTimeout(n), timeout = void 0);
  }
  return r.reset = function() {
    a(), s = 0;
  }, r;
}
const Ru = (o, ...e) => {
  class i extends o {
    constructor(...r) {
      super(...r), e.forEach((a) => {
        s(this, new a());
      });
    }
  }
  let s = (n, r) => {
    Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r)).forEach((a) => {
      a.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/) || Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(r, a));
    });
  };
  return e.forEach((n) => {
    s(i.prototype, n.prototype), s(i, n);
  }), i;
};
function ku(o) {
  const e = {};
  return Promise.race([o, e]).then((i) => i === e ? "pending" : "fulfilled", () => "rejected");
}
function oa(o) {
  return String.fromCharCode.apply(null, new Uint16Array(o));
}
function aa(o) {
  let e = new ArrayBuffer(o.length * 2), i = new Uint16Array(e);
  for (let s = 0, n = o.length; s < n; s++)
    i[s] = o.charCodeAt(s);
  return e;
}
function _u(o) {
  const e = document.createElement("canvas"), i = e.getContext("2d");
  let s;
  o.isView(o) ? s = o : typeof o == "string" && (s = aa(o));
  const n = new Uint8ClampedArray.from(s), r = n.length;
  e.height = 1, e.width = r, i.putImageData(n);
  const a = i.toDataURL(), l = getBase64StringFromDataURL(a);
  return { dataURL: a, base64: l };
}
function $u(o, e, i = "string") {
  const s = new Image(), n = document.createElement("canvas").getContext("2d");
  return s.src = o, s.decode().then(() => {
    n.width = s.width, n.height = s.height, n.drawImage(s, 0, 0);
    const r = n.getImageData(0, 0, s.width, s.height).data, a = i === "string" ? oa(r) : r;
    e(a);
  });
}
class Y {
  static #e = new ce();
  static get entries() {
    return Y.#e;
  }
  static isValid(e, i, s, n) {
    return !w(e) || !H(i) || !b(s) || !O(n);
  }
  static add(e, i, s, n) {
    if (!this.isValid(e, i, s, n))
      return !1;
    i.addEventListener(s, n), Y.#e.has(e) || Y.#e.set(e, new ce());
    const r = Y.#e.get(e);
    r.has(i) || r.set(i, {});
    const a = r.get(i);
    return P(a[s]) || (a[s] = []), a[s].push(n), !0;
  }
  static remove(e, i, s, n) {
    if (!Y.isValid(e, i, s, n) || !Y.#e.has(e))
      return !1;
    const r = Y.#e.get(e);
    if (!r.has(i))
      return !1;
    const a = r.get(i);
    if (!(s in a))
      return !1;
    const l = a[s].indexOf(n);
    return l < 0 ? !1 : (a[s].splice(l, 1), a[s].length == 0 && delete a[s], Object.keys(a).length == 0 && r.delete(i), r.size == 0 && Y.#e.delete(e), !0);
  }
  static expungeEvent(e, i, s) {
    if (!w(e) || !H(i) || !b(s))
      return !1;
    const n = Y.#e.get(e);
    if (!n.has(i))
      return !1;
    const r = n.get(i);
    if (s in r) {
      for (let a of r[s])
        i.removeEventListener(s, a);
      delete r[s];
    }
    return !0;
  }
  static expungeElement(e, i) {
    if (!w(e) || !H(i))
      return !1;
    const s = Y.#e.get(e);
    if (s.has(i)) {
      let n = s.get(i);
      for (let r in n)
        Y.expungeEvent(e, i, r);
      s.delete(i);
    }
    return !0;
  }
  static expungeContext(e) {
    if (!w(e))
      return !1;
    if (Y.#e.has(e)) {
      const i = Y.#e.get(e);
      for (let s of i)
        Y.expungeElement(e, s);
      Y.#e.delete(e);
    }
    return !0;
  }
  static expungeAll() {
  }
  static destroy() {
    for (let e of Y.#e)
      Y.expungeContext(e);
    return Y.#e = void 0, !0;
  }
}
const lf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DoubleLinkedList: Su,
  EventHandlers: Y,
  _get: bu,
  _set: xu,
  ab2str: oa,
  arrayMove: Zo,
  b64toBlob: Nu,
  copyDeep: he,
  debounce: Le,
  decodePNGDataStore: $u,
  diff: Vi,
  encodePNGDataStore: _u,
  extender: Ru,
  findInObjectById: Ko,
  firstEntryInMap: Jo,
  firstKeyInMap: ea,
  firstValueInMap: ta,
  getProperty: Ws,
  getPrototypeAt: Cu,
  idSanitize: Be,
  intersection: Lu,
  isArrayEqual: oi,
  isObjectEqual: Zt,
  lastEntryInMap: ia,
  lastKeyInMap: sa,
  lastValueInMap: na,
  mergeDeep: et,
  nearestArrayValue: Eu,
  objRecurse: Xo,
  objRecurseUpdate: Tu,
  objToString: jo,
  promiseState: ku,
  replacer: Du,
  reviver: Iu,
  setProperty: En,
  str2ab: aa,
  swapArrayElements: Qo,
  symDiff: Au,
  throttle: ra,
  uid: se,
  union: Ou,
  unique: Pu,
  uniqueBy: Mu,
  valuesInArray: Pn,
  xMap: ce
}, Symbol.toStringTag, { value: "Module" }));
class zt {
  #e = {};
  constructor() {
  }
  on(e, i, s) {
    return !b(e) || !O(i) ? !1 : (this.#e[e] || (this.#e[e] = []), this.#e[e].push({ handler: i, context: s }), !0);
  }
  off(e, i, s) {
    if (!b(e) || !O(i) || !(e in this.#e))
      return !1;
    const n = this.#e[e];
    for (let r = 0; r < n.length; r++)
      if (n[r].handler === i) {
        if (s !== void 0 && n[r].context !== s)
          continue;
        if (n.splice(r, 1), n.length === 0) {
          delete this.#e[e];
          break;
        }
      }
    return !0;
  }
  expunge(e) {
    let i, s = this.#e;
    for (i in s)
      for (let n = 0; n < s[i].length; n++)
        if (s[i][n].context === e && (s[i].splice(n, 1), s[i].length === 0)) {
          delete s[i];
          break;
        }
    return !0;
  }
  emit(e, i) {
    b(e) && (this.#e[e] || []).forEach(
      (s) => {
        try {
          s.handler.call(s.context, i);
        } catch (n) {
          console.error(n);
        }
      }
    );
  }
  execute(e, i, s) {
  }
}
class G extends HTMLElement {
  static #e = [];
  static set observedAttributes(e) {
    P(e) && (G.#e = e);
  }
  static get observedAttributes() {
    return G.#e;
  }
  #t;
  #i;
  #r;
  id = se(qt);
  doInit = !0;
  intersectionObserver;
  mutationObserver;
  resizeObserver;
  DOM = {
    width: 0,
    height: 0,
    style: {}
  };
  oldDOM = {};
  subscribers = {
    resize: [],
    mutation: [],
    intersection: []
  };
  constructor(e, i = "open") {
    super(), this.#r = new zt(), this.#i = e, this.#t = this.attachShadow({ mode: i });
  }
  destroy() {
  }
  connectedCallback(e) {
    this.doInit && (this.doInit = !1, this.shadowRoot.appendChild(this.template.content.cloneNode(!0)), this.style.display = "block", this.DOM.width = this.clientWidth, this.DOM.height = this.clientHeight, this.oldDOM.width = this.clientWidth, this.oldDOM.height = this.clientHeight, this.intersectionObserver = new IntersectionObserver(this.onResize.bind(this)), this.intersectionObserver.observe(this), this.resizeObserver = new ResizeObserver(this.onResize.bind(this)), this.resizeObserver.observe(this), O(e) && e());
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }
  get shadowRoot() {
    return this.#t;
  }
  get template() {
    return this.#i;
  }
  get hub() {
    return this.#r;
  }
  get width() {
    return this.DOM.width;
  }
  set width(e) {
    this.setDim(e, "width");
  }
  get oWidth() {
    return this.oldDOM.width;
  }
  get height() {
    return this.DOM.height;
  }
  set height(e) {
    this.setDim(e, "height");
  }
  get oHeight() {
    return this.oldDOM.height;
  }
  get widthDeltaR() {
    return this.DOM.width / this.oldDOM.width;
  }
  get heightDeltaR() {
    return this.DOM.height / this.oldDOM.height;
  }
  set top(e) {
    this.setPos(e, "top");
  }
  get top() {
    return this.DOM.top;
  }
  set left(e) {
    this.setPos(e, "left");
  }
  get left() {
    return this.DOM.left;
  }
  set bottom(e) {
    this.setPos(e, "bottom");
  }
  get bottom() {
    return this.DOM.bottom;
  }
  set right(e) {
    this.setPos(e, "right");
  }
  get right() {
    return this.DOM.right;
  }
  get dimensions() {
    return this.DOM;
  }
  set cursor(e) {
    this.style.cursor = e;
  }
  get cursor() {
    return this.style.cursor;
  }
  setDim(e, i) {
    !["width", "height", "top", "bottom", "left", "right"].includes(i) || !b(e) || (T(e) ? (this.DOM[i] = e, e += "px") : b(e) ? e.match(Vt) || (e = "100%") : (this.DOM[i] = this.parentElement.getBoundingClientRect()[i], e = this.DOM[i] + "px"), this.style[i] = e);
  }
  setPos(e, i) {
    this.setDim(e, i);
  }
  getDims() {
    const e = this.getBoundingClientRect();
    for (let i in e) {
      const s = e[i];
      O(s) || (this.DOM[i] = s);
    }
    return this.DOM.visible = ct(this), this.DOM.viewport = tn(this), this.DOM;
  }
  onIntersection(e) {
    this.emit("intersection", this);
  }
  onMutation(e) {
    this.emit("mutation", this);
  }
  onResize(e) {
    this.oldDOM = { ...this.DOM }, this.getDims(), this.emit("resize", this.DOM);
  }
  on(e, i, s = this) {
    return this.#r instanceof zt ? this.#r.on(e, i, s) : !1;
  }
  off(e, i, s = this) {
    return this.#r instanceof zt ? this.#r.off(e, i, s) : !1;
  }
  expunge(e) {
    return this.#r instanceof zt ? this.#r.expunge(e) : !1;
  }
  emit(e, i) {
    return this.#r instanceof zt ? this.#r.emit(e, i) : !1;
  }
}
const la = document.createElement("template");
la.innerHTML = `
<style>
  input[type="range"][orient="vertical"] {
    writing-mode: bt-lr;
    appearance: slider-vertical;
    padding: 0;
    margin: 0;
    border: 0;
  }
</style>
<div class="slider">
</div>
`;
const Hu = ["min", "max", "value", "step", "orient", "width", "height"];
class Bu extends G {
  #e;
  #t;
  #i;
  #r = 1;
  #s;
  #n = {};
  constructor() {
    super(la);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        for (let e of Hu) {
          let i = this.getAttribute(e);
          i && (this.#n[e] = i);
        }
        this.#t = this.shadowRoot.querySelector(".slider"), this.mount(), this.#i = this.shadowRoot.querySelector("#s1"), this.#i.addEventListener("input", this.#o.bind(this));
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  set value(e) {
    this.#n.value = e;
  }
  get value() {
    return this.#n.value;
  }
  set min(e) {
    this.#n.min = e;
  }
  get min() {
    return this.#n.min;
  }
  set max(e) {
    this.#n.max = e;
  }
  get max() {
    return this.#n.max;
  }
  set step(e) {
    this.#n.step = e;
  }
  get step() {
    return this.#n.step;
  }
  #o(e) {
    this.value = e.target.value;
    const i = new CustomEvent("change", {
      detail: { value: this.value },
      bubbles: !0,
      cancelable: !0,
      composed: !1
    });
    this.dispatchEvent(i);
  }
  mount() {
    const s = { id: `s${this.#r}`, klass: "", ...this.#n };
    this.#t.innerHTML = this.insertRange(s);
  }
  insertRange({ id: e, klass: i, min: s, max: n, value: r, step: a, orient: l, width: h, height: p }) {
    let f = "";
    return f += h ? `width: ${h}px; ` : "", f += p ? `height: ${p}px; ` : "", `<input type="range" id="${e}" class="${i}" style="${f}" min="${s}" max="${n}" value="${r}" step="${a}" orient="${l}" width="${h}" height="${p}"/>`;
  }
}
customElements.get("tradex-slider") || window.customElements.define("tradex-slider", Bu);
const ha = ["source-over", "source-atop", "source-in", "source-out", "destination-over", "destination-atop", "destination-in", "destination-out", "lighter", "copy", "xor", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Mn = typeof OffscreenCanvas < "u", Uu = ["2d", "webgl", "webgl2d", "webgl2", "webgpu", "bitmaprenderer"];
let ca = class {
  #e = 0;
  #t;
  #i;
  #r;
  #s;
  constructor(e = {}) {
    if (!H(e?.container))
      throw new Error("Viewport container is not a valid HTML element.");
    this.#s = e.container, this.#r = [], this.#t = U.idCnt++, this.#i = new U.Scene(e);
    let { width: i, height: s } = Fi(e?.width || 0, e?.height || 0);
    this.setSize(i, s);
  }
  get id() {
    return this.#t;
  }
  get scene() {
    return this.#i;
  }
  get layers() {
    return this.#r;
  }
  get container() {
    return this.#s;
  }
  get OffscreenCanvas() {
    return Mn;
  }
  generateKey() {
    return this.#e++;
  }
  setSize(e, i) {
    let { width: s, height: n } = Fi(e, i);
    return this.width = s, this.height = n, this.scene.setSize(s, n), this.layers.forEach(function(r) {
      r.setSize(s, n);
    }), this;
  }
  addLayer(e) {
    return e instanceof Gs ? (this.layers.push(e), e.setSize(e.width || this.width, e.height || this.height), e.viewport = this, this) : !1;
  }
  removeLayer(e) {
    return e instanceof Gs ? (this.layers.splice(e.index, 1), !0) : !1;
  }
  getIntersection(e, i) {
    for (var s = this.layers, n = s.length - 1, r, a; n >= 0; ) {
      if (r = s[n], a = r.hit.getIntersection(e, i), a >= 0)
        return a;
      n--;
    }
    return -1;
  }
  get index() {
    let e = U.viewports, i, s = 0;
    for (i of e) {
      if (this.id === i.id)
        return s;
      s++;
    }
    return null;
  }
  destroy() {
    for (let e of this.layers)
      this.removeLayer(e), e.destroy();
  }
  render(e = !1) {
    let { scene: i, layers: s } = this, n;
    i.clear();
    for (n of s)
      e && P(n.layers) && n.layers.length > 0 && n.render(e), n.visible && n.width > 0 && n.height > 0 && (i.context, ha.includes(n?.composition) && (i.context.globalCompositeOperation = n.composition), i.context.globalAlpha = n.alpha, i.context.drawImage(
        n.scene.canvas,
        n.x,
        n.y,
        n.width,
        n.height
      ));
  }
};
class zu extends ca {
  constructor(e = {}) {
    const i = { ...e };
    i.offscreen = !1, super(i);
    const s = this.scene.canvas, n = e.container;
    n?.hasCanvasSlot && (s.slot = "viewportCanvas"), n.innerHTML = "", n.appendChild(s), U.viewports.push(this);
  }
  destroy() {
    super.destroy(), this.container.innerHTML = "", U.viewports.splice(this.index, 1);
  }
}
class Gs {
  #e = 0;
  #t = 0;
  #i = 0;
  #r = 0;
  #s = 1;
  #n = !0;
  #o = null;
  #a = Mn;
  viewport;
  constructor(e = {}) {
    const i = { ...e };
    this.id = U.idCnt++, this.#a = F(e?.offscreen) ? e.offscreen : this.#a, i.layer = this, i.offscreen = this.#a, this.hit = new U.Hit(i), this.scene = new U.Scene(i), e?.x && e?.y && this.setPosition(e.x, e.y), e?.width && e?.height && this.setSize(e.width, e.height), e?.composition && (this.setComposition = e.composition), e?.alpha && (this.alpha = e.alpha), e?.visible && (this.visible = e.visible);
  }
  set x(e) {
    T(e) && (this.#e = e);
  }
  get x() {
    return this.#e;
  }
  set y(e) {
    T(e) && (this.#t = e);
  }
  get y() {
    return this.#t;
  }
  set width(e) {
    T(e) && (this.#i = e);
  }
  get width() {
    return this.#i;
  }
  set height(e) {
    T(e) && (this.#r = e);
  }
  get height() {
    return this.#r;
  }
  set alpha(e) {
    this.#s = T(e) ? R(e, 0, 1) : 1;
  }
  get alpha() {
    return this.#s;
  }
  set composition(e) {
    ha.includes(e) && (this.#o = e);
  }
  get composition() {
    return this.#o;
  }
  set visible(e) {
    F(e) && (this.#n = e);
  }
  get visible() {
    return this.#n;
  }
  get isOffScreen() {
    return this.#a;
  }
  get index() {
    let e = this.viewport.layers, i = 0, s;
    for (s of e) {
      if (this.id === s.id)
        return i;
      i++;
    }
    return null;
  }
  setPosition(e, i) {
    return this.x = e, this.y = i, this;
  }
  setSize(e, i) {
    let { width: s, height: n } = Fi(e, i);
    return this.width = s, this.height = n, this.scene.setSize(s, n), this.hit.setSize(s, n), this;
  }
  move(e) {
    let { index: i = 0, viewport: s } = this, n = s.layers, r;
    switch (typeof e == "number" && (r = R(Math.floor(e), (n.length - 1) * -1, n.length - 1), e = "order"), e) {
      case "up":
        i < n.length - 1 && (n[i] = n[i + 1], n[i + 1] = this);
        break;
      case "down":
        i > 0 && (n[i] = n[i - 1], n[i - 1] = this);
        break;
      case "top":
        n.splice(i, 1), n.push(this);
        break;
      case "bottom":
        n.splice(i, 1), n.unshift(this);
        break;
      case "order":
        Zo(n, this.index, r);
        break;
    }
    return this;
  }
  moveUp() {
    return this.move("up");
  }
  moveDown() {
    return this.move("down");
  }
  moveTop() {
    return this.move("top");
  }
  moveBottom() {
    return this.move("bottom");
  }
  remove() {
    return this.viewport.removeLayer(this);
  }
  destroy() {
    da(1, 1), this.scene.clear(), this.hit.clear();
  }
}
class ua {
  #e;
  #t = 0;
  #i = 0;
  #r;
  #s = !0;
  #n;
  #o;
  #a;
  constructor(e = { offscreen: !0 }) {
    this.#e = U.idCnt++, this.#a = e?.layer, this.#o = Uu.includes(e?.contextType) ? e.contextType : "2d";
    const i = document.createElement("canvas");
    i.className = "scene-canvas", i.style.display = "block", e.offscreen = F(e?.offscreen) ? e.offscreen : !0, Mn && e.offscreen ? (this.#r = i.transferControlToOffscreen(), this.#s = !0) : (this.#r = i, this.#s = !1), this.#o == "webgl2d" ? this.#n = this.getContext("2d") : this.#n = this.getContext(this.contextType), e?.width && e?.height && this.setSize(e.width, e.height);
  }
  get id() {
    return this.#e;
  }
  set width(e) {
    T(e) && (this.#t = e);
  }
  get width() {
    return this.#t;
  }
  set height(e) {
    T(e) && (this.#i = e);
  }
  get height() {
    return this.#i;
  }
  get canvas() {
    return this.#r;
  }
  get offscreen() {
    return this.#s;
  }
  get contextType() {
    return this.#o;
  }
  get context() {
    return this.#n;
  }
  get layer() {
    return this.#a;
  }
  setSize(e, i) {
    return da(e, i, this);
  }
  clear() {
    return Wu(this);
  }
}
class Vu extends ua {
  constructor(e = { offscreen: !0 }) {
    super(e);
  }
  getContext(e) {
    return this.canvas.getContext(e);
  }
  toImage(e = "image/png", i, s) {
    let n = this, r = new Image(), a = this.canvas.toDataURL(e, i);
    r.onload = function() {
      r.width = n.width, r.height = n.height, s(r);
    }, r.src = a;
  }
  export(e, i, s = "image/png", n) {
    typeof i != "function" && (i = this.blobCallback.bind({ cfg: e })), this.canvas.toBlob(i, s, n);
  }
  exportHit(e, i, s = "image/png", n) {
    typeof i != "function" && (i = this.blobCallback.bind({ cfg: e })), this.layer.hit.canvas.toBlob(i, s, n);
  }
  blobCallback(e) {
    let i = document.createElement("a"), s = URL.createObjectURL(e), n = this.cfg.fileName || "canvas.png";
    i.setAttribute("href", s), i.setAttribute("target", "_blank"), i.setAttribute("download", n), document.createEvent ? Object.assign(document.createElement("a"), {
      href: s,
      target: "_blank",
      download: n
    }).click() : i.click && i.click();
  }
}
class Fu extends ua {
  constructor(e = {}) {
    super(e);
  }
  getContext(e) {
    return this.canvas.getContext(e, {
      preserveDrawingBuffer: !0,
      antialias: !1
    });
  }
  getIntersection(e, i) {
    let s = this.context, n;
    if (e = Math.round(e - this.layer.x), i = Math.round(i - this.layer.y), e < 0 || i < 0 || e > this.width || i > this.height)
      return -1;
    if (this.contextType === "2d") {
      if (n = s.getImageData(e, i, 1, 1).data, n[3] < 255)
        return -1;
    } else if (n = new Uint8Array(4), s.readPixels(
      e * U.pixelRatio,
      (this.height - i - 1) * U.pixelRatio,
      1,
      1,
      s.RGBA,
      s.UNSIGNED_BYTE,
      n
    ), n[0] === 255 && n[1] === 255 && n[2] === 255)
      return -1;
    return this.rgbToInt(n);
  }
  getIndexValue(e) {
    let i = this.intToRGB(e);
    return "rgb(" + i[0] + ", " + i[1] + ", " + i[2] + ")";
  }
  rgbToInt(e) {
    let i = e[0], s = e[1], n = e[2];
    return (i << 16) + (s << 8) + n;
  }
  intToRGB(e) {
    let i = (e & 16711680) >> 16, s = (e & 65280) >> 8, n = e & 255;
    return [i, s, n];
  }
}
function Wu(o) {
  let e = o.context;
  return o.contextType === "2d" ? e.clearRect(
    0,
    0,
    o.width * U.pixelRatio,
    o.height * U.pixelRatio
  ) : e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), o;
}
function Fi(o, e) {
  return o < 0 && (o = 0), e < 0 && (e = 0), { width: o, height: e };
}
function da(o, e, i, s = !0) {
  let { width: n, height: r } = Fi(o, e);
  return i.width = n, i.height = r, i.canvas.width = n * U.pixelRatio, i.canvas.height = r * U.pixelRatio, i.offscreen || (i.canvas.style.width = `${n}px`, i.canvas.style.height = `${r}px`), i.contextType !== "2d" && i.contextType !== "bitmaprenderer" && i.context.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight), s && i.contextType === "2d" && U.pixelRatio !== 1 && !i.offscreen && i.context.scale(U.pixelRatio, U.pixelRatio), i;
}
const U = {
  idCnt: 0,
  viewports: [],
  pixelRatio: window && window.devicePixelRatio || 1,
  Node: ca,
  Viewport: zu,
  Layer: Gs,
  Scene: Vu,
  Hit: Fu
};
let pa = document.createElement("template");
const Wi = 128, Cs = 20, ft = [
  "#263238",
  "#B71C1C",
  "#BF360C",
  "#FF6F00",
  "#827717",
  "#194D33",
  "#006064",
  "#0D47A1",
  "#311B92",
  "#880E4F",
  "#455A64",
  "#D32F2F",
  "#E64A19",
  "#FFA000",
  "#AFB42B",
  "#388E3C",
  "#0097A7",
  "#1976D2",
  "#512DA8",
  "#C2185B",
  "#607D8B",
  "#F44336",
  "#FF5722",
  "#FFC107",
  "#CDDC39",
  "#4CAF50",
  "#00BCD4",
  "#2196F3",
  "#673AB7",
  "#E91E63",
  "#90A4AE",
  "#E57373",
  "#FF8A65",
  "#FFD54F",
  "#DCE775",
  "#81C784",
  "#4DD0E1",
  "#64B5F6",
  "#9575CD",
  "#F06292",
  "#CFD8DC",
  "#FFCDD2",
  "#FFCCBC",
  "#FFECB3",
  "#F0F4C3",
  "#C8E6C9",
  "#B2EBF2",
  "#BBDEFB",
  "#D1C4E9",
  "#F8BBD0"
];
pa.innerHTML = `
<style>
  .colourpicker {
    display: grid;
    grid-template-columns: [first] ${Wi}px [second] ${Cs}px;
    grid-template-rows: [mixer] 2em [fields] 2em [swatches] 1fr;
    row-gap: 5px;
    border: 1px solid #aaa;
    border-radius: 5px;
    box-shadow: ${Xe.SHADOW};
    background: #ccc;
    color: #444;
    padding: 5px;
  }
  .hex {
    font-weight: bold;
  }
  .number {
    width: 2em;
  }
  .colval {
    width: 6em;
  }

  .default .mixer {
    display: none;
  }

  .mixer {
    position: relative;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .mixer .viewport {
    position: absolute;
  }
  .mixer .checks {
    top: 0;
    left: 0;
  }
  .mixer .rgbv {
    top: 0;
    left: 0;
    opacity: 1;
  }

  .palette {
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 3;
    display: flex;
    width: 150px;
    flex-flow: wrap;
    justify-content: space-around;
    row-gap: 2px;
    column-gap: 2px;
  }
  .palette button {
    width: 12px;
    height: 12px;
    border: 1px;
    border-radius: 3px;
  }

  tradex-slider[orient="vertical"] {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: span 3;
    width: ${Cs}px;
  }
  tradex-slider[orient="horizontal"] {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    width: ${Cs}px;
  }

  span {
    grid-column-start: 2;
    grid-row-start: 1;
    padding-left: .5em;
    padding-top: .25em;
    font-weight: bold;
  }

  .fields {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .fields input {
    border: 1px solid #888;
    border-radius: 3px;
    font-size: ${$.FONTSIZE};
  }

</style>
<div class="colourpicker default">
  <tradex-slider max="255" min="0" step="1" value="255" orient="horizontal" width="${Wi}" ></tradex-slider>
  <span>A</span>
  <div class="fields">
    <input type="text" class="colval"/>
    <button class="submit ok">OK</button>
  </div>
</div>
`;
class j {
  static opened = new j("opened");
  static active = new j("active");
  static closed = new j("closed");
  constructor(e) {
    this.name = e;
  }
}
class Gu extends G {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h;
  #p;
  #u;
  #g;
  #d;
  #f;
  #w = {
    size: Wi
  };
  #E;
  #y;
  #v = {};
  #m = j.closed;
  #C = { cfg: "default" };
  constructor() {
    super(pa);
  }
  destroy() {
    this.#e.remove();
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#E = new ai("#f00"), this.#e = this.shadowRoot.querySelector(".colourpicker"), this.build(), this.#t = this.shadowRoot.querySelector(".mixer"), this.#i = this.shadowRoot.querySelector(".palette"), this.#o = this.shadowRoot.querySelector(".alpha"), this.#a = this.shadowRoot.querySelector(".submit"), this.#u = this.shadowRoot.querySelector(".colval"), this.#g = this.shadowRoot.querySelector(".rgbv"), this.#d = this.shadowRoot.querySelector(".checker"), this.#f = this.shadowRoot.querySelector("tradex-slider");
        const e = (i) => {
          this.setColour(i.target.value), this.#y.dispatchEvent(new Event("change"));
        };
        this.#u.addEventListener("change", e), this.#a.addEventListener("click", this.close.bind(this)), this.#f.addEventListener("input", this.#T.bind(this)), this.#f.addEventListener("pointerup", this.#T.bind(this));
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  get elMixer() {
    return this.#t;
  }
  get elPalette() {
    return this.#i;
  }
  get elColVal() {
    return this.#u;
  }
  get elModel() {
    return this.#s;
  }
  get elRGB() {
    return this.#n;
  }
  get elAlpha() {
    return this.#o;
  }
  get elSubmit() {
    return this.#a;
  }
  set colour(e) {
    this.setColour(e);
  }
  get colour() {
    return this.#E;
  }
  set target(e) {
    this.#y = e;
  }
  get target() {
    return this.#y;
  }
  set state(e) {
    e instanceof j && (this.#m = e);
  }
  get state() {
    return this.#m;
  }
  setColour(e) {
    let i;
    return b(e) ? (i = new ai(e), i.isValid ? (this.#E = i, this.#u.value = i.value.hexa, this.#f.value = Math.floor(255 * i.value.a), H(this.#y) && (this.#y.value = i.value.hexa, this.#y.dispatchEvent(new Event("change"))), this.#g.style.opacity = i.value.a, !0) : !1) : !1;
  }
  setAlpha(e) {
    let i = (e * 1).toString(16).toUpperCase();
    i = ("00" + i).slice(-2);
    let s = this.#E.hex + i;
    this.setColour(s);
  }
  #T(e) {
    this.setAlpha(e.target.value);
  }
  onOutsideClickListener(e) {
    if (!this.contains(e.target) && this.state === j.opened && (this.state = j.active, this.classList.toggle("active"), document.removeEventListener("click", this.#v.click), delete this.#v.click), !this.contains(e.target) && e.target?.type === "color" && (this.state === j.closed || this.state === j.active))
      this.state = j.opened, this.classList.add("active"), this.setColour(e.target.value), e.preventDefault();
    else if (!this.contains(e.target) && e.target.tagName === "LABEL" && this.state === j.closed) {
      const i = e.target.htmlFor, s = e.target.parentElement.querySelector(`#${i}`);
      s?.type === "color" && (this.state = j.opened, this.classList.add("active"), this.setColour(s.value), e.preventDefault());
    } else
      !this.contains(e.target) && e.target.tagName === "LABEL" && this.state === j.opened ? (this.state = j.closed, this.classList.remove("active"), e.preventDefault()) : this.contains(e.target) || (this.state = j.closed, this.classList.remove("active"));
  }
  onCanvasClick(e) {
    const i = e.clientX, s = e.clientY, n = this.#w.mixer.layers.rgbv.hit.getIntersection(i, s), r = this.#w.mixer.layers.rgbv.hit.getIndexValue(n);
    console.log(r);
  }
  position(e, i, s) {
    if (!T(e) || !T(i) || !H(s))
      return !1;
    this.top = i, this.left = e;
  }
  open(e, i, s) {
    return this.state !== j.closed ? !1 : (s?.cfg == "gradient" || (this.#C.cfg == "default", this.#f.setAttribute("orient", "horizontal"), this.#f.setAttribute("width", Wi), this.#f.setAttribute("height", "")), this.setColour(e), this.target = i, this.state = j.opened, this.classList.add("active"), setTimeout(() => {
      this.#v.click = this.onOutsideClickListener.bind(this), document.addEventListener("click", this.#v.click);
    }, 250), !0);
  }
  close() {
    this.state = j.closed, this.classList.remove("active");
  }
  build() {
    this.#e.appendChild(this.mixerNode()), this.#e.appendChild(this.paletteNode());
  }
  paletteNode() {
    let e = "";
    for (let n of ft)
      e += `<button style="background: ${n};" data-colour="${n}"></button>`;
    const i = document.createElement("div");
    i.classList.add("palette"), i.style.display = "flex", i.innerHTML = e;
    const s = i.querySelectorAll("button");
    for (let n of s)
      n.addEventListener("click", (r) => {
        const a = r.target.getAttribute("data-colour");
        this.colour = a, this.#y.value = a, this.#y.dispatchEvent(new Event("change"));
      });
    return i;
  }
  mixerNode() {
    return this.canvasNode("mixer");
  }
  canvasNode(e) {
    const i = document.createElement("div");
    i.classList.add(e), i.addEventListener("click", this.onCanvasClick.bind(this));
    const s = this.viewportNode("checks");
    i.appendChild(s.container);
    const n = this.viewportNode("rgbv");
    i.appendChild(n.container), s.container.style.cursor = "url(), 0, 0, copy";
    const r = s.viewport, a = n.viewport, l = {}, h = this.#w.size, p = { x: 0, y: 0, width: h, height: h };
    this.#w.layers = l, this.#w.view = r, l.grid = new U.Layer(p), r.addLayer(l.grid), l.rgbv = new U.Layer(p), a.addLayer(l.rgbv), this.#w[e] = { element: i, viewport: s, layers: l };
    let f = l.rgbv.scene.context, g = [0, 0, h, 0];
    return $i(f, g, ["#f00f", "#ff0f", "#0f0f", "#0fff", "#00ff", "#f0ff", "#f00f"]), f.fillRect(0, 0, h, h), f = l.rgbv.scene.context, g = [0, 0, 0, h], $i(f, g, ["#fff", "#0000", "#000"]), f.fillRect(0, 0, h, h), f = l.grid.scene.context, Sn(f, 8, 16, 16, "#fff", "#ccc"), r.render(), a.render(), i;
  }
  viewportNode(e) {
    const i = document.createElement("div");
    i.classList.add("viewport"), i.classList.add(e);
    const s = new U.Viewport({
      width: this.#w.size,
      height: this.#w.size,
      container: i
    }), n = s.scene.canvas;
    return { viewport: s, container: i, canvas: n };
  }
  colourValueNode() {
    return "";
  }
  colourModelNode() {
    return "";
  }
  rgbSliderNode() {
    return "";
  }
  alphaSliderNode() {
    return "";
  }
  submitNode() {
    return "";
  }
  gradient(e, i, s, n) {
    $i(e, [0, 0, 0, 0], [i, s]);
  }
  compositeLayers() {
    const e = this.#w.layers, i = ["rgb", "value"], s = e.rgbv.scene.context;
    for (let a of i)
      s.drawImage(
        e[a].scene.canvas,
        e[a].x,
        e[a].y,
        e[a].width,
        e[a].height
      );
    const n = e.composite.scene.context, r = "rgbv";
    n.globalAlpha = 1 / (255 / this.#E.a), n.drawImage(
      e[r].scene.canvas,
      e[r].x,
      e[r].y,
      e[r].width,
      e[r].height
    );
  }
  inputColorUpgrade(e) {
    if (!H(e))
      return !1;
    const i = this.inputColorReplacement();
    e.style.display = "none", e.insert.insertAdjacentElement("afterend", i);
  }
  inputColorReplacement() {
  }
}
customElements.get("tradex-colourpicker") || window.customElements.define("tradex-colourpicker", Gu);
const ma = document.createElement("template"), qs = 24, Nr = qs;
ma.innerHTML = `
<style>
  .swatch {
    display: inline-block;
    position: relative;
  }
  .swatch,
  .swatch .overlay {
    width: ${qs}px;
    height: ${Nr}px;
  }
  .swatch canvas,
  .swatch .overlay {
    position: absolute;
    top: 0;
    left: 0;
  }
  input {
    width: 6em;
    vertical-align: super;
  }
  tradex-colourpicker {
    display: none;
    position: absolute;
    z-index: 1;
  }
  tradex-colourpicker.active {
    display: block;
  }
</style>
<div class="colourInput">
  <div class="swatch">
    <canvas width="${qs}" height="${Nr}"></canvas>
    <div class="overlay"></div>
  </div>
  <input minlength="4" maxlength="9" pattern="#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})">
  <tradex-colourpicker></tradex-colourpicker>
</div>
`;
class qu extends G {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  constructor() {
    super(ma);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#n = this.shadowRoot.querySelector("tradex-colourpicker"), this.#n.style.display = "", this.#t = this.shadowRoot.querySelector(".swatch"), this.#i = this.shadowRoot.querySelector("canvas"), this.#r = this.shadowRoot.querySelector(".overlay"), this.#s = this.shadowRoot.querySelector("input"), this.height = this.getAttribute("height") * 1 || this.height, this.width = this.getAttribute("width") * 1 || this.width, this.setTarget(), this.eventsListen();
        const e = this.#i.getContext("2d");
        Sn(e, 8, 16, 16, "#fff", "#ccc");
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.#e.removeEventListener("change", this.onTargetChange.bind(this));
  }
  set target(e) {
    b(e) && this.setTarget(e);
  }
  get target() {
    return this.#e;
  }
  setTarget(e) {
    if (H(this.#e) && this.#e.removeEventListener("change", this.onTargetChange.bind(this)), b(e))
      this.#e = document.getElementById(e), this.setAttribute("target", e);
    else if (H(e))
      this.#e = e, this.setAttribute("target", e.id);
    else
      return !1;
    const i = this.#e;
    if (H(i) && i.type == "text") {
      const s = i.id, n = i.parentElement, r = i.value, a = `
            <input type="text" id="${s}" minlength="4" maxlength="9" style="display:none" value="${r}"/>
            `;
      i.insertAdjacentElement("afterend", this), i.insertAdjacentHTML("beforebegin", a), i.id = "";
      const l = n.querySelector(`#${s}`);
      return l.addEventListener("change", this.onTargetChange.bind(this)), this.#s.value = r, this.#r.style.background = r, this.#n.setColour(r), this.#e.remove(), this.#e = l, !0;
    }
    return !1;
  }
  eventsListen() {
    this.#t.addEventListener("click", this.onSwatchClick.bind(this));
  }
  onSwatchClick(e) {
    this.openPicker();
  }
  onTargetChange(e) {
    const i = new String(e.target.value);
    i !== this.#n.colour.value.rgba && (this.#n.setColour(i), this.#s.value = i, this.#r.style.background = i);
  }
  openPicker() {
    this.#n.open(this.#e.value, this.#e);
  }
  closePicker() {
    this.#n.close();
  }
}
customElements.get("tradex-colourinput") || window.customElements.define("tradex-colourinput", qu);
const Dr = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i, Ir = /^hsla?((\d{1,3}?),\s*(\d{1,3}%),\s*(\d{1,3}%)(,\s*[01]?\.?\d*)?)$/, Rr = /^hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/, kr = /^rgba?((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)(,\s*[01]?\.?\d*)?)$/, _r = /^^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/;
class ai {
  #e = {
    r: null,
    g: null,
    b: null,
    a: null,
    h: null,
    s: null,
    l: null,
    v: null,
    r16: null,
    g16: null,
    b16: null,
    a16: null,
    hex: null,
    hexa: null,
    hsl: null,
    hsla: null,
    rgb: null,
    rgba: null,
    isValid: !1
  };
  constructor(e) {
    this.#t(e), Dr.test(e) && this.#i(e), Ir.test(e) && this.#r(e), Rr.test(e) && this.#s(e), kr.test(e) && this.#n(e), _r.test(e) && this.#o(e);
  }
  get value() {
    return this.#e;
  }
  get isValid() {
    return this.#e.isValid;
  }
  get hex() {
    return this.#e.hex;
  }
  get hexa() {
    return this.#e.hexa;
  }
  #t(e) {
    if (!b(e)) {
      this.#e.isValid = !1;
      return;
    }
    if (th) {
      let i = document.getElementById("divValidColourTest");
      i || (i = document.createElement("div"), i.id = "divValidColourTest"), i.style.backgroundColor = "", i.style.backgroundColor = e, this.#e.isValid = !!i.style.backgroundColor.length, i.remove();
    } else
      this.#e.isValid = !!(Dr.test(e) || Ir.test(e) || Rr.test(e) || kr.test(e) || _r.test(e));
  }
  setHex(e) {
    let i = this.#e;
    [
      i.r16,
      i.g16,
      i.b16,
      i.a16
    ] = e, i.hex = `#${i.r16}${i.g16}${i.b16}`, i.hexa = `#${i.r16}${i.g16}${i.b16}${i.a16}`;
  }
  setRGBA(e) {
    let i = this.#e;
    [
      i.r,
      i.g,
      i.b,
      i.a
    ] = e, i.rgb = `rgb(${e[0]},${e[1]},${e[2]})`, i.rgba = `rgb(${e[0]},${e[1]},${e[2]},${e[3]})`;
  }
  setHSLA(e) {
    let i = this.#e;
    [
      i.h,
      i.s,
      i.l,
      i.a
    ] = e, i.hsl = `hsl(${e[0]},${e[1]}%,${e[2]}%)`, i.hsla = `hsl(${e[0]},${e[1]}%,${e[2]}%,${e[3]})`;
  }
  #i(e) {
    let i = e.length, s;
    switch (i) {
      case 4:
        s = [`${e[1]}${e[1]}`, `${e[2]}${e[2]}`, `${e[3]}${e[3]}`, "ff"];
        break;
      case 7:
        s = [e.substr(1, 2), e.substr(3, 2), e.substr(5, 2), "ff"];
        break;
      case 9:
        s = [e.substr(1, 2), e.substr(3, 2), e.substr(5, 2), e.substr(7, 2)];
        break;
    }
    this.setHex(s), this.#p(s), this.#u(s);
  }
  #r(e) {
    this.#e.hsl = e;
  }
  #s(e) {
    this.#e.hsla = e;
  }
  #n(e) {
    this.#e.rgb = e, this.#d(rgba);
  }
  #o(e) {
    this.#e.rgba = e, this.#d(e);
  }
  #a(e) {
    let { r: i, g: s, b: n, a: r } = this.#g(e);
    return i.length == 1 && (i = "0" + i), s.length == 1 && (s = "0" + s), n.length == 1 && (n = "0" + n), r.length == 1 && (r = "0" + r), this.value.r = i, this.value.g = s, this.value.b = n, this.value.a = r, this.setHex([i, s, n, r]), this;
  }
  #c(e) {
    let { r: i, g: s, b: n, a: r } = this.#g(e);
    i = parseInt(i, 16) / 255, s = parseInt(s, 16) / 255, n = parseInt(n, 16) / 255, r = parseInt(r, 16) / 255;
    const a = Math.max(i, s, n), l = a - Math.min(i, s, n), h = l ? a === i ? (s - n) / l : a === s ? 2 + (n - i) / l : 4 + (i - s) / l : 0;
    let p = [
      (60 * h < 0 ? 60 * h + 360 : 60 * h).toString(),
      (100 * (l ? a <= 0.5 ? l / (2 * a - l) : l / (2 - (2 * a - l)) : 0)).toString(),
      (100 * (2 * a - l) / 2).toString(),
      r.toString()
    ];
    return this.setHSLA(p), this;
  }
  #l(e, i, s) {
    i /= 100, s /= 100;
    const n = (l) => (l + e / 30) % 12, r = i * Math.min(s, 1 - s), a = (l) => s - r * Math.max(-1, Math.min(n(l) - 3, Math.min(9 - n(l), 1)));
    return [255 * a(0), 255 * a(8), 255 * a(4)];
  }
  #h(e, i, s) {
    s /= 100;
    const n = i * Math.min(s, 1 - s) / 100, r = (a) => {
      const l = (a + e / 30) % 12, h = s - n * Math.max(Math.min(l - 3, 9 - l, 1), -1);
      return Math.round(255 * h).toString(16).padStart(2, "0");
    };
    return `#${r(0)}${r(8)}${r(4)}`;
  }
  #p(e) {
    b(e) && (e = /([a-f\d]{2})/ig.exec(e));
    var i = [
      parseInt(e[0], 16),
      parseInt(e[1], 16),
      parseInt(e[2], 16),
      parseInt(e[3], 16) / 255
    ];
    this.setRGBA(i);
  }
  #u(e) {
    b(e) && (e = /([a-f\d]{2})/ig.exec(e));
    let i = parseInt(e[0], 16), s = parseInt(e[1], 16), n = parseInt(e[2], 16), r = parseInt(e[3], 16);
    i /= 255, s /= 255, n /= 255, r /= 255, this.setHSLA([i, s, n, r]);
  }
  #g(e) {
    let i, s, n, r, a = this.#e;
    if (a.r && a.g && a.b && a.a)
      return { r: i, g: s, b: n, a: r } = { ...a };
    if (b(e)) {
      let l = e.indexOf(",") > -1 ? "," : " ";
      e = e.substr(4).split(")")[0].split(l);
    }
    if (P(e)) {
      if (e.length < 3 || e.length > 4)
        return !1;
      i = e[0], s = e[1], n = e[2], r = b(e[3]) ? e[3] : "";
    } else if (w(e))
      i = e.r, s = e.g, n = e.b, r = "a" in e ? e.a : "";
    else
      return !1;
    return { r: i, g: s, b: n, a: r };
  }
  #d(e) {
    let i, s, n = 0, r = [], a = [], l = e.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i);
    l.shift();
    for (let h of l)
      s = h.indexOf("%") > -1, i = parseFloat(h), n < 3 && s ? i = Math.round(255 * i / 100) : n == 3 && (!s && i >= 0 && i <= 1 ? i = Math.round(255 * i) : s && i >= 0 && i <= 100 ? i = Math.round(255 * i / 100) : i = ""), r[n] = (i | 256).toString(16).slice(1), a[n++] = i;
    this.setHex(r), this.setRGBA(a), this.#u(this.#e.hexa);
  }
}
class Ge {
  static opened = new Ge("opened");
  static closed = new Ge("closed");
  constructor(e) {
    this.name = e;
  }
}
class ee {
  #e;
  #t;
  #i;
  #r;
  #s = Ge.closed;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h;
  #p;
  #u;
  #g;
  #d = {};
  #f;
  #w;
  #E;
  #y;
  #v = !1;
  #m = {};
  #C = "";
  #T = "";
  #x = {};
  #P = {};
  static windowList = {};
  static windowCnt = 0;
  static class = er;
  static name = "Windows";
  static type = "window";
  static currentActive = null;
  static stylesInstalled = !1;
  static defaultStyles = `
  /** default Window widget styles */

  .tradeXwindow {
    border: 1px solid ${Xe.COLOUR_BORDER};
    border-radius: 5px;
    box-shadow: ${Xe.SHADOW};
    background: ${Xe.COLOUR_BG};
    color: ${Xe.COLOUR_TXT};
  }

  .tradeXwindow .dragBar {
    cursor: grab;
  }

  .tradeXwindow .dragBar:hover {
    background: #222;
  }

  .tradeXwindow .dragBar .title {
    ${Xe.TITLE}
  }

  .tradeXwindow .content {
    ${Xe.CONTENT}
  }
 
  `;
  static create(e, i) {
    return i.id = i?.id || se("window"), i.id = `${i.id}_${++ee.windowCnt}`, i.type = i?.type || ee.type, i.class = i?.class || "window", ee.windowList[i.id] = new ee(e, i), ee.windowList[i.id];
  }
  static destroy(e) {
    e in ee.windowList && (ee.windowList[e].destroy(), delete ee.windowList[e]);
  }
  static defaultNode() {
    return `
      <div slot="widget" class="${er}" style=""></div>
    `;
  }
  constructor(e, i) {
    this.#t = e, this.#i = i.core || i.parent.core, this.#r = i, this.#e = i.id, this.#n = i.parent, this.#a = e.elements[i.type], this.#o = this.#i.elWidgetsG;
    const s = e.elements[i.type];
    this.mount(s);
  }
  destroy() {
    this.#i.hub.expunge(), this.el.remove();
  }
  get id() {
    return this.#e;
  }
  get pos() {
    return this.dimensions;
  }
  get core() {
    return this.#i;
  }
  get parent() {
    return this.#n;
  }
  get config() {
    return this.#r;
  }
  set config(e) {
    this.#r = e;
  }
  get theme() {
    return this.#i.theme;
  }
  get state() {
    return this.#s;
  }
  get dimensions() {
    return ae(this.#c);
  }
  set dimensions(e) {
    this.setDimensions(e);
  }
  get type() {
    return ee.type;
  }
  get el() {
    return this.#c;
  }
  get elDragBar() {
    return this.#l;
  }
  get elTitle() {
    return this.#h;
  }
  get elCloseIcon() {
    return this.#p;
  }
  get elContent() {
    return this.#u;
  }
  get elColourPicker() {
    return this.#g;
  }
  get title() {
    return this.#C;
  }
  set title(e) {
    this.setTitle(e);
  }
  get content() {
    return this.#T;
  }
  set content(e) {
    this.setContent(e);
  }
  get contentFields() {
    return this.#x;
  }
  set params(e) {
    w(e) && (this.#P = { ...this.#P, ...e });
  }
  get params() {
    return this.#P;
  }
  setTitle(e) {
    return b(e) ? (this.#r.title = e, this.#h.innerHTML = e, this.#h) : !1;
  }
  setContent(e, i = {}) {
    if (!b(e) || !w(i))
      return !1;
    this.#r.content = e, this.#u.innerHTML = e;
    for (let s in i)
      O(i[s]) && i[s](this.#u);
    return this.#x = this.allContentFields(), this.#g = this.#u.querySelector("tradex-colourpicker"), this.#u;
  }
  start() {
    this.eventsListen(), this.#r?.openNow !== !0 && this.setClose();
  }
  eventsListen() {
    this.on(`window_close_${this.parent.id}`, this.onCloseWindow, this), this.on("global_resize", this.onGlobalResize, this);
  }
  on(e, i, s = this) {
    this.#i.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#i.off(e, i, s);
  }
  emit(e, i) {
    this.#i.emit(e, i);
  }
  onGlobalResize(e) {
    const i = this.dimensions, s = {
      position: { x: i.left, y: i.top },
      dimensions: { w: i.w, h: i.h }
    };
    i.w > e.width && (s.position.x = e.width), i.h > e.height && (s.position.y = e.height), i.left + s.dimensions.w, i.bottom + s.dimensions.h, i.x < 0 ? s.position.x = 0 : i.x + s.dimensions.w > e.width && (s.position.x -= e.width), this.setProperties(s);
  }
  onOutsideClickListener(e) {
    if (!this.#c.contains(e.target) && ct(this.#c) && !this.#v) {
      let i = {
        target: e.currentTarget.id,
        window: this.#e
      };
      this.emit("window_close", i), this.emit(`window_close_${this.parent.id}`, i), document.removeEventListener("click", this.#m.click), delete this.#m.click;
    }
  }
  onCloseWindow(e) {
    e.window === this.#e && this.close();
  }
  onWindow(e) {
    e.stopPropagation();
  }
  onDragBar(e) {
    this.#v = !0;
    let i = this.#c.offsetLeft + e.movement.x, s = this.#c.offsetTop + e.movement.y;
    this.position({ x: i, y: s });
  }
  onDragBarEnd(e) {
    setTimeout(() => {
      this.#v = !1;
    }, 250);
  }
  mount(e) {
    e.lastElementChild == null ? e.innerHTML = this.windowNode() : e.lastElementChild.insertAdjacentHTML("afterend", this.windowNode()), this.#c = this.#a.querySelector(`#${this.#r.id}`), this.#l = this.#c.querySelector(".dragBar"), this.#h = this.#c.querySelector(".title"), this.#p = this.#c.querySelector(".closeIcon"), this.#u = this.#c.querySelector(".content"), this.#x = this.allContentFields(), this.#g = this.#u.querySelector("tradex-colourpicker"), this.#c.addEventListener("click", this.onWindow.bind(this)), H(this.#l) && (this.#y = new He(this.#l, { disableContextMenu: !1 }), this.#y.on("pointerdrag", this.onDragBar.bind(this)), this.#y.on("pointerdragend", this.onDragBarEnd.bind(this)));
    const i = this.dimensions, s = this.#r?.w || i.w, n = this.#r?.h || i.h;
    this.setDimensions({ w: s, h: n }), this.position();
  }
  windowNode() {
    const e = this.#r;
    let i = "position: absolute; z-index: 100; display: block;", s = e.dragBar ? this.dragBar() : "", n = !e.dragBar && e.title ? this.titleNode() : "", r = this.contentNode(), a = this.closeIcon();
    return `
      <!-- ${this.constructor.type} ${this.parent.id} -->
      <div id="${e.id}" class="${Il} ${e.class}" style="${i}">
          ${s}
          ${n}
          ${a}
          ${r}
        </div>
      </div>
    `;
  }
  contentNode() {
    const e = this.#r;
    let i = "", s = e?.content ? e.content : "";
    return `
      <div class="content" style="${i}">
        ${s}
      </div>
    `;
  }
  dragBar() {
    const e = this.#r, i = "cursor: grab;", s = `onmouseover="this.style.background ='#222'"`, n = `onmouseout="this.style.background ='none'"`;
    let r = `${i} `, a = "";
    return e.dragBar && (a += `
    <div class="dragBar" style="${r}" ${s} ${n}>
        ${this.titleNode()}
      </div>
    `), a;
  }
  titleNode() {
    const e = this.config;
    return `
        <div class="title">${b(e?.title) ? e.title : ""}</div>
    `;
  }
  closeIcon() {
    const e = "cursor: pointer;", i = `onmouseover="this.style.background ='#222'"`, s = `onmouseout="this.style.background ='none'"`;
    let n = `${e} `;
    this.#r?.styles?.closeIcon;
    let r = "";
    return window.closeIcon && (r += `
      <div class="closeIcon" style="${n}" ${i} ${s}>
        <span>X</span>
      </div>
    `), r;
  }
  allContentFields() {
    const e = {}, i = this.#u;
    return e.input = i.querySelectorAll("input"), e.select = i.querySelectorAll("select"), e.textarea = i.querySelectorAll("textarea"), e.button = i.querySelectorAll("button"), e;
  }
  position(e) {
    let i = 0.1, s = this.dimensions, n = this.#i.dimensions;
    Math.round(n.left - s.left), Math.round(n.bottom - s.top);
    let r = this.#d?.iPos?.width !== n.width || this.#d.x100 ? s.width * this.#d.x100 : Math.round((n.width - s.width) / 2), a = this.#d?.iPos?.height !== n.height || this.#d.y100 ? s.height * this.#d.y100 : Math.round((n.height + s.height) / -2), l = oo(this.#c, "z-index");
    if (w(e)) {
      let { x: C, y: S, z: M } = { ...e };
      T(C) && (r = C), T(S) && (a = S), T(M) && (l = M), this.#d = { x: C, y: S, z: l };
    }
    this.#c.style["z-index"] = `${l}`;
    const h = this.#c.clientWidth;
    r + h * i > this.#o.offsetWidth ? r = this.#o.offsetWidth - h * i : r < (h - h * i) * -1 && (r = (h - h * i) * -1);
    const p = this.#c.clientHeight;
    a < n.height * -1 ? a = n.height * -1 : a > p * i * -1 && (a = p * i * -1), r = Math.floor(r), a = Math.floor(a), this.#c.style.left = `${r}px`, this.#c.style.top = `${a}px`;
    const f = r / s.width, g = a / s.height;
    this.#d = {
      px: r,
      py: a,
      x100: f,
      y100: g,
      iPos: n
    };
  }
  setDimensions(e) {
    if (!w(e))
      return !1;
    T(e?.w) && (this.#c.style.width = `${e.w}px`), T(e?.h) && (this.#c.style.height = `${e.h}px`);
  }
  setProperties(e) {
    if (!w(e))
      return !1;
    if (b(e?.title) && (this.#h.innerHTML = e.title), b(e?.content) && (this.#u.innerHTML = e.content), this.setDimensions({ ...e?.dimensions }), this.position({ ...e?.position }), w(e?.styles)) {
      const i = (s, n) => {
        if (!w(n))
          return !1;
        const r = "el" + s.charAt(0).toUpperCase() + s.slice(1);
        if (w(this[r]))
          for (let a in n)
            this[r].style.p = n[a];
      };
      for (let s of Object.keys(e.styles))
        i(s, e.styles[s]);
    }
    return e;
  }
  setOpen() {
    ee.currentActive = this, this.#s = Ge.opened, this.#c.style.display = "block", this.#c.style.zindex = "10", this.#c.classList.add("active");
  }
  setClose() {
    ee.currentActive = null, this.#s = Ge.closed, this.#c.style.display = "none", this.#c.classList.remove("active"), document.removeEventListener("click", this.#m.click);
  }
  remove() {
    return ee.destroy(this.id);
  }
  open(e = {}) {
    return ee.currentActive === this && this.state === Ge.opened || (w(e.params) && (this.params = e.params), this.setOpen(), this.setProperties(e), this.emit("window_opened", this.id), this.emit(`window_opened_${this.parent.id}`, this.id), setTimeout(() => {
      this.#m.click = this.onOutsideClickListener.bind(this), document.addEventListener("click", this.#m.click), this.#g;
    }, 250)), !0;
  }
  close() {
    return this.#s !== Ge.closed && (this.setClose(), this.emit("window_closed", this.id), this.emit(`window_closed_${this.parent.id}`, this.id)), !0;
  }
}
const fa = 5;
class St {
  static standard = new St("standard");
  static subcomponent = new St("subcomponent");
  constructor(e) {
    this.name = e;
  }
}
class gt {
  #e = !0;
  #t = fa;
  constructor(e = !0, i = 5) {
    this.enable = e, this.period = I(i) ? i : 5;
  }
  set enable(e) {
    this.#e = F(e) ? e : !0;
  }
  get enable() {
    return this.#e;
  }
  set period(e) {
    this.#t = I(e) ? e : 5;
  }
  get period() {
    return this.#t;
  }
}
class le extends W {
  static #e = 0;
  static get cnt() {
    return ++le.#e;
  }
  static get isIndicator() {
    return !0;
  }
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h;
  #p;
  #u;
  #g;
  #d;
  #f = "indicator";
  #w;
  #E;
  #y = [0, 0];
  #v;
  #m;
  #C = 2;
  #T = {};
  #x;
  #P;
  #b;
  #S;
  definition = {
    input: {},
    output: {},
    meta: {
      input: {},
      output: {}
    }
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, void 0, r, a);
    const l = a.overlay;
    this.#i = le.cnt, this.#u = a, this.#g = l, this.#w = this.core.TALib, this.#E = this.xAxis.range, this.id = l?.id || se(this.shortName), this.legendName = l?.legendName, this.#a = F(l?.legendVisibility) ? l.legendVisibility : !0, this.style = l?.settings?.style ? { ...this.constructor.defaultStyle, ...l.settings.style } : { ...this.constructor.defaultStyle, ...n.style };
    const h = { title: `${this.legendName} Config`, content: "", params: l, parent: this };
    switch (this.#b = this.core.WidgetsG.insert("ConfigDialogue", h), l.settings?.context) {
      case "subcomponent":
        this.#n = St.subcomponent;
      case "standard":
      default:
        this.#n = St.standard;
    }
  }
  get id() {
    return this.#t || `${this.core.id}-${this.chartPaneID}-${this.shortName}-${this.#i}`;
  }
  set id(e) {
    this.#t = Be(new String(e));
  }
  get context() {
    return this.#n;
  }
  get chartPane() {
    return this.core.ChartPanes.get(this.chartPaneID);
  }
  get chartPaneID() {
    return this.#u.overlay.paneID;
  }
  get primaryPane() {
    return this.#c || this.constructor.primaryPane;
  }
  set primaryPane(e) {
    this.#c = e;
  }
  get scaleOverlay() {
    return this.#h;
  }
  set scaleOverlay(e) {
    this.#h = e;
  }
  get plots() {
    return this.#p;
  }
  set plots(e) {
    this.#p = e;
  }
  get params() {
    return this.#u;
  }
  get Timeline() {
    return this.core.Timeline;
  }
  get scale() {
    return this.parent.scale;
  }
  get type() {
    return this.#f;
  }
  get overlay() {
    return this.#g;
  }
  get legend() {
    return this.chart.legend.list[this.#x];
  }
  get legendID() {
    return this.#x;
  }
  get legendName() {
    return this.#o || this.shortName || this.#t;
  }
  set legendName(e) {
    this.setLegendName(e);
  }
  set legendVisibility(e) {
    this.setLegendVisibility(e);
  }
  get indicator() {
    return this.#d;
  }
  get TALib() {
    return this.#w;
  }
  get range() {
    return this.core.range;
  }
  set setNewValue(e) {
    this.#v = e;
  }
  set setUpdateValue(e) {
    this.#m = e;
  }
  set precision(e) {
    this.#C = e;
  }
  get precision() {
    return this.#C;
  }
  set style(e) {
    w(e) && (this.#T = e);
  }
  get style() {
    return this.#T;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  get isIndicator() {
    return le.isIndicator;
  }
  get isPrimary() {
    return this.chart.isPrimary;
  }
  get status() {
    return this.#P;
  }
  get configDialogue() {
    return this.#b;
  }
  set value(e) {
    const i = this.core.timeData.timeFrameMS;
    let s = Math.floor(new Date(e[Se.t]) / i) * i;
    e[Se.t] = s, this.#y[Se.t] !== e[Se.t] ? (this.#y[Se.t] = e[Se.t], this.#v(e)) : this.#m(e);
  }
  get value() {
    return this.#y;
  }
  setLegendName(e) {
    this.#o = b(e) ? e : this.shortName || this.#t, this.chart.legend.modify(this.#x, { legendName: e });
  }
  setLegendVisibility(e) {
    this.#a = !!e, this.chart.legend.modify(this.#x, { legendVisibility: !!e });
  }
  setDefinitionValue(e, i) {
    let s = Object.keys(this.definition.input);
    if (s.includes(e))
      return this.definition.input[e] = i * 1, "input";
    if (s = Object.keys(this.style), s.includes(e))
      return this.style[e] = i, "style";
  }
  init(e) {
    const i = this.#u.overlay;
    this.defineIndicator(i?.settings, e), this.calcIndicatorHistory(), this.setNewValue = (s) => {
      this.newValue(s);
    }, this.setUpdateValue = (s) => {
      this.updateValue(s);
    }, this.#n === St.standard && (this.addLegend(), this.#b.start(), this.eventsListen());
  }
  destroy() {
    if (this.#P !== "destroyed") {
      if (!this.chartPane.indicatorDeleteList[this.id]) {
        this.core.warn(`Cannot "destroy()": ${this.id} !!! Use "indicator.remove()" or "chart.removeIndicator()" instead.`);
        return;
      }
      this.core.hub.expunge(this), this.chart.legend.remove(this.#x), this.clear(), this.core.MainPane.draw(void 0, !0), this.chartPane.graph.removeOverlay(this.id), w(this.#S) && this.core.WidgetsG.delete(this.#S.id), super.destroy(), this.core.state.removeIndicator(this.id), this.#P = "destroyed";
    }
  }
  remove() {
    this.core.log(`Deleting indicator: ${this.id} from: ${this.chartPaneID}`), this.chart.type === "primaryPane" || Object.keys(this.chart.indicators).length > 1 ? this.emit(`${this.chartPaneID}_removeIndicator`, { id: this.id, paneID: this.chartPaneID }) : this.chart.remove();
  }
  visible(e) {
    return F(e) && (this.emit(`${this.chartPaneID}_visibleIndicator`, { id: this.id, paneID: this.chartPaneID, visible: e }), this.chartPane.indicators[this.id].layer.visible = e, this.draw()), this.chartPane.indicators[this.id].layer.visible;
  }
  settings(e) {
    return w(e) && (w(e?.config) && (this.params.overlay.settings = { ...this.params.overlay.settings, ...e.config }), w(e?.style) && (this.style = { ...this.style, ...e.style }), this.draw()), {
      config: this.params.overlay.settings,
      style: this.style,
      defaultStyle: this?.defaultStyle,
      plots: this.plots,
      precision: this.precision,
      definition: this.definition
    };
  }
  eventsListen() {
    this.on(Je, this.onStreamUpdate, this), this.on(`window_opened_${this.id}`, this.onConfigDialogueOpen, this), this.on(`window_closed_${this.id}`, this.onConfigDialogueCancel, this), this.on(`window_submit_${this.id}`, this.onConfigDialogueSubmit, this), this.on(`window_cancel_${this.id}`, this.onConfigDialogueCancel, this), this.on(`window_default_${this.id}`, this.onConfigDialogueDefault, this);
  }
  on(e, i, s = this) {
    this.core.on(e, i, s);
  }
  off(e, i, s = this) {
    this.core.off(e, i, s);
  }
  emit(e, i) {
    this.core.emit(e, i);
  }
  onStreamNewValue(e) {
  }
  onStreamUpdate(e) {
    this.value = e;
  }
  onLegendAction(e) {
    const i = this.chart.legend.onPointerClick(e.currentTarget);
    switch (i.icon) {
      case "up":
        return;
      case "down":
        return;
      case "visible":
        this.onVisibility(i);
        return;
      case "notVisible":
        this.onVisibility(i);
        return;
      case "remove":
        this.remove();
        return;
      case "config":
        this.invokeSettings();
        return;
      default:
        return;
    }
  }
  onVisibility(e) {
    this.visible(!this.visible()), e.parent.classList.toggle("visible"), e.parent.classList.toggle("notvisible");
  }
  onConfigDialogueOpen(e) {
    if (this.#b.state === Ge.opened)
      return;
    this.#b.setOpen();
    const i = this.#b.contentFields;
    for (let s in i)
      for (let n of i[s])
        n.classList.contains("subject") && n.getAttribute("data-oldval") !== n.value && n.setAttribute("data-oldval", n.value);
  }
  onConfigDialogueSubmit(e) {
    this.#b.setClose();
    let i, s = !1;
    const n = this.#b.contentFields;
    for (let r in n)
      for (let a of n[r])
        a.classList.contains("subject") && (a.setAttribute("data-oldval", a.value), i = this.setDefinitionValue(a.id, a.value), s = s || i == "input");
    s && (this.overlay.data.length = 0, this.calcIndicatorHistory()), this.setRefresh(), this.draw();
  }
  onConfigDialogueCancel(e) {
    this.#b.setClose();
    const i = this.#b.contentFields;
    for (let s in i)
      for (let n of i[s])
        n.classList.contains("subject") && (n.value = n.getAttribute("data-oldval"));
    this.setRefresh(), this.draw();
  }
  onConfigDialogueDefault(e) {
    const i = this.#b.contentFields;
    for (let s in i)
      for (let n of i[s])
        if (n.classList.contains("subject")) {
          let r = n.getAttribute("data-default");
          n.value = r, this.style[n.id] = r;
        }
    this.calcIndicatorHistory(), this.setRefresh(), this.draw();
  }
  invokeSettings(e = {}) {
    let i;
    if (O(e?.fn)) {
      if (i = e.fn(this), e?.own)
        return i;
    } else if (O(this.core.config.callbacks?.indicatorSettings?.fn) && (i = this.core.config.callbacks.indicatorSettings.fn(this), this.core.config.callbacks?.indicatorSettings?.own))
      return i;
    this.core.log(`invokeSettings: ${this.id}`);
    const s = this.#b;
    if (s.update) {
      if (!O(this.configInputs))
        return this.core.error(`ERROR: Indicator ${this.name} does not provide configInputs() required for the settings dialogue`), !1;
      const { html: n, modifiers: r } = s.configBuild(this.configInputs()), a = `${this.shortName} Config`;
      s.setTitle(a), s.setContent(n, r), s.update = !1, this.#S = s.elContent.querySelector("tradex-colourpicker");
    }
    return s.state.name === "closed" ? s.open() : s.setOpen(), !0;
  }
  configInputs() {
    const s = { "No Config": { tab1: `Indicator ${this.name || this.shortName || this.#t} is not configurable.` } };
    let n = {}, r = this?.definition?.meta;
    if (!w(r) && !w(this?.style) && !w(this?.definition?.input))
      return s;
    for (let a in r)
      n[a] = r[a];
    if (Object.keys(n).length == 0)
      n = s;
    else
      for (let a in n)
        for (let l in n[a]) {
          let h = n[a][l], p = Object.keys(h);
          p.includes("data-oldval") || (h["data-oldval"] = h.value), p.includes("data-default") || (h["data-default"] = h.default ? h.default : h.value);
        }
    return n;
  }
  buildConfigInputTab() {
    const e = this.definition.input;
    let i = {};
    for (let s in e) {
      let n = e[s];
      switch (Ls(n)) {
        case "number":
          this.configInputNumber(e, i, s);
          break;
        case "object":
          this.configInputObject(e, i, s);
          break;
      }
    }
    return Object.keys(i).length == 0 && (i = !1), i;
  }
  buildConfigStyleTab() {
    const e = {}, i = {
      event: "change",
      fn: (l) => {
        this.style[l.target.id] = l.target.value, this.setRefresh(), this.draw();
      }
    }, s = {
      event: "click",
      fn: (l) => {
        l.preventDefault(), this.#S.open(l.target.value, l.target);
        let h = l.target.offsetLeft - this.#S.width, p = this.#S.offsetTop - l.target.top;
        this.#S.position(h, p, this.core);
      }
    }, n = {
      event: "pointerover",
      fn: (l) => {
        l.target.style.border = "1px solid #f00;";
      }
    }, r = {
      event: "pointerout",
      fn: (l) => {
        l.target.style.border = "none;";
      }
    };
    let a;
    for (let l in this?.style) {
      let h = "", p = this.style[l], f = "", g = Ls(p);
      switch (g) {
        case "number":
          f = "0", h = p, a = [i];
          break;
        case "string":
          let S = new ai(p);
          g = S.isValid ? "text" : "", p = S.isValid ? S.hexa : p, h = p, a = [i, s, n, r];
          break;
      }
      const C = (S) => {
        this.configDialogue.provideInputColor(S, `#${l}`), this.configDialogue.provideEventListeners(`#${l}`, a)(S);
      };
      e[l] = {
        entry: l,
        label: l,
        type: g,
        value: p,
        "data-oldval": p,
        "data-default": h,
        default: h,
        min: f,
        $function: C
      };
    }
    return e;
  }
  configInputNumber(e, i, s) {
    i[s] = {
      entry: s,
      label: s,
      type: "number",
      value: e[s],
      default: e[s],
      "data-default": e[s],
      "data-oldval": e[s],
      $function: this.configDialogue.provideEventListeners(
        `#${s}`,
        [{
          event: "change",
          fn: (n) => {
          }
        }]
      )
    };
  }
  configInputObject(e, i, s) {
    s instanceof gt && (this.configInputNumber(e, i, s.period), i.$function = function(n) {
      const r = n.querySelector(`#${s}`), a = document.createElement("input");
      a.id = `"enable${s}`, a.checked = s.enable, a.addEventListener("change", (l) => {
        l.currentTarget.checked ? console.log(`enable ${l.currentTarget.id}`) : console.log(`disable ${l.currentTarget.id}`);
      }), r && r.insertAdjacentElement("beforebegin", a);
    });
  }
  defineIndicator(e, i) {
    const s = {
      input: {},
      output: {},
      meta: {
        input: {},
        style: {}
      }
    };
    let n;
    if (w(this.definition) ? (n = this.definition, n.input = w(n.input) ? n.input : {}, n.output = w(n.output) ? n.output : {}, n.meta = w(n.meta) ? n.meta : s.meta, n.meta.input = w(n.meta.input) ? n.meta.input : {}, n.meta.style = w(n.meta.style) ? n.meta.style : {}) : n = this.definition = s, e = w(e) ? e : {}, i = w(i) ? i : { outputs: [], options: [] }, Object.keys(n?.meta.style).length == 0 && Object.keys(this.style).length > 0 && (n.meta.style = this.buildConfigStyleTab()), Object.keys(n.output).length == 0)
      for (let l of i.outputs)
        n.output[l.name] = [];
    for (let l in n.output)
      P(n.output[l]) || (n.output[l] = []);
    const r = { ...n.input, ...e };
    delete r.style, n.input = r;
    const a = (l, h) => {
      for (let p of h) {
        typeof l[p.name] !== p.type && (l[p.name] = p.defaultValue), "range" in h && (l[p.name] = R(l[p.name], p.range.min, p.range.max));
        const f = {
          entry: p?.name,
          label: p?.displayName,
          type: p?.type,
          value: l[p.name],
          default: p?.defaultValue,
          "data-oldval": l[p.name],
          "data-default": p?.defaultValue,
          max: p?.range?.max,
          min: p?.range?.min,
          title: p?.hint
        };
        n.meta.input[p.name] = { ...f, ...n.meta.input[p.name] }, p.name in n.input && (n.meta.input[p.name].value = n.input[p.name]);
      }
    };
    n.meta.input = this.buildConfigInputTab() || {};
    for (let l of i.options)
      l.name in r ? a(r, i.options) : w(r?.definition?.input) && l.name in r.definition.input && a(r.definition.input, i.options);
    for (let l in n.meta)
      Object.keys(n.meta[l]).length == 0 && delete n.meta[l];
  }
  addLegend() {
    let e = {
      id: this.id,
      title: this.legendName,
      visible: this.#a,
      type: "indicator",
      parent: this,
      source: this.legendInputs.bind(this)
    };
    this.#x = this.chart.legend.add(e);
  }
  legendInputs(e = this.chart.cursorPos) {
    const i = [this.style.stroke];
    let n = this.Timeline.xPos2Index(e[0]) - (this.range.data.length - this.overlay.data.length), r = R(this.overlay.data.length - 1, 0, 1 / 0);
    return n = R(n, 0, r), { c: n, colours: i };
  }
  indicatorInput(e, i) {
    let s = {
      inReal: [],
      open: [],
      high: [],
      low: [],
      close: [],
      volume: []
    };
    do
      s.inReal.push(this.range.value(e)[Se.c]), s.open.push(this.range.value(e)[Se.o]), s.high.push(this.range.value(e)[Se.h]), s.low.push(this.range.value(e)[Se.l]), s.close.push(this.range.value(e)[Se.c]), s.volume.push(this.range.value(e)[Se.v]);
    while (e++ < i);
    return s;
  }
  regeneratePlots(e) {
    return e.map((i, s) => {
      const n = s + 1;
      return {
        key: `${this.shortName}${n}`,
        title: `${this.shortName}${n}: `,
        type: "line"
      };
    });
  }
  TALibParams() {
    let e = this.range.dataLength, i = this.definition.input.timePeriod, s = e - i, n = this.indicatorInput(s, e);
    return n.inReal.find((a) => a === null) ? !1 : { timePeriod: i, ...n };
  }
  calcIndicator(e, i = {}, s = this.range) {
    if (this.chart.status == "destroyed" || !b(e) || !(e in this.TALib) || !w(s) || !this.core.TALibReady)
      return !1;
    i.timePeriod = i.timePeriod || this.definition.input.timePeriod || fa;
    let n, r, a = i.timePeriod, l = this.overlay.data;
    if (s instanceof zi)
      n = 0, r = s.dataLength - a + 1;
    else if ("indexStart" in s || "indexEnd" in s || "tsStart" in s || "tsEnd" in s)
      n = s.indexStart || this.Timeline.t2Index(s.tsStart || 0) || 0, r = s.indexEnd || this.Timeline.t2Index(s.tsEnd) || this.range.Length - 1;
    else
      return !1;
    if (l.length != 0)
      if (l.length + a !== s.dataLength)
        if (l[0][0] > s.value(a)[0])
          n = 0, r = s.getTimeIndex(l[0][0]) - a, r = R(r, a, s.dataLength - 1);
        else if (l[l.length - 1][0] < s.value(s.dataLength - 1)[0])
          n = l.length - 1 + a, n = R(n, 0, s.dataLength), r = s.dataLength - 1;
        else
          return !1;
      else
        return !1;
    if (r - n < a)
      return !1;
    let h = [], p, f, g, C;
    for (; n < r; ) {
      C = this.indicatorInput(n, n + a), i = { ...i, ...C }, g = this.TALib[e](i), f = [], p = 0;
      for (let S in this.definition.output)
        f[p++] = g[S][0];
      h.push([s.value(n + a - 1)[0], ...f]), n++;
    }
    return h;
  }
  calcIndicatorHistory() {
    const e = () => {
      let i = this.overlay.data;
      if (P(i) && i.length > 0)
        return;
      const s = this.calcIndicator(this.libName, this.definition.input, this.range);
      if (s) {
        new Set(s), new Set(i);
        let n, r, a = {};
        if (!P(i) || i.length == 0) {
          this.overlay.data = s;
          return;
        } else
          s[0][0] < i[0][0] ? (n = s, r = i) : s[s.length - 1][0] > i[i.length - 1][0] && (n = i, r = s);
        for (let l of n)
          a[l[0]] = l;
        for (let l of r)
          a[l[0]] = l;
        this.overlay.data = Object.values(a), this.setRefresh();
      }
    };
    this.core.TALibReady ? e() : this.core.talibAwait.push(e.bind(this));
  }
  calcIndicatorStream(e, i, s = this.range) {
    if (this.chart.status == "destroyed" || !this.core.TALibReady || !b(e) || !(e in this.TALib) || !(s instanceof zi) || s.dataLength < this.definition.input.timePeriod)
      return !1;
    let n = this.TALib[e](i), r = s.dataLength, a = s.value(r)[0], l = [], h = 0;
    for (let p in this.definition.output)
      l[h++] = n[p][0];
    return [a, ...l];
  }
  newValue(e) {
    let i = this.TALibParams();
    if (!i)
      return !1;
    let s = this.calcIndicatorStream(this.libName, i);
    if (!s)
      return !1;
    this.overlay.data.push(s), this.target.setPosition(this.core.scrollPos, 0), this.doDraw = !0, this.draw(this.range);
  }
  updateValue(e) {
    let i = this.overlay.data.length - 1, s = this.TALibParams();
    if (!s)
      return !1;
    let n = this.calcIndicatorStream(this.libName, s);
    if (!n)
      return !1;
    this.overlay.data[i] = n, this.target.setPosition(this.core.scrollPos, 0), this.doDraw = !0, this.draw(this.range);
  }
  plot(e, i, s) {
    super.plot(e, i, s);
  }
  draw() {
  }
  updated() {
    this.setRefresh(), super.updated();
  }
}
const Yu = {
  name: "ACCBANDS",
  camelCaseName: "accBands",
  group: "Overlap Studies",
  description: "Acceleration Bands",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 20,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "upperBand",
    type: "number",
    plot: "limit_upper"
  }, {
    name: "middleBand",
    type: "number",
    plot: "line"
  }, {
    name: "lowerBand",
    type: "number",
    plot: "limit_lower"
  }]
}, ju = {
  name: "ACOS",
  camelCaseName: "acos",
  group: "Math Transform",
  description: "Vector Trigonometric ACos",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Xu = {
  name: "AD",
  camelCaseName: "ad",
  group: "Volume Indicators",
  description: "Chaikin A/D Line",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }, {
    name: "volume",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ku = {
  name: "ADD",
  camelCaseName: "add",
  group: "Math Operators",
  description: "Vector Arithmetic Add",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Zu = {
  name: "ADOSC",
  camelCaseName: "adOsc",
  group: "Volume Indicators",
  description: "Chaikin A/D Oscillator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }, {
    name: "volume",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 3,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 10,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Qu = {
  name: "ADX",
  camelCaseName: "adx",
  group: "Momentum Indicators",
  description: "Average Directional Movement Index",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ju = {
  name: "ADXR",
  camelCaseName: "adxr",
  group: "Momentum Indicators",
  description: "Average Directional Movement Index Rating",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ed = {
  name: "APO",
  camelCaseName: "apo",
  group: "Momentum Indicators",
  description: "Absolute Price Oscillator",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 12,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 26,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ga = {
  name: "AROON",
  camelCaseName: "aroon",
  group: "Momentum Indicators",
  description: "Aroon",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "aroonDown",
    type: "number",
    plot: "line_dash"
  }, {
    name: "aroonUp",
    type: "number",
    plot: "line"
  }]
}, td = {
  name: "AROONOSC",
  camelCaseName: "aroonOsc",
  group: "Momentum Indicators",
  description: "Aroon Oscillator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, id = {
  name: "ASIN",
  camelCaseName: "asin",
  group: "Math Transform",
  description: "Vector Trigonometric ASin",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, sd = {
  name: "ATAN",
  camelCaseName: "atan",
  group: "Math Transform",
  description: "Vector Trigonometric ATan",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, nd = {
  name: "ATR",
  camelCaseName: "atr",
  group: "Volatility Indicators",
  description: "Average True Range",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, rd = {
  name: "AVGDEV",
  camelCaseName: "avgDev",
  group: "Price Transform",
  description: "Average Deviation",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, od = {
  name: "AVGPRICE",
  camelCaseName: "avgPrice",
  group: "Price Transform",
  description: "Average Price",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ya = {
  name: "BBANDS",
  camelCaseName: "bbands",
  group: "Overlap Studies",
  description: "Bollinger Bands",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "nbDevUp",
    displayName: "Deviations up",
    defaultValue: 2,
    hint: "Deviation multiplier for upper band",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }, {
    name: "nbDevDn",
    displayName: "Deviations down",
    defaultValue: 2,
    hint: "Deviation multiplier for lower band",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "upperBand",
    type: "number",
    plot: "limit_upper"
  }, {
    name: "middleBand",
    type: "number",
    plot: "line"
  }, {
    name: "lowerBand",
    type: "number",
    plot: "limit_lower"
  }]
}, ad = {
  name: "BETA",
  camelCaseName: "beta",
  group: "Statistic Functions",
  description: "Beta",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ld = {
  name: "BOP",
  camelCaseName: "bop",
  group: "Momentum Indicators",
  description: "Balance Of Power",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, hd = {
  name: "CCI",
  camelCaseName: "cci",
  group: "Momentum Indicators",
  description: "Commodity Channel Index",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, cd = {
  name: "CDL2CROWS",
  camelCaseName: "cdl2Crows",
  group: "Pattern Recognition",
  description: "Two Crows",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ud = {
  name: "CDL3BLACKCROWS",
  camelCaseName: "cdl3BlackCrows",
  group: "Pattern Recognition",
  description: "Three Black Crows",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, dd = {
  name: "CDL3INSIDE",
  camelCaseName: "cdl3Inside",
  group: "Pattern Recognition",
  description: "Three Inside Up/Down",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, pd = {
  name: "CDL3LINESTRIKE",
  camelCaseName: "cdl3LineStrike",
  group: "Pattern Recognition",
  description: "Three-Line Strike ",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, md = {
  name: "CDL3OUTSIDE",
  camelCaseName: "cdl3Outside",
  group: "Pattern Recognition",
  description: "Three Outside Up/Down",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, fd = {
  name: "CDL3STARSINSOUTH",
  camelCaseName: "cdl3StarsInSouth",
  group: "Pattern Recognition",
  description: "Three Stars In The South",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, gd = {
  name: "CDL3WHITESOLDIERS",
  camelCaseName: "cdl3WhiteSoldiers",
  group: "Pattern Recognition",
  description: "Three Advancing White Soldiers",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, yd = {
  name: "CDLABANDONEDBABY",
  camelCaseName: "cdlAbandonedBaby",
  group: "Pattern Recognition",
  description: "Abandoned Baby",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, vd = {
  name: "CDLADVANCEBLOCK",
  camelCaseName: "cdlAdvanceBlock",
  group: "Pattern Recognition",
  description: "Advance Block",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, wd = {
  name: "CDLBELTHOLD",
  camelCaseName: "cdlBeltHold",
  group: "Pattern Recognition",
  description: "Belt-hold",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, bd = {
  name: "CDLBREAKAWAY",
  camelCaseName: "cdlBreakaway",
  group: "Pattern Recognition",
  description: "Breakaway",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, xd = {
  name: "CDLCLOSINGMARUBOZU",
  camelCaseName: "cdlClosingMarubozu",
  group: "Pattern Recognition",
  description: "Closing Marubozu",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Cd = {
  name: "CDLCONCEALBABYSWALL",
  camelCaseName: "cdlConcealBabysWall",
  group: "Pattern Recognition",
  description: "Concealing Baby Swallow",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Td = {
  name: "CDLCOUNTERATTACK",
  camelCaseName: "cdlCounterAttack",
  group: "Pattern Recognition",
  description: "Counterattack",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Sd = {
  name: "CDLDARKCLOUDCOVER",
  camelCaseName: "cdlDarkCloudCover",
  group: "Pattern Recognition",
  description: "Dark Cloud Cover",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.5,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ed = {
  name: "CDLDOJI",
  camelCaseName: "cdlDoji",
  group: "Pattern Recognition",
  description: "Doji",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Pd = {
  name: "CDLDOJISTAR",
  camelCaseName: "cdlDojiStar",
  group: "Pattern Recognition",
  description: "Doji Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Md = {
  name: "CDLDRAGONFLYDOJI",
  camelCaseName: "cdlDragonflyDoji",
  group: "Pattern Recognition",
  description: "Dragonfly Doji",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ld = {
  name: "CDLENGULFING",
  camelCaseName: "cdlEngulfing",
  group: "Pattern Recognition",
  description: "Engulfing Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ad = {
  name: "CDLEVENINGDOJISTAR",
  camelCaseName: "cdlEveningDojiStar",
  group: "Pattern Recognition",
  description: "Evening Doji Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Od = {
  name: "CDLEVENINGSTAR",
  camelCaseName: "cdlEveningStar",
  group: "Pattern Recognition",
  description: "Evening Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Nd = {
  name: "CDLGAPSIDESIDEWHITE",
  camelCaseName: "cdlGapSideSideWhite",
  group: "Pattern Recognition",
  description: "Up/Down-gap side-by-side white lines",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Dd = {
  name: "CDLGRAVESTONEDOJI",
  camelCaseName: "cdlGravestoneDoji",
  group: "Pattern Recognition",
  description: "Gravestone Doji",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Id = {
  name: "CDLHAMMER",
  camelCaseName: "cdlHammer",
  group: "Pattern Recognition",
  description: "Hammer",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Rd = {
  name: "CDLHANGINGMAN",
  camelCaseName: "cdlHangingMan",
  group: "Pattern Recognition",
  description: "Hanging Man",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, kd = {
  name: "CDLHARAMI",
  camelCaseName: "cdlHarami",
  group: "Pattern Recognition",
  description: "Harami Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, _d = {
  name: "CDLHARAMICROSS",
  camelCaseName: "cdlHaramiCross",
  group: "Pattern Recognition",
  description: "Harami Cross Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, $d = {
  name: "CDLHIGHWAVE",
  camelCaseName: "cdlHignWave",
  group: "Pattern Recognition",
  description: "High-Wave Candle",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Hd = {
  name: "CDLHIKKAKE",
  camelCaseName: "cdlHikkake",
  group: "Pattern Recognition",
  description: "Hikkake Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Bd = {
  name: "CDLHIKKAKEMOD",
  camelCaseName: "cdlHikkakeMod",
  group: "Pattern Recognition",
  description: "Modified Hikkake Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ud = {
  name: "CDLHOMINGPIGEON",
  camelCaseName: "cdlHomingPigeon",
  group: "Pattern Recognition",
  description: "Homing Pigeon",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, zd = {
  name: "CDLIDENTICAL3CROWS",
  camelCaseName: "cdlIdentical3Crows",
  group: "Pattern Recognition",
  description: "Identical Three Crows",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Vd = {
  name: "CDLINNECK",
  camelCaseName: "cdlInNeck",
  group: "Pattern Recognition",
  description: "In-Neck Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Fd = {
  name: "CDLINVERTEDHAMMER",
  camelCaseName: "cdlInvertedHammer",
  group: "Pattern Recognition",
  description: "Inverted Hammer",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Wd = {
  name: "CDLKICKING",
  camelCaseName: "cdlKicking",
  group: "Pattern Recognition",
  description: "Kicking",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Gd = {
  name: "CDLKICKINGBYLENGTH",
  camelCaseName: "cdlKickingByLength",
  group: "Pattern Recognition",
  description: "Kicking - bull/bear determined by the longer marubozu",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, qd = {
  name: "CDLLADDERBOTTOM",
  camelCaseName: "cdlLadderBottom",
  group: "Pattern Recognition",
  description: "Ladder Bottom",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Yd = {
  name: "CDLLONGLEGGEDDOJI",
  camelCaseName: "cdlLongLeggedDoji",
  group: "Pattern Recognition",
  description: "Long Legged Doji",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, jd = {
  name: "CDLLONGLINE",
  camelCaseName: "cdlLongLine",
  group: "Pattern Recognition",
  description: "Long Line Candle",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Xd = {
  name: "CDLMARUBOZU",
  camelCaseName: "cdlMarubozu",
  group: "Pattern Recognition",
  description: "Marubozu",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Kd = {
  name: "CDLMATCHINGLOW",
  camelCaseName: "cdlMatchingLow",
  group: "Pattern Recognition",
  description: "Matching Low",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Zd = {
  name: "CDLMATHOLD",
  camelCaseName: "cdlMatHold",
  group: "Pattern Recognition",
  description: "Mat Hold",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.5,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Qd = {
  name: "CDLMORNINGDOJISTAR",
  camelCaseName: "cdlMorningDojiStar",
  group: "Pattern Recognition",
  description: "Morning Doji Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Jd = {
  name: "CDLMORNINGSTAR",
  camelCaseName: "cdlMorningStar",
  group: "Pattern Recognition",
  description: "Morning Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "penetration",
    displayName: "Penetration",
    defaultValue: 0.3,
    hint: "Percentage of penetration of a candle within another candle",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, e0 = {
  name: "CDLONNECK",
  camelCaseName: "cdlOnNeck",
  group: "Pattern Recognition",
  description: "On-Neck Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, t0 = {
  name: "CDLPIERCING",
  camelCaseName: "cdlPiercing",
  group: "Pattern Recognition",
  description: "Piercing Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, i0 = {
  name: "CDLRICKSHAWMAN",
  camelCaseName: "cdlRickshawMan",
  group: "Pattern Recognition",
  description: "Rickshaw Man",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, s0 = {
  name: "CDLRISEFALL3METHODS",
  camelCaseName: "cdlRiseFall3Methods",
  group: "Pattern Recognition",
  description: "Rising/Falling Three Methods",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, n0 = {
  name: "CDLSEPARATINGLINES",
  camelCaseName: "cdlSeperatingLines",
  group: "Pattern Recognition",
  description: "Separating Lines",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, r0 = {
  name: "CDLSHOOTINGSTAR",
  camelCaseName: "cdlShootingStar",
  group: "Pattern Recognition",
  description: "Shooting Star",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, o0 = {
  name: "CDLSHORTLINE",
  camelCaseName: "cdlShortLine",
  group: "Pattern Recognition",
  description: "Short Line Candle",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, a0 = {
  name: "CDLSPINNINGTOP",
  camelCaseName: "cdlSpinningTop",
  group: "Pattern Recognition",
  description: "Spinning Top",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, l0 = {
  name: "CDLSTALLEDPATTERN",
  camelCaseName: "cdlStalledPattern",
  group: "Pattern Recognition",
  description: "Stalled Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, h0 = {
  name: "CDLSTICKSANDWICH",
  camelCaseName: "cdlStickSandwhich",
  group: "Pattern Recognition",
  description: "Stick Sandwich",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, c0 = {
  name: "CDLTAKURI",
  camelCaseName: "cdlTakuri",
  group: "Pattern Recognition",
  description: "Takuri (Dragonfly Doji with very long lower shadow)",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, u0 = {
  name: "CDLTASUKIGAP",
  camelCaseName: "cdlTasukiGap",
  group: "Pattern Recognition",
  description: "Tasuki Gap",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, d0 = {
  name: "CDLTHRUSTING",
  camelCaseName: "cdlThrusting",
  group: "Pattern Recognition",
  description: "Thrusting Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, p0 = {
  name: "CDLTRISTAR",
  camelCaseName: "cdlTristar",
  group: "Pattern Recognition",
  description: "Tristar Pattern",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, m0 = {
  name: "CDLUNIQUE3RIVER",
  camelCaseName: "cdlUnique3River",
  group: "Pattern Recognition",
  description: "Unique 3 River",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, f0 = {
  name: "CDLUPSIDEGAP2CROWS",
  camelCaseName: "cdlUpsideGap2Crows",
  group: "Pattern Recognition",
  description: "Upside Gap Two Crows",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, g0 = {
  name: "CDLXSIDEGAP3METHODS",
  camelCaseName: "cdlXSideGap3Methods",
  group: "Pattern Recognition",
  description: "Upside/Downside Gap Three Methods",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, y0 = {
  name: "CEIL",
  camelCaseName: "ceil",
  group: "Math Transform",
  description: "Vector Ceil",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, v0 = {
  name: "CMO",
  camelCaseName: "cmo",
  group: "Momentum Indicators",
  description: "Chande Momentum Oscillator",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, w0 = {
  name: "CORREL",
  camelCaseName: "correl",
  group: "Statistic Functions",
  description: "Pearson's Correlation Coefficient (r)",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, b0 = {
  name: "COS",
  camelCaseName: "cos",
  group: "Math Transform",
  description: "Vector Trigonometric Cos",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, x0 = {
  name: "COSH",
  camelCaseName: "cosh",
  group: "Math Transform",
  description: "Vector Trigonometric Cosh",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, C0 = {
  name: "DEMA",
  camelCaseName: "dema",
  group: "Overlap Studies",
  description: "number Exponential Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, T0 = {
  name: "DIV",
  camelCaseName: "div",
  group: "Math Operators",
  description: "Vector Arithmetic Div",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, S0 = {
  name: "DX",
  camelCaseName: "dx",
  group: "Momentum Indicators",
  description: "Directional Movement Index",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, va = {
  name: "EMA",
  camelCaseName: "ema",
  group: "Overlap Studies",
  description: "Exponential Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, E0 = {
  name: "EXP",
  camelCaseName: "exp",
  group: "Math Transform",
  description: "Vector Arithmetic Exp",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, P0 = {
  name: "FLOOR",
  camelCaseName: "floor",
  group: "Math Transform",
  description: "Vector Floor",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, M0 = {
  name: "HT_DCPERIOD",
  camelCaseName: "htDcPeriod",
  group: "Cycle Indicators",
  description: "Hilbert Transform - Dominant Cycle Period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, L0 = {
  name: "HT_DCPHASE",
  camelCaseName: "htDcPhase",
  group: "Cycle Indicators",
  description: "Hilbert Transform - Dominant Cycle Phase",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, A0 = {
  name: "HT_PHASOR",
  camelCaseName: "htPhasor",
  group: "Cycle Indicators",
  description: "Hilbert Transform - Phasor Components",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "inPhase",
    type: "number",
    plot: "line"
  }, {
    name: "quadrature",
    type: "number",
    plot: "line_dash"
  }]
}, O0 = {
  name: "HT_SINE",
  camelCaseName: "htSine",
  group: "Cycle Indicators",
  description: "Hilbert Transform - SineWave",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "sine",
    type: "number",
    plot: "line"
  }, {
    name: "leadSine",
    type: "number",
    plot: "line_dash"
  }]
}, N0 = {
  name: "HT_TRENDLINE",
  camelCaseName: "htTrendline",
  group: "Overlap Studies",
  description: "Hilbert Transform - Instantaneous Trendline",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, D0 = {
  name: "HT_TRENDMODE",
  camelCaseName: "htTrendMode",
  group: "Cycle Indicators",
  description: "Hilbert Transform - Trend vs Cycle Mode",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, I0 = {
  name: "IMI",
  camelCaseName: "imi",
  group: "Momentum Indicators",
  description: "Intraday Momentum Index",
  inputs: [{
    name: "open",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, R0 = {
  name: "KAMA",
  camelCaseName: "kama",
  group: "Overlap Studies",
  description: "Kaufman Adaptive Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, k0 = {
  name: "LINEARREG",
  camelCaseName: "linearReg",
  group: "Statistic Functions",
  description: "Linear Regression",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, _0 = {
  name: "LINEARREG_ANGLE",
  camelCaseName: "linearRegAngle",
  group: "Statistic Functions",
  description: "Linear Regression Angle",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, $0 = {
  name: "LINEARREG_INTERCEPT",
  camelCaseName: "linearRegIntercept",
  group: "Statistic Functions",
  description: "Linear Regression Intercept",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, H0 = {
  name: "LINEARREG_SLOPE",
  camelCaseName: "linearRegSlope",
  group: "Statistic Functions",
  description: "Linear Regression Slope",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, B0 = {
  name: "LN",
  camelCaseName: "ln",
  group: "Math Transform",
  description: "Vector Log Natural",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, U0 = {
  name: "LOG10",
  camelCaseName: "log10",
  group: "Math Transform",
  description: "Vector Log10",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, wa = {
  name: "MA",
  camelCaseName: "movingAverage",
  group: "Overlap Studies",
  description: "Moving average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, z0 = {
  name: "MACD",
  camelCaseName: "macd",
  group: "Momentum Indicators",
  description: "Moving Average Convergence/Divergence",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 12,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 26,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "signalPeriod",
    displayName: "Signal Period",
    defaultValue: 9,
    hint: "Smoothing for the signal line (nb of period)",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "MACD",
    type: "number",
    plot: "line"
  }, {
    name: "MACDSignal",
    type: "number",
    plot: "line_dash"
  }, {
    name: "MACDHist",
    type: "number",
    plot: "histogram"
  }]
}, V0 = {
  name: "MACDEXT",
  camelCaseName: "macdExt",
  group: "Momentum Indicators",
  description: "MACD with controllable MA type",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 12,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "fastMAType",
    displayName: "Fast MA",
    defaultValue: 0,
    hint: "Type of Moving Average for fast MA",
    type: "MAType"
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 26,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowMAType",
    displayName: "Slow MA",
    defaultValue: 0,
    hint: "Type of Moving Average for slow MA",
    type: "MAType"
  }, {
    name: "signalPeriod",
    displayName: "Signal Period",
    defaultValue: 9,
    hint: "Smoothing for the signal line (nb of period)",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "signalMAType",
    displayName: "Signal MA",
    defaultValue: 0,
    hint: "Type of Moving Average for signal line",
    type: "MAType"
  }],
  outputs: [{
    name: "MACD",
    type: "number",
    plot: "line"
  }, {
    name: "MACDSignal",
    type: "number",
    plot: "line_dash"
  }, {
    name: "MACDHist",
    type: "number",
    plot: "histogram"
  }]
}, F0 = {
  name: "MACDFIX",
  camelCaseName: "macdFix",
  group: "Momentum Indicators",
  description: "Moving Average Convergence/Divergence Fix 12/26",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "signalPeriod",
    displayName: "Signal Period",
    defaultValue: 9,
    hint: "Smoothing for the signal line (nb of period)",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "MACD",
    type: "number",
    plot: "line"
  }, {
    name: "MACDSignal",
    type: "number",
    plot: "line_dash"
  }, {
    name: "MACDHist",
    type: "number",
    plot: "histogram"
  }]
}, W0 = {
  name: "MAMA",
  camelCaseName: "mama",
  group: "Overlap Studies",
  description: "MESA Adaptive Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastLimit",
    displayName: "Fast Limit",
    defaultValue: 0.5,
    hint: "Upper limit use in the adaptive algorithm",
    type: "number",
    range: {
      min: 0.01,
      max: 0.99
    }
  }, {
    name: "slowLimit",
    displayName: "Slow Limit",
    defaultValue: 0.05,
    hint: "Lower limit use in the adaptive algorithm",
    type: "number",
    range: {
      min: 0.01,
      max: 0.99
    }
  }],
  outputs: [{
    name: "MAMA",
    type: "number",
    plot: "line"
  }, {
    name: "FAMA",
    type: "number",
    plot: "line_dash"
  }]
}, G0 = {
  name: "MAVP",
  camelCaseName: "movingAverageVariablePeriod",
  group: "Overlap Studies",
  description: "Moving average with variable period",
  inputs: [{
    name: "inReal",
    type: "number"
  }, {
    name: "inPeriods",
    type: "number"
  }],
  options: [{
    name: "minPeriod",
    displayName: "Minimum Period",
    defaultValue: 2,
    hint: "Value less than minimum will be changed to Minimum period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "maxPeriod",
    displayName: "Maximum Period",
    defaultValue: 30,
    hint: "Value higher than maximum will be changed to Maximum period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, q0 = {
  name: "MAX",
  camelCaseName: "max",
  group: "Math Operators",
  description: "Highest value over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Y0 = {
  name: "MAXINDEX",
  camelCaseName: "maxIndex",
  group: "Math Operators",
  description: "Index of highest value over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, j0 = {
  name: "MEDPRICE",
  camelCaseName: "medPrice",
  group: "Price Transform",
  description: "Median Price",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, X0 = {
  name: "MFI",
  camelCaseName: "mfi",
  group: "Momentum Indicators",
  description: "Money Flow Index",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }, {
    name: "volume",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, K0 = {
  name: "MIDPOINT",
  camelCaseName: "midPoint",
  group: "Overlap Studies",
  description: "MidPoint over period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Z0 = {
  name: "MIDPRICE",
  camelCaseName: "midPrice",
  group: "Overlap Studies",
  description: "Midpoint Price over period",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Q0 = {
  name: "MIN",
  camelCaseName: "min",
  group: "Math Operators",
  description: "Lowest value over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, J0 = {
  name: "MININDEX",
  camelCaseName: "minIndex",
  group: "Math Operators",
  description: "Index of lowest value over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ep = {
  name: "MINMAX",
  camelCaseName: "minMax",
  group: "Math Operators",
  description: "Lowest and highest values over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "min",
    type: "number",
    plot: "line"
  }, {
    name: "max",
    type: "number",
    plot: "line"
  }]
}, tp = {
  name: "MINMAXINDEX",
  camelCaseName: "minMaxIndex",
  group: "Math Operators",
  description: "Indexes of lowest and highest values over a specified period",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "minIdx",
    type: "number",
    plot: "line"
  }, {
    name: "maxIdx",
    type: "number",
    plot: "line"
  }]
}, ip = {
  name: "MINUS_DI",
  camelCaseName: "minusDI",
  group: "Momentum Indicators",
  description: "Minus Directional Indicator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, sp = {
  name: "MINUS_DM",
  camelCaseName: "minusDM",
  group: "Momentum Indicators",
  description: "Minus Directional Movement",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, np = {
  name: "MOM",
  camelCaseName: "mom",
  group: "Momentum Indicators",
  description: "Momentum",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, rp = {
  name: "MULT",
  camelCaseName: "mult",
  group: "Math Operators",
  description: "Vector Arithmetic Mult",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, op = {
  name: "NATR",
  camelCaseName: "natr",
  group: "Volatility Indicators",
  description: "Normalized Average True Range",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ap = {
  name: "OBV",
  camelCaseName: "obv",
  group: "Volume Indicators",
  description: "On Balance Volume",
  inputs: [{
    name: "inReal",
    type: "number"
  }, {
    name: "volume",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, lp = {
  name: "PLUS_DI",
  camelCaseName: "plusDI",
  group: "Momentum Indicators",
  description: "Plus Directional Indicator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, hp = {
  name: "PLUS_DM",
  camelCaseName: "plusDM",
  group: "Momentum Indicators",
  description: "Plus Directional Movement",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, cp = {
  name: "PPO",
  camelCaseName: "ppo",
  group: "Momentum Indicators",
  description: "Percentage Price Oscillator",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "fastPeriod",
    displayName: "Fast Period",
    defaultValue: 12,
    hint: "Number of period for the fast MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "slowPeriod",
    displayName: "Slow Period",
    defaultValue: 26,
    hint: "Number of period for the slow MA",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "MAType",
    displayName: "MA Type",
    defaultValue: 0,
    hint: "Type of Moving Average",
    type: "MAType"
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, up = {
  name: "ROC",
  camelCaseName: "roc",
  group: "Momentum Indicators",
  description: "Rate of change : ((price/prevPrice)-1)*100",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, dp = {
  name: "ROCP",
  camelCaseName: "rocP",
  group: "Momentum Indicators",
  description: "Rate of change Percentage: (price-prevPrice)/prevPrice",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, pp = {
  name: "ROCR",
  camelCaseName: "rocR",
  group: "Momentum Indicators",
  description: "Rate of change ratio: (price/prevPrice)",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, mp = {
  name: "ROCR100",
  camelCaseName: "rocR100",
  group: "Momentum Indicators",
  description: "Rate of change ratio 100 scale: (price/prevPrice)*100",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 10,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, ba = {
  name: "RSI",
  camelCaseName: "rsi",
  group: "Momentum Indicators",
  description: "Relative Strength Index",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, fp = {
  name: "SAR",
  camelCaseName: "sar",
  group: "Overlap Studies",
  description: "Parabolic SAR",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "acceleration",
    displayName: "Acceleration Factor",
    defaultValue: 0.02,
    hint: "Acceleration Factor used up to the Maximum value",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "maximum",
    displayName: "AF Maximum",
    defaultValue: 0.2,
    hint: "Acceleration Factor Maximum value",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, gp = {
  name: "SAREXT",
  camelCaseName: "sarExt",
  group: "Overlap Studies",
  description: "Parabolic SAR - Extended",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }],
  options: [{
    name: "startValue",
    displayName: "Start Value",
    defaultValue: 0,
    hint: "Start value and direction. 0 for Auto, >0 for Long, <0 for Short",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }, {
    name: "offsetOnReverse",
    displayName: "Offset on Reverse",
    defaultValue: 0,
    hint: "Percent offset added/removed to initial stop on short/long reversal",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationInitLong",
    displayName: "AF Init Long",
    defaultValue: 0.02,
    hint: "Acceleration Factor initial value for the Long direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationLong",
    displayName: "AF Long",
    defaultValue: 0.02,
    hint: "Acceleration Factor for the Long direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationMaxLong",
    displayName: "AF Max Long",
    defaultValue: 0.2,
    hint: "Acceleration Factor maximum value for the Long direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationInitShort",
    displayName: "AF Init Short",
    defaultValue: 0.02,
    hint: "Acceleration Factor initial value for the Short direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationShort",
    displayName: "AF Short",
    defaultValue: 0.02,
    hint: "Acceleration Factor for the Short direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }, {
    name: "accelerationMaxShort",
    displayName: "AF Max Short",
    defaultValue: 0.2,
    hint: "Acceleration Factor maximum value for the Short direction",
    type: "number",
    range: {
      min: 0,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, yp = {
  name: "SIN",
  camelCaseName: "sin",
  group: "Math Transform",
  description: "Vector Trigonometric Sin",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, vp = {
  name: "SINH",
  camelCaseName: "sinh",
  group: "Math Transform",
  description: "Vector Trigonometric Sinh",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, xa = {
  name: "SMA",
  camelCaseName: "sma",
  group: "Overlap Studies",
  description: "Simple Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, wp = {
  name: "SQRT",
  camelCaseName: "sqrt",
  group: "Math Transform",
  description: "Vector Square Root",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, bp = {
  name: "STDDEV",
  camelCaseName: "stdDev",
  group: "Statistic Functions",
  description: "Standard Deviation",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "nbDev",
    displayName: "Deviations",
    defaultValue: 1,
    hint: "Nb of deviations",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ca = {
  name: "STOCH",
  camelCaseName: "stoch",
  group: "Momentum Indicators",
  description: "Stochastic",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "fastK_Period",
    displayName: "Fast-K Period",
    defaultValue: 5,
    hint: "Time period for building the Fast-K line",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "slowK_Period",
    displayName: "Slow-K Period",
    defaultValue: 3,
    hint: "Smoothing for making the Slow-K line. Usually set to 3",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "slowK_MAType",
    displayName: "Slow-K MA",
    defaultValue: 0,
    hint: "Type of Moving Average for Slow-K",
    type: "MAType"
  }, {
    name: "slowD_Period",
    displayName: "Slow-D Period",
    defaultValue: 3,
    hint: "Smoothing for making the Slow-D line",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "slowD_MAType",
    displayName: "Slow-D MA",
    defaultValue: 0,
    hint: "Type of Moving Average for Slow-D",
    type: "MAType"
  }],
  outputs: [{
    name: "slowK",
    type: "number",
    plot: "line_dash"
  }, {
    name: "slowD",
    type: "number",
    plot: "line_dash"
  }]
}, xp = {
  name: "STOCHF",
  camelCaseName: "stochF",
  group: "Momentum Indicators",
  description: "Stochastic Fast",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "fastK_Period",
    displayName: "Fast-K Period",
    defaultValue: 5,
    hint: "Time period for building the Fast-K line",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "fastD_Period",
    displayName: "Fast-D Period",
    defaultValue: 3,
    hint: "Smoothing for making the Fast-D line. Usually set to 3",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "fastD_MAType",
    displayName: "Fast-D MA",
    defaultValue: 0,
    hint: "Type of Moving Average for Fast-D",
    type: "MAType"
  }],
  outputs: [{
    name: "fastK",
    type: "number",
    plot: "line"
  }, {
    name: "fastD",
    type: "number",
    plot: "line"
  }]
}, Cp = {
  name: "STOCHRSI",
  camelCaseName: "stochRsi",
  group: "Momentum Indicators",
  description: "Stochastic Relative Strength Index",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "fastK_Period",
    displayName: "Fast-K Period",
    defaultValue: 5,
    hint: "Time period for building the Fast-K line",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "fastD_Period",
    displayName: "Fast-D Period",
    defaultValue: 3,
    hint: "Smoothing for making the Fast-D line. Usually set to 3",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "fastD_MAType",
    displayName: "Fast-D MA",
    defaultValue: 0,
    hint: "Type of Moving Average for Fast-D",
    type: "MAType"
  }],
  outputs: [{
    name: "fastK",
    type: "number",
    plot: "line"
  }, {
    name: "fastD",
    type: "number",
    plot: "line"
  }]
}, Tp = {
  name: "SUB",
  camelCaseName: "sub",
  group: "Math Operators",
  description: "Vector Arithmetic Substraction",
  inputs: [{
    name: "inReal0",
    type: "number"
  }, {
    name: "inReal1",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Sp = {
  name: "SUM",
  camelCaseName: "sum",
  group: "Math Operators",
  description: "Summation",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ep = {
  name: "T3",
  camelCaseName: "t3",
  group: "Overlap Studies",
  description: "Triple Exponential Moving Average (T3)",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }, {
    name: "VFactor",
    displayName: "Volume Factor",
    defaultValue: 0.7,
    hint: "Volume Factor",
    type: "number",
    range: {
      min: 0,
      max: 1
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Pp = {
  name: "TAN",
  camelCaseName: "tan",
  group: "Math Transform",
  description: "Vector Trigonometric Tan",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Mp = {
  name: "TANH",
  camelCaseName: "tanh",
  group: "Math Transform",
  description: "Vector Trigonometric Tanh",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Lp = {
  name: "TEMA",
  camelCaseName: "tema",
  group: "Overlap Studies",
  description: "Triple Exponential Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ap = {
  name: "TRANGE",
  camelCaseName: "trueRange",
  group: "Volatility Indicators",
  description: "True Range",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Op = {
  name: "TRIMA",
  camelCaseName: "trima",
  group: "Overlap Studies",
  description: "Triangular Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Np = {
  name: "TRIX",
  camelCaseName: "trix",
  group: "Momentum Indicators",
  description: "1-day Rate-Of-Change (ROC) of a Triple Smooth EMA",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Dp = {
  name: "TSF",
  camelCaseName: "tsf",
  group: "Statistic Functions",
  description: "Time Series Forecast",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Ip = {
  name: "TYPPRICE",
  camelCaseName: "typPrice",
  group: "Price Transform",
  description: "Typical Price",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Rp = {
  name: "ULTOSC",
  camelCaseName: "ultOsc",
  group: "Momentum Indicators",
  description: "Ultimate Oscillator",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod1",
    displayName: "First Period",
    defaultValue: 7,
    hint: "Number of bars for 1st period.",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "timePeriod2",
    displayName: "Second Period",
    defaultValue: 14,
    hint: "Number of bars fro 2nd period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "timePeriod3",
    displayName: "Third Period",
    defaultValue: 28,
    hint: "Number of bars for 3rd period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, kp = {
  name: "VAR",
  camelCaseName: "variance",
  group: "Statistic Functions",
  description: "Variance",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 5,
    hint: "Number of period",
    type: "number",
    range: {
      min: 1,
      max: 1e5
    }
  }, {
    name: "nbDev",
    displayName: "Deviations",
    defaultValue: 1,
    hint: "Nb of deviations",
    type: "number",
    range: {
      min: -3e37,
      max: 3e37
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, _p = {
  name: "WCLPRICE",
  camelCaseName: "wclPrice",
  group: "Price Transform",
  description: "Weighted Close Price",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, $p = {
  name: "WILLR",
  camelCaseName: "willR",
  group: "Momentum Indicators",
  description: "Williams' %R",
  inputs: [{
    name: "high",
    type: "number"
  }, {
    name: "low",
    type: "number"
  }, {
    name: "close",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 14,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, Hp = {
  name: "WMA",
  camelCaseName: "wma",
  group: "Overlap Studies",
  description: "Weighted Moving Average",
  inputs: [{
    name: "inReal",
    type: "number"
  }],
  options: [{
    name: "timePeriod",
    displayName: "Time Period",
    defaultValue: 30,
    hint: "Number of period",
    type: "number",
    range: {
      min: 2,
      max: 1e5
    }
  }],
  outputs: [{
    name: "output",
    type: "number",
    plot: "line"
  }]
}, cf = {
  ACCBANDS: Yu,
  ACOS: ju,
  AD: Xu,
  ADD: Ku,
  ADOSC: Zu,
  ADX: Qu,
  ADXR: Ju,
  APO: ed,
  AROON: ga,
  AROONOSC: td,
  ASIN: id,
  ATAN: sd,
  ATR: nd,
  AVGDEV: rd,
  AVGPRICE: od,
  BBANDS: ya,
  BETA: ad,
  BOP: ld,
  CCI: hd,
  CDL2CROWS: cd,
  CDL3BLACKCROWS: ud,
  CDL3INSIDE: dd,
  CDL3LINESTRIKE: pd,
  CDL3OUTSIDE: md,
  CDL3STARSINSOUTH: fd,
  CDL3WHITESOLDIERS: gd,
  CDLABANDONEDBABY: yd,
  CDLADVANCEBLOCK: vd,
  CDLBELTHOLD: wd,
  CDLBREAKAWAY: bd,
  CDLCLOSINGMARUBOZU: xd,
  CDLCONCEALBABYSWALL: Cd,
  CDLCOUNTERATTACK: Td,
  CDLDARKCLOUDCOVER: Sd,
  CDLDOJI: Ed,
  CDLDOJISTAR: Pd,
  CDLDRAGONFLYDOJI: Md,
  CDLENGULFING: Ld,
  CDLEVENINGDOJISTAR: Ad,
  CDLEVENINGSTAR: Od,
  CDLGAPSIDESIDEWHITE: Nd,
  CDLGRAVESTONEDOJI: Dd,
  CDLHAMMER: Id,
  CDLHANGINGMAN: Rd,
  CDLHARAMI: kd,
  CDLHARAMICROSS: _d,
  CDLHIGHWAVE: $d,
  CDLHIKKAKE: Hd,
  CDLHIKKAKEMOD: Bd,
  CDLHOMINGPIGEON: Ud,
  CDLIDENTICAL3CROWS: zd,
  CDLINNECK: Vd,
  CDLINVERTEDHAMMER: Fd,
  CDLKICKING: Wd,
  CDLKICKINGBYLENGTH: Gd,
  CDLLADDERBOTTOM: qd,
  CDLLONGLEGGEDDOJI: Yd,
  CDLLONGLINE: jd,
  CDLMARUBOZU: Xd,
  CDLMATCHINGLOW: Kd,
  CDLMATHOLD: Zd,
  CDLMORNINGDOJISTAR: Qd,
  CDLMORNINGSTAR: Jd,
  CDLONNECK: e0,
  CDLPIERCING: t0,
  CDLRICKSHAWMAN: i0,
  CDLRISEFALL3METHODS: s0,
  CDLSEPARATINGLINES: n0,
  CDLSHOOTINGSTAR: r0,
  CDLSHORTLINE: o0,
  CDLSPINNINGTOP: a0,
  CDLSTALLEDPATTERN: l0,
  CDLSTICKSANDWICH: h0,
  CDLTAKURI: c0,
  CDLTASUKIGAP: u0,
  CDLTHRUSTING: d0,
  CDLTRISTAR: p0,
  CDLUNIQUE3RIVER: m0,
  CDLUPSIDEGAP2CROWS: f0,
  CDLXSIDEGAP3METHODS: g0,
  CEIL: y0,
  CMO: v0,
  CORREL: w0,
  COS: b0,
  COSH: x0,
  DEMA: C0,
  DIV: T0,
  DX: S0,
  EMA: va,
  EXP: E0,
  FLOOR: P0,
  HT_DCPERIOD: M0,
  HT_DCPHASE: L0,
  HT_PHASOR: A0,
  HT_SINE: O0,
  HT_TRENDLINE: N0,
  HT_TRENDMODE: D0,
  IMI: I0,
  KAMA: R0,
  LINEARREG: k0,
  LINEARREG_ANGLE: _0,
  LINEARREG_INTERCEPT: $0,
  LINEARREG_SLOPE: H0,
  LN: B0,
  LOG10: U0,
  MA: wa,
  MACD: z0,
  MACDEXT: V0,
  MACDFIX: F0,
  MAMA: W0,
  MAVP: G0,
  MAX: q0,
  MAXINDEX: Y0,
  MEDPRICE: j0,
  MFI: X0,
  MIDPOINT: K0,
  MIDPRICE: Z0,
  MIN: Q0,
  MININDEX: J0,
  MINMAX: ep,
  MINMAXINDEX: tp,
  MINUS_DI: ip,
  MINUS_DM: sp,
  MOM: np,
  MULT: rp,
  NATR: op,
  OBV: ap,
  PLUS_DI: lp,
  PLUS_DM: hp,
  PPO: cp,
  ROC: up,
  ROCP: dp,
  ROCR: pp,
  ROCR100: mp,
  RSI: ba,
  SAR: fp,
  SAREXT: gp,
  SIN: yp,
  SINH: vp,
  SMA: xa,
  SQRT: wp,
  STDDEV: bp,
  STOCH: Ca,
  STOCHF: xp,
  STOCHRSI: Cp,
  SUB: Tp,
  SUM: Sp,
  T3: Ep,
  TAN: Pp,
  TANH: Mp,
  TEMA: Lp,
  TRANGE: Ap,
  TRIMA: Op,
  TRIX: Np,
  TSF: Dp,
  TYPPRICE: Ip,
  ULTOSC: Rp,
  VAR: kp,
  WCLPRICE: _p,
  WILLR: $p,
  WMA: Hp
};
class Ta extends le {
  name = "Aroon";
  shortName = "AROON";
  libName = "AROON";
  definition = {
    input: {
      high: [],
      low: [],
      timePeriod: 14
    },
    output: {
      aroonDown: [],
      aroonUp: []
    }
  };
  precision = 2;
  scaleOverlay = !0;
  plots = [
    { key: "AROON_1", title: "AROON", type: "line" }
  ];
  static inCnt = 0;
  static primaryPane = !1;
  static scale = Me[1];
  static defaultStyle = {
    downStroke: "#c80",
    downLineWidth: "1",
    downLineDash: void 0,
    upStroke: "#08c",
    upLineWidth: "1",
    upLineDash: void 0,
    fillStyle: "#0080c044"
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.init(ga);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0)
      return !1;
    const i = {};
    let s = [!1, !1], { c: n, colours: r } = super.legendInputs(e);
    return i.Dn = this.scale.nicePrice(this.overlay.data[n][1]), i.Up = this.scale.nicePrice(this.overlay.data[n][2]), r = [
      this.style.downStroke,
      this.style.upStroke
    ], { inputs: i, colours: r, labels: s };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2)
      return;
    if (!super.mustUpdate())
      return !1;
    this.scene.clear();
    const i = { down: [], up: [] }, s = this.overlay.data, r = {
      w: this.xAxis.candleW
    };
    let a = e.value(e.indexStart)[0], l = this.overlay.data[0][0], h = (a - l) / e.interval, p = this.Timeline.rangeScrollOffset, f = e.Length + p + 2, g = {};
    for (; f; )
      h < 0 || h >= this.overlay.data.length ? (i.down.push({ x: null, y: null }), i.up.push({ x: null, y: null })) : (r.x = this.xAxis.xPos(s[h][0]), r.y = this.yAxis.yPos(s[h][1]), i.down.push({ ...r }), r.x = this.xAxis.xPos(s[h][0]), r.y = this.yAxis.yPos(s[h][2]), i.up.push({ ...r })), h++, f--;
    g = {
      width: this.style.LineWidth,
      stroke: this.style.downStroke,
      dash: this.style.downLineDash
    }, this.plot(i.down, "renderLine", g), g = {
      width: this.style.upLineWidth,
      stroke: this.style.upStroke,
      dash: this.style.upLineDash
    }, this.plot(i.up, "renderLine", g), this.target.viewport.render(), super.updated();
  }
}
class Sa extends le {
  name = "Bollinger Bands";
  shortName = "BB";
  libName = "BBANDS";
  definition = {
    input: {
      inReal: [],
      nbDevDn: 2,
      nbDevUp: 2,
      timePeriod: 20
    },
    output: {
      lowerBand: [],
      middleBand: [],
      upperBand: []
    },
    meta: {}
  };
  precision = 2;
  scaleOverlay = !1;
  plots = [
    { key: "BB_1", title: " ", type: "line" }
  ];
  static inCnt = 0;
  static primaryPane = !0;
  static defaultStyle = {
    lowerStroke: "#08c",
    lowerLineWidth: 1,
    lowerLineDash: void 0,
    middleStroke: "#0080c088",
    middleLineWidth: 1,
    middleLineDash: void 0,
    upperStroke: "#08c",
    upperLineWidth: 1,
    upperLineDash: void 0,
    fillStyle: "#0080c044"
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.init(ya);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0)
      return !1;
    const i = {};
    let s = [!1, !1, !1], { c: n, colours: r } = super.legendInputs(e);
    return i.Hi = this.scale.nicePrice(this.overlay.data[n][1]), i.Mid = this.scale.nicePrice(this.overlay.data[n][2]), i.Lo = this.scale.nicePrice(this.overlay.data[n][3]), r = [
      this.style.upperStroke,
      this.style.middleStroke,
      this.style.lowerStroke
    ], { inputs: i, colours: r, labels: s };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2)
      return;
    if (!super.mustUpdate())
      return !1;
    this.scene.clear();
    const i = { lower: [], middle: [], upper: [] }, s = this.overlay.data, r = {
      w: this.xAxis.candleW
    };
    let a = e.value(e.indexStart)[0], l = this.overlay.data[0][0], h = (a - l) / e.interval, p = this.Timeline.rangeScrollOffset, f = e.Length + p * 2 + 2, g = {};
    for (; f; )
      h < 0 || h >= this.overlay.data.length ? (i.lower.push({ x: null, y: null }), i.middle.push({ x: null, y: null }), i.upper.push({ x: null, y: null })) : (r.x = this.xAxis.xPos(s[h][0]), r.y = this.yAxis.yPos(s[h][1]), i.lower.push({ ...r }), r.x = this.xAxis.xPos(s[h][0]), r.y = this.yAxis.yPos(s[h][2]), i.middle.push({ ...r }), r.x = this.xAxis.xPos(s[h][0]), r.y = this.yAxis.yPos(s[h][3]), i.upper.push({ ...r })), h++, f--;
    g = {
      width: this.style.lowerLineWidth,
      stroke: this.style.lowerStroke,
      dash: this.style.lowerLineDash
    }, this.plot(i.lower, "renderLine", g), g = {
      width: this.style.middleLineWidth,
      stroke: this.style.middleStroke,
      dash: this.style.middleLineDash
    }, this.plot(i.middle, "renderLine", g), g = {
      width: this.style.upperLineWidth,
      stroke: this.style.upperStroke,
      dash: this.style.upperLineDash
    }, this.plot(i.upper, "renderLine", g), this.target.viewport.render(), super.updated();
  }
}
class es extends le {
  name = "Exponential Moving Average";
  shortName = "EMA";
  libName = "EMA";
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    },
    meta: {
      input: {
        timePeriod: {
          entry: "timePeriod",
          label: "Period",
          type: "number",
          value: 5,
          default: 30,
          min: "3",
          title: "Number of time units to use in calculation",
          $function: this.configDialogue.provideEventListeners(
            "#Period",
            [{
              event: "change",
              fn: (e) => {
                console.log(`#Period = ${e.target.value}`);
              }
            }]
          )
        }
      }
    }
  };
  precision = 2;
  checkParamCount = !1;
  scaleOverlay = !1;
  plots = [
    { key: "EMA_1", title: "EMA: ", type: "line" }
  ];
  static inCnt = 0;
  static primaryPane = !0;
  static colours = [
    "#9C27B0",
    "#9C27B0",
    "#66BB6A",
    "#66BB6A"
  ];
  static defaultStyle = {
    stroke: "#C80",
    width: "1"
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), es.inCnt++, this.init(va);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0)
      return !1;
    const i = {}, { c: s, colours: n } = super.legendInputs(e);
    return i.EMA_1 = this.scale.nicePrice(this.overlay.data[s][1]), { inputs: i, colours: n };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2)
      return;
    if (!super.mustUpdate())
      return !1;
    this.scene.clear();
    const i = this.overlay.data, s = this.xAxis.candleW, n = [];
    this.xAxis.smoothScrollOffset;
    const r = {
      w: s
    };
    let a = this.Timeline.rangeScrollOffset, l = e.data.length - this.overlay.data.length, h = e.indexStart - l - 2, p = e.Length + a * 2 + 2;
    for (; p; )
      h < 0 || h >= this.overlay.data.length ? n.push({ x: null, y: null }) : (r.x = this.xAxis.xPos(i[h][0]), r.y = this.yAxis.yPos(i[h][1]), n.push({ ...r })), h++, p--;
    this.plot(n, "renderLine", this.style), this.target.viewport.render(), super.updated();
  }
}
class Et extends le {
  name = "Moving Average";
  shortName = "MA";
  libName = "MA";
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    }
  };
  #e = 2;
  primaryPane = !0;
  scaleOverlay = !1;
  plots = [
    { key: "MA_1", title: "MA: ", type: "line" }
  ];
  static inCnt = 0;
  static primaryPane = !0;
  static colours = [
    "#9C27B0",
    "#9C27B0",
    "#66BB6A",
    "#66BB6A"
  ];
  static defaultStyle = {
    stroke: "#C80",
    width: "1"
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), Et.inCnt++, this.init(wa);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0)
      return !1;
    const i = {}, { c: s, colours: n } = super.legendInputs(e);
    return i.MA_1 = this.scale.nicePrice(this.overlay.data[s][1]), { inputs: i, colours: n };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2 || !super.mustUpdate())
      return;
    this.scene.clear();
    const i = this.overlay.data, s = this.xAxis.candleW, n = [];
    this.xAxis.smoothScrollOffset;
    const r = {
      w: s
    };
    let a = this.Timeline.rangeScrollOffset, l = e.data.length - this.overlay.data.length, h = e.indexStart - l - 2, p = e.Length + a * 2 + 2;
    for (; p; )
      h < 0 || h >= this.overlay.data.length ? n.push({ x: null, y: null }) : (r.x = this.xAxis.xPos(i[h][0]), r.y = this.yAxis.yPos(i[h][1]), n.push({ ...r })), h++, p--;
    this.plot(n, "renderLine", this.style), this.target.viewport.render(), super.updated();
  }
}
class Qe extends le {
  static inCnt = 0;
  static primaryPane = !0;
  static colours = [
    ft[8],
    ft[18],
    ft[28],
    ft[38],
    ft[48]
  ];
  static defaultStyle = {
    stroke1: Qe.colours[0],
    width1: "1",
    stroke2: Qe.colours[1],
    width2: "1",
    stroke3: Qe.colours[2],
    width3: "1",
    stroke4: Qe.colours[3],
    width4: "1",
    stroke5: Qe.colours[4],
    width5: "1"
  };
  name = "Moving Average Multi";
  shortName = "MA";
  libName = "MA";
  definition = {
    input: {
      inReal: [],
      timePeriod1: new gt(!0, 5),
      timePeriod2: new gt(!0, 10),
      timePeriod3: new gt(!0, 20),
      timePeriod4: new gt(!0, 30),
      timePeriod5: new gt(!0, 50)
    },
    output: {
      output1: [],
      output2: [],
      output3: [],
      output4: [],
      output5: []
    }
  };
  #e = 2;
  primaryPane = !0;
  scaleOverlay = !1;
  plots = [
    { key: "MA_1", title: "MA: ", type: "line" }
  ];
  #t = 3;
  #i = 5;
  MA = {
    MA1: { enabled: !1, ma: null },
    MA2: { enabled: !1, ma: null },
    MA3: { enabled: !1, ma: null },
    MA4: { enabled: !1, ma: null },
    MA5: { enabled: !1, ma: null }
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), Et.inCnt++;
    const l = a.overlay.settings?.MAChildren || this.MA;
    this.#t = Object.keys(l).length, this.MA.ma1 = new Et(e, i = !1, s = !1, n, r, a), this.MA.ma2 = new Et(e, i = !1, s = !1, n, r, a);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0)
      return !1;
    const i = {}, { c: s, colours: n } = super.legendInputs(e);
    return i.MA_1 = this.scale.nicePrice(this.overlay.data[s][1]), { inputs: i, colours: n };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2 || !super.mustUpdate())
      return;
    this.scene.clear();
    const i = this.overlay.data, s = this.xAxis.candleW, n = [];
    this.xAxis.smoothScrollOffset;
    const r = {
      w: s
    };
    let a = this.Timeline.rangeScrollOffset, l = e.data.length - this.overlay.data.length, h = e.indexStart - l - 2, p = e.Length + a * 2 + 2;
    for (; p; )
      h < 0 || h >= this.overlay.data.length ? n.push({ x: null, y: null }) : (r.x = this.xAxis.xPos(i[h][0]), r.y = this.yAxis.yPos(i[h][1]), n.push({ ...r })), h++, p--;
    this.plot(n, "renderLine", this.style), this.target.viewport.render(), super.updated();
  }
}
class Ea extends le {
  name = "Relative Strength Index";
  shortName = "RSI";
  libName = "RSI";
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    },
    meta: {
      input: {
        timePeriod: {
          entry: "timePeriod",
          label: "Period",
          type: "number",
          value: 5,
          default: 5,
          min: "3",
          title: "Number of time units to use in calculation",
          $function: this.configDialogue.provideEventListeners(
            "#Period",
            [{
              event: "change",
              fn: (e) => {
                console.log(`#Period = ${e.target.value}`);
              }
            }]
          )
        }
      }
    }
  };
  checkParamCount = !1;
  plots = [
    { key: "RSI_1", title: " ", type: "line" }
  ];
  static inCnt = 0;
  static primaryPane = !1;
  static scale = Me[1];
  static defaultStyle = {
    stroke: "#C80",
    width: 1,
    defaultHigh: 75,
    defaultLow: 25,
    highLowLineWidth: 1,
    highLowStyle: "dashed",
    highStroke: "#848",
    lowStroke: "#848",
    highLowRangeStyle: "#22002220"
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.init(ba);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0)
      return !1;
    const i = {}, { c: s, colours: n } = super.legendInputs(e);
    return i.RSI_1 = this.scale.nicePrice(this.overlay.data[s][1]), { inputs: i, colours: n };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2 || !super.mustUpdate())
      return !1;
    this.scene.clear();
    const i = this.scene.width + this.xAxis.bufferPx * 2, s = this.yAxis.yPos(this.style?.high || this.style.defaultHigh), n = this.yAxis.yPos(this.style?.low || this.style.defaultLow), r = [0, s, this.scene.width, n - s];
    let a = { fill: this.style.highLowRangeStyle };
    if (this.plot(r, "renderRect", a), r.length = 0, r[0] = { x: 0, y: s }, r[1] = { x: i, y: s }, a = {
      width: this.style.highLowLineWidth,
      stroke: this.style.highStroke,
      dash: [1, 1]
    }, this.plot(r, "renderLine", a), r.length = 0, r[0] = { x: 0, y: n }, r[1] = { x: i, y: n }, a = {
      width: this.style.highLowLineWidth,
      stroke: this.style.lowStroke,
      dash: [1, 1]
    }, this.plot(r, "renderLine", a), this.overlay.data.length < 2)
      return this.target.viewport.render(), !1;
    const l = this.overlay.data, h = this.xAxis.candleW;
    r.length = 0, this.Timeline.smoothScrollOffset;
    const p = {
      w: h
    };
    let f = this.Timeline.rangeScrollOffset, g = e.data.length - this.overlay.data.length, C = e.indexStart - g - 2, S = e.Length + f * 2 + 2, M = 0;
    for (; S; )
      C < 0 || C >= this.overlay.data.length || (M > l[C][0] && console.log(C, M, l[C][0]), M = l[C][0], p.x = this.xAxis.xPos(l[C][0]), p.y = this.yAxis.yPos(l[C][1]), r.push({ ...p })), C++, S--;
    this.plot(r, "renderLine", this.style), this.target.viewport.render(), super.updated();
  }
}
class ts extends le {
  name = "Simple Moving Average";
  shortName = "SMA";
  libName = "SMA";
  definition = {
    input: {
      inReal: [],
      timePeriod: 20
    },
    output: {
      output: []
    }
  };
  #e = 2;
  primaryPane = !0;
  scaleOverlay = !1;
  plots = [
    { key: "SMA_1", title: "SMA: ", type: "line" }
  ];
  static inCnt = 0;
  static primaryPane = !0;
  static colours = [
    "#9C27B0",
    "#9C27B0",
    "#66BB6A",
    "#66BB6A"
  ];
  static defaultStyle = {
    stroke: "#C80",
    width: "1"
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), ts.inCnt++, this.init(xa);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0)
      return !1;
    const i = {}, { c: s, colours: n } = super.legendInputs(e);
    return i.SMA_1 = this.scale.nicePrice(this.overlay.data[s][1]), { inputs: i, colours: n };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2 || !super.mustUpdate())
      return;
    this.scene.clear();
    const i = this.overlay.data, s = this.xAxis.candleW, n = [];
    this.xAxis.smoothScrollOffset;
    const r = {
      w: s
    };
    let a = this.Timeline.rangeScrollOffset, l = e.data.length - this.overlay.data.length, h = e.indexStart - l - 2, p = e.Length + a * 2 + 2;
    for (; p; )
      h < 0 || h >= this.overlay.data.length ? n.push({ x: null, y: null }) : (r.x = this.xAxis.xPos(i[h][0]), r.y = this.yAxis.yPos(i[h][1]), n.push({ ...r })), h++, p--;
    this.plot(n, "renderLine", this.style), this.target.viewport.render(), super.updated();
  }
}
class Pa extends le {
  name = "Stochastic Oscillator";
  shortName = "STOCH";
  libName = "STOCH";
  definition = {
    input: {
      high: [],
      low: [],
      close: [],
      fastK_Period: 5,
      slowK_Period: 3,
      slowD_Period: 3
    },
    output: {
      slowK: [],
      slowD: []
    }
  };
  checkParamCount = !1;
  plots = [
    { key: "STOCH_1", title: " ", type: "line" }
  ];
  static inCnt = 0;
  static primaryPane = !1;
  static scale = Me[1];
  static defaultStyle = {
    slowKStroke: "#8C0",
    slowKLineWidth: "1",
    slowKLineDash: void 0,
    slowDStroke: "#00C",
    slowDLineWidth: "1",
    slowDLineDash: void 0,
    defaultHigh: 75,
    defaultLow: 25,
    highLowLineWidth: 1,
    highLowStyle: "dashed",
    highStroke: "#848",
    lowStroke: "#848",
    highLowRangeStyle: "#22002220"
  };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.init(Ca);
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.overlay.data.length == 0)
      return !1;
    const i = {};
    let s = [!1, !1, !1], { c: n, colours: r } = super.legendInputs(e);
    return i.SlowK = this.scale.nicePrice(this.overlay.data[n][1]), i.SlowD = this.scale.nicePrice(this.overlay.data[n][1]), r = [
      this.style.slowD,
      this.style.slowK
    ], { inputs: i, colours: r, labels: s };
  }
  draw(e = this.range) {
    if (this.overlay.data.length < 2 || !super.mustUpdate())
      return !1;
    this.scene.clear();
    const i = this.scene.width + this.xAxis.bufferPx * 2, s = this.yAxis.yPos(this.style.defaultHigh), n = this.yAxis.yPos(this.style.defaultLow);
    let r = [0, s, this.scene.width, n - s], a = { fill: this.style.highLowRangeStyle };
    if (this.plot(r, "renderRect", a), r.length = 0, r[0] = { x: 0, y: s }, r[1] = { x: i, y: s }, a = {
      width: this.style.highLowLineWidth,
      stroke: this.style.highStroke,
      dash: [1, 1]
    }, this.plot(r, "renderLine", a), r.length = 0, r[0] = { x: 0, y: n }, r[1] = { x: i, y: n }, a = {
      width: this.style.highLowLineWidth,
      stroke: this.style.lowStroke,
      dash: [1, 1]
    }, this.plot(r, "renderLine", a), this.overlay.data.length < 2)
      return this.target.viewport.render(), !1;
    r = { slowD: [], slowK: [] };
    const l = this.overlay.data, p = {
      w: this.xAxis.candleW
    };
    let f = e.value(e.indexStart)[0], g = this.overlay.data[0][0], C = (f - g) / e.interval, S = this.Timeline.rangeScrollOffset, M = e.Length + S * 2 + 2;
    for (; M; )
      C < 0 || C >= this.overlay.data.length ? (r.slowD.push({ x: null, y: null }), r.slowK.push({ x: null, y: null })) : (p.x = this.xAxis.xPos(l[C][0]), p.y = this.yAxis.yPos(l[C][1]), r.slowK.push({ ...p }), p.x = this.xAxis.xPos(l[C][0]), p.y = this.yAxis.yPos(l[C][2]), r.slowD.push({ ...p })), C++, M--;
    a = {
      width: this.style.slowKLineWidth,
      stroke: this.style.slowKStroke,
      dash: this.style.slowKLineDash
    }, this.plot(r.slowK, "renderLine", a), a = {
      width: this.style.slowDLineWidth,
      stroke: this.style.slowDStroke,
      dash: this.style.slowDLineDash
    }, this.plot(r.slowD, "renderLine", a), this.target.viewport.render(), super.updated();
  }
}
class Ma {
  constructor(e, i) {
    this.scene = e, this.ctx = this.scene.context, this.width = this.scene.width, this.cfg = "volume" in i ? i.volume : i;
  }
  draw(e) {
    const i = this.ctx, n = e.raw[4] >= e.raw[1] ? this.cfg.UpColour : this.cfg.DnColour;
    i.save(), i.strokeStyle = n, i.fillStyle = n, i.fillRect(
      Math.floor(e.x),
      Math.floor(e.z - e.h),
      Math.floor(e.w),
      Math.floor(e.h)
    ), i.restore();
  }
}
class is extends le {
  name = "Volume";
  shortName = "VOL";
  checkParamCount = !1;
  scaleOverlay = !0;
  plots = [
    { key: "VOL_1", title: " ", type: "bar" }
  ];
  #e = Zi.volume;
  #t;
  #i = "both";
  static inCnt = 0;
  static primaryPane = "both";
  static scale = Me[1];
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), is.inCnt++;
    const l = a.overlay;
    this.id = a.overlay?.id || se(this.shortName), this.#e = { ...this.defaultStyle, ...this.theme.volume }, this.style = l?.settings?.style ? { ...this.#e, ...l.settings.style } : { ...this.#e, ...n.style }, this.chart.type === "primaryPane" ? (this.style.Height = R(this.style.Height, 0, 100) || 100, this.#i = !0) : (this.style.Height = 100, this.#i = !1), this.#t = new Ma(e.scene, this.style), this.init();
  }
  get primaryPane() {
    return this.#i;
  }
  get defaultStyle() {
    return this.#e;
  }
  legendInputs(e = this.chart.cursorPos) {
    if (this.range.dataLength == 0)
      return !1;
    const i = super.Timeline.xPos2Index(e[0]), s = R(i, 0, this.range.data.length - 1), n = this.range.data[s];
    this.chart.theme.candle;
    const r = n[4] >= n[1] ? [this.style.UpColour.slice(0, 7)] : [this.style.DnColour.slice(0, 7)];
    return { inputs: { V: this.scale.nicePrice(n[5]) }, colours: r };
  }
  calcIndicatorHistory() {
  }
  draw(e = this.range) {
    if (e.dataLength < 2 || !super.mustUpdate())
      return !1;
    this.scene.clear();
    const i = e.data, s = this.scene.height, n = this.xAxis.smoothScrollOffset || 0;
    let r = Math.max(this.xAxis.candleW - 1, 1);
    r < 3 ? r = 1 : r < 5 ? r = 3 : r > 5 && (r = Math.ceil(r * 0.8));
    const a = {
      x: 0 + n - this.xAxis.candleW,
      w: r,
      z: s
    }, l = Math.floor(s * this.style.Height / 100);
    let h = this.core.rangeScrollOffset, p = e.indexStart - h, f = e.Length + h * 2, g = f, C = p, S, M = 0;
    for (; g--; )
      S = e.value(C), S[4] !== null && (M = S[5] > M ? S[5] : M), C++;
    for (; f--; )
      S = e.value(p), a.x = ye(this.xAxis.xPos(S[0]) - r / 2), S[4] !== null && (a.h = l - l * ((M - S[5]) / M), a.raw = i[p], this.#t.draw(a)), p++;
    super.updated();
  }
}
const Bp = {
  AROON: Ta,
  BB: Sa,
  EMA: es,
  MA: Et,
  MA_Multi: Qe,
  RSI: Ea,
  SMA: ts,
  STOCH: Pa,
  VOL: is
}, La = {
  AROON: { id: "AROON", name: "Aroon", event: "addIndicator", ind: Ta },
  BB: { id: "BB", name: "Bollinger Bands", event: "addIndicator", ind: Sa },
  EMA: { id: "EMA", name: "Exponential Moving Average", event: "addIndicator", ind: es },
  MA_Multi: { id: "MA", name: "Moving Average", event: "addIndicator", ind: Qe },
  RSI: { id: "RSI", name: "Relative Strength Index", event: "addIndicator", ind: Ea },
  SMA: { id: "SMA", name: "Simple Moving Average", event: "addIndicator", ind: ts },
  STOCH: { id: "STOCH", name: "Stochastic Oscillator", event: "addIndicator", ind: Pa },
  VOL: { id: "VOL", name: "Volume", event: "addIndicator", ind: is }
}, Ln = "0.148.1";
class Up {
  #e;
  #t;
  #i;
  #r = [];
  constructor(e, i) {
    this.#e = e, this.#t = b(i.id) ? i.id : se, this.#i = b(i.type) ? i.type : "default", this.#r = P(i.data) ? i.data : [];
  }
}
function zp(o, e = !1) {
  if (!P(o))
    return !1;
  let i = Vh(0, o.length);
  if (!Hi(o[0], e) || !Hi(o[i], e) || !Hi(o[o.length - 1], e))
    return !1;
  let s = o[0][0], n = o[1][0], r = o[2][0];
  return !(s > n && n > r);
}
function Vp(o, e = !1) {
  if (!P(o))
    return !1;
  let i = 0, s = 0;
  for (; i < o.length; ) {
    if (!Hi(o[i], e) || o[i][0] < s)
      return !1;
    s = o[i][0], i++;
  }
  return !0;
}
function Fp(o, e) {
  if (!P(o) || o.length == 1)
    return !1;
  let i, s, n, r, a = [], l = 0, h = (o[o.length - 1][0] - o[l][0]) / e;
  for (; l < h; )
    i = o[l][0], s = o[l + 1][0], n = s - i, n == e ? a.push(o[l]) : n > e && (r = [i + e, null, null, null, null, null], a.push(r), o.splice(l + 1, 0, r)), l++;
  return o;
}
function Hi(o, e = !1) {
  return !(!P(o) || o.length !== 6 || e && !bo(o[0]) || !T(o[1]) || !T(o[2]) || !T(o[3]) || !T(o[4]) || !T(o[5]));
}
function Wp(o) {
  for (let e of o)
    for (let i = 0; i < 6; i++)
      e.length = 6, e[i] *= 1;
  return o;
}
const Gp = "alert";
class $r {
  #e = new ce();
  #t = {};
  constructor(e) {
    if (P(e))
      for (let i of e)
        this.add(i?.price, i?.condition, i?.handler);
  }
  get list() {
    return this.#e;
  }
  get handlers() {
    return this.#t;
  }
  destroy() {
    this.#e.clear(), this.#t = {};
  }
  batchAdd(e) {
    if (P(e)) {
      let i = [];
      for (let s of e)
        i.push(this.add(s?.price, s?.condition, s?.handler));
      return i;
    } else
      return !1;
  }
  add(e, i, s) {
    if (isNaN(e) || !O(s))
      return !1;
    const n = se(Gp), r = { price: e, condition: i };
    if (this.list.has(r)) {
      let a = this.list.get(r);
      a[n] = s;
    } else {
      const a = {};
      a[n] = s, this.list.set(r, a);
    }
    return this.#t[n] = { alert: r, handler: s }, n;
  }
  remove(e) {
    if (!(e in this.#t))
      return !1;
    const i = this.#t[e], s = i.alert, n = this.#e.get(s);
    return n.delete(e), i.delete(e), Object.keys(n).length == 0 && this.#e.delete(s), !0;
  }
  delete(e, i) {
    if (this.list.has({ price: e, condition: i })) {
      const s = this.list.get({ price: e, condition: i });
      for (let n in s)
        this.#t.delete(n), s.delete(n);
    }
    return this.list.delete({ price: e, condition: i });
  }
  pause(e) {
    if (!(e in this.#t))
      return !1;
    this.#t[e];
  }
  handlerByID(e) {
    return e in this.#t ? this.#t[e].handler : !1;
  }
  check(e, i) {
    if (!(!P(e) || !P(i))) {
      for (let [s, n] of this.list)
        if (s.condition(s.price, e, i))
          for (let r in n)
            try {
              n[r](s.price, e, i);
            } catch (a) {
              console.error(a);
            }
    }
  }
}
const qp = 0, Yp = 1, jp = 2, Xp = 3, Kp = 4, Zp = 5, Ei = [null, null, null, null, null], Pi = {
  tfCountDown: !0,
  alerts: []
};
class lt {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n = 0;
  #o;
  #a = Ei;
  #c = 0;
  #l = 0;
  #h = "";
  #p = !1;
  #u;
  #g;
  #d = Ei;
  #f;
  static validateConfig(e) {
    if (w(e)) {
      let i = he(Pi);
      e = et(i, e), e.tfCountDown = F(e.tfCountDown) ? e.tfCountDown : Pi.tfCountDown, e.alerts = P(e.alerts) ? e.alerts : Pi.alerts;
    } else
      return Pi;
    return e;
  }
  constructor(e) {
    this.#e = e, this.#r = e.time, this.status = { status: kl }, this.#t = lt.validateConfig(e.config?.stream), this.#s = T(e.config?.maxCandleUpdate) ? e.config.maxCandleUpdate : Hl, this.#o = T(e.config?.streamPrecision) ? e.config.streamPrecision : Bl;
  }
  get config() {
    return this.#t;
  }
  get countDownMS() {
    return this.#l;
  }
  get countDown() {
    return this.#h;
  }
  get range() {
    return this.#e.range;
  }
  get status() {
    return this.#i;
  }
  set status({ status: e, data: i }) {
    this.#i = e, this.emit(e, i);
  }
  set dataReceived(e) {
    this.#p || (this.#p = !0, this.status = { status: Js, data: e });
  }
  get alerts() {
    return this.#f;
  }
  get lastPriceMin() {
    return this.#g;
  }
  set lastPriceMin(e) {
    T(e) && (this.#g = e);
  }
  get lastPriceMax() {
    return this.#u;
  }
  set lastPriceMax(e) {
    T(e) && (this.#u = e);
  }
  get lastTick() {
    return this.#d;
  }
  set lastTick(e) {
    P(e) && (this.#d, this.#d = e, this.alerts.check(e, this.#a));
  }
  set candle(e) {
    const i = Date.now(), s = [...this.#a];
    e.t = this.roundTime(new Date(e.t)), e.o = e.o * 1, e.h = e.h * 1, e.l = e.l * 1, e.c = e.c * 1, e.v = e.v * 1, this.#a[qp] !== e.t ? this.newCandle(e) : this.updateCandle(e), this.status = { status: Li, data: this.#a }, this.lastTick = s, i - this.#n > this.#s && this.onUpdate(), this.#n = i;
  }
  get candle() {
    return this.#a !== Ei ? this.#a : null;
  }
  start() {
    this.#f = new $r(this.#t.alerts), this.status = { status: ir };
  }
  stop() {
    this.#f instanceof $r && this.#f.destroy(), this.status = { status: _l };
  }
  emit(e, i) {
    this.#e.emit(e, i);
  }
  error() {
    this.status = { status: $l };
  }
  onTick(e) {
    (this.#i == ir || this.#i == Li) && w(e) && (this.candle = e);
  }
  onUpdate() {
    this.#a !== Ei && (this.status = { status: Je, data: this.candle }, this.status = { status: Li, data: this.#a });
  }
  newCandle(e) {
    this.prevCandle(), this.#a = [
      e.t,
      e.o,
      e.h,
      e.l,
      e.c,
      e.v,
      null,
      !0
    ], this.#e.state.mergeData({ ohlcv: [this.#a] }, !0, !1), this.status = { status: en, data: { data: e, candle: this.#a } }, this.#l = this.#r.timeFrameMS, this.#c = this.roundTime(Date.now());
  }
  prevCandle() {
    const e = this.#e.allData.data;
    e.length > 0 && e[e.length - 1][7] && (e[e.length - 1].length = 6);
  }
  updateCandle(e) {
    let i = this.#a;
    i[Yp] = e.o, i[jp] = e.h, i[Xp] = e.l, i[Kp] = e.c, i[Zp] = e.v, this.#a = i;
    const s = this.#e.allData.data, n = s.length > 0 ? s.length - 1 : 0;
    s[n] = this.#a, this.countDownUpdate();
  }
  countDownUpdate() {
    let e, i, s, n, r, a, l;
    this.#r.timeFrameMS;
    let h = this.#r.timeFrameMS - (Date.now() - this.#c);
    return h < 0 && (h = 0), this.#l = h, h > Pe ? (e = String(Math.floor(h / Pe)), i = String(Math.floor(h % Pe / ve)).padStart(2, "0"), this.#h = `${e}Y ${i}M`) : h > ve ? (i = String(Math.floor(h / ve)).padStart(2, "0"), n = String(Math.floor(h % ve / z)).padStart(2, "0"), this.#h = `${i}M ${n}D`) : h > Pt ? (s = String(Math.floor(h / Pt)).padStart(2, "0"), n = String(Math.floor(h % ve / z)).padStart(2, "0"), this.#h = `${s}W ${n}D`) : h > z ? (n = String(Math.floor(h / z)).padStart(2, "0"), r = String(Math.floor(h % z / ie)).padStart(2, "0"), a = String(Math.floor(h % ie / K)).padStart(2, "0"), this.#h = `${n}D ${r}:${a}`) : h > ie ? (r = String(Math.floor(h / ie)).padStart(2, "0"), a = String(Math.floor(h % ie / K)).padStart(2, "0"), l = String(Math.floor(h % K / X)).padStart(2, "0"), this.#h = `${r}:${a}:${l}`) : h > K ? (a = String(Math.floor(h / K)).padStart(2, "0"), l = String(Math.floor(h % K / X)).padStart(2, "0"), this.#h = `00:${a}:${l}`) : (l = String(Math.floor(h / X)).padStart(2, "0"), String(h % X).padStart(4, "0"), this.#h = `00:00:${l}`), this.#h;
  }
  roundTime(e) {
    return e - e % this.#e.timeData.timeFrameMS;
  }
}
class ss {
  #e;
  #t;
  #i;
  #r = {};
  #s;
  #n;
  #o = "stopped";
  #a;
  #c;
  #l;
  #h;
  #p = ["await", "idle", "running", "stopped"];
  constructor(e, i) {
    if (!ss.validateConfig(e))
      return !1;
    const s = { ...e };
    this.id = s.id, this.#s = s, this.#t = s.initial, this.#r.origin = i, this.#h = s.actions, this.#n = i.core, this.#u();
  }
  set id(e) {
    this.#e = Be(e);
  }
  get id() {
    return this.#e;
  }
  get state() {
    return this.#t;
  }
  get previousSate() {
    return this.#i;
  }
  get context() {
    return this.#r;
  }
  get core() {
    return this.#n;
  }
  get status() {
    return this.#o;
  }
  get event() {
    return this.#c;
  }
  get events() {
    return this.#a;
  }
  get eventData() {
    return this.#l;
  }
  get actions() {
    return this.#h;
  }
  notify(e, i) {
    if (!w(this.#s))
      return !1;
    this.#c = e, this.#l = i;
    const s = this.#s.states[this.#t];
    let n = s.on[e];
    if (!n || !O(n.action) || this.#o !== "running" && this.#o !== "await")
      return !1;
    let r = n?.condition?.type || n?.condition || !1;
    if (r && !this.condition.call(this, r, n.condition))
      return !1;
    const a = n.target, l = this.#s.states[a];
    if (s?.onExit.call(this, i), n.action.call(this, i), this.#i = this.#t, this.#t = a, l?.onEnter.call(this, i), this.#s.states[a]?.on && (this.#s.states[a].on[""] || this.#s.states[a].on?.always)) {
      const h = this.#s.states[a].on[""] || this.#s.states[a].on.always;
      if (P(h))
        for (let p of h) {
          let f = p?.condition?.type || p?.condition || !1;
          this.condition.call(this, f, p.condition) && b(p.target) && (p?.action.call(this, i), this.#i = this.#t, this.#t = p?.target, this.notify(null, null));
        }
      else if (w(h) && b(h.target)) {
        let p = h?.condition?.type || h?.condition || !1;
        this.condition.call(this, p, h.condition) && b(h.target) && (h?.action.call(this, i), this.#i = this.#t, this.#t = h.target, this.notify(null, null));
      }
    }
    return this.#t;
  }
  condition(e, i = null, s = {}) {
    return e ? this.#s.guards[e].call(this, this.#r, i, s) : !1;
  }
  canTransition(e) {
    const i = this.#s.states[this.#t];
    return e in i.on;
  }
  start() {
    this.#o = "running";
  }
  stop() {
    this.#o = "stopped";
  }
  destroy() {
    this.stop(), this.#g(), this.#s = null;
  }
  #u() {
    this.#a = /* @__PURE__ */ new Set();
    for (let e in this.#s.states)
      for (let i in this.#s.states[e].on) {
        let s = this.notify.bind(this, i);
        this.#a.add({ topic: i, cb: s }), this.#n.on(i, s, this.context);
      }
  }
  #g() {
    const e = this.#a.values();
    for (let i of e)
      this.#n.off(i.topic, i.cb, this.context);
    this.#a.clear();
  }
  static validateConfig(e) {
    if (!w(e))
      return !1;
    const i = ["id", "initial", "context", "states"];
    let s = Object.keys(e);
    if (!Pn(i, s) || !(e.initial in e.states))
      return !1;
    for (let n in e.states) {
      if (!w(e.states[n]) || "onEnter" in e.states[n] && !O(e.states[n].onEnter) || "onExit" in e.states[n] && !O(e.states[n].onExit))
        return !1;
      if ("on" in e.states[n])
        for (let r in e.states[n].on) {
          let a = e.states[n].on[r];
          if (!b(a.target) || "action" in a && !O(a.action))
            return !1;
        }
    }
    return !0;
  }
}
class Qp {
  #e;
  #t;
  #i;
  #r;
  #s;
  constructor(e, i = []) {
    this.#i = e, this.#e = e.core, this.#r = new ce([...i]);
    for (const [s, n] of this.#r)
      this.addOverlay(s, n);
  }
  log(e) {
    this.#e.log(e);
  }
  info(e) {
    this.#e.info(e);
  }
  warn(e) {
    this.#e.warn(e);
  }
  error(e) {
    this.#e.error(e);
  }
  get core() {
    return this.#e;
  }
  get parent() {
    return this.#i;
  }
  get layerConfig() {
    return this.#i.layerConfig().layerConfig;
  }
  get list() {
    return this.#r;
  }
  get scale() {
    return this.#i.parent.scale;
  }
  get time() {
    return this.#i.parent.time;
  }
  start() {
    this.eventsListen();
  }
  destroy() {
    if (this.#r.size != 0)
      for (let e of this.#r.keys())
        this.removeOverlay(e);
  }
  eventsListen() {
  }
  on(e, i, s = this) {
    this.#e.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#e.off(e, i, s);
  }
  emit(e, i) {
    this.#e.emit(e, i);
  }
  get(e) {
    return this.#r.get(e);
  }
  addOverlays(e) {
    let i = [], s, n;
    for (let r of e)
      n = this.addOverlay(r[0], r[1]), s = n.instance?.id || r[0], i.push([s, n]);
    return i;
  }
  addOverlay(e, i) {
    const s = new U.Layer(this.layerConfig);
    try {
      return this.parent.viewport.addLayer(s), i.layer = s, i.instance = new i.class(
        s,
        this.#i.Timeline,
        this.#i.Scale,
        this.#e.theme,
        this,
        i.params
      ), b(i.instance?.id) || (i.instance.id = e), this.#r.set(i.instance.id, i), i;
    } catch (n) {
      return s.remove(), i.instance = void 0, this.#r.delete(e), this.#e.error(`ERROR: Cannot instantiate ${e} overlay / indicator : It will not be added to the chart.`), this.#e.error(n), !1;
    }
  }
  removeOverlay(e) {
    if (this.#r.has(e)) {
      const i = this.#r.get(e);
      i.instance?.isIndicator || i.instance.destroy(), i.layer.remove(), this.#r.delete(e);
    }
  }
}
class Gi extends W {
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.params.axes = a?.axes || "both";
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e) {
    if (!super.mustUpdate() || (e = e || this.params.axes, this.scene.clear(), e == "none"))
      return;
    const i = this.scene.context;
    if (i.save(), i.strokeStyle = this.core.theme.chart.GridColour || _o.COLOUR_GRID, e != "y") {
      const n = this.xAxis.xAxisGrads.values;
      for (let r of n) {
        let a = ye(r[1]);
        i.beginPath(), i.moveTo(a + 0, 0), i.lineTo(a + 0, this.scene.height), i.stroke();
      }
    }
    if (e != "x") {
      const s = this.yAxis.yAxisGrads;
      for (let n of s) {
        let r = this.yAxis.$2Pixel(n[0]);
        i.beginPath(), i.moveTo(0, r), i.lineTo(this.scene.width, r), i.stroke();
      }
    }
    i.restore(), super.updated();
  }
  drawX() {
    this.draw("x");
  }
}
class Ys extends W {
  #e = [0, 0];
  #t = !0;
  #i;
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.core.on("main_mousemove", this.onMouseMoveX, this), this.#i = new He(this.target.viewport.container, { disableContextMenu: !1 }), this.#i.on("pointermove", this.onMouseMove.bind(this)), this.#i.on("pointerenter", this.onMouseMove.bind(this));
  }
  set position(e) {
  }
  get update() {
    return this.#t;
  }
  get always() {
    return !0;
  }
  onMouseMoveX(e) {
    this.onMouseMove(e, !0);
  }
  onMouseMove(e, i = !1) {
    let s, n, r, a = this.#e;
    w(e) ? (s = e.timeStamp, n = Math.round(e.position.x), r = Math.round(e.position.y)) : (s = e[6], n = Math.round(e[0]), r = Math.round(e[1])), !(i && a[1] == r) && (a[0] == n && a[1] == r || (a[0] = n, a[1] = r, a[6] = s, this.draw()));
  }
  draw(e = !1) {
    const i = this.target.viewport.container.getBoundingClientRect();
    let s = this.core.mousePos.y - i.top, n = this.core.mousePos.x - i.left;
    e || (n = this.xAxis.xPosSnap2CandlePos(n) + this.xAxis.scrollOffsetPx), this.scene.clear();
    const r = this.scene.context;
    r.save(), r.setLineDash([5, 5]);
    const a = this.xAxis.smoothScrollOffset || 0;
    r.strokeStyle = "#666", r.beginPath(), r.moveTo(n + a, 0), r.lineTo(n + a, this.scene.height), r.stroke(), this.chart.cursorActive && (r.beginPath(), r.moveTo(0, s), r.lineTo(this.scene.width, s), r.stroke()), r.restore(), this.chart.scale.overlays.cursor.instance.scaleDraw();
  }
}
class Aa extends W {
  #e = [0, 0];
  constructor(e, i, s, n, r, a) {
    r = s, s = s.yAxis, super(e, i, s, n, r, a), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw() {
  }
  scaleDraw() {
    if (!this.parent.parent.cursorActive)
      return;
    const e = this.target.viewport.container.getBoundingClientRect();
    let i = this.core.mousePos.y - e.top, s = this.parent.yPos2Price(i), n = this.parent.nicePrice(s), r = {
      fontSize: this.theme.yAxis.fontSize * 1.05,
      fontWeight: this.theme.yAxis.fontWeight,
      fontFamily: this.theme.yAxis.fontFamily,
      txtCol: this.theme.yAxis.colourCursor,
      bakCol: this.theme.yAxis.colourCursorBG,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 3,
      paddingRight: 3,
      width: this.viewport.width
    }, a = r.fontSize + r.paddingTop + r.paddingBottom, l = i - a * 0.5;
    const h = this.scene.context;
    this.scene.clear(), h.save(), h.fillStyle = r.bakCol, h.fillRect(1, l, this.width, a), Lt(h, `${n}`, 1, l, r), h.restore();
  }
  erase() {
    this.scene.clear(), this.target.viewport.render();
  }
}
const Jp = [
  ["grid", { class: Gi, fixed: !0 }],
  ["cursor", { class: Ys, fixed: !0 }]
];
class ht {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  constructor(e, i, s, n = !1) {
    this.#r = e, this.#e = e.core, this.#t = this.core.config, this.#i = this.core.theme, this.#o = this.#r.element, this.#c = i, this.createViewport(s, n);
  }
  get parent() {
    return this.#r;
  }
  get core() {
    return this.#e;
  }
  get config() {
    return this.#t;
  }
  get width() {
    return this.#o.width;
  }
  get height() {
    return this.#o.height;
  }
  get dimensions() {
    return this.#o.dimensions;
  }
  set layerWidth(e) {
    this.#l = e || this.#o.width;
  }
  get layerWidth() {
    return this.#l;
  }
  get stateMachine() {
    return this.#r.stateMachine;
  }
  set state(e) {
    this.#e.setState(e);
  }
  get state() {
    return this.#e.getState();
  }
  get data() {
    return this.#e.chartData;
  }
  get range() {
    return this.#e.range;
  }
  get stream() {
    return this.#e.stream;
  }
  get Timeline() {
    return this.#e.Timeline;
  }
  get xAxis() {
    return this.#e.Timeline.xAxis;
  }
  get Scale() {
    return this.#r.scale;
  }
  get yAxis() {
    return this.#r.scale.yAxis;
  }
  get viewport() {
    return this.#s;
  }
  get overlays() {
    return this.#n;
  }
  destroy() {
    this.#n.destroy(), this.#s.destroy();
  }
  setSize(e, i, s) {
    const n = this.#n.list;
    this.#s.setSize(e, i);
    for (let [r, a] of n)
      a.instance.setSize(s, i);
    this.draw(), this.render();
  }
  createViewport(e = [], i = !1) {
    e = e.length == 0 ? he(Jp) : e;
    const { width: s, height: n } = this.layerConfig();
    let r = i ? U.Node : U.Viewport;
    this.#s = new r({
      width: s,
      height: n,
      container: this.#c
    }), this.#a = this.#s.scene.canvas, this.#n = new Qp(this, e);
  }
  layerConfig() {
    const e = this.config?.buffer || Ki, i = this.#c.getBoundingClientRect().width, s = this.#c.getBoundingClientRect().height;
    this.layerWidth = Math.round(i * ((100 + e) * 0.01));
    const n = {
      width: this.layerWidth,
      height: s
    };
    return { width: i, height: s, layerConfig: n };
  }
  addOverlays(e) {
    return this.#n.addOverlays(e);
  }
  addOverlay(e, i) {
    return this.#n.addOverlay(e, i);
  }
  removeOverlay(e) {
    return this.#n.removeOverlay(e);
  }
  draw(e = this.range, i = !1) {
    const s = (n, r) => {
      r.instance instanceof W && (i && r.instance.setRefresh(), r.instance.draw(), r.fixed || (r.instance.position = [this.#e.scrollPos, 0]));
    };
    this.executeOverlayList(s);
  }
  drawAll() {
    const e = (i, s) => {
      s.instance instanceof W && s.instance.setRefresh();
    };
    this.executeOverlayList(e);
  }
  executeOverlayList(e) {
    const i = this.#n.list;
    if (!(i instanceof ce))
      return !1;
    let s = [];
    for (let [n, r] of i)
      try {
        e(n, r);
      } catch (a) {
        s.push({ overlay: n, error: a });
      }
    if (s.length > 0)
      for (let n of s)
        this.#e.error(`ERROR: executeOverlayList() ${n.overlay}`), this.#e.error(n.error);
    else
      s = !0;
    return s;
  }
  render() {
    this.#s.render();
  }
  refresh() {
    this.draw(this.range, !0), this.render();
  }
}
class dt {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  constructor(e, i = {}) {
    this.#t = e, this.#i = { ...i }, this.#r = this.#i.parent;
  }
  log(e) {
    this.#t.log(e);
  }
  info(e) {
    this.#t.info(e);
  }
  warn(e) {
    this.#t.warn(e);
  }
  error(e) {
    this.#t.error(e);
  }
  set id(e) {
    this.#e = Be(e);
  }
  get id() {
    return this.#e || `${this.#t.id}-${this.name}`;
  }
  get core() {
    return this.#t;
  }
  get options() {
    return this.#i;
  }
  get config() {
    return this.#t.config;
  }
  get theme() {
    return this.core.theme;
  }
  get range() {
    return this.core.range;
  }
  get parent() {
    return this.#r;
  }
  set stateMachine(e) {
    this.#s = new ss(e, this);
  }
  get stateMachine() {
    return this.#s;
  }
  set graph(e) {
    e instanceof ht && (this.#n = e);
  }
  get graph() {
    return this.#n;
  }
  on(e, i, s = this) {
    this.#t.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#t.off(e, i, s);
  }
  expunge(e = this) {
    this.#t.expunge(e);
  }
  emit(e, i) {
    this.#t.emit(e, i);
  }
}
const Ts = {
  id: "time",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        resize: {
          target: "resize",
          action(o) {
          }
        },
        xAxis_scale: {
          target: "scale",
          action(o) {
          }
        },
        xAxis_inc: {
          target: "incremental",
          action(o) {
          }
        },
        xAxis_log: {
          target: "logarithmic",
          action(o) {
          }
        },
        xAxis_100: {
          target: "percentual",
          action(o) {
          }
        },
        chart_pan: {
          target: "chart_pan",
          action(o) {
          }
        }
      }
    },
    resize: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        someEvent: {
          target: "",
          action(o) {
          }
        }
      }
    },
    chart_pan: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        chart_pan: {
          target: "chart_pan",
          action(o) {
          }
        },
        chart_panDone: {
          target: "idle",
          action(o) {
          }
        }
      }
    }
  },
  guards: {}
};
class An {
  static #e;
  #t;
  #i;
  #r;
  #s;
  #n = { w: 0, h: 0 };
  #o = { w: 0, h: 0, x: 0, y: 0 };
  #a = { x: !1, y: !0 };
  #c;
  #l = { x: 0, drag: !1 };
  #h;
  #p;
  constructor(e) {
    this.#t = An.#e++, this.#i = e.core, this.#r = H(e.elContainer) ? e.elContainer : !1, this.#s = H(e.elHandle) ? e.elHandle : !1, this.#p = O(e.callback) ? e.callback : !1, H(this.#r) && H(this.#s) && (this.mount(), this.eventsListen());
  }
  set cursor(e) {
    this.#s.style.cursor = e;
  }
  get cursor() {
    return this.#s.style.cursor;
  }
  eventsListen() {
    this.#h = new He(this.#s, { disableContextMenu: !1 }), this.#h.on("mouseenter", Le(this.onMouseEnter, 1, this, !0)), this.#h.on("mouseout", Le(this.onMouseOut, 1, this, !0)), this.#h.on("drag", ra(this.onHandleDrag, 100, this)), this.#h.on("enddrag", this.onHandleDragDone.bind(this)), this.#h.on("mousedown", Le(this.onMouseDown, 100, this, !0)), this.#h.on("mouseup", this.onMouseUp.bind(this));
  }
  on(e, i, s = this) {
    this.#i.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#i.off(e, i, s);
  }
  emit(e, i) {
    this.#i.emit(e, i);
  }
  onMouseEnter() {
    const e = getComputedStyle(this.#s).backgroundColor;
    e && (this.colour = new ai(e), this.#s.style.backgroundColor = this.colour.hex);
  }
  onMouseOut() {
    this.#s.style.backgroundColor = this.colour.hexa;
  }
  onMouseDown() {
  }
  onMouseUp(e) {
    this.onHandleDragDone(e);
  }
  onHandleDrag(e) {
    this.#l.drag || (this.#l.drag = !0, this.#l.x = e.position.x), this.handlePos(e);
  }
  onHandleDragDone(e) {
    this.handlePos(e), this.#l.drag = !1;
  }
  mount() {
    this.#n.w = this.#r.getBoundingClientRect().width, this.#n.h = this.#r.getBoundingClientRect().height, this.#r.style.overflow = "hidden", this.#o.w = this.#s.getBoundingClientRect().width, this.#o.h = this.#s.getBoundingClientRect().height, this.#s.style.marginRight = 0, this.#s.style.position = "absolute";
  }
  handlePos(e) {
    let i = this.#i.range, s = parseInt(this.#s.style.marginLeft), n = this.#r.getBoundingClientRect().width, r = this.#s.getBoundingClientRect().width, a = n - r, l = e.position.x - this.#l.x, h = R(s + l, 0, a), p = (i.dataLength + i.limitFuture + i.limitPast) / n, f = Math.floor(h * p);
    this.setHandleDims(h, r), this.#i.jumpToIndex(f);
  }
  setHandleDims(e, i) {
    let s = this.#r.getBoundingClientRect().width;
    i = i || this.#s.getBoundingClientRect().width, e = e / s * 100, this.#s.style.marginLeft = `${e}%`, i = i / s * 100, this.#s.style.width = `${i}%`;
  }
}
class em extends W {
  #e = [0, 0];
  #t;
  constructor(e, i = !1, s = !1, n, r, a) {
    i = r.time.xAxis, super(e, i, s, n, r);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e) {
    if (!super.mustUpdate())
      return;
    this.scene.clear();
    const i = this.scene.context, s = this.xAxis.xAxisGrads.values, n = 0, r = this.theme.xAxis, a = F(r.tickMarker) ? r.tickMarker : !0;
    i.save(), i.strokeStyle = r.colourTick, i.fillStyle = r.colourTick, i.font = `${r.fontWeight} ${r.fontSize}px ${r.fontFamily}`;
    for (let l of s) {
      let h = ye(l[1]), p = Math.floor(i.measureText(`${l[0]}`).width * 0.5);
      i.fillText(l[0], h - p + n, this.xAxis.xAxisTicks + 12), a && (i.beginPath(), i.moveTo(h + n, 0), i.lineTo(h + n, this.xAxis.xAxisTicks), i.stroke());
    }
    i.restore(), super.updated();
  }
}
class tm extends W {
  #e = [0, 0];
  #t;
  constructor(e, i = !1, s = !1, n, r, a) {
    i = r.time.xAxis, super(e, i, s, n, r);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw() {
    this.scene.clear();
    const e = this.scene.context;
    this.xAxis.xAxisGrads.values, this.theme.xAxis, e.save(), e.restore();
  }
}
class im extends W {
  #e = [0, 0];
  constructor(e, i = !1, s = !1, n, r) {
    i = r.time.xAxis, super(e, i, s, n, r), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw() {
    const e = this.scene.context, i = this.target.viewport.container.getBoundingClientRect(), s = this.core.mousePos.x - i.left;
    let n = this.xAxis.xPos2Time(s), r = new Date(n), a = r.toUTCString(), l = {
      fontSize: this.theme.xAxis.fontSize * 1.05,
      fontWeight: this.theme.xAxis.fontWeight,
      fontFamily: this.theme.xAxis.fontFamily,
      txtCol: this.theme.xAxis.colourCursor,
      bakCol: this.theme.xAxis.colourCursorBG,
      paddingTop: 5,
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4
    }, h = Qi(e, a, l), p = s + this.core.bufferPx;
    p = this.xAxis.xPosSnap2CandlePos(p), p = p - Math.round(h * 0.5) - this.core.scrollPos - this.core.bufferPx, this.scene.clear(), e.save(), Lt(e, a, p, 1, l), e.restore();
  }
}
const sm = [
  ["labels", { class: em, fixed: !1, required: !0 }],
  ["overlay", { class: tm, fixed: !1, required: !0 }],
  ["cursor", { class: im, fixed: !1, required: !0 }]
];
class nm extends dt {
  #e = "Timeline";
  #t = "time";
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h;
  #p;
  #u;
  #g;
  #d = new ce();
  #f = [];
  #w;
  #E;
  #y;
  #v;
  #m;
  #C;
  #T;
  #x;
  #P;
  #b = {
    width: 20,
    height: 20,
    fill: "#aaa"
  };
  #S = { end: !1, start: !1 };
  constructor(e, i) {
    super(e, i), this.#n = i.elements.elTime, this.#i = e.Chart, this.#r = new _i(this), this.init();
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get element() {
    return this.#n;
  }
  get elViewport() {
    return this.#o;
  }
  get height() {
    return this.#n.height;
  }
  set width(e) {
    this.setWidth(e);
  }
  get width() {
    return this.#n.width;
  }
  get xAxis() {
    return this.#r;
  }
  get xAxisWidth() {
    return this.#r.width;
  }
  get xAxisRatio() {
    return this.#r.xAxisRatio;
  }
  get layerCursor() {
    return this.#v;
  }
  get layerLabels() {
    return this.#E;
  }
  get layerOverlays() {
    return this.#y;
  }
  get overlays() {
    return Object.fromEntries([...this.graph.overlays.list]);
  }
  get xAxisGrads() {
    return this.#r.xAxisGrads;
  }
  get candleW() {
    return this.#r.candleW;
  }
  get candlesOnLayer() {
    return this.#r.candlesOnLayer;
  }
  get navigation() {
    return this.#w;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return ae(this.#n);
  }
  get bufferPx() {
    return this.core.bufferPx;
  }
  get scrollPos() {
    return this.core.scrollPos;
  }
  get scrollOffsetPx() {
    return this.core.scrollPos % this.candleW;
  }
  get smoothScrollOffset() {
    return this.core.smoothScrollOffset;
  }
  get rangeScrollOffset() {
    return this.core.rangeScrollOffset;
  }
  get time() {
    return this;
  }
  init() {
    const e = this.#n;
    this.#o = e.viewport, this.#a = e.overview, this.#c = e.overview.icons, this.#l = e.overview.scrollBar, this.#h = e.overview.handle, this.#p = e.overview.rwdStart, this.#u = e.overview.fwdEnd;
    const i = {
      core: this.core,
      elContainer: this.#l,
      elHandle: this.#h,
      callback: null
    };
    this.#P = new An(i), this.core.theme?.time?.navigation === !1 && this.navigationDisplay(!1);
  }
  setWidth(e) {
    this.#n.style.width = `${e}px`, this.#o.style.width = `${e}px`;
  }
  setDimensions(e) {
    const i = this.config.buffer || Ki, s = e.w, n = this.height, r = Math.round(s * ((100 + i) * 0.01));
    this.graph.setSize(s, n, r), this.draw();
  }
  navigationDisplay(e) {
    if (e)
      this.#u.style["margin-top"] = 0, this.#p.style["margin-top"] = 0;
    else {
      const i = this.core.theme.xAxis?.background ? this.core.theme.xAxis.Background : this.core.theme.chart.Background;
      this.#a.style.visibility = "hidden", this.#u.style["margin-top"] = `${this.#o.clientHeight * -1}px`, this.#p.style["margin-top"] = `${this.#o.clientHeight * -1}px`, this.#u.style.background = this.core.theme.chart.Background, this.#p.style.background = i;
    }
  }
  start() {
    this.createGraph(), this.onSetRange(), this.#r.initXAxisGrads(), this.draw(), this.eventsListen(), Ts.id = this.id, Ts.context = this, this.stateMachine = Ts, this.stateMachine.start();
  }
  destroy() {
    this.stateMachine.destroy(), this.#m.destroy(), this.#C.destroy(), this.#T.destroy(), this.core.hub.expunge(this), this.off("main_mousemove", this.#v.draw, this.#v), this.#u.removeEventListener("click", Le), this.#p.removeEventListener("click", Le), this.graph.destroy(), this.element.remove();
  }
  eventsListen() {
    this.#m = new He(this.#o, { disableContextMenu: !1 }), this.#m.on("dblclick", this.onDoubleClick.bind(this)), this.#m.on("pointerover", this.onPointerEnter.bind(this)), this.#m.on("pointerout", this.onPointerLeave.bind(this)), this.#m.on("pointerdrag", this.onPointerDrag.bind(this)), this.#C = new He(this.#u, { disableContextMenu: !1 }), this.#C.on("pointerover", () => this.showJump(this.#S.end)), this.#C.on("pointerleave", () => this.hideJump(this.#S.end)), this.#T = new He(this.#p, { disableContextMenu: !1 }), this.#T.on("pointerover", () => this.showJump(this.#S.start)), this.#T.on("pointerleave", () => this.hideJump(this.#S.start)), this.on("main_mousemove", this.#v.draw, this.#v), this.on("setRange", this.onSetRange, this), this.#u.addEventListener("click", Le(this.onPointerClick, 1e3, this, !0)), this.#p.addEventListener("click", Le(this.onPointerClick, 1e3, this, !0));
  }
  onPointerClick(e) {
    switch (e?.currentTarget?.id || e.target.parentElement.id) {
      case "fwdEnd":
        this.onFwdEnd();
        break;
      case "rwdStart":
        this.onRwdStart();
        break;
    }
  }
  onPointerEnter(e) {
    e.domEvent.target.style.cursor = "ew-resize", this.#a.style.visibility = "visible", this.hideCursorTime();
  }
  onPointerLeave(e) {
    this.core.theme?.time?.navigation === !1 && !(this.#S.end && this.#S.start) && (this.#a.style.visibility = "hidden");
  }
  onPointerDrag(e) {
    let i = this.range, s = i.indexStart - e.movement.x, n = i.indexEnd;
    i.set(s, n);
  }
  onDoubleClick(e) {
    this.core.jumpToEnd(), this.core.MainPane.draw(void 0, !0);
  }
  onFwdEnd() {
    this.core.jumpToEnd(), this.core.MainPane.draw(void 0, !0);
  }
  onRwdStart() {
    this.core.jumpToStart(), this.core.MainPane.draw(void 0, !0);
  }
  onSetRange() {
    let e = this.range, i = e.indexStart;
    e.indexEnd;
    let s = this.#l.getBoundingClientRect().width, n = e.dataLength + e.limitFuture + e.limitPast, r = s / n, a = e.Length * r, l = (i + e.limitPast) * r;
    this.#P.setHandleDims(l, a);
  }
  t2Index(e) {
    return this.#r.t2Index(e);
  }
  xPos(e) {
    return this.#r.xPos(e);
  }
  xPosSnap2CandlePos(e) {
    return this.#r.xPosSnap2CandlePos(e);
  }
  xPos2Time(e) {
    return this.#r.xPos2Time(e);
  }
  xPos2Index(e) {
    return this.#r.xPos2Index(e);
  }
  xPosOHLCV(e) {
    return this.#r.xPosOHLCV(e);
  }
  createGraph() {
    let e = he(sm);
    this.graph = new ht(this, this.#o, e, !1), this.#v = this.graph.overlays.get("cursor").instance, this.#E = this.graph.overlays.get("labels").instance, this.#y = this.graph.overlays.get("overlay").instance, this.graph.addOverlays(this.#f);
  }
  addOverlays(e) {
    if (!P(e))
      return !1;
    this.graph === void 0 ? this.#f.push(...e) : this.graph.addOverlays(e);
  }
  addOverlay(e, i) {
    if (!w(i))
      return !1;
    if (this.graph === void 0)
      this.#f.push([e, i]);
    else
      return this.graph.addOverlay(e, i);
  }
  render() {
    this.graph.render();
  }
  draw(e = this.range, i = !0) {
    this.graph.draw(e, i);
  }
  hideCursorTime() {
    this.graph.overlays.list.get("cursor").layer.visible = !1, this.core.MainPane.draw();
  }
  showCursorTime() {
    this.graph.overlays.list.get("cursor").layer.visible = !0, this.core.MainPane.draw();
  }
  hideJump(e) {
    this.core.theme?.time?.navigation === !1 && (this.#a.style.visibility = "hidden");
  }
  showJump(e) {
    this.#a.style.visibility = "visible", this.hideCursorTime();
  }
}
const rm = {
  renderQ: new ce(),
  rendered: [],
  renderLog: !1,
  dropFrames: !0,
  graphs: [],
  range: {},
  status: !1,
  init: function(o) {
    w(o) && (this.renderLog = o?.renderLog || !1, this.dropFrames = o?.dropFrames || !0, this.graphs = P(o?.graphs) ? [...o.graphs] : [], this.range = w(o?.range) ? o.range : {});
  },
  queueFrame: function(o = this.range, e = this.graphs, i = !1) {
    this.renderQ.size > 1 && this.dropFrames && (i = this.dropFrame() || i);
    const s = Date.now();
    return o = o.snapshot(), this.renderQ.set(s, { graphs: e, range: o, update: i }), s;
  },
  dropFrame: function(o = -1) {
    let e = !1;
    return o === -1 && (o = this.renderQ.lastKey()), this.renderQ.size > 1 && this.renderQ.has(o) && (e = o.update, this.renderQ.delete(o)), e;
  },
  expungeFrames() {
    this.renderQ.clear();
  },
  getFrame: function(o = 0) {
    return this.renderQ.has(o) ? this.renderQ.get(o) : this.renderQ.firstValue();
  },
  frameDone: function() {
    if (this.renderQ.size === 0)
      return;
    const o = this.renderQ.firstKey();
    this.renderLog && this.rendered.push([o, Date.now()]), this.renderQ.delete(o);
  },
  start: function() {
    this.status = !0, requestAnimationFrame(this.execute.bind(this));
  },
  stop: function() {
    this.status = !1, this.renderQ.clear();
  },
  execute: function() {
    if (!this.status || (requestAnimationFrame(this.execute.bind(this)), this.renderQ.size === 0))
      return;
    const [o, e] = this.renderQ.firstEntry();
    if (e.range?.snapshot) {
      for (let i of e.graphs)
        O(i.draw) && i?.status !== "destroyed" && i.draw(e.range, e.update);
      for (let i of e.graphs)
        O(i.render) && i?.status !== "destroyed" && i.render();
      this.frameDone();
    }
  }
}, Hr = [
  "-webkit-touch-callout",
  "-webkit-user-select",
  "-khtml-user-select",
  "-moz-user-select",
  "-ms-user-select",
  "user-select"
];
class om {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a = [];
  #c;
  #l = {};
  #h;
  #p;
  #u = null;
  constructor(e, i) {
    this.#e = e, this.#t = i, this.#i = i.core, this.#r = i.core.theme.legend, this.init(), this.eventsListen();
  }
  get elTarget() {
    return this.#e;
  }
  get list() {
    return this.#l;
  }
  set collapse(e) {
    this.setCollapse(e);
  }
  get collapse() {
    return this.#o;
  }
  get visible() {
    return this.getVisible();
  }
  getVisible() {
    const e = getComputedStyle(this.#e);
    return e.display && e.visibility;
  }
  destroy() {
    this.#i.hub.expunge(this);
    for (let e in this.#l)
      e !== "collapse" && this.remove(e);
    this.#e.remove();
  }
  eventsListen() {
    this.#i.on("chart_pan", this.primaryPanePan, this), this.#i.on("chart_panDone", this.primaryPanePanDone, this);
  }
  init() {
    const e = this.#e.legends;
    this.#n = e.querySelector(".controls"), this.#o = e.querySelectorAll(".control"), this.#h = e.querySelector("#showLegends"), this.#p = e.querySelector("#hideLegends"), this.#n.style.display = "none", this.icons(this.#o, { id: "collapse", parent: this }), this.#e.legends.classList.add("hide"), this.#u = "hide", this.collapse = "show";
  }
  onPointerClick(e) {
    const i = (s) => b(s.dataset.icon) ? { id: s.id, icon: s.dataset.icon, parent: s.parentElement } : s.parentElement.className !== "controls" ? i(s.parentElement) : !1;
    return i(e);
  }
  onMouseOver(e) {
  }
  onLegendAction(e) {
    const i = this.onPointerClick(e.currentTarget);
    this.setCollapse(i.icon);
  }
  setCollapse(e) {
    e === "show" && this.#u !== "show" ? (this.#u = e, this.#h.style.display = "none", this.#p.style.display = "inline-block", this.#e.legends.classList.toggle("hide")) : e === "hide" && this.#u !== "hide" && (this.#u = e, this.#h.style.display = "inline-block", this.#p.style.display = "none", this.#e.legends.classList.toggle("hide"));
  }
  primaryPanePan() {
    for (let e of Hr)
      this.#e.style.setProperty(e, "none");
  }
  primaryPanePanDone() {
    for (let e of Hr)
      this.#e.style.removeProperty(e);
  }
  add(e) {
    if (!w(e))
      return !1;
    const i = () => {
      this.#i.error("ERROR: Legend parent missing!");
    };
    e.id = e?.id || se("legend"), e.type = e?.type || "overlay", e.title = e?.title || e?.parent.legendName, e.parent = e?.parent || i, e.visible = F(e?.visible) ? e.visible : !0;
    const s = this.elTarget.buildLegend(e, this.#i.theme);
    this.#e.legends.insertAdjacentHTML("beforeend", s);
    const n = this.#e.legends.querySelector(`#legend_${e.id}`);
    return this.#c = n.querySelectorAll(".control"), this.#l[e.id] = {
      el: n,
      type: e.type,
      source: e?.source,
      click: []
    }, this.icons(this.#c, e), e.type == "indicator" && (this.#n.style.display = "block", !e.parent.primaryPane && Object.keys(this.#l).length < 3 && (this.#n.style.display = "none")), n.style.display = e.visible ? "block" : "none", e.id;
  }
  remove(e) {
    if (!(e in this.#l) || this.#l[e].type === "chart")
      return !1;
    this.#l[e].el.remove();
    for (let i of this.#l[e].click)
      i.el.removeEventListener("click", i.click);
    return delete this.#l[e], Object.keys(this.#l).length < 2 && (this.#n.style.display = "none"), !0;
  }
  update(e, i) {
    if (!w(i) || !(e in this.#l) || this.#i.range.data.length == 0)
      return !1;
    let s = this.#l[e].source(i.pos);
    const n = this.#e.buildInputs(s);
    this.#e.legends.querySelector(`#legend_${e} dl`).innerHTML = n;
  }
  modify(e, i) {
    if (!(e in this.#l) || !w(i))
      return !1;
    const s = this.#l[e].el;
    for (let n in i)
      switch (n) {
        case "legendName":
          const r = s.querySelectorAll(".title");
          return r[0].innerHTML = i[n], r[1].innerHTML = i[n], !0;
        case "legendVisibility":
          const a = i[n] ? "block" : "none", l = i[n] ? "visible" : "hidden";
          return s.style.display = a, s.style.visibility = l, !0;
      }
  }
  icons(e, i) {
    let s;
    for (let n of e) {
      let r = n.querySelector("svg");
      r.style.width = `${this.#r.controlsW}px`, r.style.height = `${this.#r.controlsH}px`, r.style.fill = `${this.#r.controlsColour}`, r.onpointerover = (a) => a.currentTarget.style.fill = this.#r.controlsOver, r.onpointerout = (a) => a.currentTarget.style.fill = this.#r.controlsColour, s = i.parent.onLegendAction.bind(i.parent), i.id === "collapse" ? this.#a.push({ el: n, click: s }) : this.#l[i.id].click.push({ el: n, click: s }), n.addEventListener("click", s);
    }
  }
}
const Ss = {
  id: "chart",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(o) {
        this.context.origin.cursor = "crosshair";
      },
      onExit(o) {
      },
      on: {
        xAxis_scale: {
          target: "xAxis_scale",
          action(o) {
          }
        },
        chart_yAxisRedraw: {
          target: "chart_yAxisRedraw",
          action(o) {
          }
        },
        chart_tool: {
          target: "chart_tool",
          action(o) {
          }
        },
        tool_activated: {
          target: "tool_activated",
          action(o) {
            this.context.origin.cursor = "default";
          }
        }
      }
    },
    xAxis_scale: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        Idle: {
          target: "idle",
          action(o) {
          }
        }
      }
    },
    chart_yAxisRedraw: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        always: {
          target: "idle",
          condition: "yAxisRedraw",
          action(o) {
            this.context.origin.drawGrid();
          }
        }
      }
    },
    tool_activated: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        tool_targetSelected: {
          target: "idle",
          condition: "toolSelectedThis",
          action(o) {
            console.log("tool_targetSelected:", o);
          }
        }
      }
    }
  },
  guards: {
    priceMaxMin() {
      return !0;
    },
    toolSelectedThis(o, e) {
      return this.eventData === this.context;
    },
    yAxisRedraw() {
      return !0;
    },
    zoomDone() {
      return !0;
    }
  }
}, am = {
  id: "scale",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(o) {
        this.context.origin.cursor = "ns-resize";
      },
      onExit(o) {
      },
      on: {
        resize: {
          target: "resize",
          action(o) {
          }
        },
        yAxis_scale: {
          target: "scale",
          action(o) {
          }
        },
        yAxis_inc: {
          target: "incremental",
          action(o) {
          }
        },
        yAxis_log: {
          target: "logarithmic",
          action(o) {
          }
        },
        yAxis_100: {
          target: "percentual",
          action(o) {
          }
        },
        setRange: {
          target: "setRange",
          action(o) {
          }
        }
      }
    },
    resize: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        someEvent: {
          target: "",
          action(o) {
          }
        }
      }
    },
    setRange: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        always: {
          target: "idle",
          condition: "zoomDone",
          action(o) {
            this.context.origin.draw();
          }
        }
      }
    }
  },
  guards: {
    receiver() {
      return this.eventData.scale.id == this.context.origin.id;
    },
    zoomDone() {
      return !0;
    }
  }
};
class lm extends W {
  constructor(e, i, s, n, r, a) {
    r = s, s = s.yAxis, super(e, i, s, n, r, a), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  get always() {
    return !0;
  }
  draw() {
    if (!super.mustUpdate())
      return;
    const e = this.scene.context, i = this.yAxis, s = this.yAxis.calcGradations() || [], n = this.theme.yAxis, r = F(n.tickMarker) ? n.tickMarker : !0;
    let a = [], l;
    switch (n?.location) {
      case "left":
        a = [this.width, this.width - i.yAxisTicks];
        break;
      case "right":
      default:
        a = [1, i.yAxisTicks];
        break;
    }
    this.scene.clear(), e.save(), e.strokeStyle = n.colourTick, e.fillStyle = n.colourTick, e.font = `${n.fontWeight} ${n.fontSize}px ${n.fontFamily}`;
    for (let h of s)
      l = i.$2Pixel(h[0]), e.fillText(h[0], i.yAxisTicks + 5, l + n.fontSize * 0.3), r && (e.beginPath(), e.moveTo(a[0], l), e.lineTo(a[1], l), e.stroke());
    e.restore(), super.updated();
  }
}
class hm extends W {
  constructor(e, i, s, n, r, a) {
    r = s, s = s.yAxis, super(e, i, s, n, r, a), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw() {
    const e = this.scene.context;
    this.yAxis.yAxis, this.scene.clear(), e.save(), e.restore();
  }
}
class cm extends W {
  constructor(e, i, s, n, r, a) {
    r = s, s = s.yAxis, super(e, i, s, n, r, a), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e) {
    if (e === void 0)
      return;
    const i = this.scene.context, s = this.core.stream instanceof lt && this.config.stream.tfCountDown;
    let n = e[4], r = this.parent.nicePrice(n), a = {
      fontSize: Ie.FONTSIZE * 1.05,
      fontWeight: Ie.FONTWEIGHT,
      fontFamily: Ie.FONTFAMILY,
      txtCol: "#FFFFFF",
      bakCol: Ie.COLOUR_CURSOR_BG,
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 5,
      paddingRight: 3,
      width: this.viewport.width
    }, l = 0, h = Ji(a), p = this.parent.yPos(n) - h * 0.5;
    this.scene.clear(), i.save(), e[4] >= e[1] ? a.bakCol = this.theme.candle.UpBodyColour : a.bakCol = this.theme.candle.DnBodyColour, Lt(i, r, l, p, a), s && (r = this.core.stream.countDownUpdate(), a.fontSize = a?.fontSize / 1.1, Lt(i, r, l, p + h, a)), i.restore(), this.viewport.render();
  }
}
const um = [
  ["labels", { class: lm, fixed: !0, required: !0 }],
  ["overlay", { class: hm, fixed: !0, required: !0 }],
  ["price", { class: cm, fixed: !0, required: !0 }],
  ["cursor", { class: Aa, fixed: !0, required: !0 }]
];
class dm extends dt {
  #e = "Y Scale Axis";
  #t = "scale";
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h;
  #p = new ce();
  #u = [];
  #g;
  #d;
  #f;
  #w;
  #E = {};
  constructor(e, i) {
    super(e, i), this.#n = this.options.elScale, this.#i = this.options.chart, this.id = `${this.parent.id}_scale`, this.#o = this.#n.viewport || this.#n;
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  set height(e) {
    this.setHeight(e);
  }
  get height() {
    return this.#n.getBoundingClientRect().height;
  }
  get width() {
    return this.#n.getBoundingClientRect().width;
  }
  get element() {
    return this.#n;
  }
  set cursor(e) {
    this.#n.style.cursor = e;
  }
  get cursor() {
    return this.#n.style.cursor;
  }
  get layerCursor() {
    return this.#h;
  }
  get layerLabels() {
    return this.#a;
  }
  get layerOverlays() {
    return this.#c;
  }
  get layerPriceLine() {
    return this.#l;
  }
  get overlays() {
    return Object.fromEntries([...this.graph.overlays.list]);
  }
  get yAxis() {
    return this.#s;
  }
  set yAxisType(e) {
    this.#s.yAxisType = Me.includes(e) ? e : Me[0];
  }
  get yAxisType() {
    return this.#s.yAxisType;
  }
  get yAxisHeight() {
    return this.#s.height;
  }
  get yAxisRatio() {
    return this.#s.yAxisRatio;
  }
  get yAxisGrads() {
    return this.#s.yAxisGrads;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return ae(this.#n);
  }
  get digitCnt() {
    return this.#g;
  }
  set scaleRange(e) {
    this.setScaleRange(e);
  }
  get range() {
    return this.#s.range;
  }
  set rangeMode(e) {
    this.#s.mode = e;
  }
  get rangeMode() {
    return this.#s.mode;
  }
  set rangeYFactor(e) {
    this.core.range.yFactor(e);
  }
  set yOffset(e) {
    this.#s.offset = e;
  }
  get yOffset() {
    return this.#s.offset;
  }
  get scale() {
    return this;
  }
  get Scale() {
    return this;
  }
  start() {
    const e = this.options.yAxisType === "default" ? void 0 : this.parent.localRange;
    this.#s = new Kt(this, this, this.options.yAxisType, e), this.createGraph(), this.#s.calcGradations(), this.draw(), this.eventsListen();
    const i = he(am);
    i.id = this.id, i.context = this, this.stateMachine = i, this.stateMachine.start();
  }
  restart() {
    this.#s.setRange(this.core.range), this.draw();
  }
  destroy() {
    this.core.hub.expunge(this), this.off(`${this.parent.id}_pointerout`, this.#h.erase, this.#h), this.off(Je, this.onStreamUpdate, this.#l), this.stateMachine.destroy(), this.graph.destroy(), this.#d.destroy(), this.element.remove();
  }
  eventsListen() {
    let e = this.graph.viewport.scene.canvas;
    this.#d = new He(e, { disableContextMenu: !1 }), this.#d.setCursor("ns-resize"), this.#d.on("pointerdrag", this.onDrag.bind(this)), this.#d.on("pointerdragend", this.onDragDone.bind(this)), this.#d.on("wheel", this.onMouseWheel.bind(this)), this.#d.on("dblclick", this.resetScaleRange.bind(this)), this.on(`${this.parent.id}_pointermove`, this.onMouseMove, this), this.on(`${this.parent.id}_pointerout`, this.#h.erase, this.#h), this.on(Je, this.#l.draw, this.#l), this.on("setRange", this.draw, this);
  }
  onResize(e) {
    this.setDimensions(e);
  }
  onMouseMove(e) {
    this.#w = P(e) ? e : [Math.floor(e.position.x), Math.floor(e.position.y)], this.#h.draw(this.#w);
  }
  onDrag(e) {
    this.#w = [
      Math.floor(e.position.x),
      Math.floor(e.position.y),
      e.dragstart.x,
      e.dragstart.y,
      e.movement.x,
      e.movement.y
    ], this.setScaleRange(Math.sign(e.movement.y));
  }
  onDragDone(e) {
  }
  onMouseWheel(e) {
    e.domEvent.preventDefault(), this.setScaleRange(Math.sign(e.wheeldelta) * -2);
  }
  onStreamUpdate(e) {
  }
  onChartDrag(e) {
    this.#s.mode === "manual" && (this.#s.offset = e.domEvent.srcEvent.movementY, this.draw());
  }
  setHeight(e) {
    this.#n.style.height = `${e}px`;
  }
  setDimensions(e) {
    const i = this.#n.getBoundingClientRect().width;
    this.setHeight(e.h), this.graph instanceof ht && (this.graph.setSize(i, e.h, i), this.draw()), this.#h instanceof Aa && this.calcPriceDigits();
  }
  setScaleRange(e = 0) {
    this.#s.mode == "automatic" && (this.#s.mode = "manual"), this.#s.zoom = e, this.draw(this.range, !0), this.core.MainPane.draw();
  }
  resetScaleRange() {
    this.#s.mode = "automatic", this.draw(this.range, !0), this.core.MainPane.draw();
  }
  yPos(e) {
    return this.#s.yPos(e);
  }
  yPosStream(e) {
    return this.#s.lastYData2Pixel(y);
  }
  yPos2Price(e) {
    return this.#s.yPos2Price(e);
  }
  nicePrice(e, i) {
    return Is(e, i);
  }
  createGraph() {
    let e = he(um);
    this.graph = new ht(this, this.#o, e, !1), this.#h = this.graph.overlays.get("cursor").instance, this.#a = this.graph.overlays.get("labels").instance, this.#c = this.graph.overlays.get("overlay").instance, this.#l = this.graph.overlays.get("price").instance, this.graph.addOverlays(this.#u), this.#l.target.moveTop(), this.#h.target.moveTop(), this.calcPriceDigits();
  }
  calcPriceDigits() {
    let e = 8;
    if (this.core.range.dataLength > 0 && this.#s instanceof Kt) {
      const i = this.#s.niceNumber(this.range.valueMax);
      e = `${Is(i, this.core.pricePrecision)}`.length + 2;
    }
    return this.#g = e < 8 ? 8 : e, this.#g;
  }
  calcScaleWidth() {
    const e = this.calcPriceDigits(), i = this.core.MainPane.graph.viewport.scene.context, s = this.theme.yAxis;
    i.font = At(s.fontSize, s.fontWeight, s.fontFamily);
    const n = Cn(i, "0");
    return e * n;
  }
  addOverlays(e) {
    if (!P(e))
      return !1;
    this.graph === void 0 ? this.#u.push(...e) : this.graph.addOverlays(e);
  }
  addOverlay(e, i) {
    if (!w(i))
      return !1;
    if (this.graph === void 0)
      this.#u.push([e, i]);
    else {
      let s = this.graph.addOverlay(e, i);
      return this.#l.target.moveTop(), this.#h.target.moveTop(), s;
    }
  }
  render() {
    this.graph.render();
  }
  draw(e = this.range, i = !0) {
    this.graph.draw(e, i), this.parent.drawGrid(i), this.parent.draw(this.range, !0);
  }
  resize(e = this.width, i = this.height) {
    this.setDimensions({ w: e, h: i });
  }
}
class pm extends W {
  watermark = {};
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.params.content = a?.content || "";
  }
  set position(e) {
    this.target.setPosition(0, 0);
  }
  draw() {
    const e = this.config?.watermark;
    if (super.mustUpdate(), e?.display !== !1) {
      if (e?.imgURL)
        this.watermark.imgURL = e.imgURL, sn(e?.imgURL, this.renderImage.bind(this));
      else if (b(e?.text)) {
        this.watermark.text = e.text, this.scene.clear();
        const i = this.scene.context;
        i.save(), this.renderText(e.text), i.restore();
      } else
        return;
      super.updated();
    }
  }
  renderText(e) {
    const i = Math.floor(this.core.height / We), s = this.core.config?.watermark?.fontSize, n = this.core.config?.watermark?.fontWeight, r = this.core.config?.watermark?.fontFamily, a = this.core.config?.watermark?.textColour, l = {
      fontSize: (s || this.theme.watermark.FONTSIZE) * i,
      fontWeight: n || this.theme.watermark.FONTWEIGHT,
      fontFamily: r || this.theme.watermark.FONTFAMILY,
      txtCol: a || this.theme.watermark.COLOUR
    }, h = this.scene.context;
    h.font = At(l?.fontSize, l?.fontWeight, l?.fontFamily), h.textBaseline = "top", h.fillStyle = l.txtCol;
    const p = Ji(l), f = Qi(h, e, l), g = (this.scene.width - f) / 2, C = (this.core.Chart.height - p) / 2;
    h.fillText(e, g, C);
  }
  renderImage(e) {
    if (!e)
      return;
    const i = this.core.config?.watermark?.imgHeight || this.theme.watermark.IMGHEIGHT, s = this.core.config?.watermark?.imgWidth || this.theme.watermark.IMGWIDTH, n = (this.scene.width - s) / 2, r = (this.scene.height - i) / 2;
    this.scene.clear();
    const a = this.scene.context;
    a.save(), Go(a, e, n, r, i, s), a.restore();
  }
}
class mm extends W {
  #e;
  #t;
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.#e = new Ma(e.scene, n), this.theme.volume.Height = R(n?.volume?.Height, 0, 100) || 100;
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e = this.core.range) {
    if (!super.mustUpdate())
      return;
    this.scene.clear();
    const i = e.data, s = this.scene.height, n = this.xAxis.smoothScrollOffset || 0;
    let r = Math.max(this.xAxis.candleW - 1, 1);
    r < 3 ? r = 1 : r < 5 ? r = 3 : r > 5 && (r = Math.ceil(r * 0.8));
    const a = {
      x: 0 + n - this.xAxis.candleW,
      w: r,
      z: s
    }, l = Math.floor(s * this.theme.volume.Height / 100);
    let h = this.core.rangeScrollOffset, p = e.indexStart - h, f = e.Length + h * 2, g = f, C = p, S, M = 0;
    for (; g--; )
      S = e.value(C), S[4] !== null && (M = S[5] > M ? S[5] : M), C++;
    for (; f--; )
      S = e.value(p), a.x = ye(this.xAxis.xPos(S[0]) - r / 2), S[4] !== null && (a.h = l - l * ((M - S[5]) / M), a.raw = i[p], this.#e.draw(a)), p++;
    super.updated();
  }
}
class Oa {
  areaCoordinates = [];
  constructor(e, i) {
    this.scene = e, this.ctx = this.scene.context, this.width = this.scene.width, this.cfg = i;
  }
  draw(e) {
    const i = this.ctx, s = e.raw[4] >= e.raw[1], n = s ? this.cfg.candle.UpBodyColour : this.cfg.candle.DnBodyColour, r = s ? this.cfg.candle.UpWickColour : this.cfg.candle.DnWickColour;
    switch (this.cfg.candle.Type) {
      case te.CANDLE_SOLID:
        this.fill = !0;
        break;
      case te.CANDLE_HOLLOW:
      case te.OHLC:
        this.fill = !1;
        break;
      case te.CANDLE_UP_HOLLOW:
        this.fill = !s;
        break;
      case te.CANDLE_DOWN_HOLLOW:
        this.fill = s;
    }
    let a = Math.max(e.w - 1, 1);
    a < 3 ? a = 1 : a < 5 ? a = 3 : a > 5 && (a = Math.ceil(a * 0.8));
    let l = Math.max(Math.floor(a * 0.5), 1), h = Math.abs(e.o - e.c), p = e.c === e.o ? 1 : 2, f = e.x, g = Math.floor(f) - 0.5;
    if (i.save(), i.strokeStyle = r, i.beginPath(), i.moveTo(g, Math.floor(e.h)), this.cfg.candle.Type === te.OHLC ? i.lineTo(g, Math.floor(e.l)) : s ? (i.lineTo(g, Math.floor(e.c)), i.moveTo(g, Math.floor(e.o))) : (i.lineTo(g, Math.floor(e.o)), i.moveTo(g, Math.floor(e.c))), i.lineTo(g, Math.floor(e.l)), i.stroke(), a == 3) {
      i.fillStyle = r;
      let C = s ? 1 : -1;
      i.rect(
        Math.floor(f - l),
        e.c,
        Math.floor(l * 2),
        C * Math.max(h, p)
      ), i.fill(), i.stroke();
    } else if (a > 3 && this.fill) {
      i.fillStyle = n;
      let C = s ? 1 : -1;
      i.rect(
        Math.floor(f - l),
        e.c,
        Math.floor(l * 2),
        C * Math.max(h, p)
      ), i.fill(), i.stroke();
    } else if (a > 3 && !this.fill && this.cfg.candle.Type !== te.OHLC) {
      let C = s ? 1 : -1;
      i.rect(
        Math.floor(f - l),
        e.c,
        Math.floor(l * 2),
        C * Math.max(h, p)
      ), i.stroke();
    } else
      this.cfg.candle.Type === te.OHLC ? (i.beginPath(), i.moveTo(g - l, e.o), i.lineTo(g, e.o), i.moveTo(g, e.c), i.lineTo(g + l, e.c), i.stroke()) : (i.strokeStyle = r, i.beginPath(), i.moveTo(
        g,
        Math.floor(Math.min(e.o, e.c))
      ), i.lineTo(
        g,
        Math.floor(Math.max(e.o, e.c)) + (e.o === e.c ? 1 : 0)
      ), i.stroke());
    i.restore();
  }
  body(e) {
  }
  area(e) {
    this.areaCoordinates.push(e);
  }
  areaRender() {
    const e = this.areaCoordinates;
    if (!P(e) || e.length == 0)
      return;
    let i = this.ctx, s = this.cfg.candle, n;
    Math.max(e[0].w - 1, 1), e[0].x;
    let r = [e[0].x, e[0].h];
    i.save(), i.strokeStyle = s.AreaLineColour || s.UpBodyColour || s.DnBodyColour, i.lineWidth = 1, i.beginPath(), i.moveTo(e[0].x, e[0].h);
    let a = 0;
    for (; a < e.length; )
      i.lineTo(e[a].x, e[a].h), a++;
    if (s?.Type == "area") {
      if (n = i.createLinearGradient(0, 0, 0, this.scene.height), P(s.AreaFillColour))
        for (let [l, h] of s.AreaFillColour.entries())
          n.addColorStop(l, h);
      else
        b(s.AreaFillColour) ? n = s.AreaFillColour : n = s.UpBodyColour || s.DnBodyColour;
      i.stroke(), i.lineTo(e[a - 1].x, this.scene.height), i.lineTo(r[0], this.scene.height), i.fillStyle = n, i.closePath(), i.fill();
    } else
      i.stroke();
    i.restore(), e.length = 0;
  }
}
class Na extends W {
  #e;
  constructor(e, i = !1, s = !1, n, r) {
    super(e, i, s, n, r), this.#e = new Oa(e.scene, n);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  draw(e = this.core.range) {
    if (!super.mustUpdate())
      return;
    this.scene.clear();
    let i, s = this.theme.candle.Type;
    switch (s) {
      case te.AREA:
      case te.LINE:
        i = (f) => {
          this.#e.area({ ...f });
        };
        break;
      default:
        i = (f) => {
          this.#e.draw(f);
        };
        break;
    }
    const r = {
      x: (this.xAxis.smoothScrollOffset || 0) - this.xAxis.candleW,
      w: this.xAxis.candleW
    };
    let a = this.core.rangeScrollOffset, l = e.indexStart - a, h = e.Length + a * 2, p;
    for (this.core.stream && (this.core.stream.lastPriceMax = e.valueMax, this.core.stream.lastPriceMin = e.valueMin); h; ) {
      if (l >= 0) {
        if (p = e.value(l), r.x = this.xAxis.xPos(p[0]), p?.[7]) {
          this.core.stream.lastXPos = r.x, this.core.stream.lastYPos = { ...r };
          break;
        }
        p[4] !== null && (r.o = this.yAxis.yPos(p[1]), r.h = this.yAxis.yPos(p[2]), r.l = this.yAxis.yPos(p[3]), r.c = this.yAxis.yPos(p[4]), r.raw = p, i(r));
      }
      l++, h--;
    }
    (s === te.AREA || s === te.LINE) && this.#e.areaRender(), super.updated();
  }
}
class fm extends W {
  #e;
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.#e = new Oa(e.scene, n), this.theme.priceLineStyle = this.theme?.priceLineStyle || eu;
  }
  set position(e) {
    this.setPosition(e[0], e[1]);
  }
  setPosition(e, i) {
    this.core.stream !== void 0 && (this.target.setPosition(e, i), this.core.stream.lastScrollPos = this.core.scrollPos);
  }
  draw() {
    if (this.core.stream === void 0 || !P(this.chart.streamCandle))
      return;
    this.scene.clear();
    const e = this.core.range, i = this.chart.streamCandle, s = this.theme.candle.Type === te.AREA || this.theme.candle.Type === te.LINE ? (a) => {
      this.areaRender(a);
    } : (a) => {
      this.#e.draw(a);
    };
    this.xAxis.smoothScrollOffset;
    const r = {
      x: this.core.stream.lastXPos,
      w: this.xAxis.candleW
    };
    r.o = this.yAxis.yPos(i[1]), r.h = this.yAxis.yPos(i[2]), r.l = this.yAxis.yPos(i[3]), r.c = this.yAxis.yPos(i[4]), r.raw = i, e.inRenderRange(i[0]) && s(r), i[4] >= i[1] ? this.theme.priceLineStyle.stroke = this.core.theme.candle.UpBodyColour : this.theme.priceLineStyle.stroke = this.core.theme.candle.DnBodyColour, ri(
      this.scene.context,
      r.c,
      0,
      this.target.width,
      this.theme.priceLineStyle
    );
  }
  areaRender(e) {
    const i = this.core.range, s = i.value(i.data.length - 2);
    if (s === null)
      return;
    const n = {
      x: this.xAxis.xPos(s[0]),
      o: this.yAxis.yPos(s[1]),
      h: this.yAxis.yPos(s[2]),
      l: this.yAxis.yPos(s[3]),
      c: this.yAxis.yPos(s[4])
    }, r = this.scene.context, a = this.theme, l = a.candle.UpBodyColour || a.candle.DnBodyColour;
    Math.max(e.w - 1, 1), e.x;
    let h;
    if (r.save(), r.fillStyle = l, r.strokeStyle = l, r.lineWidth = 1, r.beginPath(), r.moveTo(e.x, e.c), r.lineTo(n.x, n.h), a.candle.Type === te.AREA) {
      if (h = r.createLinearGradient(0, 0, 0, this.scene.height), P(a.candle.AreaFillColour))
        for (let [p, f] of a.candle.AreaFillColour.entries())
          h.addColorStop(p, f);
      else
        b(a.candle.AreaFillColour) ? h = a.candle.AreaFillColour : h = a.candle.UpBodyColour || a.candle.DnBodyColour;
      r.stroke(), r.lineTo(n.x, this.scene.height), r.lineTo(e.x, this.scene.height), r.fillStyle = h, r.closePath(), r.fill();
    } else
      r.stroke();
    r.restore();
  }
}
const Gt = {
  colour: "#4444cc88",
  wdith: 1,
  dash: [1, 0]
};
class gm extends W {
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a);
    const l = { class: ym, fixed: !0, required: !1 };
    this.core.config?.highLow === !0 && (this.scaleOverly = this.chart.scale.addOverlay("hiLo", l));
  }
  set position(e) {
    this.target.setPosition(0, 0);
  }
  draw(e = this.core.range) {
    if (this.core.config?.highLow !== !0 || !super.mustUpdate())
      return;
    this.scene.clear();
    let i, s, n, r = this.scene.width, a = 35, l = {};
    const h = e.valueHi, p = e.valueLo, f = { ...this.theme.yAxis }, g = this.scene.context;
    f.colourCursorBG = this.theme?.hilo?.colour || Gt.colour, g.save(), g.strokeStyle = this.theme?.highLow?.colour || Gt.colour, g.strokeWidth = this.theme?.highLow?.width || Gt.width, g.setLineDash(this.theme?.highLow?.dash || Gt.dash), n = this.yAxis.yPos(h), ri(g, n, 0, r, l), i = "High", s = this.theme.yAxis.location == "left" ? 0 : r - (a + 25), qi(g, i, s, n, a, f), n = this.yAxis.yPos(p), ri(g, n, 0, r, l), i = "Low", qi(g, i, s, n, a, f), g.restore(), super.updated(), "hiLo" in this.chart.scale.overlays && (this.chart.scale.overlays.hiLo.instance.setRefresh(), this.chart.scale.overlays.hiLo.instance.scaleDraw());
  }
}
class ym extends W {
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.viewport = e.viewport;
  }
  set position(e) {
    this.target.setPosition(0, 0);
  }
  draw() {
  }
  scaleDraw(e = this.core.range) {
    if (!super.mustUpdate())
      return;
    this.scene.clear();
    let i, s, n, r;
    const a = e.valueHi, l = e.valueLo, h = { ...this.theme.yAxis }, p = this.scene.context;
    h.colourCursorBG = this.theme?.hilo?.colour || Gt.colour, i = this.chart.Scale.nicePrice(a), s = 1, n = this.yAxis.yPos(a) + 1, r = this.viewport.width, qi(p, i, s, n, r, h), i = this.chart.Scale.nicePrice(l), n = this.yAxis.yPos(l) + 1, qi(p, i, s, n, r, h), super.updated();
  }
}
function qi(o, e, i, s, n, r) {
  let a = {
    fontSize: r.fontSize * 1.05,
    fontWeight: r.fontWeight,
    fontFamily: r.fontFamily,
    txtCol: r.colourCursor,
    bakCol: r.colourCursorBG,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    width: n
  }, l = a.fontSize + a.paddingTop + a.paddingBottom, h = s - l * 0.5;
  o.save(), o.fillStyle = a.bakCol, o.fillRect(i, h, n, l), Lt(o, `${e}`, i, h, a), o.restore();
}
class vm {
  data;
  icon;
  constructor(e, i) {
    this.scene = e.scene, this.hit = e.hit, this.ctx = this.scene.context, this.ctxH = this.hit.context, this.width = this.scene.width, this.cfg = i.events, this.dims = { w: this.cfg.iconWidth, h: this.cfg.iconHeight }, this.icon = vt(this.cfg.iconEvent, this.cfg.iconColour, this.dims);
  }
  draw(e) {
    this.data = e;
    const i = this.icon, s = this.cfg, n = this.hit.getIndexValue(e.key), r = vt(s.iconEvent, n, this.dims), a = R(e.w, s.iconMinDim, s.iconHeight), l = R(e.w, s.iconMinDim, s.iconWidth), h = this.data.x, p = this.data.y, f = this.ctx, g = this.ctxH;
    return f.save(), f.drawImage(i, h, p, l, a), f.restore(), g.save(), g.drawImage(r, h, p, l, a), g.restore(), { x: h, y: p, w: l, h: a, k: n };
  }
}
const Br = {
  bounded: !0,
  dragBar: !1,
  closeIcon: !1,
  content: "",
  styles: {
    window: {
      width: "15em",
      zindex: "10"
    },
    content: {
      overflow: "hidden",
      padding: "0 1em"
    }
  }
};
class wm extends W {
  #e;
  #t = [];
  #i;
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.#e = new vm(e, n), this.core.on("primary_pointerdown", this.onPrimaryPointerDown, this), Br.parent = this, this.#i = this.core.WidgetsG.insert("Dialogue", Br), this.#i.start();
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  get data() {
    return this.overlay.data;
  }
  onPrimaryPointerDown(e) {
    this.core.MainPane.stateMachine.state !== "chart_pan" && Le(this.isNewsEventSelected, Qt, this)(e);
  }
  isNewsEventSelected(e) {
    const i = e[0], s = e[1], n = this.hit.getIntersection(i, s);
    if (this.core.config?.events?.display === !1 || this.core.config?.events?.displayInfo === !1 || n == -1)
      return;
    const r = this.theme.events, a = R(this.xAxis.candleW, r.iconMinDim, r.iconHeight), l = this.xAxis.pixel2T(i), h = this.xAxis.scrollOffsetPx, p = this.core.dimensions;
    let f = Object.keys(this.data)[n] * 1, g = this.xAxis.xPos(l) + h, C = s - a * 1.5 - p.height, S = "";
    for (let k of this.data[f])
      S += this.buildNewsEventHTML(k);
    const M = {
      dimensions: { h: void 0, w: 150 },
      position: { x: g + a / 2 + 1, y: C },
      content: S,
      offFocus: Qt + 1
    };
    this.core.emit("event_selected", f), this.#i.open(M);
  }
  buildNewsEventHTML(e) {
    let i = e?.title, s = `<style>
    h1, p {display: inline-block; font-size: 0.9em;
    max-width: 98%;
    </style>`;
    return b(e?.url) && (i = `<a href="${e?.url}" target="${e?.target}">${i}</a>`), s += `<h1>${i}</h1>`, s += `<p>${e?.content}</p>`, s;
  }
  draw(e = this.core.range) {
    if (this.core.config?.events?.display === !1 || !super.mustUpdate())
      return;
    this.hit.clear(), this.scene.clear(), this.#t.length = 0;
    const s = {
      x: (this.xAxis.smoothScrollOffset || 0) - this.xAxis.candleW,
      w: this.xAxis.candleW
    };
    let n = this.theme.events, r = this.core.rangeScrollOffset, a = e.indexStart - r, l = e.Length + r * 2, h, p, f;
    for (; l; ) {
      if (h = e.value(a), p = `${h[0]}`, f = Object.keys(this.data).indexOf(p), f >= 0)
        for (let g of this.data[p])
          s.x = this.xAxis.xPos(h[0]) - this.xAxis.candleW / 2, s.y = this.scene.height - R(this.xAxis.candleW, n.iconMinDim, n.iconHeight) * 1.5, s.key = f, this.#t.push(this.#e.draw(s));
      a++, l--;
    }
    super.updated();
  }
}
class bm {
  data;
  buy;
  sell;
  constructor(e, i) {
    this.scene = e.scene, this.hit = e.hit, this.ctx = this.scene.context, this.ctxH = this.hit.context, this.width = this.scene.width, this.cfg = i.trades, this.dims = { w: this.cfg.iconWidth, h: this.cfg.iconHeight }, this.buy = vt(this.cfg.iconBuy, this.cfg.buyColour, this.dims), this.sell = vt(this.cfg.iconSell, this.cfg.sellColour, this.dims);
  }
  draw(e) {
    this.data = e;
    const i = this.cfg, s = e.side === "buy" ? this.buy : this.sell, n = e.side === "buy" ? i.iconBuy : i.iconSell, r = this.hit.getIndexValue(e.key), a = vt(n, r, this.dims), l = R(e.w, i.iconMinDim, i.iconHeight), h = R(e.w, i.iconMinDim, i.iconWidth), p = this.data.x, f = this.data.y, g = this.ctx, C = this.ctxH;
    return g.save(), g.drawImage(s, p, f, h, l), g.restore(), C.save(), C.drawImage(a, p, f, h, l), C.restore(), { x: p, y: f, w: h, h: l, k: r };
  }
}
const Ur = {
  bounded: !0,
  dragBar: !1,
  closeIcon: !1,
  content: "",
  styles: {
    window: {
      width: "15em",
      zindex: "10"
    },
    content: {
      overflow: "hidden",
      padding: "0 1em"
    }
  }
};
class xm extends W {
  #e;
  #t = [];
  #i;
  #r;
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.settings = a.settings, this.#e = new bm(e, n), this.core.on("primary_pointerdown", this.onPrimaryPointerDown, this), Ur.parent = this, this.#r = this.core.WidgetsG.insert("Dialogue", Ur), this.#r.start();
  }
  destroy() {
    this.core.off("primary_pointerdown", this.onPrimaryPointerDown, this);
  }
  set position(e) {
    this.target.setPosition(e[0], e[1]);
  }
  get data() {
    return this.overlay.data;
  }
  get settings() {
    return this.params.settings;
  }
  set settings(e) {
    this.doSettings(e);
  }
  doSettings(e) {
    if (!w(e))
      return !1;
    let i = this.theme.trades;
    for (let s in e)
      e[s] !== void 0 && (i[s] = e[s]);
  }
  onPrimaryPointerDown(e) {
    this.core.MainPane.stateMachine.state !== "chart_pan" && Le(this.isTradeSelected, Qt, this)(e);
  }
  isTradeSelected(e) {
    const i = e[2].domEvent.srcEvent, s = (i.target || i.srcElement).getBoundingClientRect(), n = i.clientX - (s.right - s.width), r = i.clientY - s.top, a = this.hit.getIntersection(n, r);
    if (this.core.config?.trades?.display === !1 || this.core.config?.trades?.displayInfo === !1 || a == -1)
      return;
    console.log("isTradeSelected()");
    const l = this.theme.trades, h = R(this.xAxis.candleW, l.iconMinDim, l.iconWidth), p = this.xAxis.pixel2T(n);
    this.core.range.valueByTS(p);
    const f = this.xAxis.scrollOffsetPx, g = this.core.dimensions;
    let C = Object.keys(this.data)[a] * 1, S = this.xAxis.xPos(p) + f, M = r - h * 1.5 - g.height, k = "";
    for (let we of this.data[C])
      k += this.buildTradeHTML(we);
    const ue = {
      dimensions: { h: void 0, w: 150 },
      position: { x: S + h / 2 + 1, y: M },
      content: k,
      offFocus: Qt + 1
    };
    this.core.emit("trade_selected", C), this.#r.open(ue);
  }
  buildTradeHTML(e) {
    let i = `<style>
    dt, dd {display: inline-block; font-size: 0.9em;}
    dt {min-width: 40%;}
    dd {min-width: 60%; margin: 0;}
    </style>`;
    i += "<dl>";
    for (let s in e)
      s != "timestamp" && (i += `<dt>${s}</dt><dd>${e[s]}</dd>`);
    return i += "</dl>", i;
  }
  draw(e = this.core.range) {
    if (!super.mustUpdate() || this.core.config?.trades?.display === !1)
      return;
    this.hit.clear(), this.scene.clear(), this.#t.length = 0;
    const s = {
      x: (this.xAxis.smoothScrollOffset || 0) - this.xAxis.candleW,
      w: this.xAxis.candleW
    };
    let n = this.theme.trades, r = this.core.rangeScrollOffset, a = e.indexStart - r, l = e.Length + r * 2, h, p, f;
    for (; l; ) {
      if (h = e.value(a), p = `${h[0]}`, f = Object.keys(this.data).indexOf(p), f >= 0)
        for (let g of this.data[p])
          s.x = this.xAxis.xPos(h[0]) - this.xAxis.candleW / 2, s.y = this.yAxis.yPos(h[2]) - R(this.xAxis.candleW, n.iconMinDim, n.iconHeight) * 1.5, s.side = g.side, s.key = f, this.#t.push(this.#e.draw(s));
      a++, l--;
    }
    super.updated();
  }
}
const zr = {
  bounded: !0,
  dragBar: !1,
  closeIcon: !1,
  content: "",
  styles: {
    window: {
      width: "15em",
      zindex: "10"
    },
    content: {
      overflow: "hidden",
      padding: "0 1em"
    }
  }
};
class oe extends W {
  static #e = 0;
  static #t = {};
  static get inCnt() {
    return oe.#e++;
  }
  static create(e, i) {
    const s = ++oe.#e;
    i.cnt = s, i.modID = `${i.toolID}_${s}`, i.toolID = i.modID, i.target = e;
    const n = new i.tool(i);
    return oe.#t[s] = n, e.chartToolAdd(n), n;
  }
  static destroy(e) {
    e instanceof oe && delete oe.#t[e.inCnt];
  }
  #i;
  #r;
  #s = "Chart Tools";
  #n = "TX_Tool";
  #o;
  #a;
  #c = [0, 0];
  #l = !1;
  #h;
  #p = { TL: [0, 0], BR: [0, 0] };
  constructor(e, i = !1, s = !1, n, r, a) {
    super(e, i, s, n, r, a), this.#r = oe.inCnt, this.config.ID && (this.#i = Be(this.config.ID)), this.settings = a?.settings || {}, zr.parent = this, this.#o = this.core.WidgetsG.insert("ConfigDialogue", zr), this.#o.start(), this.eventsListen();
  }
  set id(e) {
    this.#i = Be(e);
  }
  get id() {
    return this.#i || `${this.core.id}-${se(this.#n)}_${this.#r}`;
  }
  get inCnt() {
    return this.#r;
  }
  get name() {
    return this.#s;
  }
  get shortName() {
    return this.#n;
  }
  get settings() {
    return this.params.settings;
  }
  set settings(e) {
    this.doSettings(e);
  }
  eventsListen() {
    const e = this.chart;
    e.on(`${e.id}_pointermove`, this.onPointerMove, this), e.on(`${e.id}_pointerdown`, this.onPointerDown, this), e.on(`${e.id}_pointerup`, this.onPointerUp, this);
  }
  onPointerMove(e) {
    this.chart.stateMachine.state;
  }
  onPointerDown(e) {
    this.chart.stateMachine.state !== "chart_pan" && Le(this.isToolSelected, Qt, this)(e);
  }
  onPointerUp(e) {
  }
  isToolSelected(e) {
  }
  doSettings(e) {
    if (!w(e))
      return !1;
    let i = this.theme.trades;
    for (let s in e)
      e[s] !== void 0 && (i[s] = e[s]);
  }
  isVisible() {
  }
  draw(e = this.core.range) {
    if (!super.mustUpdate() || this.core.config?.tools?.display === !1)
      return;
    this.hit.clear(), this.scene.clear(), this.theme.tools;
    let i = this.core.rangeScrollOffset;
    e.indexStart - i, e.Length + i * 2, super.updated();
  }
}
const Da = {
  primaryPane: [
    ["watermark", { class: pm, fixed: !0, required: !0, params: { content: null } }],
    ["grid", { class: Gi, fixed: !0, required: !0, params: { axes: "y" } }],
    ["candles", { class: Na, fixed: !1, required: !0 }],
    ["hiLo", { class: gm, fixed: !0, required: !1 }],
    ["stream", { class: fm, fixed: !1, required: !0 }],
    ["tools", { class: oe, fixed: !1, required: !0 }],
    ["cursor", { class: Ys, fixed: !0, required: !0 }]
  ],
  secondaryPane: [
    ["grid", { class: Gi, fixed: !0, required: !0, params: { axes: "y" } }],
    ["tools", { class: oe, fixed: !1, required: !0 }],
    ["cursor", { class: Ys, fixed: !0, required: !0 }]
  ]
}, js = {
  primaryPane: {
    trades: { class: xm, fixed: !1, required: !1 },
    events: { class: wm, fixed: !1, required: !1 },
    volume: { class: mm, fixed: !1, required: !0, params: { maxVolumeH: Ii.ONCHART_VOLUME_HEIGHT } }
  },
  secondaryPane: {
    candles: { class: Na, fixed: !1, required: !0 }
  }
}, Ne = {
  id: "chart",
  title: "",
  type: "chart",
  source: () => {
  }
};
class at extends dt {
  static #e = 0;
  static get cnt() {
    return at.#e++;
  }
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a = "idle";
  #c = {
    state: !1,
    height: null,
    rowsHeight: null,
    rowsCnt: 1
  };
  #l;
  #h;
  #p;
  #u;
  #g;
  #d;
  #f;
  #w;
  #E;
  #y;
  #v;
  #m = new ce();
  #C = new ce();
  #T = [0, 0];
  #x = !1;
  #P;
  #b;
  #S;
  #M = {
    valueMax: 110,
    valueMin: -10,
    valueDiff: 120
  };
  #L = {};
  constructor(e, i = {}) {
    if (super(e, i), this.#n = at.cnt, !w(i))
      throw new Error("Chart (pane) constructor failed: Expected options typeof object");
    if (this.#i = this.options.name, this.#r = this.options.shortName, this.#s = this.options.title, this.#o = this.options.type == "primary" ? "primaryPane" : "secondaryPane", this.#y = this.options.view, this.#h = this.options.elements.elScale, this.#l = this.options.elements.elTarget, this.#l.id = this.id, this.legend = new om(this.elLegend, this), this.isPrimary)
      Ne.type = "chart", Ne.title = this.title, Ne.parent = this, Ne.source = this.legendInputs.bind(this), this.legend.add(Ne), this.yAxisType = "default";
    else {
      let n = this.core.indicatorClasses[i.view[0].type].scale;
      Ne.type = "secondary", Ne.title = "", Ne.parent = this, Ne.source = () => ({ inputs: {}, colours: [], labels: [] }), this.legend.add(Ne), this.yAxisType = Me.includes(n) ? n : "default";
    }
    const s = { ...i };
    s.parent = this, s.chart = this, s.elScale = this.elScale, s.yAxisType = this.yAxisType, this.scale = new dm(this.core, s), this.#a = "init", this.log(`${this.name} instantiated`);
  }
  set id(e) {
    this.#t = Be(e);
  }
  get id() {
    return this.#t || Be(`${this.core.id}-${this.#i}_${this.#n}`);
  }
  get name() {
    return this.#i;
  }
  get shortName() {
    return this.#r;
  }
  set title(e) {
    this.setTitle(e);
  }
  get title() {
    return this.#s;
  }
  get type() {
    return this.#o;
  }
  get status() {
    return this.#a;
  }
  get collapsed() {
    return this.#c;
  }
  get isPrimary() {
    return this.options.view.primary || this.#o === "primaryPane" || !1;
  }
  get element() {
    return this.#l;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return ae(this.#l);
  }
  set width(e) {
    this.setWidth(e);
  }
  get width() {
    return this.#l.getBoundingClientRect().width;
  }
  set height(e) {
    this.setHeight(e);
  }
  get height() {
    return this.#l.getBoundingClientRect().height;
  }
  get localRange() {
    return this.#M;
  }
  get stream() {
    return this.#f;
  }
  get streamCandle() {
    return this.#E;
  }
  set cursor(e) {
    this.element.style.cursor = e;
  }
  get cursor() {
    return this.element.style.cursor;
  }
  get cursorPos() {
    return this.#T;
  }
  set cursorActive(e) {
    this.#x = e;
  }
  get cursorActive() {
    return this.#x;
  }
  get cursorClick() {
    return this.#P;
  }
  get candleW() {
    return this.core.Timeline.candleW;
  }
  get scrollPos() {
    return this.core.scrollPos;
  }
  get bufferPx() {
    return this.core.bufferPx;
  }
  get elCanvas() {
    return this.graph.viewport.scene.canvas;
  }
  get elScale() {
    return this.#h;
  }
  get elLegend() {
    return this.#l.legend;
  }
  get elViewport() {
    return this.#l.viewport;
  }
  set layerWidth(e) {
    this.graph.layerWidth = e;
  }
  get layerWidth() {
    return this.graph.layerWidth;
  }
  set legend(e) {
    this.#g = e;
  }
  get legend() {
    return this.#g;
  }
  set time(e) {
    this.#u = e;
  }
  get time() {
    return this.#u;
  }
  set scale(e) {
    this.#p = e;
  }
  get scale() {
    return this.#p;
  }
  set yAxisType(e) {
    this.setYAxisType(e);
  }
  get yAxisType() {
    return this.#S;
  }
  get axes() {
    return "x";
  }
  get view() {
    return this.#y;
  }
  get viewport() {
    return this.graph.viewport;
  }
  get layerGrid() {
    return this.graph.overlays.get("grid").layer;
  }
  get overlays() {
    return Object.fromEntries([...this.graph.overlays.list]);
  }
  get overlayGrid() {
    return this.graph.overlays.get("grid").instance;
  }
  get overlayTools() {
    return this.#C;
  }
  get overlaysDefault() {
    return Da[this.type];
  }
  get indicators() {
    return this.getIndicators();
  }
  get indicatorDeleteList() {
    return this.#L;
  }
  get Divider() {
    return this.#d;
  }
  get siblingPrev() {
    return this.sibling("prev");
  }
  get siblingNext() {
    return this.sibling("next");
  }
  start() {
    this.#u = this.core.Timeline, this.createGraph(), this.#p.start(), this.draw(this.range), this.cursor = "crosshair", Ss.id = this.id, Ss.context = this, this.stateMachine = Ss, this.stateMachine.start(), this.eventsListen();
    let e = { chartPane: this };
    this.#d = this.core.WidgetsG.insert("Divider", e), this.#d.start();
    let s = {
      title: "Chart Config",
      content: `Configure chart ${this.id}`,
      parent: this,
      openNow: !1
    };
    this.#w = this.core.WidgetsG.insert("ConfigDialogue", s), this.#w.start(), this.#a = "running";
  }
  destroy() {
    if (this.#a !== "destroyed") {
      if (!this.core.MainPane.chartDeleteList[this.id]) {
        this.core.warn(`Cannot "destroy()": ${this.id} !!! Use "remove()" or "removeChartPane()" instead.`);
        return;
      }
      this.core.log(`Deleting chart pane: ${this.id}`), this.core.hub.expunge(this), this.removeAllIndicators(), this.stateMachine.destroy(), this.#d.destroy(), this.#p.destroy(), this.graph.destroy(), this.#b.destroy(), this.legend.destroy(), this.stateMachine = void 0, this.#d = void 0, this.#g = void 0, this.#p = void 0, this.graph = void 0, this.#b = void 0, this.core.warn(`Deleting chart pane ${this.id} destroys all of its data!`), this.element.remove(), this.#a = "destroyed";
    }
  }
  remove() {
    this.emit("destroyChartView", this.id);
  }
  eventsListen() {
    this.#b = new He(this.#l, { disableContextMenu: !1 }), this.#b.on("pointerdrag", this.onChartDrag.bind(this)), this.#b.on("pointerdragend", this.onChartDragDone.bind(this)), this.#b.on("pointermove", this.onPointerMove.bind(this)), this.#b.on("pointerenter", this.onPointerEnter.bind(this)), this.#b.on("pointerout", this.onPointerOut.bind(this)), this.#b.on("pointerdown", this.onPointerDown.bind(this)), this.#b.on("pointerup", this.onPointerUp.bind(this)), this.on("main_mousemove", this.updateLegends, this), this.on(Li, this.onStreamListening, this), this.on(en, this.onStreamNewValue, this), this.on(Je, this.onStreamUpdate, this), this.on(Js, this.onStreamNewValue, this), this.on(`${this.id}_removeIndicator`, this.onDeleteIndicator, this), this.isPrimary && this.on("chart_yAxisRedraw", this.onYAxisRedraw, this);
  }
  onChartDrag(e) {
    this.cursor = "grab", this.core.MainPane.onChartDrag(e), this.scale.onChartDrag(e);
  }
  onChartDragDone(e) {
    this.cursor = "crosshair", this.core.MainPane.onChartDragDone(e);
  }
  onPointerMove(e) {
    this.core.MainPane.onPointerActive(this), this.scale.layerCursor.visible = !0, this.graph.overlays.list.get("cursor").layer.visible = !0, this.#T = [Math.round(e.position.x), Math.round(e.position.y)], this.#p.onMouseMove(this.#T), this.emit(`${this.id}_pointermove`, this.#T);
  }
  onPointerEnter(e) {
    this.core.MainPane.onPointerActive(this), this.#T = [Math.round(e.position.x), Math.round(e.position.y)], this.core.MainPane.onMouseEnter(), this.scale.layerCursor.visible = !0, this.graph.overlays.list.get("cursor").layer.visible = !0, this.emit(`${this.id}_pointerenter`, this.#T);
  }
  onPointerOut(e) {
    this.#x = !1, this.#T = [Math.round(e.position.x), Math.round(e.position.y)], this.scale.layerCursor.visible = !1, this.emit(`${this.id}_pointerout`, this.#T);
  }
  onPointerDown(e) {
    this.core.pointerButtons[e.domEvent.srcEvent.button] = !0, this.#P = [Math.floor(e.position.x), Math.floor(e.position.y), e], this.stateMachine.state === "tool_activated" ? this.emit("tool_targetSelected", { target: this, position: e }) : this.isPrimary && this.emit("primary_pointerdown", this.#P);
  }
  onPointerUp(e) {
    this.core.pointerButtons[e.domEvent.srcEvent.button] = !1;
  }
  onStreamListening(e) {
    this.#f !== e && (this.#f = e);
  }
  onStreamNewValue(e) {
    this.draw(this.range, !0);
  }
  onStreamUpdate(e) {
    this.isPrimary ? (this.#E = e, this.chartStreamCandle.draw(), this.layerStream.setPosition(this.core.stream.lastScrollPos, 0), this.updateLegends(this.cursorPos, e)) : this.updateLegends(), this.core.MainPane.draw();
  }
  onYAxisRedraw() {
    this.isPrimary && this.refresh();
  }
  onDeleteIndicator(e) {
    this.removeIndicator(e.id);
  }
  setTitle(e) {
    if (!b(e))
      return !1;
    this.#s = e, Ne.title = e;
    const i = this.legend.list.chart.el.querySelectorAll(".title");
    for (let s of i)
      s.innerHTML = e;
    return !0;
  }
  setWatermark(e) {
    b(e.text) || b(e) ? this.core.config.watermark.text = e : "imgURL" in e && (this.core.config.watermark.imgURL = e);
  }
  setHeight(e) {
    T(e) || (e = this.height || this.core.MainPane.rowsH), e > this.core.MainPane.rowsH && (e = this.core.MainPane.rowsH), this.#l.style.height = `${e}px`, this.#h.style.height = `${e}px`, this.elViewport.style.height = `${e}px`, this.#p.setDimensions({ w: null, h: e }), this.Divider?.setPos(), this.Divider?.setWidth();
  }
  setDimensions(e) {
    const i = this.config.buffer || Ki;
    let { w: s, h: n } = e;
    s = this.width, n = n || this.height, this.setHeight(n), this.graph instanceof ht && (this.layerWidth = Math.round(s * ((100 + i) * 0.01)), this.graph.setSize(s, n, this.layerWidth), this.draw(void 0, !0), this.core.MainPane.draw(void 0, !1), this.Divider.setPos(), this.Divider.setWidth());
  }
  setLocalRange(e, i) {
    if (!T(i) || !T(e))
      return !1;
    e > i && ([e, i] = [i, e]), this.#M = {
      valueMax: i,
      valueMin: e,
      valueDiff: i - e
    };
  }
  setYAxisType(e) {
    return !b(e) || !Me.includes(e) || this.type == "primaryPane" && e == "percent" ? !1 : (this.#S = e, !0);
  }
  addOverlays(e) {
    if (!P(e) || e.length < 1)
      return !1;
    const i = [];
    for (let s of e) {
      const n = { fixed: !1, required: !1 };
      if (s.type in this.core.indicatorClasses)
        n.cnt = this.core.indicatorClasses[s.type].cnt, n.id = `${this.id}-${s.type}_${n.cnt}`, n.class = this.core.indicatorClasses[s.type];
      else if (s.type in js[this.type])
        n.cnt = 1, n.id = `${this.id}-${s.type}`, n.class = js[this.type][s.type].class;
      else if (s.type in this.core.customOverlays[this.type])
        n.cnt = 1, n.id = `${this.id}-${s.type}`, n.class = this.core.customOverlays[this.type][s.type].class;
      else
        continue;
      n.params = { overlay: s }, s.id = n.id, s.paneID = this.id, i.push([s.id, n]);
    }
    return this.graph.addOverlays(i), !0;
  }
  addIndicator(e) {
    const i = this.type === "primaryPane", s = this.core.indicatorClasses[e.type], n = !!e.settings?.isPrimary;
    if (e?.type in this.core.indicatorClasses && i === n) {
      e.paneID = this.id;
      const r = {
        class: s,
        params: { overlay: e }
      };
      return this.graph.addOverlay(e.name, r);
    } else
      return !1;
  }
  getIndicators() {
    const e = Object.keys(this.core.indicatorClasses), i = {};
    for (let [s, n] of Object.entries(this.overlays))
      if (e.includes(n.params?.overlay?.type)) {
        let r = n.id || n.instance.id;
        i[r] = n;
      }
    return i;
  }
  removeIndicator(e) {
    return !b(e) || !(e in this.indicators) ? !1 : (this.#L[e] = !0, Object.keys(this.indicators).length === 0 && !this.isPrimary ? this.emit("destroyChartView", this.id) : (this.indicators[e].instance.destroy(), this.graph.removeOverlay(e), this.draw(), delete this.#L[e]), !0);
  }
  removeAllIndicators() {
    const e = {}, i = this.getIndicators();
    for (let s in i)
      e[s] = this.removeIndicator(s);
    return e;
  }
  indicatorVisible(e, i) {
    return !b(e) || !(e in this.indicators) ? !1 : this.indicators[e].instance.visible(i);
  }
  indicatorSettings(e, i) {
    return !b(e) || !(e in this.indicators) ? !1 : this.indicators[e].instance.settings(i);
  }
  addTool(e) {
    let { layerConfig: i } = this.layerConfig(), s = new U.Layer(i);
    this.#m.set(e.id, s), this.#v.addLayer(s), e.layerTool = s, this.#C.set(e.id, e);
  }
  addTools(e) {
  }
  overlayToolAdd(e) {
    this.#C.set(e.id, e);
  }
  overlayToolDelete(e) {
    this.#C.delete(e);
  }
  refresh() {
    this.emit("pane_refresh", this), this.scale.draw(), this.draw(void 0, this.isPrimary);
  }
  legendsVisibility(e) {
    this.legend.setCollapse(e);
  }
  updateLegends(e = this.#T, i = !1) {
    if (!(this.core.isEmpty || !w(this.#g)))
      for (const s in this.#g.list)
        this.#g.update(s, { pos: e, candle: i });
  }
  legendInputs() {
    const e = [!0, !0, !0, !0, !0], i = this.cursorPos, s = this.time.xPos2Index(i[0] - this.core.scrollPos), n = R(s, 0, this.range.data.length - 1), r = this.range.data[n], a = this.theme.candle, l = r[4] >= r[1] ? new Array(5).fill(a.UpWickColour) : new Array(5).fill(a.DnWickColour), h = {}, p = ["T", "O", "H", "L", "C", "V"];
    for (let f = 1; f < 6; f++)
      h[p[f]] = this.scale.nicePrice(r[f]);
    return { inputs: h, colours: l, labels: e };
  }
  onLegendAction(e) {
    switch (this.#g.onPointerClick(e.currentTarget).icon) {
      case "up":
        this.reorderUp();
        return;
      case "down":
        this.reorderDown();
        return;
      case "maximize":
        this.core.MainPane.paneMaximize(this);
        return;
      case "restore":
        this.core.MainPane.paneMaximize(this);
        return;
      case "collapse":
        this.core.MainPane.paneCollapse(this);
        return;
      case "expand":
        this.core.MainPane.paneCollapse(this);
        return;
      case "remove":
        this.remove();
        return;
      case "config":
        this.configDialogue();
        return;
      default:
        return;
    }
  }
  reorderUp() {
    const {
      el: e,
      prevEl: i,
      parentEl: s,
      scaleEl: n,
      prevScaleEl: r,
      parentScaleEl: a,
      prevPane: l
    } = { ...this.currPrevNext() };
    return !w(i) || !w(r) ? !1 : (s.insertBefore(e, i), a.insertBefore(n, r), this.Divider.setPos(), l !== null && (l.Divider.setPos(), l.Divider.show(), this.core.ChartPanes.swapKeys(this.id, i.id)), e.previousElementSibling === null && this.Divider.hide(), !0);
  }
  reorderDown() {
    const {
      el: e,
      nextEl: i,
      parentEl: s,
      scaleEl: n,
      nextScaleEl: r,
      parentScaleEl: a,
      nextPane: l
    } = { ...this.currPrevNext() };
    return !w(i) || !w(r) ? !1 : (s.insertBefore(i, e), a.insertBefore(r, n), this.Divider.setPos(), l !== null && (l.Divider.setPos(), this.Divider.show(), this.core.ChartPanes.swapKeys(this.id, i.id)), i.previousElementSibling === null && l.Divider.hide(), !0);
  }
  createGraph() {
    let e = he(this.overlaysDefault);
    this.graph = new ht(this, this.elViewport, e, !1), this.isPrimary && (this.layerStream = this.graph.overlays.get("stream")?.layer, this.chartStreamCandle = this.graph.overlays.get("stream")?.instance), this.addOverlays(this.view);
  }
  render() {
    this.graph.render(), this.#p.render();
  }
  draw(e = this.range, i = !1) {
    this.graph.draw(e, i);
  }
  drawGrid() {
    this.layerGrid.setPosition(this.core.scrollPos, 0), this.overlayGrid.setRefresh(), this.overlayGrid.draw("y"), this.core.MainPane.draw();
  }
  resize(e) {
    const i = this, s = this.sibling();
    if (s === null)
      return { active: null, prev: null };
    let n = this.element.clientHeight;
    const r = this.core.MainPane.rowMinH, a = s.element.clientHeight, l = n + a;
    let h, p, f;
    return T(e) && e > r ? p = e : (h = this.core.MainPane.cursorPos[5], p = n - h, p = R(p, r, l - r), f = l - p), i.setDimensions({ w: void 0, h: p }), s.setDimensions({ w: void 0, h: f }), i.Divider.setPos(), i.element.style.userSelect = "none", s.element.style.userSelect = "none", { active: i, prev: s };
  }
  collapse(e) {
    const i = this.graph.viewport.scene.canvas.style, s = this.#c, n = this.#p.graph.viewport.scene.canvas.style;
    s.state ? (this.setDimensions({ w: void 0, h: e }), n.visibility = "visible", i.display = "block", s.state = !1) : (n.visibility = "hidden", i.display = "none", s.state = !0, s.height = this.element.clientHeight, s.rowsHeight = this.core.MainPane.rowsH, s.rowsCnt = this.core.ChartPanes.size, this.setDimensions({ W: void 0, h: Us }));
  }
  zoomRange() {
    this.draw(this.range, !0), this.emit("zoomDone", !0);
  }
  time2XPos(e) {
    return this.time.xPos(e);
  }
  price2YPos(e) {
    return this.scale.yPos(e);
  }
  currPrevNext() {
    const e = this.element, i = e.previousElementSibling, s = e.nextElementSibling, n = e.parentNode, r = this.scale.element, a = r.previousElementSibling, l = r.nextElementSibling, h = r.parentNode, p = i !== null ? this.core.ChartPanes.get(i.id) : null, f = s !== null ? this.core.ChartPanes.get(s.id) : null;
    return {
      el: e,
      prevEl: i,
      nextEl: s,
      parentEl: n,
      scaleEl: r,
      prevScaleEl: a,
      nextScaleEl: l,
      parentScaleEl: h,
      prevPane: p,
      nextPane: f
    };
  }
  sibling(e) {
    e = ["prev", "next"].includes(e) ? e : "prev";
    let i = [...this.core.ChartPanes.keys()], s = i.indexOf(this.id);
    return e == "prev" ? --s : ++s, this.core.ChartPanes.get(i[s]) || null;
  }
  configDialogue() {
    const e = this.#w;
    e.state.name === "closed" && e.open();
  }
}
const Es = {
  id: "main",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        chart_paneMaximize: {
          target: "chart_paneMaximize",
          action(o) {
          }
        },
        chart_pan: {
          target: "chart_pan",
          action(o) {
          }
        },
        chart_scrollTo: {
          target: "chart_scrollTo",
          action(o) {
          }
        },
        setRange: {
          target: "setRange",
          action(o) {
          }
        },
        addIndicator: {
          target: "addIndicator",
          action(o) {
          }
        },
        divider_pointerdrag: {
          target: "divider_pointerdrag",
          action(o) {
            this.context.currCursor = this.context.origin.cursor, this.context.origin.cursor = "row-resize";
          }
        },
        global_resize: {
          target: "global_resize",
          action(o) {
          }
        }
      }
    },
    chart_paneMaximize: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        always: {
          target: "idle",
          action(o) {
            this.context.maximize = "some pane pointer";
          }
        }
      }
    },
    chart_pan: {
      onEnter(o) {
        this.context.origin.cursor = "grab";
      },
      onExit(o) {
      },
      on: {
        chart_pan: {
          target: "chart_pan",
          action(o) {
            this.context.origin.updateRange(o), this.context.origin.cursor = "grab";
          }
        },
        chart_panDone: {
          target: "idle",
          action(o) {
            this.context.origin.updateRange(o), this.context.origin.cursor = "default";
          }
        }
      }
    },
    setRange: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        always: {
          target: "idle",
          condition: "zoomDone",
          action(o) {
            this.context.origin.zoomRange(o);
          }
        }
      }
    },
    chart_scrollTo: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        always: {
          target: "idle",
          action(o) {
            this.context.origin.updateRange(o);
          }
        }
      }
    },
    addIndicator: {
      onEnter(o) {
        this.context.origin.addIndicator(o);
      },
      onExit(o) {
      },
      on: {
        addIndicatorDone: {
          target: "idle",
          action(o) {
          }
        }
      }
    },
    divider_pointerdrag: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        divider_pointerdrag: {
          target: "divider_pointerdrag",
          action(o) {
          }
        },
        divider_pointerdragend: {
          target: "idle",
          action(o) {
            this.context.origin.cursor = this.context.currCursor;
          }
        }
      }
    },
    global_resize: {
      onEnter(o) {
        this.context.origin.setDimensions();
      },
      onExit(o) {
      },
      on: {
        always: {
          target: "idle",
          condition: "resizeDone",
          action(o) {
          }
        }
      }
    }
  },
  guards: {
    zoomDone() {
      return !0;
    },
    resizeDone() {
      return !0;
    }
  },
  actions: {
    removeProperty() {
      let o = this.context.pair.active, e = this.context.pair.prev;
      w(o) && o.element.style.removeProperty("user-select"), w(e) && e.element.style.removeProperty("user-select");
    }
  }
}, Cm = [
  ["grid", { class: Gi, fixed: !1, required: !0, params: { axes: "x" } }]
], Tm = ["candles", "trades", "events"];
class Xs extends dt {
  #e = "MainPane";
  #t = "Main";
  #i = !1;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h;
  #p;
  #u;
  #g;
  #d = new ce();
  #f;
  #w;
  #E;
  #y = {};
  #v = {
    instance: null,
    rowsH: 0,
    panes: {}
  };
  #m = Er;
  #C = Sr;
  #T = {};
  #x = [0, 0];
  #P = {
    active: !1,
    start: [0, 0],
    prev: [0, 0],
    delta: [0, 0]
  };
  #b;
  #S;
  #M;
  #L = 0;
  #O = 0;
  constructor(e, i) {
    i.parent = e, super(e, i), this.#s = this.core.elMain, this.#r = this.core.elYAxis, this.init(i);
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get chart() {
    return this.#f;
  }
  get chartPanes() {
    return this.#d;
  }
  get chartPaneMaximized() {
    return this.#v;
  }
  get chartDeleteList() {
    return this.#y;
  }
  get time() {
    return this.#w;
  }
  get element() {
    return this.#s;
  }
  get elRows() {
    return this.#s.rows;
  }
  get elPrimary() {
    return this.#s.rows.primary;
  }
  get elSecondary() {
    return this.#s.rows.secondary;
  }
  get elPanes() {
    return this.#s.rows.chartPanes;
  }
  get elPaneSlot() {
    return this.#s.rows.chartPaneSlot;
  }
  get width() {
    return this.#s.getBoundingClientRect().width;
  }
  get height() {
    return this.#s.getBoundingClientRect().height;
  }
  get chartW() {
    return this.elPrimary.getBoundingClientRect().width;
  }
  get chartH() {
    return this.elPrimary.getBoundingClientRect().height;
  }
  get rowsW() {
    return this.#n.getBoundingClientRect().width;
  }
  get rowsH() {
    return this.#n.getBoundingClientRect().height;
  }
  get rowMinH() {
    return this.#C;
  }
  set rowMinH(e) {
    T(e) && (this.#C = Math.abs(e));
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return ae(this.#s);
  }
  set cursor(e) {
    this.element.style.cursor = e;
  }
  get cursor() {
    return this.element.style.cursor;
  }
  get cursorPos() {
    return this.#x;
  }
  get candleW() {
    return this.#w.candleW;
  }
  get buffer() {
    return this.#b;
  }
  get bufferPx() {
    return this.getBufferPx();
  }
  get scrollPos() {
    return this.core.scrollPos;
  }
  get renderLoop() {
    return rm;
  }
  get views() {
    return this.core.state.data.views;
  }
  get indicators() {
    return this.getIndicators();
  }
  get indicatorClasses() {
    return this.core.indicatorClasses;
  }
  get elements() {
    return {
      elRows: this.elRows,
      elPrimary: this.elPrimary,
      elSecondary: this.elSecondary,
      elTime: this.#o,
      elScale: this.#a
    };
  }
  init(e) {
    if (this.core, this.#n = this.#s.rows, this.#o = this.#s.time, this.#c = this.#s.rows.grid, this.#h = this.#s.viewport, this.#a = this.core.elBody.scale, e.name = "Chart", e.shortName = "Chart", e.parent = this, e.chartData = this.core.chartData, e.primaryPane = this.core.primaryPane, e.secondaryPane = this.core.secondaryPane, e.rangeLimit = this.core.rangeLimit, e.settings = this.core.settings, e.elements = {
      ...e.elements,
      ...this.elements
    }, this.core.theme?.time?.navigation === !1) {
      const i = { height: vn };
      this.core.theme.time = { ...this.core.theme?.time, ...i };
    }
    this.#w = new nm(this.core, e), this.registerChartPanes(e), this.#b = T(this.config.buffer) ? this.config.buffer : Ki, this.#C = T(this.config.rowMinH) ? this.config.rowMinH : Sr, this.#m = T(this.config.secondaryPaneDefaultH) ? this.config.secondaryPaneDefaultH : Er, this.rowsOldH = this.rowsH, this.log(`${this.#e} instantiated`);
  }
  start() {
    let e = 0;
    this.#s.start(this.theme), this.#w.start(), this.createGraph();
    const i = this.chart.scale.calcScaleWidth();
    this.core.elBody.scale.style.width = `${i}px`, this.#h.style.width = `${this.#n.width}px`, this.#d.forEach((s, n) => {
      s.start(e++), e === 1 && s.Divider.hide();
    }), this.rowsOldH = this.rowsH, this.draw(this.range, !0), this.renderLoop.init({
      graphs: [this.graph],
      range: this.range
    }), this.renderLoop.start(), this.renderLoop.queueFrame(this.range, [this.graph], !1), this.eventsListen(), Es.id = this.id, Es.context = this, this.stateMachine = Es, this.stateMachine.start();
  }
  destroy() {
    this.#i = !0, this.renderLoop.stop(), this.stateMachine.destroy(), this.#d.forEach((e, i) => {
      e.remove(), delete this.#y[i];
    }), this.graph.destroy(), this.core.hub.expunge(this), this.#M.destroy(), this.stateMachine = null, this.graph = null;
  }
  reset() {
    let e = this.core.Indicators, i;
    for (let s in e) {
      i = e[s];
      for (let n in i)
        i[n].instance.remove();
    }
  }
  restart() {
    this.chart.scale.restart();
    const e = this.getIndicators();
    let i = 0;
    for (let s in e)
      w(e[s]) && Object.keys(e[s]).length > 0 && (i += Object.keys(e[s]).length);
    if (i == 0) {
      this.validateIndicators();
      for (let [s, n] of this.views)
        for (let r of n)
          Object.keys(this.core.indicatorClasses).includes(r.type) && this.addIndicator(r.type, r.name, { data: r.data, settings: r.settings });
    }
  }
  eventsListen() {
    this.#M = new He(this.#n, { disableContextMenu: !1 }), this.#M.on("keydown", this.onChartKeyDown.bind(this)), this.#M.on("keyup", this.onChartKeyUp.bind(this)), this.#M.on("wheel", this.onMouseWheel.bind(this)), this.#M.on("pointerenter", this.onMouseEnter.bind(this)), this.#M.on("pointerout", this.onMouseOut.bind(this)), this.#M.on("pointerup", this.onChartDragDone.bind(this)), this.#M.on("pointermove", this.onMouseMove.bind(this)), this.on(Js, this.onFirstStreamValue, this), this.on(en, this.onNewStreamValue, this), this.on("setRange", this.onSetRange, this), this.on("scrollUpdate", this.draw, this), this.on("chart_render", this.draw, this), this.on("destroyChartView", this.removeChartPane, this);
  }
  onSetRange() {
    if (this.#O = this.#L, this.#L = this.chart.scale.calcScaleWidth(), this.#O < this.#L) {
      const e = `${this.#L}px`;
      this.core.elBody.scale.style.width = e, this.setDimensions();
    } else
      this.draw();
  }
  onMouseWheel(e) {
    const i = Math.sign(e.wheeldelta) * -1;
    if (e.domEvent.preventDefault(), this.core.pointerButtons[0]) {
      e.dragstart.x = this.#x[0], e.dragstart.y = this.#x[1], e.position.x = this.#x[0] + i, e.position.y = this.#x[1], this.onChartDrag(e);
      return;
    }
    const s = this.range;
    let n = s.indexStart - Math.floor(i * vr * s.Length), r = s.indexEnd + Math.ceil(i * vr * s.Length);
    s.isPastLimit(n) && (n = s.pastLimitIndex + 1), s.isFutureLimit(r) && (r = s.futureLimitIndex - 1), !(r - n > s.maxCandles || r - n < s.minCandles) && (this.core.setRange(n, r), this.draw(this.range, !0));
  }
  onMouseMove(e) {
    const i = this.#T;
    i.d2x = i?.d1x || null, i.d2y = i?.d1y || null, i.d1x = e.movement.x, i.d1y = e.movement.y, i.dx = Math.floor((i.d1x + i.d2x) / 2), i.dy = Math.floor((i.d1y + i.d2y) / 2), i.ts2 = i?.ts1 || null, i.ts1 = Date.now(), this.#x = [
      e.position.x,
      e.position.y,
      e.dragstart.x,
      e.dragstart.y,
      i.dx,
      i.dy,
      i.ts1,
      i.ts1 - i.ts2
    ], this.core.Timeline.showCursorTime(), this.core.Chart.graph.overlays.list.get("cursor").layer.visible = !0;
    for (let [s, n] of this.chartPanes)
      n.graph.overlays.list.get("cursor").layer.visible = !0;
    this.emit("main_mousemove", this.#x);
  }
  onMouseEnter(e) {
    this.core.Timeline.showCursorTime(), this.core.Chart.graph.overlays.list.get("cursor").layer.visible = !0, this.core.Chart.graph.render();
    for (let [i, s] of this.chartPanes)
      s.graph.overlays.list.get("cursor").layer.visible = !0, s.graph.render();
  }
  onMouseOut(e) {
    this.onPointerActive(!1), this.core.Timeline.hideCursorTime(), this.core.Chart.graph.overlays.list.get("cursor").layer.visible = !1, this.core.Chart.graph.render();
    for (let [i, s] of this.chartPanes)
      s.graph.overlays.list.get("cursor").layer.visible = !1, s.graph.render();
    this.draw();
  }
  onChartDrag(e) {
    const i = this.#P;
    i.active ? (i.delta = [
      e.position.x - i.prev[0],
      e.position.y - i.prev[1]
    ], i.prev = [
      e.position.x,
      e.position.y
    ]) : (i.active = !0, i.start = [e.position.x, e.position.y], i.prev = i.start, i.delta = [0, 0]), this.#x = [
      e.position.x,
      e.position.y,
      ...i.start,
      ...i.delta
    ], this.emit("chart_pan", this.#x);
  }
  onChartDragDone(e) {
    const i = this.#P;
    i.active = !1, i.delta = [0, 0], this.#x = [
      ...i.prev,
      ...i.start,
      ...i.delta
    ], this.emit("chart_panDone", this.#x);
  }
  onChartKeyDown(e) {
    let i = this.candleW > 1 ? this.candleW : 1;
    switch (e.key) {
      case "ArrowLeft":
        this.emit("chart_pan", [0, null, i, null, i * -1, null]);
        break;
      case "ArrowRight":
        this.emit("chart_pan", [i, null, 0, null, i, null]);
        break;
      case "ArrowUp":
        e.wheeldelta = -1, e.domEvent = e.srcEvent, this.onMouseWheel(e);
        break;
      case "ArrowDown":
        e.wheeldelta = 1, e.domEvent = e.srcEvent, this.onMouseWheel(e);
        break;
    }
  }
  onChartKeyUp(e) {
    let i = this.candleW > 1 ? this.candleW : 1;
    switch (e.key) {
      case "ArrowLeft":
        this.emit("chart_panDone", [0, null, i, null, i * -1, null]);
        break;
      case "ArrowRight":
        this.emit("chart_panDone", [i, null, 0, null, i, null]);
        break;
    }
  }
  onFirstStreamValue(e) {
    this.chart.scale.xAxis.calcXAxisGrads(this.range), this.draw(this.range, !0);
  }
  onNewStreamValue(e) {
  }
  onPointerActive(e) {
    e && (e.cursorActive = !0, e.scale.layerCursor.visible = !0), e !== this.chart && (this.chart.cursorActive = !1, this.chart.scale.layerCursor.visible = !1, this.chart.scale.layerCursor.erase()), this.#d.forEach((i, s) => {
      e !== i && (i.cursorActive = !1, i.scale.layerCursor.visible = !1, i.scale.layerCursor.erase());
    });
  }
  setDimensions() {
    this.#n.previousDimensions();
    let e = this.#n.heightDeltaR, i = Math.round(this.chartH * e), s = this.rowsW, n = this.rowsH, r = Math.round(s * ((100 + this.#b) * 0.01)), a = {
      resizeH: e,
      mainH: this.element.height,
      mainW: this.element.width,
      rowsH: this.rowsH,
      rowsW: this.rowsW
    };
    this.core.scrollPos = -1, this.#w.setDimensions({ w: s }), this.graph.setSize(s, n, r), this.#h.style.width = `${s}px`, this.#d.size == 1 && i != this.#n.height ? this.#f.setDimensions({ w: s, h: this.#n.height }) : this.#d.forEach((l, h) => {
      i = Math.round(l.element.height * e), l.setDimensions({ w: s, h: i });
    }), this.rowsOldH = this.rowsH, this.emit("rowsResize", a), this.draw(void 0, !0);
  }
  getBufferPx() {
    let e = Math.round(this.width * this.buffer / 100), i = e % this.candleW;
    return e - i;
  }
  registerChartPanes(e) {
    this.#n.previousDimensions();
    const i = this.validateIndicators();
    let s = i[0];
    for (let n of i)
      n?.primary === !0 ? s = n : n.primary = !1;
    s.primary = !0, e.rowY = 0;
    for (let [n, r] of this.views)
      e.type = n, e.view = r, this.addChartPane(e);
  }
  chartPanesState() {
    const e = {
      list: [...this.#d.values()],
      collapsed: [],
      expanded: [],
      maximized: this.#v.instance
    };
    for (let i of e.list)
      i.collapsed.state ? e.collapsed.push(i) : e.expanded.push(i);
    return e;
  }
  addChartPane(e) {
    const { expanded: i } = this.chartPanesState(), s = this.calcChartPaneHeights(), n = s.new;
    let r;
    for (r in s)
      if (this.#d.has(r)) {
        let f = this.#d.get(r);
        i.indexOf(f) > -1 && f.setDimensions({ w: this.rowsW, h: s[r] });
      }
    let a;
    this.#n.insertAdjacentHTML(
      "beforeend",
      this.#s.rowNode(e.type, this.core)
    ), a = this.#n.chartPaneSlot.assignedElements().slice(-1)[0], a.style.height = `${n}px`, a.style.width = "100%";
    let l;
    this.#r.insertAdjacentHTML(
      "beforeend",
      this.scaleNode(e.type)
    ), l = this.#r.chartPaneSlot.assignedElements().slice(-1)[0], l.style.height = `${n}px`, l.style.width = "100%", e.elements.elTarget = a, e.elements.elScale = l;
    let h;
    return e.type == "primary" ? (h = new at(this.core, e), this.#f = h) : (e.name = e.view[0].name || "Secondary", e.shortName = e.view[0].type || "Secondary", h = new at(this.core, e)), this.#d.set(h.id, h), this.tallyChartHeights().height > this.#s.height, this.setPaneDividers(), this.emit("addChartView", h), h;
  }
  removeChartPane(e) {
    if (!b(e) || !this.#d.has(e) || e in this.#y)
      return !1;
    const i = this.#d.get(e);
    if (i.isPrimary && !this.#i)
      return this.core.error(`Cannot remove primary chart pane! ${e}`), !1;
    this.#y[e] = !0;
    const { expanded: s } = this.chartPanesState();
    let n = s.indexOf(i);
    n > -1 && s.splice(n, 1);
    let r = i.viewport.height, a = Math.floor(r / s.length), l = r % a;
    if (i.status !== "destroyed" && (i.destroy(), this.#s.removeRow(i.id)), this.#d.delete(e), this.#d.size === 1) {
      let h = this.#d.values().next().value;
      h.collapsed && (h.collapsed.state = !1), h.setDimensions({ w: void 0, h: this.rowsH });
    } else
      for (let h of s)
        r = h.viewport.height, h.setDimensions({ w: void 0, h: r + a + l }), l = 0;
    return this.setPaneDividers(), this.draw(this.range, !0), !0;
  }
  validateIndicators() {
    const e = [];
    for (let [i, s] of this.views) {
      if (i === "primary" && e.push(s), s.length === 0 && i !== "primary") {
        this.views.delete(i);
        continue;
      }
      for (const [n, r] of s.entries())
        w(r) && (r.type in this.core.indicatorClasses || Tm.includes(r.type)) || (this.core.log(`indicator ${s.type} not added: not supported.`), s.splice(n, 1));
    }
    return e;
  }
  addIndicator(e, i = e, s = {}) {
    let n, r = this.indicatorClasses[e]?.primaryPane;
    if (!b(e) || !(e in this.indicatorClasses) || !b(i))
      return !1;
    switch (this.log(`Adding the ${i} : ${e} indicator`), w(s) ? (P(s?.data) || (s.data = []), w(s?.settings) || (s.settings = {})) : s = { data: [], settings: [] }, r) {
      case !0:
      case !1:
        break;
      case void 0:
      case "both":
        r = F(s.settings?.isPrimary) ? s.settings.isPrimary : !0;
    }
    if (s.settings.isPrimary = r, r) {
      const l = {
        type: e,
        name: i,
        ...s
      };
      n = this.#f.addIndicator(l);
    } else {
      P(s.view) || (s.view = [{ name: i, type: e, ...s }]);
      for (let l = 0; l < s.view.length; l++)
        (!w(s.view[l]) || !Pn(["name", "type"], Object.keys(s.view[l]))) && s.view.splice(l, 1);
      if (s.view.length == 0)
        return !1;
      s.parent = this, s.title = i, s.elements = { ...this.elements }, n = this.addChartPane(s), n.start();
    }
    const a = "instance" in n ? n.instance.id : n.id;
    return this.refresh(), this.emit("addIndicatorDone", n), this.core.log("Added indicator:", a), n;
  }
  getIndicators() {
    const e = {};
    return this.#d.forEach(
      (i, s) => {
        e[s] = i.indicators;
      }
    ), e;
  }
  getIndicator(e) {
    if (!b(e))
      return !1;
    for (const i of this.#d.values())
      if (e in i.indicators)
        return i.indicators[e].instance;
  }
  removeIndicator(e) {
    if (b(e))
      for (const i of this.#d.values())
        e in i.indicators && (e = i.indicators[e].instance);
    return e instanceof le ? (e.chart.type === "primaryPane" || Object.keys(e.chart.indicators).length > 1 ? (e.remove(), this.emit("pane_refresh", this)) : e.chart.remove(), !0) : !1;
  }
  indicatorSettings(e, i) {
    if (b(e)) {
      for (const s of this.#d.values())
        if (e in s.indicators)
          return s.indicators[e].instance.settings(i);
    } else
      return e instanceof le ? e.settings(i) : !1;
  }
  tallyChartHeights() {
    const e = this.#d.entries(), i = { panes: {}, tally: 0 };
    for (let [s, n] of e)
      i.panes[s] = n, i.tally += n.height;
    return i;
  }
  calcChartPaneHeights() {
    const { collapsed: e, expanded: i } = this.chartPanesState(), s = this.#d.size + 1, n = this.#m * (s - 1), r = n / Math.log10(n * 2) / 100;
    Math.round(this.rowsH * r);
    const a = {};
    if (s === 1)
      a.new = this.rowsH;
    else if (s === 2 || i.length === 1) {
      let l = this.rowsH;
      const h = Math.round(l * this.#m / 100);
      a[i[0].id] = l - h, a.new = h;
    } else if (i.length === 2) {
      const l = i[0].viewport.height, h = i[1].viewport.height, p = l + h, f = Math.round(p * this.#m / 100), g = p / (p + f);
      a[i[0].id] = Math.floor(l * g), a[i[1].id] = Math.floor(h * g), a.new = Math.floor(f * g), a.new += p - (a[i[0].id] + a[i[1].id] + a.new);
    } else if (i.length >= 3) {
      let l = this.rowsH, h = 0, p;
      for (let f of e)
        l -= f.viewport.height;
      a.new = Math.floor(l / (i.length + 1)), l / (l + a.new), p = l - a.new;
      for (let f of i)
        a[f.id] = p * (f.viewport.height / l), h += a[f.id];
      a.new += l - h;
    }
    return a;
  }
  scaleNode(e) {
    const i = Zc + " width: 100%;";
    return `
    <div slot="chartpane" class="viewport scale ${e}" style="$${i}"></div>
  `;
  }
  createGraph() {
    let e = he(Cm);
    this.graph = new ht(this, this.#h, e);
  }
  draw(e = this.range, i = !1) {
    this.time.xAxis.doCalcXAxisGrads(e);
    const s = [
      this.graph,
      this.#w
    ];
    this.#d.forEach((n, r) => {
      n.status !== "destroyed" ? s.push(n) : this.log("error destroyed pane");
    }), this.renderLoop.queueFrame(
      this.range,
      s,
      i
    );
  }
  refresh() {
    this.renderLoop.expungeFrames(), this.core.Chart.graph.refresh();
    for (let [e, i] of this.chartPanes)
      i.graph.refresh();
    this.draw(this.range, !0);
  }
  updateRange(e) {
    this.core.updateRange(e);
  }
  zoomRange() {
    this.draw(this.range, !0);
  }
  paneMaximize(e) {
    if (!(e instanceof at))
      return !1;
    const i = this.#v, s = e.legend.list.chart.el.querySelector(".controls");
    let n;
    if (s.classList.toggle("maximized"), s.classList.toggle("restored"), e === i.instance)
      this.panesRestore(), i.instance = null, i.panes = {}, e.collapsed.state && (e.graph.viewport.scene.canvas.style.display = "none", e.scale.graph.viewport.scene.canvas.style.visibility = "hidden");
    else {
      this.panesRestore(), i.instance = e, i.rowsH = this.rowsH;
      for (let [r, a] of this.#d.entries())
        i.panes[r] = a.element.clientHeight, n = a.element.style, e === a ? (n.display = "block", a.setDimensions({ w: void 0, h: this.rowsH }), a.graph.viewport.scene.canvas.style.display = "block", a.scale.graph.viewport.scene.canvas.style.visibility = "visible") : (n.display = "none", a.scale.element.style.display = "none");
      this.hidePaneDividers();
    }
    return this.emit("pane_refresh", this), !0;
  }
  panesRestore() {
    const e = this.#v;
    let i = 0;
    this.emit("pane_refresh", this), this.dimensions.height == e.height;
    for (let [s, n] of this.#d.entries())
      n.element.style.display = "block", n.scale.element.style.display = "block", s in e.panes && i++ > 0 && n.Divider.show(), n.setDimensions({ w: void 0, h: e.panes[s] });
  }
  paneCollapse(e) {
    if (!(e instanceof at))
      return !1;
    this.emit("pane_refresh", this);
    const i = e.legend.list.chart.el.querySelector(".controls"), s = e.collapsed;
    let n = e.element.clientHeight, r, a, l;
    const { list: h, collapsed: p, expanded: f } = this.chartPanesState();
    if (r = p.indexOf(e), r > -1 && p.splice(r, 1), r = f.indexOf(e), r > -1 && f.splice(r, 1), e.collapsed.state) {
      i.classList.remove("collapsed"), i.classList.add("expanded"), s.rowsCnt !== h.length ? n = s.height * (s.rowsCnt / h.length) : s.rowsHeight !== this.rowsH ? n = s.height * (s.rowsHeight / this.rowsH) : n = s.height, a = (n - Us) / f.length;
      for (let g of f)
        l = g.element.clientHeight - a, g.setDimensions({ w: void 0, h: l });
      e.collapse(n);
    } else {
      if (i.classList.add("collapsed"), i.classList.remove("expanded"), h.length < 2 || f.length < 1)
        return !1;
      n = (e.element.clientHeight - Us) / f.length;
      for (let g of f)
        l = g.element.clientHeight + n, g.setDimensions({ w: void 0, h: l });
      e.collapse();
    }
    return this.setPaneDividers(), !0;
  }
  setPaneDividers() {
    const { list: e } = this.chartPanesState();
    let i = 0;
    for (let s of e)
      s.Divider instanceof fe && i++ > 0 && (s.Divider.setWidth(), s.Divider.setPos(), s.Divider.show());
  }
  hidePaneDividers() {
    const { list: e } = this.chartPanesState();
    for (let i of e)
      i.Divider instanceof fe && i.Divider.hide();
  }
}
const Sm = "defaultState", Em = {
  version: Ln,
  id: Sm,
  key: "",
  status: "default",
  isEmpty: !0,
  chart: {
    name: "Primary",
    type: "candles",
    candleType: "CANDLE_SOLID",
    indexed: !1,
    data: [],
    settings: {}
  },
  ohlcv: [],
  views: [],
  primary: [],
  secondary: [],
  datasets: [],
  tools: {},
  trades: {
    display: !0,
    displayInfo: !0
  },
  events: {},
  annotations: {},
  range: {
    timeFrame: yn,
    timeFrameMS: si,
    initialCnt: Bs
  }
}, Vr = {
  timestamp: "number",
  id: "string",
  side: "string",
  price: "number",
  amount: "number",
  filled: "number",
  average: "number",
  total: "number",
  tag: "string"
}, Fr = {
  timestamp: "number",
  id: "string",
  title: "string",
  content: "string",
  url: "string"
};
class _ {
  static #e = new ce();
  static #t = {};
  static get default() {
    return he(Em);
  }
  static get list() {
    return _.#e;
  }
  static create(e, i = !1, s = !1) {
    const n = new _(e, i, s), r = n.key;
    return _.#e.set(r, n), n;
  }
  static validate(e, i = !1, s = !1) {
    const n = _.default;
    w(e) || (e = {}), w(e.chart) || (e.chart = n.chart, e.chart.isEmpty = !0, e.chart.data = P(e.ohlcv) ? e.ohlcv : [], delete e.ohlcv), e = et(n, e), i ? e.chart.data = Vp(e.chart.data, s) ? e.chart.data : [] : e.chart.data = zp(e.chart.data, s) ? e.chart.data : [], e.chart.isEmpty = e.chart.data.length == 0, w(e.range) || (e.range = {});
    let r = Rs(e.chart.data);
    if ((r < X || r === 1 / 0) && (r = si), (e.chart.isEmpty || e.chart.data.length == 1) && !I(e.range?.timeFrameMS) && !b(e.range?.timeFrame) ? e.range.timeFrameMS = r : (e.chart.isEmpty || e.chart.data.length == 1) && !I(e.range?.timeFrameMS) && b(e.range?.timeFrame) ? e.range.timeFrameMS = ti(e.range.timeFrame) : !e.chart.isEmpty && e.chart.data.length > 1 && e.range?.timeFrameMS !== r && (e.range.timeFrameMS = r), e.range.timeFrame = wt(e.range.timeFrameMS), P(e.views) || (e.views = n.views), P(e.primary) || (e.primary = n.primary), P(e.secondary) || (e.secondary = n.secondary), w(e.chart.settings) || (e.chart.settings = n.chart.settings), P(e.datasets) || (e.datasets = []), e.views.length == 0) {
      e.views.push(["primary", e.primary]);
      for (let p in e)
        p.indexOf("secondary") == 0 && e.views.push([p, e[p]]);
    }
    let a = e.views, l = a.length;
    for (; l--; )
      if (!P(a[l]) || a[l].length == 0)
        a.splice(l, 1);
      else {
        let p = e.views[l][1], f = p.length;
        for (; f--; )
          !w(p[f]) || !b(p[f].name) || !b(p[f].type) ? p.splice(f, 1) : w(p[f].settings) || (p[f].settings = {});
        a[l].length == 0 && a.splice(l, 1);
      }
    e.views.length == 0 && (e.views[0] = ["primary", n.primary]), e.views = new ce(e.views), e.views.has("primary") || e.views.insert("primary", n.primary, 0), e.views.get("primary").push(e.chart);
    for (var h of e.datasets)
      this.#t || (this.#t = {}), this.#t[h.id] = new Up(this, h);
    return e;
  }
  static delete(e) {
    if (!b(e) || !_.has(e))
      return !1;
    _.#e.delete(e);
  }
  static has(e) {
    return _.#e.has(e);
  }
  static get(e) {
    return _.#e.get(e);
  }
  static export(e, i = {}) {
    if (!_.has(e))
      return !1;
    w(i) || (i = {});
    const s = _.get(e), n = i?.type, r = he(s.data), a = r.chart.data;
    let l;
    switch (a.length > 0 && a[a.length - 1].length > 6 && (a.length = a.length - 1), r.views.get("primary").pop(), r.views = Array.from(r.views), r.version = Ln, n) {
      case "json":
      default:
        const { replacer: h, space: p } = { ...i };
        l = JSON.stringify(r, h, p);
    }
    return l;
  }
  #i = "";
  #r = "";
  #s = {};
  #n;
  #o = !1;
  #a = !0;
  #c = [];
  constructor(e, i = !1, s = !1) {
    w(e) ? (this.#s = _.validate(e, i, s), this.#o = "valid", this.#a = !!this.#s.chart?.isEmpty, this.#n = e?.core instanceof N ? e.core : void 0) : (this.#s = _.default, this.#o = "default", this.#a = !0), this.#i = e?.id || "", this.#r = se(`${qt}_state`);
  }
  get id() {
    return this.#i;
  }
  get key() {
    return this.#r;
  }
  get status() {
    return this.#o;
  }
  get isEmpty() {
    return this.#a;
  }
  get allData() {
    return {
      data: this.#s.chart.data,
      primaryPane: this.#s.primary,
      secondaryPane: this.#s.secondary,
      datasets: this.#s.datasets
    };
  }
  get data() {
    return this.#s;
  }
  get core() {
    return this.#n !== void 0 ? this.#n : !1;
  }
  get time() {
    return this.#n.timeData;
  }
  get range() {
    return this.#n.range;
  }
  error(e) {
    this.#n.error(e);
  }
  create(e, i, s) {
    return _.create(e, i, s);
  }
  delete(e) {
    if (!b(e))
      return !1;
    if (e !== this.key)
      _.delete(e);
    else if (_.has(e)) {
      const i = _.create();
      this.use(i.key), _.delete(e);
    }
    return !0;
  }
  list() {
    return _.list;
  }
  has(e) {
    return _.has(e);
  }
  get(e) {
    return _.get(e);
  }
  use(e) {
    const i = this.core;
    if (!_.has(e))
      return i.warn(`${i.name} id: ${i.id} : Specified state does not exist`), !1;
    if (e === this.key)
      return !0;
    i.stream instanceof lt && i.stream.stop(), i.MainPane.reset();
    let s = _.get(e);
    this.#i = s.id, this.#o = s.status, this.#a = s.isEmpty, this.#s = s.data;
    const n = s.data.chart, r = {
      interval: n?.tfms,
      core: i
    }, a = n?.startTS, l = n?.endTS;
    i.getRange(a, l, r), i.refresh();
  }
  export(e = this.key, i = {}) {
    return _.export(e, i = {});
  }
  mergeData(e, i = !1, s = !1) {
    if (!w(e))
      return this.error(`ERROR: ${this.id}: merge data must be type Object!`), !1;
    let n = P(e?.ohlcv) ? e.ohlcv.length - 1 : 0;
    if (n > 1 && this.time.timeFrameMS !== Rs(e?.ohlcv))
      return this.error(`ERROR: ${this.core.id}: merge data time frame does not match existing time frame!`), !1;
    (this.#a || !T(this.time.timeFrameMS)) && (!w(i) || !T(i.start) || !T(i.end)) && n > 1 && (i = { start: n - this.range.initialCnt, end: n }), w(i) ? (T(i?.startTS) ? i.start = i.startTS : i.start = T(i.start) ? this.range.value(i.start)[0] : this.range.timeMin, T(i?.endTS) ? i.end = i.endTS : i.end = T(i.end) ? this.range.value(i.end)[0] : this.range.timeMax) : (i = {}, i.start = this.range.timeMin, i.end = this.range.timeMax);
    let r, a, l = e?.ohlcv || !1;
    const h = this.allData.data, p = this.allData?.primaryPane, f = e?.primary || !1, g = this.allData?.secondaryPane, C = e?.secondary || !1, S = this.allData?.dataset?.data, M = e?.dataset?.data || !1;
    this.allData?.trades, e?.trades, this.allData?.events, e?.events;
    const k = P(l) && this.range.inRange(l[0][0]) ? 1 : 0, ue = {};
    if (P(l) && l.length > 0) {
      if (r = l.length - 1, h.length - 1, ue.mData = this.range.inRange(l[0][0]) && this.range.inRange(l[0][r]), !F(l[r][7]) && l[r].length !== 8 && l[r][6] !== null && l[r][7] !== !0 ? l = Wp(l) : i.end >= this.range.timeFinish && i.start <= this.range.timeFinish && (i.start += this.range.interval, i.end += this.range.interval), h.length == 0)
        this.allData.data.push(...l);
      else {
        let D = this.time.timeFrameMS, L = l[0][0], de = l[l.length - 1][0], Q = (l.length - 1) * D;
        de > L + Q && (l = Fp(l, D)), this.data.chart.data = this.merge(h, l);
      }
      if (s)
        this.#n.calcAllIndicators(s);
      else {
        if (P(f) && f.length > 0) {
          for (let D of f)
            if (P(D?.data) && D?.data.length > 0)
              for (let L of p)
                w(L) && L.name === D.name && L.type === D.type && Zt(L.settings, D.settings) && (L.data = this.merge(L.data, D.data), this.#n.getIndicator(L.id).drawOnUpdate = !0);
        }
        if (P(C) && C.length > 0) {
          for (let D of C)
            if (P(D?.data) && D?.data.length > 0)
              for (let L of g)
                w(L) && L.name === D.name && L.type === D.type && Zt(L.settings, D.settings) && (L.data = this.merge(L.data, D.data), this.#n.getIndicator(L.id).drawOnUpdate = !0);
        }
        this.#n.calcAllIndicators();
      }
      if (P(M) && M.length > 0) {
        for (let D of M)
          if (P(D?.data) && D?.data.length > 0)
            for (let L of S)
              L.name === D.name && L.type === D.type && Zt(L.settings, D.settings) && (L.data = this.merge(L.data, D.data));
      }
      i && (w(i) ? (a = T(i.start) ? this.range.getTimeIndex(i.start) : this.range.indexStart, n = T(i.end) ? this.range.getTimeIndex(i.end) : this.range.indexEnd) : (l[0][0] && (a = this.range.indexStart + k), n = this.range.indexEnd + k), this.#n.setRange(a, n));
      let we, B = !1;
      for (we in ue)
        B = B || we;
      return e.ohlcv.length > 1 && this.#n.emit("state_mergeComplete"), B && this.#n.refresh(), this.#a = !1, !0;
    }
  }
  merge(e, i) {
    let s = [], n, r;
    if (e[0][0] < i[0][0] ? (n = e, r = i) : (n = i, r = e), r.length == 1 && r[0][0] == n[n.length - 1][0])
      n[n.length - 1] = r[0], s = n;
    else if (r.length == 1 && r[0][0] == n[n.length - 1][0] + this.range.interval)
      s = n.concat(r);
    else if (n[n.length - 1][0] >= r[0][0]) {
      let a = 0;
      for (; n[a][0] < r[0][0]; )
        s.push(n[a]), a++;
      s = s.concat(r);
      let l = a + r.length;
      l < n.length && (s = s.concat(n.slice(l)));
    } else if (r[0][0] - n[n.length - 1][0] > this.range.interval) {
      s = n;
      let a = n[n.length - 1][0], l = Math.floor((r[0][0] - a) / this.range.interval);
      for (l; l > 0; l--) {
        let h = Array(r[0].length).fill(null);
        h[0] = a, a = +this.range.interval, s.push(h), s = s.concat(r);
      }
    } else
      s = n.concat(r);
    return s;
  }
  removeIndicator(e) {
    if (!b(e))
      return !1;
    const i = (s, n) => {
      const r = this.data[s];
      for (let a = 0; a < r.length; a++)
        if (r[a].id == n)
          return r.splice(a, 1), !0;
      return !1;
    };
    return !!(i("primary", e) || i("secondary", e));
  }
  addTrade(e) {
    const i = Object.keys(e), s = Object.keys(Vr);
    if (!w(e) || !oi(i, s))
      return !1;
    for (let a of s)
      if (typeof e[a] !== Vr[a])
        return !1;
    const n = e.timestamp - e.timestamp % this.time.timeFrameMS, r = new Date(n);
    return e.dateStr = `${r.getFullYear()}/${r.getMonth() + 1}/${r.getDate()} ${r.getHours()}:${r.getMinutes()}`, P(this.allData.trades[n]) || (this.allData.trades[n] = []), this.allData.trades[n].push(e), !0;
  }
  removeTrade(e) {
    console.log("TODO: state.removeTrade()");
  }
  addEvent(e) {
    const i = Object.keys(e), s = Object.keys(Fr);
    if (!w(e) || !oi(i, s))
      return !1;
    for (let a of s)
      if (typeof t[a] !== Fr[a])
        return !1;
    const n = t.timestamp - t.timestamp % this.time.timeFrameMS, r = new Date(n);
    return e.dateStr = `${r.getFullYear()}/${r.getMonth() + 1}/${r.getDate()} ${r.getHours()}:${r.getMinutes()}`, P(this.allData.events[n]) || (this.allData.events[n] = []), this.allData.events[n].push(e), !0;
  }
  removeEvent(e) {
    console.log("TODO: state.removeEvent()");
  }
}
const Wr = ["constructor", "list", "setCurrent", "setTheme", "setValue"];
class De {
  static #e = new ce();
  static get list() {
    return De.#e;
  }
  #t;
  static create(e, i) {
    if (!w(e))
      return !1;
    e.id = b(e.name) ? se(e.name) : `${i.id}.theme`;
    const s = new De(e, i);
    return De.list.set(e.id, s), s;
  }
  constructor(e, i) {
    this.#t = i, this.setCurrent(e);
  }
  get list() {
    return De.list;
  }
  setCurrent(e = {}) {
    e = w(e) ? e : {};
    const i = he(Zi), s = he(e), n = et(i, s);
    for (let r in n)
      Wr.includes(r) || (this[r] = n[r]);
    this.#t.refresh();
  }
  setTheme(e) {
    if (b(e) && De.list.has(e)) {
      const i = De.list.get(e);
      return this.setCurrent(i), !0;
    }
    return !1;
  }
  setProperty(e, i) {
    if (!b(e))
      return;
    const s = Ws(this, e), n = e.split(".");
    if (n.length == 1)
      this[n[0]] = i;
    else {
      let r = n.shift();
      this[r] = En(this[r], n.join("."), i);
    }
    return this.#t.refresh(), s;
  }
  getProperty(e) {
    return Ws(this, e);
  }
  deleteTheme(e) {
    return b(e) && De.list.has(e) ? (De.list.delete(e), !0) : !1;
  }
  exportTheme(e = {}) {
    w || (e = {});
    const i = e?.type, s = {};
    let n;
    for (let r in this)
      Wr.includes(r) || (s[r] = this[r]);
    switch (i) {
      case "json":
      default:
        const { replacer: r, space: a } = { ...e };
        n = JSON.stringify(s, r, a);
    }
    return n;
  }
}
class Pm {
  #e;
  constructor(e) {
    this.#e = e, self.onmessage = (i) => this._onmessage(i.data);
  }
  _onmessage(e) {
    const { r: i, data: s } = e;
    try {
      const n = this.#e(s, i);
      self.postMessage({ r: i, status: !0, result: n });
    } catch (n) {
      self.postMessage({ r: i, status: !1, result: n });
    }
  }
  end() {
    self.close();
  }
}
class Mm {
  #e;
  #t;
  #i;
  #r = 0;
  #s = {};
  #n;
  #o = !0;
  constructor(e, i, s, n) {
    this.#e = e, this.#t = s, this.#i = n;
    const r = `
      ${Ks.ThreadWorker.toString()};
      const fn = ${i}
      const worker = new ThreadWorker(fn)
    `, a = new Blob([`;(async () => {${r}})().catch(e => {console.error(e)})`], { type: "text/javascript" }), l = URL.createObjectURL(a);
    this.#n = new Worker(l), setTimeout(function(h) {
      try {
        URL.revokeObjectURL(h);
      } catch {
      }
    }, 500, l);
  }
  get id() {
    return this.#e;
  }
  get req() {
    return `r_${this.#r++}`;
  }
  get cb() {
    return this.#t;
  }
  set cb(e) {
    this.#t = e;
  }
  onmessage(e) {
    return this.#o = !0, O(this.#t) ? this.#t(e) : e;
  }
  onerror(e) {
    return this.#o = !0, O(this.#i) ? this.#i(e) : e;
  }
  postMessage(e) {
    return new Promise((i, s) => {
      try {
        let n = this.req;
        this.#s[n] = { resolve: i, reject: s }, this.#o = !1, this.#n.postMessage({ r: n, data: e }), this.#n.onmessage = (r) => {
          const { r: a, status: l, result: h } = r.data;
          if (a in this.#s) {
            const { resolve: p, reject: f } = this.#s[a];
            delete this.#s[a], l ? p(this.onmessage(h)) : f(this.onerror({ r: a, result: h }));
          } else if (l == "resolved")
            this.onmessage(h);
          else
            throw new Error("Orphaned thread request ${r}");
        }, this.#n.onerror = (r) => {
          s(this.onerror(r));
        };
      } catch (n) {
        this.#o = !0, s(n);
      }
    });
  }
  terminate() {
    this.#n.terminate();
  }
}
class Ks {
  static #e = /* @__PURE__ */ new Map();
  static ThreadWorker = Pm;
  static Thread = Mm;
  static create(e, i = "worker", s, n) {
    if (typeof window.Worker > "u")
      return !1;
    if (O(e))
      e = e.toString();
    else if (b(e))
      e = e.trim().match(
        /^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/
      )[1];
    else
      return !1;
    return i = b(i) ? se(i) : se("worker"), this.#e.set(i, new this.Thread(i, e, s, n)), this.#e.get(i);
  }
  static destroy(e) {
    if (!b(e))
      return !1;
    this.#e.get(e).terminate(), this.#e.delete(e);
  }
  static end() {
    this.#e.forEach((e, i, s) => {
      this.destroy(i);
    });
  }
}
class Lm extends oe {
  constructor(e) {
    super(e);
  }
}
class Mi extends oe {
  #e = Gr.colour;
  #t = Gr.width;
  #i;
  constructor(e) {
    super(e);
  }
  set colour(e = this.#e) {
    this.#e = e;
  }
  get colour() {
    return this.#e;
  }
  set lineWidth(e) {
    this.#t = T(e) ? e : this.#t;
  }
  get lineWidth() {
    return this.#t;
  }
  set stateMachine(e) {
    this.#i = new ss(e, this);
  }
  get stateMachine() {
    return this.#i;
  }
  start() {
    this.eventsListen();
  }
  destroy() {
    this.stateMachine.destroy();
  }
  draw() {
    let [e, i] = this.cursorClick;
    this.layerTool.scene.clear();
    const n = this.layerTool.scene.context;
    n.save(), n.lineWidth = this.lineWidth, n.strokeStyle = this.colour, n.beginPath(), n.moveTo(e, i), n.lineTo(300, 150), n.stroke(), n.closePath(), n.restore(), this.elViewport.render();
  }
}
class Am extends oe {
  constructor(e) {
    super(e);
  }
}
class Om extends oe {
  constructor(e) {
    super(e);
  }
}
class Nm extends oe {
  constructor(e) {
    super(e);
  }
}
const Dm = [
  {
    id: "cursor",
    name: "Cursor",
    icon: wc,
    event: "tool_activated"
  },
  {
    id: "line",
    name: "Line",
    icon: nt,
    event: "tool_activated",
    class: Mi,
    sub: [
      {
        id: "ray",
        name: "Ray",
        icon: nt,
        event: "tool_activated",
        class: Mi
      },
      {
        id: "hRay",
        name: "Horizontal Ray",
        icon: nt,
        event: "tool_activated",
        class: Mi
      },
      {
        id: "vRay",
        name: "Vertical Ray",
        icon: nt,
        event: "tool_activated",
        class: Mi
      }
    ]
  },
  {
    id: "fibonacci",
    name: "Fibonacci",
    icon: xc,
    event: "tool_activated",
    class: Lm,
    sub: [
      {
        id: "fib",
        name: "Not Implemented Yet",
        icon: nt
      }
    ]
  },
  {
    id: "range",
    name: "Range",
    icon: Tc,
    event: "tool_activated",
    class: Om,
    sub: [
      {
        id: "rng",
        name: "Not Implemented Yet",
        icon: nt
      }
    ]
  },
  {
    id: "text",
    name: "Text",
    icon: Sc,
    event: "tool_activated",
    class: Nm,
    sub: [
      {
        id: "txt",
        name: "Not Implemented Yet",
        icon: nt
      }
    ]
  },
  {
    id: "measure",
    name: "Measure",
    icon: Cc,
    event: "tool_activated",
    class: Am
  },
  {
    id: "delete",
    name: "Delete",
    icon: bc,
    event: "tool_activated",
    class: void 0
  }
], Gr = {
  colour: "#8888AACC",
  width: 1
}, Ps = {
  id: "template",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(o) {
        console.log("idle: onEnter");
      },
      onExit(o) {
        console.log("idle: onExit");
      },
      on: {
        tool_activated: {
          target: "tool_activated",
          action(o) {
            this.context.origin.onToolActivated(o);
          }
        },
        tool_selected: {
          target: "tool_selected",
          action(o) {
            this.context.origin.onToolSelected(o);
          }
        },
        tool_deselected: {
          target: "tool_deselected",
          action(o) {
            this.context.origin.onToolDeselected(o);
          }
        },
        tool_deleted: {
          target: "tool_deleted",
          action(o) {
            this.context.origin.onToolDeleted(o);
          }
        }
      }
    },
    tool_activated: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        tool_selected: {
          target: "tool_addToTarget",
          action(o) {
            this.context.origin.onToolTargetSelected(o);
          }
        }
      }
    },
    tool_selected: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {}
    },
    tool_deselected: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        always: {
          target: "idle",
          condition: "toolTarget",
          action(o) {
          }
        }
      }
    },
    tool_deleted: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        always: {
          target: "idle",
          condition: "toolTarget",
          action(o) {
          }
        }
      }
    }
  },
  guards: {
    toolTarget() {
      return !0;
    }
  }
};
class Ia extends dt {
  #e = "Toolbar";
  #t = "tools";
  #i;
  #r;
  #s = oe;
  #n;
  #o = {};
  #a = void 0;
  #c;
  #l = { click: [], pointerover: [] };
  #h = [];
  constructor(e, i) {
    super(e, i), this.#i = e.elTools, this.#n = Dm || e.config.tools, this.#r = e.WidgetsG, this.init();
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return ae(this.#i);
  }
  init() {
    this.mount(this.#i), this.log(`${this.#e} instantiated`);
  }
  start() {
    this.initAllTools(), this.addAllTools(), this.eventsListen(), Ps.id = this.id, Ps.context = this, this.stateMachine = Ps, this.stateMachine.start();
  }
  destroy() {
    this.core.hub.expunge(this);
    const e = this.id, i = this.#i.querySelectorAll(".icon-wrapper");
    for (let s of i)
      for (let n of this.#n)
        n.id === e && s.removeEventListener("click", this.#l[e].click), s.removeEventListener("pointerover", this.#l[e].pointerover), s.removeEventListener("pointerout", this.#l[e].pointerout);
    this.stateMachine.destroy();
  }
  eventsListen() {
    this.on("tool_selected", this.onToolSelect, this), this.on("tool_deselected", this.onToolDeselect, this);
  }
  onResized() {
    for (let e of this.#h)
      e.position();
  }
  onIconClick(e) {
    e.currentTarget.dataset.event;
    let i = e.currentTarget.dataset.menu || !1, s = {
      target: e.currentTarget.id,
      menu: i,
      evt: e.currentTarget.dataset.event,
      tool: e.currentTarget.dataset.tool
    };
    i ? this.emit("menu_open", s) : this.emit("menuItem_selected", s);
  }
  onIconOut(e) {
    const i = e.currentTarget.querySelector("svg");
    i.style.fill = Ze.COLOUR_ICON;
  }
  onIconOver(e) {
    const i = e.currentTarget.querySelector("svg");
    i.style.fill = Ze.COLOUR_ICONHOVER;
  }
  onToolTargetSelected(e) {
    console.log("tool_targetSelected:", e.target), this.#c = e.target;
  }
  onToolActivated(e) {
    console.log("Tool activated:", e), this.#a = e;
  }
  onToolSelect(e) {
    console.log("Tool selected:", e);
  }
  onToolDeselect(e) {
    console.log("Tool deselected:", e);
  }
  mount(e) {
    e.innerHTML = this.#i.defaultNode(this.#n);
  }
  initAllTools() {
    const e = this.#i.querySelectorAll(".icon-wrapper");
    for (let i of e) {
      let s = i.id, n = i.querySelector("svg");
      n.style.fill = Ze.COLOUR_ICON, n.style.width = "90%";
      for (let r of this.#n)
        if (r.id === s)
          if (this.#l[s] = {}, this.#l[s].click = this.onIconClick.bind(this), this.#l[s].pointerover = this.onIconOver.bind(this), this.#l[s].pointerout = this.onIconOut.bind(this), i.addEventListener("click", this.#l[s].click), i.addEventListener("pointerover", this.#l[s].pointerover), i.addEventListener("pointerout", this.#l[s].pointerout), r?.sub) {
            let a = {
              content: r.sub,
              primary: i
            }, l = this.#r.insert("Menu", a);
            i.dataset.menu = l.id, l.start(), this.#h.push(l);
            for (let h of r.sub)
              this.#o[h.id] = h.class;
          } else
            this.#o[r.id] = r.class;
    }
  }
  addTool(e = this.#a, i = this.#c) {
    let s = {
      name: e,
      tool: this.#o[e],
      pos: i.cursorClick
    }, n = this.#s.create(i, s);
    return n.start(), console.log(n), n;
  }
  addNewTool(e, i) {
    let s = this.addTool(e, i);
    this.activeTool = s, this.emit("tool_active", s), this.emit(`tool_${s.id}_active`, s);
  }
  addAllTools() {
  }
}
const qr = 20, Im = 20, Rm = new ai($.COLOUR_BORDER), Zs = document.createElement("template");
Zs.innerHTML = `
<style>
  .scrollBarWidget {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 2px;
  }
  .scrollBar {
    position: relative;
    border: 1px solid var(--txc-time-scrollbar-color, ${$.COLOUR_BORDER});
    height: 20px;
    border-radius: 3px;
    flex-basis: 100%;
    overflow: hidden;
  }
  .scrollBar input {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    outline: none;
    height: 100%;
    margin: 0;
    padding: 0;
    background:  var(--txc-time-slider-color, #555);

  }
  .scrollBar input::-moz-range-thumb {
    -moz-appearance: none;
    appearance: none; 
    pointer-events: auto;
    position: relative;
    z-index: 10;
    outline: 0;
    height: 100%;
  }
  .scrollBar input::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    appearance: none; 
    pointer-events: auto;
    position: relative;
    z-index: 1;
    height: 100%;
  }
  .scrollBar input::-moz-range-track {
    position: relative;
    z-index: -1;
    background-color: rgba(0, 0, 0, 1);
    border: 0;
  }
  .scrollBar input:last-of-type::-moz-range-track {
    -moz-appearance: none;
    background: none transparent;
    border: 0;
  }
  .scrollBar input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none !important;
    appearance: none;
    background: none transparent;
    cursor: default;
    height: 1px; /* Required for Samsung internet based browsers */
    outline: 0;
  }
  .scrollBar input[type=range]::-moz-focus-outer {
    border: 0;
  }
  input[type=range] {
    -webkit-appearance: none;
    background: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 5px;
    border: none;
    border-radius: 3px;
    background: transparent;
  }

  input[type=range]::-ms-track {
    height: 5px;
    background: transparent;
    border: none;
    border-radius: 3px;
  }

  input[type=range]::-moz-range-track {
    height: 5px;
    background: transparent;
    border: none;
    border-radius: 3px;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 16px;
    border-radius: 3px;
    background: var(--txc-time-slider-color, #555);
    margin-top: -10px;
    position: relative;
    z-index: 10000;
  }

  input[type=range]::-ms-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 16px;
    border-radius: 3px;
    background:  var(--txc-time-slider-color, #555);
    margin-top: -5px;
    position: relative;
    z-index: 10000;
  }

  input[type=range]::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 100%;
    width: 16px;
    border-radius: 3px;
    background:  var(--txc-time-slider-color, #555);
    margin-top: -5px;
    position: relative;
    z-index: 10000;
  }

  input[type=range]:focus {
    outline: none;
  }

  .handle {
    background-color: var(--txc-time-handle-color, ${Rm.hex}44); 
    width: 2px;
    height: 18px;
    margin: 1px;
    margin-left: 872.968px;
    margin-right: 0px;
    position: absolute;
  }
  .icon {
    flex-basis: ${qr}px;
  }
  .icon svg {
    fill: var(--txc-time-icon-color, ${$.COLOUR_ICON});
    width: ${qr}px;
    height: ${Im}px;
    margin-top: 1px;
  }
  .icon svg:hover {
    fill: var(--txc-time-icon-hover-color, ${$.COLOUR_ICONHOVER});
  }
</style>
<div class="scrollBarWidget">
  <span id="rwdStart" class="icon rwdStart">${$c}</span>
  <span class="scrollBar">
    <div class="viewport"></div>
    <input id="min" class="min" name="min" type="range" step="1" min="0" max="3000" />
    <input id="max" class="max" name="max" type="range" step="1" min="0" max="3000" />
    <div class="handle"></div>
  </span>
  <span id="fwdEnd" class="icon fwdEnd">${_c}</span>
</div>
`;
class km extends G {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l;
  #h;
  #p;
  constructor() {
    super(Zs), this.#e = Zs;
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        document.getElementById("slider-bar"), this.#t = this.shadowRoot.querySelector(".scrollBarWidget"), this.#i = this.shadowRoot.querySelector(".rwdStart"), this.#r = this.shadowRoot.querySelector(".fwdEnd"), this.#s = this.shadowRoot.querySelector(".scrollBar"), this.#n = this.shadowRoot.querySelector(".viewport"), this.#o = this.shadowRoot.querySelector(".handle"), this.#a = this.shadowRoot.querySelectorAll("svg"), this.#c = this.shadowRoot.querySelector("#max"), this.#l = this.shadowRoot.querySelector("#min"), this.#h = this.shadowRoot.querySelectorAll("input"), this.#p = this.shadowRoot.querySelector("style[title=overview]"), this.max.addEventListener("input", this.onChangeSliderHandler.bind({ self: this, input: this.max })), this.min.addEventListener("input", this.onChangeSliderHandler.bind({ self: this, input: this.min }));
      }
    );
  }
  get scrollBarWidget() {
    return this.#t;
  }
  get rwdStart() {
    return this.#i;
  }
  get fwdEnd() {
    return this.#r;
  }
  get scrollBar() {
    return this.#s;
  }
  get viewport() {
    return this.#n;
  }
  get handle() {
    return this.#o;
  }
  get icons() {
    return this.#a;
  }
  get max() {
    return this.#c;
  }
  get min() {
    return this.#l;
  }
  get sliders() {
    return this.#h;
  }
  get overviewCSS() {
    return this.#p;
  }
  onChangeSliderHandler() {
    console.log(`${this.input.value}, ${this.input.getAttribute("max")}`);
  }
}
customElements.get("tradex-overview") || window.customElements.define("tradex-overview", km);
const Ra = document.createElement("template");
Ra.innerHTML = `
<style>
  .viewport {
    width: 100%;
    height: ${vn}px;
  }
  tradex-overview {
    height: ${Ro}px;
  }
</style>
<div class="viewport"></div>
<tradex-overview></tradex-overview>
`;
class _m extends G {
  #e;
  #t;
  constructor() {
    super(Ra);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#e = this.shadowRoot.querySelector(".viewport"), this.#t = this.shadowRoot.querySelector("tradex-overview");
      }
    );
  }
  get viewport() {
    return this.#e;
  }
  get overview() {
    return this.#t;
  }
}
customElements.get("tradex-time") || window.customElements.define("tradex-time", _m);
const ka = document.createElement("template");
ka.innerHTML = `
<style>
.scene-canvas {
  display: block;
}
</style>
<slot name="viewportCanvas"></slot>
<canvas class="scene-canvas"></canvas>
`;
class $m extends G {
  #e;
  #t;
  #i = this.onSlotChange.bind(this);
  constructor() {
    super(ka);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#e = this.shadowRoot.querySelector('slot[name="viewportCanvas"]'), this.#e.addEventListener("slotchange", this.#i);
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.#e.removeEventListener("slotchange", this.#i);
  }
  get hasCanvasSlot() {
    return !0;
  }
  get canvasSlot() {
    return this.#e;
  }
  get canvas() {
    return this.#t;
  }
  onSlotChange() {
    this.#t = Array.from(this.canvasSlot.assignedElements()).find((e) => e.localName === "canvas")[0];
  }
}
customElements.get("tradex-viewport") || window.customElements.define("tradex-viewport", $m);
const _a = document.createElement("template");
_a.innerHTML = `
<style>
  tradex-viewport {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
  <tradex-viewport></tradex-viewport>
`;
class Hm extends G {
  #e;
  constructor() {
    super(_a);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => this.#e = this.shadowRoot.querySelector("tradex-viewport")
    );
  }
  get viewport() {
    return this.#e;
  }
}
customElements.get("tradex-grid") || window.customElements.define("tradex-grid", Hm);
const $a = document.createElement("template");
$a.innerHTML = `
<style>

.legends {
  display: flex;
  flex-direction: column;
}
.legends .collapse {
  order: 999;
  padding-left: 0.5em;
}

.legend {
  display: block;
  position: relative;
  width: 100%;
  min-height: 2em;
  margin: 0;
}
.legend * {
  margin: 0;
  padding: 0;
  vertical-align: middle;
}
.legend .upper,
.legend .lower {
  display: block;
  position: absolute;
  top: 0
  width: 100%;
  padding: 0 0.5em;
  white-space: nowrap;
}
.legend .lower {
  background: #0002;
  border-radius: 0 5px 5px 0;
}
.legend.secondary {
  // display: none !important;
}
.legend .controls {
  opacity: 0;
}
.legend .controls svg {
  vertical-align: text-top;
  margin-bottom: 0.2em;
}
.legend dl {
  display: inline; 
  margin: 0 0 0 -1em;
  overflow: hidden;
}
.legend dl:first-child,
.legend dl dt:first-of-type {
  margin-left: 0;
}
.legend dt {
  display: inline; margin-left: 1em;
}
.legend dd {
  display: inline; margin-left: .25em; color: #F900FE;
}
.legend .upper:hover {
  background: #444444cc;
  border-radius: 5px;
}
.legend .upper:hover .controls {
  opacity: 1;
}
.legend .title {
  margin-right: 1em;
  white-space: nowrap;
}
.legend .lower .title {
  visibility:hidden;
}
.legend .controls,
.legend dl {
  display: inline;
}
.legend .control,
.legend .control.collapse {
  margin-right: 2px;
  padding-left: 0;
}


.legends.hide .legend.indicator {
  display:none;
}


.controls .control:hover {
  background: #889;
  border-radius: 3px;
}

.controls.maximized .up,
.controls.maximized .down,
.controls.maximized .expand,
.controls.maximized .collapse,
.controls.maximized .maximize,
.controls.maximized .remove
{
  display: none;
}

.controls.restored .restore
{
  display: none;
}

.controls.collapsed .collapse {
  display: none;
}

.controls.expanded .expand {
  display: none;
}

.controls.visible .visible {
  display: none;
}
.controls.visible .notvisible {
  display: inline;
}

.controls.notvisible .notvisible {
  display: none;
}
.controls.notvisible .visible {
  display: inline;
}

.chart .upper {
  right: 0;
  z-index:1;
}
.chart .upper .title,
.secondary .upper .title {
  display: none;
}
.chart .lower .title {
  visibility: visible;
}

.secondary .upper {
  right: 0;
  z-index:1;
}
</style>
<div class="legends">
  <slot name="legend"></slot>
  <div class="controls collapse restored">
    <span id="hideLegends" class="control" data-icon="hide" style="display:none">${Pc}</span>
    <span id="showLegends" class="control" data-icon="show" style="display:none">${Mc}</span>
  </div>
</div>
`;
class Bm extends G {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  #o = [];
  #a;
  constructor() {
    super($a);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#n = this.shadowRoot.querySelector("slot"), this.#t = this.shadowRoot.querySelector(".legends"), this.#i = this.shadowRoot.querySelector(".title"), this.#r = this.shadowRoot.querySelector("dl"), this.#s = this.shadowRoot.querySelector(".controls"), this.#a = this.onSlotChange.bind(this), this.#n.addEventListener("slotchange", this.#a);
      }
    );
  }
  disconnectedCallback() {
    this.#n.removeEventListener("slotchange", this.#a);
  }
  get slot() {
    return this.#n;
  }
  get legends() {
    return this.#t;
  }
  get elTitle() {
    return this.#i;
  }
  get elInputs() {
    return this.#r;
  }
  get elControls() {
    return this.#s;
  }
  get title() {
    return this.#e;
  }
  set title(e) {
    this.setTittle(e);
  }
  onSlotChange(e) {
    this.#o.forEach((i) => i.handler.call(i.context, e));
  }
  insert(e) {
    this.legends.insertAdjacentHTML("beforeend", e);
  }
  setTittle(e) {
    b && (this.#e = e, this.elTitle.innerHTML = e);
  }
  buildLegend(e, i) {
    let s = "", n = `${i.legend.font}; color: ${i.legend.colour}; text-align: left;`, r = "", a = e?.type !== "chart" ? "visible" : "notvisible";
    const l = "", h = i.legend.controls ? `
      <div class="controls restored expanded ${a}" style="${l}">
        ${this.buildControls(e)}
      </div>
    ` : "";
    switch (e?.type) {
      case "chart":
        r += "font-size: 1.5em;";
        break;
      case "secondary":
        n += " margin-bottom: -1.5em;", r += "", e.title = "";
        break;
      default:
        r += "font-size: 1.2em;";
        break;
    }
    return `
      <div id="legend_${e.id}" class="legend ${e.type}" style="${n}" data-type="${e.type}" data-id="${e.id}" data-parent="${e.parent.id}">
        <div class="lower">
          <span class="title" style="${r}">${e.title}</span>
          <dl style="${s}">${this.buildInputs(e)}</dl>
        </div>
        <div class="upper">
            <span class="title" style="${r}">${e.title}</span>
            ${h}
      </div>
     </div>
    `;
  }
  buildInputs(e) {
    let i = 0, s = "", n, r = "", a = "", l = "";
    for (n in e.inputs) {
      let h = e?.colours?.[i] ? ` color: ${e.colours[i]};` : "", p = e?.inputs?.[n] !== void 0 ? e.inputs[n] : r, f = e?.labels?.[i] ? `${n}:` : r;
      a += e?.labels?.[i] ? "1em;" : ".25em", s += `<dt style="${a}">${f}</dt>
      <dd style="${l}${h}">${p}</dd>`, ++i;
    }
    return s;
  }
  buildControls(e) {
    let i = "", s = e.id;
    return i += `<span id="${s}_up" class="control up" data-icon="up">${Lc}</span>`, i += `<span id="${s}_down" class="control down" data-icon="down">${Ac}</span>`, e?.type === "indicator" && (i += `<span id="${s}_visible" class="control visible" data-icon="visible">${Rc}</span>`, i += `<span id="${s}_notVisible" class="control notvisible" data-icon="notVisible">${kc}</span>`), e?.type !== "indicator" && (i += `<span id="${s}_collapse" class="control collapse" data-icon="collapse">${Dc}</span>`, i += `<span id="${s}_expand" class="control expand" data-icon="expand">${Ic}</span>`, i += `<span id="${s}_maximize" class="control maximize" data-icon="maximize">${Nc}</span>`, i += `<span id="${s}_restore" class="control restore" data-icon="restore">${Oc}</span>`), i += e?.type !== "chart" ? `<span id="${s}_remove" class="control remove" data-icon="remove">${Ec}</span>` : "", i += e?.type !== "secondary" ? `<span id="${s}_config" class="control config" data-icon="config">${Oo}</span>` : "", i;
  }
}
customElements.get("tradex-legends") || window.customElements.define("tradex-legends", Bm);
const Ha = document.createElement("template");
Ha.innerHTML = `
<style>
  :host {
    overflow: hidden;
  }

  .viewport {
    position: relative;
    width: 100%;
    height: inherit;
    background: var(--txc-chartpane-background, none);
  }
  .viewport canvas {
    position: absolute;
    top: 1px;
  }
  tradex-legends {
    position: absolute;
    top: 0;
    left: 0;
    z-index:100;
    width: 100%;
  }
</style>
<div class="viewport"></div>
<tradex-legends></tradex-legends>
`;
class Um extends G {
  #e;
  #t;
  constructor() {
    super(Ha);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#e = this.shadowRoot.querySelector(".viewport"), this.#t = this.shadowRoot.querySelector("tradex-legends");
      }
    );
  }
  disconnectedCallback() {
  }
  get viewport() {
    return this.#e;
  }
  get legend() {
    return this.#t;
  }
}
customElements.get("tradex-chartpane") || window.customElements.define("tradex-chartpane", Um);
const Ba = document.createElement("template");
Ba.innerHTML = `
<style>
  slot[name="chartpane"] {
    display: flex;
    flex-direction: column;
  }
  ::slotted(tradex-chartpane) {
    display: block;
    position: relative;
    top: 0;
    width: 100%;
  }
  ::slotted(tradex-chartpane:first-of-type) {
    border-top: none !important;
  }
</style>
<slot name="chartpane" id="chartpane"></slot>
`;
class zm extends G {
  #e;
  #t;
  #i;
  #r;
  constructor() {
    super(Ba);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(), this.previousDimensions();
  }
  disconnectedCallback() {
  }
  get grid() {
    return this.shadowRoot.querySelector("tradex-grid");
  }
  get primary() {
    return Array.from(this.chartPaneSlot.assignedElements()).find((e) => e.classList.contains("primary"));
  }
  get secondary() {
    return Array.from(this.chartPaneSlot.assignedElements()).find((e) => e.classList.contains("secondary"));
  }
  get chartPanes() {
    return this.chartPaneSlot.assignedElements();
  }
  get chartPaneSlot() {
    return this.shadowRoot.querySelector('slot[name="chartpane"]');
  }
  get width() {
    return this.#i;
  }
  get height() {
    return this.#r;
  }
  get oWidth() {
    return this.#e;
  }
  get oHeight() {
    return this.#t;
  }
  get widthDeltaR() {
    return this.#i / this.#e;
  }
  get heightDeltaR() {
    return this.#r / this.#t;
  }
  previousDimensions() {
    this.#e = this.#i ? this.#i : this.clientWidth, this.#t = this.#r ? this.#r : this.clientHeight, this.#i = this.clientWidth, this.#r = this.clientHeight;
  }
}
customElements.get("tradex-rows") || window.customElements.define("tradex-rows", zm);
const Ua = document.createElement("template");
Ua.innerHTML = `
<style>
  #viewport {
    position: absolute;
    width: 100%;
    height: inherit;
    background: var(--txc-chartpane-background, none);
    z-index: 0;
  }
  #viewport canvas {
    position: absolute;
    // top: 1px;
  }
  tradex-rows {
    position:relative;
    overflow: hidden;
    width: 100%;
    height: calc(100% - ${Vs}px);
    border: 1px solid;
    border-color: var(--txc-border-color, ${$.COLOUR_BORDER}); 
  }
  tradex-time {
    position: relative;
    width: 100%;
    height: ${Vs}px;
    overflow: hidden;
    margin-left: 1px;
    z-index: 1;
  }
</style>
<div id="viewport"></div>
<tradex-rows></tradex-rows>
<tradex-time></tradex-time>
`;
class Vm extends G {
  #e;
  #t;
  #i;
  #r;
  constructor() {
    super(Ua);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#i = this.shadowRoot.querySelector("#viewport"), this.#e = this.shadowRoot.querySelector("tradex-rows"), this.#t = this.shadowRoot.querySelector("tradex-time");
      }
    );
  }
  disconnectedCallback() {
  }
  get viewport() {
    return this.#i;
  }
  get rows() {
    return this.#e;
  }
  get time() {
    return this.#t;
  }
  start(e) {
    this.#r = e, this.setMain();
  }
  rowNode(e, i) {
    return `
      <tradex-chartpane slot="chartpane" class="${e}" style="">
      </tradex-chartpane>
    `;
  }
  removeRow(e) {
    const i = this.shadowRoot.querySelector(`#${e}`);
    return i ? (i.remove(), !0) : !1;
  }
  setMain() {
    let e = T(this.#r?.time?.height) ? this.#r.time.height : Vs;
    this.rows.style.height = `calc(100% - ${e}px)`;
  }
}
customElements.get("tradex-main") || window.customElements.define("tradex-main", Vm);
const za = document.createElement("template");
za.innerHTML = `
  <slot></slot>
`;
class Fm extends G {
  constructor() {
    super(za);
  }
  destroy() {
  }
  get icons() {
    return this.shadowRoot.querySelector("slot").assignedElements();
  }
  defaultNode(e) {
    let i = `
    <style>
      svg {
        height: ${Ze.ICONSIZE};
        width: ${Ze.ICONSIZE};
        fill: ${Ze.COLOUR_ICON};
      }
      svg:hover {
        fill: ${Ze.COLOUR_ICONHOVER};
      }
      .icon-wrapper {
        width: ${Ze.ICONSIZE};
        margin: 0 auto;
      }
    </style>
    `;
    for (const s of e)
      i += this.iconNode(s);
    return i;
  }
  iconNode(e) {
    const i = "sub" in e ? 'data-menu="true"' : "";
    return `
      <div id="${e.id}" data-event="${e.event}" ${i} class="icon-wrapper">${e.icon}</div>

    `;
  }
}
customElements.get("tradex-tools") || window.customElements.define("tradex-tools", Fm);
const Va = document.createElement("template");
Va.innerHTML = `
<style>
  tradex-viewport {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: -100;
  }
  slot[name="chartpane"] {
    display: flex;
    flex-direction: column;
  }
  ::slotted(div.scale:first-of-type) {
    border-top: none !important;
  }
</style>
<tradex-viewport></tradex-viewport>
<slot name="chartpane" id="chartPane"></slot>
`;
class Wm extends G {
  #e;
  #t;
  #i;
  constructor() {
    super(Va);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#e = this.shadowRoot.querySelector("tradex-viewport"), this.#i = this.shadowRoot.querySelector('slot[name="chartpane"]'), this.#t = this.chartPaneSlot.assignedElements();
      }
    );
  }
  get viewport() {
    return this.#e;
  }
  get chartPanes() {
    return this.#t;
  }
  get chartPaneSlot() {
    return this.#i;
  }
}
customElements.get("tradex-scale") || window.customElements.define("tradex-scale", Wm);
const Gm = `
<style>
  tradex-tools {
    position: absolute; 
    top: 0; left: 0;
    width: ${zs}px;
    height: 100%; 
    min-height: 100%; 
  }
  tradex-main {
    position: absolute; 
    top: 0;
    right: ${Fs}px;
    width: calc(100% - ${zs}px);
    height: 100%;
    min-height: 100%; 
  }
  tradex-scale {
    position: absolute; 
    top: 1px;
    right: 0; 
    width: ${Fs}px; 
    height: 100%;
    min-height: 100%; 
  }
</style>
<tradex-tools></tradex-tools>
<tradex-main></tradex-main>
<tradex-scale></tradex-scale>
`, Fa = document.createElement("template");
Fa.innerHTML = Gm;
class qm extends G {
  #e;
  #t;
  #i;
  #r;
  constructor() {
    super(Fa);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#t = this.shadowRoot.querySelector("tradex-tools"), this.#i = this.shadowRoot.querySelector("tradex-main"), this.#r = this.shadowRoot.querySelector("tradex-scale");
      }
    );
  }
  get tools() {
    return this.#t;
  }
  get main() {
    return this.#i;
  }
  get scale() {
    return this.#r;
  }
  get scaleW() {
    return this.#r.width || this.#e?.scale?.width || Fs;
  }
  get toolsW() {
    return this.#t.width || this.#e?.tools?.width || zs;
  }
  start(e) {
    this.#e = e, this.setToolsLocation();
  }
  setYAxisLocation(e = this.#e?.yAxis?.location) {
    let i = this.scaleW, s = this.#e?.tools?.location == "none" ? 0 : this.toolsW;
    switch (e) {
      case "left":
        this.scale.style.left = `${s}px`, this.scale.style.right = void 0, this.main.style.left = `${i + s}px`, this.main.style.right = void 0, this.main.style.width = `calc(100% - ${i + s}px)`;
        break;
      case "both":
      case "right":
      default:
        this.scale.style.left = void 0, this.scale.style.right = 0, this.main.style.left = `${s}px`, this.main.style.right = void 0, this.main.style.width = `calc(100% - ${i + s}px)`;
        break;
    }
  }
  setToolsLocation(e = this.#e?.tools?.location) {
    let i = this.toolsW;
    switch (this.#e.tools = this.#e.tools || {}, e) {
      case "none":
      case !1:
        this.#e.tools.location = "none", this.#e.tools.width = 0, this.tools.style.display = "none", this.tools.style.width = "0px";
        break;
      case "right":
        this.#e.tools.location = "right", this.#e.tools.width = i, this.tools.style.display = "block", this.tools.style.left = void 0, this.tools.style.right = 0, this.tools.style.width = `${i}px`;
        break;
      case "left":
      default:
        this.#e.tools.location = "left", this.#e.tools.width = i, this.tools.style.display = "block", this.tools.style.left = 0, this.tools.style.right = void 0, this.tools.style.width = `${i}px`;
        break;
    }
    this.setYAxisLocation();
  }
}
customElements.get("tradex-body") || window.customElements.define("tradex-body", qm);
const Wa = document.createElement("template");
Wa.innerHTML = `
  <style>
    .utilsOptions {
      display: inline-block; float: right;
    }
  </style>
  <slot></slot>
  <div class="utilsOptions">
  </div>
`;
class Ym extends G {
  constructor() {
    super(Wa);
  }
  destroy() {
  }
  get icons() {
    return this.shadowRoot.querySelector("slot").assignedElements()[0].children;
  }
  defaultNode(e) {
    let s = `
    <div style="display: inline-block; float: right;">
    <style>
      svg {
        height: ${Tt.ICONSIZE};
        fill: ${Tt.COLOUR_ICON};
      }
    </style>
    `;
    for (const n of e)
      s += this.iconNode(n);
    return s + "</div>";
  }
  iconNode(e) {
    const i = `display: inline-block; height: ${Tt.ICONSIZE}; padding-top: 2px`, s = "sub" in e ? 'data-menu="true"' : "";
    return `
      <div id="TX_${e.id}" data-event="${e.event}" ${s} class="icon-wrapper" style="${i}">${e.icon}</div>

    `;
  }
}
customElements.get("tradex-utils") || window.customElements.define("tradex-utils", Ym);
const Ga = document.createElement("template");
Ga.innerHTML = `
  <slot name="widget"></slot>
`;
class jm extends G {
  constructor() {
    super(Ga);
  }
  destroy() {
  }
}
customElements.get("tradex-widgets") || window.customElements.define("tradex-widgets", jm);
const Xm = `
  <style title="core">
    :host {
      position: relative;
      z-index: 0;
    }
    tradex-utils {
      height: ${Fe}px; 
      width: 100%; 
    }
    tradex-body {
      position: relative;
      height: calc(100% - ${Fe}px); 
      min-height: ${We - Fe}px;
      width: 100%;
    }
    tradex-widgets {
      position: relative;
    }
  </style>
  <div style="display: none;">
    <slot></slot>
  </div>
  <tradex-utils></tradex-utils>
  <tradex-body></tradex-body>
  <tradex-widgets></tradex-widgets>
`;
class Km extends G {
  #e;
  #t;
  #i;
  #r;
  #s = Xt;
  #n = We;
  #o;
  #a;
  #c;
  #l;
  #h;
  #p;
  constructor() {
    const e = document.createElement("template");
    e.innerHTML = Xm, super(e, "closed"), this.#r = e;
  }
  destroy() {
    this.resizeObserver.disconnect();
  }
  static get observedAttributes() {
    return ["config", "disabled", "height", "stream", "width"];
  }
  connectedCallback() {
    if (this.doInit) {
      this.doInit = !1, this.shadowRoot.appendChild(this.#r.content.cloneNode(!0)), this.style.display = "block", this.style.minHeight = No, this.#i = this.shadowRoot.querySelector("tradex-widgets"), this.#t = this.shadowRoot.querySelector("tradex-utils"), this.#e = this.shadowRoot.querySelector("tradex-body"), this.#n = this.parentElement.clientHeight || We, this.#s = this.parentElement.clientWidth || Xt;
      let e = this.getAttribute("height") || "100%", i = this.getAttribute("width") || "100%";
      this.setDimensions(i, e), this.resizeObserver = new ResizeObserver(Le(this.onResized, 100, this)), this.resizeObserver.observe(this), this.start($o);
    }
  }
  disconnectedCallback() {
    this.resizeObserver.disconnect();
  }
  attributeChangedCallback(e, i, s) {
    switch (e) {
      case "config":
        break;
      case "disabled":
        break;
      case "height":
        this.height(s);
        break;
      case "width":
        this.width(s);
        break;
    }
  }
  get id() {
    return this.getAttribute("id");
  }
  set id(e) {
    this.setAttribute("id", Be(e));
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(e) {
    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }
  get stream() {
    return !0;
  }
  set stream(e) {
  }
  get elBody() {
    return this.#e;
  }
  get elUtils() {
    return this.#t;
  }
  get elWidgets() {
    return this.#i;
  }
  get elWidgetsG() {
    return this.#i;
  }
  get elMain() {
    return this.#e.main;
  }
  get elTime() {
    return this.#e.main.time;
  }
  get elTools() {
    return this.#e.tools;
  }
  get elYAxis() {
    return this.#e.scale;
  }
  get width() {
    return this.#s;
  }
  get height() {
    return this.#n;
  }
  get resizeEntries() {
    return this.#p;
  }
  elStart(e) {
    this.#h = e, this.setUtilsLocation();
  }
  onResized(e) {
    super.onResize(e);
    const i = Ao.includes(this.theme?.utils?.location) ? Fe : 0, { width: s, height: n } = e[0].contentRect;
    this.#s = s, this.#n = n, this.#p = e[0], this.elBody.style.height = `calc(100% - ${i}px)`, this.MainPane instanceof Xs, this.ToolsBar instanceof Ia && this.ToolsBar.onResized(), this.log(`onResize w: ${s}, h: ${n}`), this.emit("global_resize", { w: s, h: n });
  }
  setWidth(e) {
    T(e) ? e += "px" : b(e) && e.match(Vt) || (e = "100%"), this.style.width = e, this.#s = Math.round(this.getBoundingClientRect().width);
  }
  setHeight(e) {
    T(e) ? e += "px" : b(e) && e.match(Vt) || (this.#n = this.parentElement.getBoundingClientRect().height, e = this.#n + "px"), this.style.height = e, this.#n = Math.round(this.getBoundingClientRect().height);
  }
  setWidthMin(e) {
    this.style.minWidth = `var(--txc-min-width, ${e})`;
  }
  setHeightMin(e) {
    this.style.minHeight = `var(--txc-min-height, ${e})`;
  }
  setWidthMax(e) {
    this.style.minWidth = `var(--txc-max-width, ${e})`;
  }
  setHeightMax(e) {
    this.style.minHeight = `var(--txc-max-height, ${e})`;
  }
  setDimensions(e, i) {
    let s, n = this.width, r = this.height;
    if (!e || !i) {
      const a = this.getBoundingClientRect(), l = this.parentElement.getBoundingClientRect();
      i = a.height ? a.height : l.height ? l.height : We, e = a.width ? a.width : l.width ? l.width : Xt;
    } else
      (!T(e) || !T(i)) && ((!b(e) || !e.match(Vt)) && (e = "100%"), (!b(i) || !i.match(Vt)) && (i = "100%"));
    return this.setWidth(e), this.setHeight(i), s = {
      width: this.width,
      height: this.height,
      resizeW: e / n,
      resizeH: i / r,
      resizeWDiff: e - n,
      resizeHDiff: i - r
    }, s;
  }
  setUtilsLocation(e = this.#h?.utils?.location) {
    switch (this.#h.utils = this.#h.utils || {}, e) {
      case "top":
      case !0:
        this.#h.setProperty("utils.location", "top"), this.#h.setProperty("utils.height", Fe), this.#h.utils.location = "top", this.#h.utils.height = Fe, this.elUtils.style.display = "block", this.elUtils.style.height = `${Fe}px`, this.elBody.style.height = `calc(100% - ${Fe}px)`, this.elBody.style.minHeight = `${We - Fe}px`;
        break;
      case "none":
      case !1:
      default:
        this.#h.setProperty("utils.location", "none"), this.#h.setProperty("utils.height", 0), this.#h.utils.location = "none", this.#h.utils.height = 0, this.elUtils.style.display = "none", this.elUtils.style.height = "0px", this.elBody.style.height = "100%", this.elBody.style.minHeight = `${We}px`;
        break;
    }
  }
}
const Zm = [
  {
    id: "indicators",
    name: "Indicators",
    icon: yc,
    event: "utils_indicators",
    sub: []
  },
  {
    id: "timezone",
    name: "Timezone",
    icon: vc,
    event: "utils_timezone"
  },
  {
    id: "screenshot",
    name: "Screenshot",
    icon: gc,
    event: "utils_screenshot"
  },
  {
    id: "settings",
    name: "Settings",
    icon: Oo,
    event: "utils_settings"
  }
];
class Qm extends dt {
  #e = "Utilities";
  #t = "utils";
  #i;
  #r;
  #s;
  #n;
  #o;
  #a = {};
  #c = {};
  #l = {};
  constructor(e, i) {
    super(e, i), this.#i = e.elUtils, this.#r = e.config?.utilsBar || Zm, this.#n = e.WidgetsG, this.#o = e.indicatorsPublic || La, this.#s = e.config.theme?.utils?.location || "none", (this.#s || this.#s == "none" || !Ao.includes(this.#s)) && (this.#i.style.height = 0, this.core.elBody.style.height = "100%"), this.#i.innerHTML = this.#i.defaultNode(this.#r), this.log(`${this.#e} instantiated`);
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return ae(this.#i);
  }
  get location() {
    return this.#s;
  }
  start() {
    this.initAllUtils(), this.eventsListen();
  }
  destroy() {
    const e = this.core, i = no(`#${e.id} .${Nl} .icon-wrapper`);
    for (let s of i) {
      let n = s.id.replace("TX_", "");
      for (let r of this.#r)
        r.id === n && s.removeEventListener("click", this.#c[n].click), s.removeEventListener("pointerover", this.#c[n].pointerover), s.removeEventListener("pointerout", this.#c[n].pointerout);
    }
    this.core.hub.expunge(this);
  }
  eventsListen() {
    this.on("utils_indicators", this.onIndicators, this), this.on("utils_timezone", this.onTimezone, this), this.on("utils_settings", this.onSettings, this), this.on("utils_screenshot", this.onScreenshot, this);
  }
  onIconClick(e) {
    const i = on(e.target, "icon-wrapper");
    if (!w(i))
      return !1;
    const s = Date.now();
    if (s - this.#l[i.id] < 1e3)
      return !1;
    this.#l[i.id] = s;
    let n = i.dataset.event, r = i.dataset.menu || !1, a = {
      target: i.id,
      menu: r,
      evt: n
    }, l = i.dataset.action;
    this.emit(n, a), r ? this.emit("menu_open", a) : this.emit("util_selected", a), l && l(a, this.core);
  }
  onIconOver(e) {
    const i = e.currentTarget.querySelector("svg");
    i.style.fill = Tt.COLOUR_ICONHOVER;
  }
  onIconOut(e) {
    const i = e.currentTarget.querySelector("svg");
    i.style.fill = Tt.COLOUR_ICON;
  }
  initAllUtils() {
    const e = this.#i.querySelectorAll(".icon-wrapper");
    for (let i of e) {
      this.#l[i.id] = 0;
      let s = i.id.replace("TX_", ""), n = i.querySelector("svg");
      n.style.fill = Tt.COLOUR_ICON, n.style.height = "90%";
      for (let r of this.#r)
        if (r.id === s && (this.#c[s] = {}, this.#c[s].click = this.onIconClick.bind(this), this.#c[s].pointerover = this.onIconOver.bind(this), this.#c[s].pointerout = this.onIconOut.bind(this), i.addEventListener("click", this.#c[s].click), i.addEventListener("pointerover", this.#c[s].pointerover), i.addEventListener("pointerout", this.#c[s].pointerout), s === "indicators" && (r.sub = Object.values(this.#o)), r?.sub)) {
          let a = {
            content: r.sub,
            primary: i
          }, l = this.#n.insert("Menu", a);
          i.dataset.menu = l.id, l.start();
        }
    }
  }
  onIndicators(e) {
  }
  onTimezone(e) {
    this.core.notImplemented();
  }
  onSettings(e) {
    this.core.notImplemented();
  }
  onScreenshot(e) {
    this.core.downloadImage();
  }
}
const Jm = 150;
class ge {
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  #c;
  #l = {};
  static menuList = {};
  static menuCnt = 0;
  static class = Qn;
  static name = "Menus";
  static type = "menu";
  static currentActive;
  static create(e, i) {
    const s = `menu_${++ge.menuCnt}`;
    return i.id = s, ge.menuList[s] = new ge(e, i), ge.menuList[s];
  }
  static destroy(e) {
    ge.menuList[e].end(), delete ge.menuList[e];
  }
  constructor(e, i) {
    this.#t = e, this.#i = i.core, this.#r = i, this.#e = i.id, this.#n = e.elements[ge.type], this.#s = this.#i.elWidgetsG, this.mount(this.#n);
  }
  get el() {
    return this.#o;
  }
  get id() {
    return this.#e;
  }
  get pos() {
    return this.dimensions;
  }
  get dimensions() {
    return ae(this.#o);
  }
  get type() {
    return ge.type;
  }
  start() {
    this.position(), this.eventsListen();
  }
  end() {
    this.#n.querySelectorAll(`#${this.id} li`).forEach((i) => {
      i.removeEventListener("click", this.#l[this.id][i.id]);
    }), document.removeEventListener("click", this.#l[this.id].outside), this.off("global_resize", this.onResize, this);
  }
  eventsListen() {
    const e = this.#n.querySelectorAll(`#${this.id} li`);
    this.#l[this.id] = {}, e.forEach((i) => {
      this.#l[this.id][i.id] = this.onMenuSelect.bind(this), i.addEventListener("click", this.#l[this.id][i.id]);
    }), this.on("global_resize", this.onResize, this);
  }
  on(e, i, s = this) {
    this.#i.on(e, i, s);
  }
  off(e, i, s = this) {
    this.#i.off(e, i, s);
  }
  emit(e, i) {
    this.#i.emit(e, i);
  }
  onMenuSelect(e) {
    let i = e.currentTarget.dataset.event, s = {
      target: e.currentTarget.id,
      menu: this.#e,
      evt: i
    };
    this.emit("menuItem_selected", s), this.emit("menu_close", s), this.#i.log(`menu_close: ${this.#e}`);
  }
  onOutsideClickListener(e) {
    if (!this.#o.contains(e.target) && !this.#r.primary.contains(e.target) && ct(this.#o)) {
      let i = {
        target: e.currentTarget.id,
        menu: this.#e
      };
      this.emit("menu_close", i);
    }
    document.removeEventListener("click", this.#l[this.id].outside);
  }
  onResize() {
    this.position();
  }
  mount(e) {
    e.lastElementChild == null ? e.innerHTML = this.menuNode() : e.lastElementChild.insertAdjacentHTML("afterend", this.menuNode()), this.#o = this.#n.querySelector(`#${this.id}`);
  }
  static defaultNode() {
    return `
      <div slot="widget" class="${Qn}" style=""></div>
    `;
  }
  menuNode() {
    const e = this.#r, i = `position: absolute; z-index: 1000; display: none; border: 1px solid ${vs.COLOUR_BORDER}; background: ${vs.COLOUR_BG}; color: ${vs.COLOUR_TXT}; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;`;
    let s = this.content(e);
    return `
      <div id="${e.id}" class="${Dl}" style="${i}">
        ${s}
      </div>
    `;
  }
  content(e) {
    const i = `list-style: none; text-align: left; margin:1em 1em 1em -2.5em; min-width: ${Jm}px`, s = "padding: .25em 1em .25em 1em; white-space: nowrap;", n = "display: inline-block; width: 4em;", r = "cursor: pointer;", a = `onmouseover="this.style.background ='#222'"`, l = `onmouseout="this.style.background ='none'"`;
    let h = `<ul style="${i}">`;
    if (e?.content)
      for (let p of e.content)
        h += `<li id="${p.id}" data-event="${p.event}" style="${s} ${r}" ${a} ${l}><a style="${r}"><span style="${n}">${p.id}</span><span>${p.name}</span></li></a>`;
    return h += "</ul>", h;
  }
  position() {
    let e = this.#s.getBoundingClientRect(), i = this.#r.primary.getBoundingClientRect(), s = Math.round(i.left - e.left), n = Math.round(i.bottom - e.top);
    this.#o.style.left = s + "px", this.#o.style.top = n + "px";
    let r = ae(this.#o);
    if (r.right > this.#s.offsetWidth) {
      let l = Math.floor(this.#s.offsetWidth - r.width);
      l = R(l, 0, this.#s.offsetWidth), this.#o.style.left = `${l}px`;
    }
    if (this.#i.MainPane.rowsH + n + r.height > this.#i.MainPane.rowsH) {
      let l = Math.floor(r.height * -1);
      l = R(l, this.#i.MainPane.rowsH * -1, 0), this.#o.style.top = `${l}px`;
    }
  }
  remove() {
  }
  open() {
    if (ge.currentActive === this)
      return !0;
    ge.currentActive = this, this.#o.style.display = "block", this.position(), setTimeout(() => {
      this.#l[this.id].outside = this.onOutsideClickListener.bind(this), document.addEventListener("click", this.#l[this.id].outside);
    }, 250);
  }
  close() {
    ge.currentActive = null, this.#o.style.display = "none", this.emit("menuClosed", this.id);
  }
}
class li extends ee {
  static name = "Dialogues";
  static type = "dialogue";
  static class = "tradeXdialogue";
  static defaultStyles = `
  /** default Dialogue widget styles */
  `;
  static create(e, i) {
    return i.dragBar = F(i?.dragBar) ? i.dragBar : !0, i.close = F(i?.close) ? i.close : !0, i.type = i?.type || li.type, i.class = i?.class || "dialogue", i.id = i?.id || se("dialogue"), super.create(e, i);
  }
  static defaultNode() {
    return `
      <div slot="widget" class="tradeXdialogue" style="">
      </div>
    `;
  }
  constructor(e, i) {
    super(e, i);
  }
  destroy() {
    super.destroy();
  }
  get type() {
    return li.type;
  }
  dialogueBuild(e = "", i = []) {
    let s = { buttons: {} }, n = `
    <input class="submit" type="submit" value="Submit"/>
    <input class="cancel" type="button" value="Cancel"/>
    <input class="default" type="button" value="Default"/>
    `;
    return P(i) && i.length > 1 || (s.submit = this.provideEventListeners(
      "input.submit",
      [{
        event: "click",
        fn: (a) => {
          O(this.parent.onConfigDialogueSubmit) && this.parent.onConfigDialogueSubmit(this);
        }
      }]
    ), s.cancel = this.provideEventListeners(
      "input.cancel",
      [{
        event: "click",
        fn: (a) => {
          O(this.parent.onConfigDialogueCancel) && this.parent.onConfigDialogueCancel(this);
        }
      }]
    ), s.default = this.provideEventListeners(
      "input.default",
      [{
        event: "click",
        fn: (a) => {
          O(this.parent.onConfigDialogueDefault) && this.parent.onConfigDialogueDefault(this);
        }
      }]
    )), { html: `
    ${new String(e)}
    <div class="buttons">
      ${n}
    </div>
    `, modifiers: s };
  }
  provideEventListeners(e, i) {
    return (n) => {
      const r = n.querySelector(e);
      if (r)
        for (let a of i)
          r.addEventListener(
            a.event,
            (l) => {
              a.fn(l);
            }
          );
    };
  }
}
const qa = `
/** default Config Dialogue widget styles */

.tabbedContent {
  overflow: hidden;
}

.tabbedContent .content {
  padding: 0;
}
.tabbedContent .tabs {
  display: flex;
  flex-wrap: wrap;
  background: #e5e5e588;
  box-shadow: 0 48px 80px -32px rgba(0,0,0,0.3);
  width: 300px;
}
.tabbedContent .input {
  position: absolute;
  opacity: 0;
}
.tabbedContent .label {
  width: auto;
  padding: .4em 1em;
  background: #e5e5e588;
  cursor: pointer;
  font-weight: bold;
  color: #7f7f7f;
  transition: background 0.1s, color 0.1s;
}
.tabbedContent .label:hover {
  background: #d8d8d8;
}
.tabbedContent .label:active {
  background: #ccc;
}
.tabbedContent .input:focus + .label {
  z-index: 1;
}
.tabbedContent .input:checked + .label {
  background: #fff;
  color: #000;
}
.tabbedContent .panel {
  display: none;
  padding: 1em 1em 1.5em;
  background: #ffffff88;
  order: 100;
}
.tabbedContent .input:checked + .label + .panel {
  display: grid;
  width: 100%;
  grid-template-columns: [label] 1fr [input] 10em [end];
  grid-row-gap: 2px;
  align-items: center;
}
.tabbedContent .panel label,
.tabbedContent .panel input {
  ${$.FONTSTRING}
  padding: 1px 2px;
}
.tabbedContent .panel label {
  grid-column-start: label;
  grid-column-end: input;
  color: #444;
  font-weight: bold;
}
.tabbedContent .panel input {
  border: 1px solid #888;
}
.tabbedContent .panel input[type="color"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 3em;
  height: 2em;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  border: none;
}
.tabbedContent .panel input[type="color"]::-webkit-color-swatch,
.tabbedContent .panel input[type="color"]::-moz-color-swatch {
  border-radius: 0;
  padding: 1px;
  margin 0;
  border-radius: 3px;
  border: 1px solid #000;
  height: 2em;
  background: #fff;
}
`, Ya = document.createElement("template");
Ya.innerHTML = `
<style>
  ${qa}
}
</style>
<div class="tabbedContent">
</div>
`;
class ef extends G {
  #e;
  #t;
  #i;
  #r;
  #s = this.onSlotChange.bind(this);
  constructor() {
    super(Ya);
  }
  destroy() {
  }
  connectedCallback() {
    super.connectedCallback(
      () => {
        this.#t = this.shadowRoot.querySelector(".tabbedContent"), this.#i = this.shadowRoot.querySelector('slot[name="viewporttabs"]'), this.#i.addEventListener("slotchange", this.#s);
      }
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.#i.removeEventListener("slotchange", this.#s);
  }
  get hastabsSlot() {
    return !0;
  }
  get tabsSlot() {
    return this.#i;
  }
  get tabs() {
    return this.#r;
  }
  onSlotChange() {
    this.#r = Array.from(this.tabsSlot.assignedElements()).find((e) => e.localName === "tabs")[0];
  }
  insertTab(e) {
    let { id: i, label: s, content: n, checked: r } = e;
    switch (typeof i) {
      case "string":
      case "number":
        break;
      default:
        i = this.#r.length;
    }
    let a = Bi(i, s, n, r);
    a = this.#t.insertAdjacentHTML("afterend", a), this.#r.push({ id: i, label: s, content: n, checked: r, tab: a });
  }
  removeTab(e) {
    if (b(e)) {
      let i = this.#t.querySelectorAll(`.tab-${e}`);
      for (let s of i)
        s.remove();
      for (let s = 0; s < this.#r.length; s++)
        this.#r[s].id == e && delete this.#r[s];
    } else
      T(e) && this.#t.querySelectorAll(".input");
  }
}
function tf(o = {}, e) {
  w(o) || (o = {});
  let i = "", s = Object.keys(o), n = s.length;
  if (n < 1)
    i += Bi(1, "Question", "Why did the chicken cross the road?", !0), i += Bi(2, "Answer", "To get to the other side.");
  else {
    let r = [];
    for (--n; n >= 0; n--) {
      let a = n == 0, l = O(e) ? e(o[s[n]]) : o[s[n]];
      r.push(Bi(n, s[n], l, a));
    }
    i = r.reverse().join();
  }
  return i;
}
function Bi(o, e, i, s = !1) {
  return i = b(i) ? i : "", `
  <input class="input tab-${o}" name="tabs" type="radio" id="tab-${o}" ${s ? 'checked="checked"' : ""}/>
  <label class="label tab-${o}" for="tab-${o}">${e}</label>
  <div class="panel tab-${o}">
    ${i}
  </div>
  `;
}
customElements.get("tradex-tabs") || window.customElements.define("tradex-tabs", ef);
class Yi extends li {
  static name = "ConfigDialogues";
  static type = "configDialogue";
  static class = "tradeXconfig";
  static defaultStyles = `
  /** default Config Dialogue widget styles */
  
  .tradeXwindow.config {
    /* overflow: hidden; */
    background: none;
  }

  .tradeXwindow.config .content {
    padding: 0;
    position: relative;
  }

  .tradeXwindow.config .buttons {
    background: #ffffffbb;
    display: flex;
    justify-content: flex-end;
    padding: 3px 1em;
    border-radius: 0 0 5px 5px;
  }

  .tradeXwindow.config .buttons input {
    margin-left: 5px;
    font-size: 1em;
    padding: 1px .5em;
  }

  ${qa} 

  .tradeXwindow.config .content tradex-colourpicker {
    position: absolute;
    display: none !important;
  }

  .tradeXwindow.config .content tradex-colourpicker.active {
    display: block !important;
  }
  `;
  static create(e, i) {
    return i.dragBar = !0, i.close = !0, i.type = Yi.type, i.class = "config", i.id = se("config"), new Yi(e, i);
  }
  static defaultNode() {
    return `
      <div slot="widget" class="tradeXconfig" style="">
      </div>
    `;
  }
  #e = !0;
  constructor(e, i) {
    super(e, i);
  }
  destroy() {
    super.destroy(), this.elColourPicker.destroy();
  }
  set update(e) {
    this.#e = !!e;
  }
  get update() {
    return this.#e;
  }
  configBuild(e = {}) {
    let { content: i, modifiers: s = {} } = this.configContent(e);
    const n = `
    <div class="tabbedContent">
      <form class="tabs">
        ${tf(i)}
      </form>
    </div>
    <tradex-colourpicker></tradex-colourpicker>
    `, { html: r, modifiers: a } = super.dialogueBuild(n);
    return s = { ...s, ...a }, { html: r, modifiers: s };
  }
  configContent(e) {
    if (!w(e))
      return "<p>Input missing!</p>";
    let i = {}, s = {};
    for (let n in e) {
      if (!w(e[n])) {
        this.core.error("ERROR: Building Config Dialogue : Input malformed");
        continue;
      }
      i[n] = "";
      for (let r in e[n]) {
        let a = e[n][r];
        if (io.includes(a?.type)) {
          let h = b(a?.entry) ? a?.entry : "";
          a.label = b(a?.label) ? a?.label : h || "", i[n] += ho(n, a);
        }
        const l = ["$function"];
        for (let h in a)
          if (l.includes(h))
            switch (h) {
              case "$function":
                O(a[h]) && (s[r] = a[h]);
                break;
            }
      }
    }
    return { content: i, modifiers: s };
  }
  contentUpdate(e) {
    return w(e) ? (b(e?.title) && this.setTitle(e.title), b(e?.content) && this.setContent(this.configBuild(e.content)), this.#e = !0, this.#e) : !1;
  }
  provideEventListener(e, i, s) {
    return (r) => {
      const a = r.querySelector(e);
      a && a.addEventListener(
        i,
        (l) => {
          s(l);
        }
      );
    };
  }
  provideInputColor(e, i) {
    const s = e.querySelector(i), n = document.createElement("tradex-colourinput");
    n.setTarget(s), n.style.display = "inline-block";
  }
}
class Ee {
  static progressList = {};
  static progressCnt = 0;
  static class = tr;
  static type = "progress";
  static name = "Progress";
  static icons = {
    loadingBars: jc,
    loadingSpin: Xc
  };
  static defaultNode() {
    return `
      <div slot="widget" class="${tr}" style=""></div>
    `;
  }
  static create(e, i) {
    const s = `progress_${++Ee.progressCnt}`;
    return i.id = s, Ee.progressList[s] = new Ee(e, i), Ee.progressList[s];
  }
  static destroy(e) {
    Ee.progressList[e].destroy(), delete Ee.progressList[e];
  }
  #e;
  #t;
  #i;
  #r;
  #s;
  #n;
  #o;
  #a;
  constructor(e, i) {
    this.#t = e, this.#i = i.core, this.#r = i, this.#e = i.id, this.#n = e.elements[Ee.type], this.#s = this.#i.elWidgetsG, this.init();
  }
  destroy() {
    this.#n.remove();
  }
  get type() {
    return Ee.type;
  }
  init() {
    this.mount(this.#n);
  }
  start() {
    if (!w(this.#i.config?.progress) || !w(this.#i.config.progress?.loading))
      return !1;
    this.#o.style.display = "block";
    const e = this.#i.elBody.width / 2 - this.#o.clientWidth / 2, i = this.#i.elBody.height / -2 - this.#o.clientHeight / 2;
    this.#o.style.top = `${i}px`, this.#o.style.left = `${e}px`;
  }
  stop() {
    this.#o.style.display = "none";
  }
  progressNode(e) {
    const i = "position: absolute; z-index: 1000; display: none; justify-content: center; align-items: center;", n = `<div class="content" style="">${e.icon}</div>`;
    return `
      <div id="${this.#r.id}" class="progress ${e.type}" style="${i}">${n}</div>
    `;
  }
  mount(e) {
    let i = "loadingBars";
    this.#r?.type in Ee.icons && (i = this.#r?.type);
    const s = { type: i, icon: Ee.icons[i] };
    e.lastElementChild == null ? e.innerHTML = this.progressNode(s) : e.lastElementChild.insertAdjacentHTML("afterend", this.progressNode(s)), this.#o = this.#n.querySelector(`#${this.#r.id}`), this.#a = this.#o.querySelector("svg"), this.#a.style.fill = `${Qc.COLOUR_ICONHOVER};`;
  }
}
const Ms = {
  id: "widgets",
  initial: "idle",
  context: {},
  states: {
    idle: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        menu_open: {
          target: "menu_open",
          action(o) {
          }
        },
        window_open: {
          target: "window_open",
          action(o) {
          }
        }
      }
    },
    menu_open: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        menu_close: {
          target: "idle",
          action(o) {
          }
        }
      }
    },
    window_open: {
      onEnter(o) {
      },
      onExit(o) {
      },
      on: {
        window_close: {
          target: "idle",
          action(o) {
          }
        }
      }
    }
  }
};
class sf extends dt {
  #e = "Widgets";
  #t = "widgets";
  #i;
  #r = { Divider: fe, Progress: Ee, Menu: ge, Window: ee, Dialogue: li, ConfigDialogue: Yi };
  #s = {};
  #n = {};
  #o;
  #a;
  #c;
  constructor(e, i) {
    super(e, i), this.#i = { ...this.#r, ...i.widgets }, this.#o = e.elWidgetsG, this.mount(this.#o);
    for (let s in this.#i) {
      let n = this.#i[s], r = `${n.type}`;
      this.#n[r] = this.#o.querySelector(`.${n.class}`), this.#n[r].innerHTML = `
      <style title="${n.type}">
        ${n?.defaultStyles || ""}
      </style>
      `, n.stylesInstalled = !0;
    }
  }
  get name() {
    return this.#e;
  }
  get shortName() {
    return this.#t;
  }
  get elements() {
    return this.#n;
  }
  get instances() {
    return this.#s;
  }
  get types() {
    return this.#i;
  }
  start() {
    this.eventsListen(), Ms.id = this.id, Ms.context = this, this.stateMachine = Ms, this.stateMachine.start();
  }
  destroy() {
    this.core.hub.expunge(this), this.stateMachine.destroy();
    for (let e in this.#s)
      this.delete(e);
    for (let e in this.#i)
      this.#i[e].destroy();
  }
  eventsListen() {
    this.on("resize", this.onResize, this), this.on("menu_open", this.onOpenMenu, this), this.on("menu_close", this.onCloseMenu, this), this.on("menu_off", this.onCloseMenu, this), this.on("menuItem_selected", this.onMenuItemSelected, this), this.on("global_resize", this.onResize, this);
  }
  onOpenMenu(e) {
    this.#s[e.menu].open();
  }
  onCloseMenu(e) {
    this.#s[e.menu].close();
  }
  onMenuItemSelected(e) {
    this.emit(e.evt, e.target);
  }
  onResize(e) {
    this.setDimensions(e), this.elements.divider.style.width = `${this.core.width}px`;
  }
  mount(e) {
    e.innerHTML = this.defaultNode();
  }
  setWidth(e) {
    this.#a = e;
  }
  setHeight(e) {
    this.#c = e;
  }
  setDimensions(e) {
    this.setWidth(e.mainW), this.setHeight(e.mainH);
  }
  defaultNode() {
    let e = "", i = [];
    for (let s in this.#i) {
      let n = this.#i[s];
      i.indexOf(n.type) === -1 && (e += n.defaultNode(), i.push(n.type));
    }
    return e;
  }
  insert(e, i) {
    if (!(e in this.#i) || !w(i))
      return !1;
    i.core = this.core;
    const s = this.#i[e].create(this, i);
    return this.#s[s.id] = s, s;
  }
  delete(e) {
    if (!b(e) || !(e in this.#s))
      return !1;
    const i = this.#s[e].type;
    return this.#i[i].destroy(e), !0;
  }
}
function Yr(o, e, i, s, n, r) {
  const a = o.theme, l = document.createElement("template"), h = o.Timeline.graph.viewport.scene, p = o.MainPane, f = p.graph.viewport.scene, g = p.width, C = p.height, S = new U.Viewport({
    width: g,
    height: C,
    container: l
  }), M = S.scene.context;
  let k = 0, ue = 0, we = g - o.Chart.scale.width;
  a?.yAxis?.location == "left" && (ue = o.Chart.scale.width, we = 0);
  let B;
  M.save(), Tn(M, 0, 0, g, C, { fill: a.chart.Background }), M.drawImage(f.canvas, ue, 0, f.width, f.height);
  for (const [L, de] of o.ChartPanes) {
    let Q = de.graph.viewport.scene, { width: pe, height: be } = Q, xe = de.scale.graph.viewport.scene, { width: pt, height: qe } = xe;
    k > 0 && (B = { stroke: a.divider.line }, ri(M, k, 0, p.width, B)), M.drawImage(Q.canvas, ue, k, pe, be), M.drawImage(xe.canvas, we, k - 1, pt, qe), k += be;
  }
  M.drawImage(h.canvas, 0, k, h.width, h.height), B = {
    text: o.config.title,
    colour: a.chart.TextColour,
    fontSize: a.chart.FontSize * 1.5,
    fontWeight: "normal",
    fontFamily: a.chart.FontFamily,
    textBaseLine: "top"
  }, Bo(M, 6, 6, B);
  const D = (L) => {
    if (L) {
      const Q = r?.x || 0, pe = r?.y || 0, be = r?.width || g * 0.25, xe = r?.height || C * 0.25;
      M.drawImage(L, Q, pe, be, xe);
    }
    M.restore();
    const de = () => {
      S.destroy(), l.remove();
    };
    switch (n) {
      case "url":
        if (O(e)) {
          const Q = (pe) => {
            e(pe), de();
          };
          S.scene.toImage(i, s, Q);
        } else
          new Promise(function(Q, pe) {
            const be = S.scene.toImage(i, s);
            be ? Q(be) : pe(!1), de();
          });
        break;
      case "download":
      default:
        S.scene.export({ fileName: e }, null, i, s), de();
        break;
    }
  };
  w(r) ? sn(r?.imgURL).then((L) => {
    D(L);
  }).catch((L) => {
    console.error(L);
  }) : D();
}
class N extends Km {
  static #e = Ln;
  static #t = 0;
  static #i = {};
  static #r = {};
  static #s = null;
  static #n = !1;
  static #o = [];
  static #a = null;
  static #c = null;
  static #l = !1;
  static get version() {
    return N.#e;
  }
  static get talibPromise() {
    return N.#s;
  }
  static get talibReady() {
    return N.#n;
  }
  static get talibAwait() {
    return N.#o;
  }
  static get talibError() {
    return N.#a;
  }
  static get webWorkers() {
    return Ks;
  }
  static get TALibWorker() {
    return N.#c;
  }
  static #h = `${Bt} requires "talib-web" to function properly. Without it, some features maybe missing or broken.`;
  static #p = [
    "TradeXchart",
    "Chart",
    "MainPane",
    "Secondary",
    "Primary",
    "ScaleBar",
    "Timeline",
    "ToolsBar",
    "UtilsBar",
    "Widgets"
  ];
  #u = Bt;
  #g = qt;
  #d;
  #f;
  #w;
  #E = !1;
  #y;
  #v = _;
  #m;
  #C;
  #T = Bp;
  #x = La;
  #P = { ...Di };
  #b = { ...Di };
  #S = { ...Di };
  #M;
  #L;
  #O;
  chartWMin = Xt;
  chartHMin = We;
  chartW_Reactive = !0;
  chartH_Reactive = !0;
  chartBGColour = $.COLOUR_BG;
  chartTxtColour = $.COLOUR_TXT;
  chartBorderColour = $.COLOUR_BORDER;
  #_;
  #$;
  #A = {
    chart: {},
    time: {}
  };
  #H;
  panes = {
    utils: this.#_,
    tools: this.#$,
    main: this.#A
  };
  #I = new Yt();
  destruction = !1;
  logs = !1;
  infos = !1;
  warnings = !1;
  errors = !1;
  timers = !1;
  #N = 0;
  #q = 0;
  #B = { x: 0, y: 0 };
  #G = [!1, !1, !1];
  #U;
  #z;
  #D;
  #V;
  #F;
  #W;
  #R = !1;
  #k = !1;
  static create(e) {
    let i = he($o);
    return w(e) && Object.keys(e).length > 0 && ((!("watermark" in e) || !b(e?.watermark?.text) && !("imgURL" in e?.watermark)) && (i.watermark = { display: !1 }), i = et(i, e)), N.#t == 0 && (N.#i.CPUCores = navigator.hardwareConcurrency, N.#i.api = {
      permittedClassNames: N.#p
    }), !N.#n && N.#a === null && O(i?.talib?.init) && (N.#s = i.talib.init(i.wasm), N.#s.then(
      () => {
        N.#n = !0;
        for (let s of N.#o)
          O(s) && s();
      },
      () => {
        N.#n = !1;
      }
    )), i;
  }
  static destroy(e) {
    if (!(e instanceof N))
      return !1;
    const i = e.inCnt;
    return e.destuction = !0, e.destroy(), delete N.#r[i], !0;
  }
  static cnt() {
    return N.#t++;
  }
  constructor() {
    super(), this.#d = this, this.#y = N.cnt(), this.logs = !1, this.infos = !1, this.warnings = !1, this.errors = !1, this.timers = !1, this.setID(null), this.#m = this.#v.create({ core: this }, !1, !1), console.warn(`!WARNING!: ${Bt} changes to config format, for details please refer to https://github.com/tradex-app/TradeX-chart/blob/master/docs/notices.md`), this.log(`${qt} instance count: ${this.inCnt}`), this.oncontextmenu = window.oncontextmenu, this.#z = Ks;
    const e = this.#P;
    e.primaryPane = { ...e.primaryPane, ...Da.primaryPane }, this.#b = { ...js };
  }
  log(...e) {
    this.logs && console.log(...e);
  }
  info(...e) {
    this.infos && console.info(...e);
  }
  warn(...e) {
    this.warnings && console.warn(...e);
  }
  error(e) {
    this.errors && console.error(e);
  }
  timer(e) {
    this.timers && console.time(e);
  }
  timeLog(e) {
    this.timers && console.timeLog(e);
  }
  timeEnd(e) {
    this.timers && console.timeEnd(e);
  }
  get version() {
    return N.version;
  }
  get name() {
    return this.#u;
  }
  get shortName() {
    return this.#g;
  }
  get options() {
    return this.#w;
  }
  get config() {
    return this.#f;
  }
  get core() {
    return this.#d;
  }
  get inCnt() {
    return this.#y;
  }
  get elUtils() {
    return super.elUtils;
  }
  get elTools() {
    return super.elTools;
  }
  get elBody() {
    return super.elBody;
  }
  get elMain() {
    return super.elMain;
  }
  get elTime() {
    return super.elTime;
  }
  get elYAxis() {
    return super.elYAxis;
  }
  get elWidgetsG() {
    return super.elWidgets;
  }
  get UtilsBar() {
    return this.#_;
  }
  get ToolsBar() {
    return this.#$;
  }
  get MainPane() {
    return this.#A;
  }
  get Timeline() {
    return this.#A.time;
  }
  get WidgetsG() {
    return this.#H;
  }
  get Chart() {
    return this.#A.chart;
  }
  get ChartPanes() {
    return this.#A.chartPanes;
  }
  get Indicators() {
    return this.#A.indicators;
  }
  get CustomOverlays() {
    return this.#S;
  }
  get ready() {
    return this.#E;
  }
  get state() {
    return this.#m;
  }
  get allData() {
    return {
      data: this.state.data.chart.data,
      primaryPane: this.state.data.secondary,
      secondaryPane: this.state.data.secondary,
      datasets: this.state.data.datasets
    };
  }
  get rangeLimit() {
    return T(this.#C.initialCnt) ? this.#C.initialCnt : Rl;
  }
  get range() {
    return this.#C;
  }
  get time() {
    return this.#I;
  }
  get timeData() {
    return this.#I;
  }
  get TimeUtils() {
    return uc;
  }
  get theme() {
    return this.#L;
  }
  get settings() {
    return this.state.data.chart.settings;
  }
  get indicatorClasses() {
    return this.#T;
  }
  get indicatorsPublic() {
    return this.#x;
  }
  get TALib() {
    return this.#M;
  }
  get TALibReady() {
    return N.talibReady;
  }
  get TALibError() {
    return N.talibError;
  }
  get talibAwait() {
    return N.talibAwait;
  }
  get TALibPromise() {
    return N.talibPromise;
  }
  get candleW() {
    return this.Timeline.candleW;
  }
  get candlesOnLayer() {
    return this.Timeline.candlesOnLayer;
  }
  get buffer() {
    return this.MainPane.buffer;
  }
  get bufferPx() {
    return this.MainPane.bufferPx;
  }
  set scrollPos(e) {
    this.setScrollPos(e);
  }
  get scrollPos() {
    return this.#N;
  }
  get smoothScrollOffset() {
    return 0;
  }
  get rangeScrollOffset() {
    return Math.floor(this.bufferPx / this.candleW);
  }
  get mousePos() {
    return this.#B;
  }
  get pointerButtons() {
    return this.#G;
  }
  set pricePrecision(e) {
    this.setPricePrecision(e);
  }
  get pricePrecision() {
    return this.#F;
  }
  get volumePrecision() {
    return this.#W;
  }
  set stream(e) {
    return this.setStream(e);
  }
  get stream() {
    return this.#D;
  }
  get worker() {
    return this.#z;
  }
  get isEmpty() {
    return this.#m.IsEmpty;
  }
  set candles(e) {
    w(e) && (this.#V = e);
  }
  get candles() {
    return this.#V;
  }
  get progress() {
    return this.#U;
  }
  get customOverlays() {
    return this.#S;
  }
  get optionalOverlays() {
    return et({ ...this.#b }, this.#S);
  }
  start(e) {
    this.log(`${Bt} configuring...`), this.#E && this.#A.destroy();
    const i = N.create(e);
    if (this.logs = i?.logs ? i.logs : !1, this.infos = i?.infos ? i.infos : !1, this.warnings = i?.warnings ? i.warnings : !1, this.errors = i?.errors ? i.errors : !1, this.timers = i?.timer ? i.timer : !1, this.#f = i, this.#y = i.cnt || this.#y, this.#M = i.talib, (!("theme" in i) || !w(i.theme)) && (i.theme = Zi), w(i))
      for (const g in i)
        g in this.props() && this.props()[g](i[g]);
    const s = this.id, n = b(i?.id) ? i.id : null;
    this.setID(n), this.classList.add(this.id), this.log("processing state...");
    let r = he(i?.state) || {};
    r.id = this.id, r.core = this;
    let a = i?.deepValidate || !1, l = i?.isCrypto || !1, { tf: h, ms: p } = ti(i?.timeFrame) ? _s(i.timeFrame) : {
      tf: yn,
      ms: si
    }, f = Date.now();
    if (f = f - f % p, !w(i?.range))
      i.range = {
        startTS: f,
        timeFrame: h,
        timeFrameMS: p
      };
    else {
      let g = i?.range;
      I(g.startTS) || (g.startTS = f), I(g.timeFrameMS) || (g.timeFrameMS = p), ti(g.timeFrame) != g.timeFrameMS && (g.timeFrame = wt(p));
    }
    if (r.range = { ...r.range, ...i.range }, this.#E) {
      const g = this.#v.create(r, a, l);
      this.#m.use(g.key), delete i.state, this.#A = new Xs(this, i), this.MainPane.start(), document.querySelector(`style[title="${s}_style"]`)?.remove(), this.insertAdjacentHTML("beforebegin", `<style title="${this.id}_style"></style>`), this.setTheme(this.#O.id), this.setUtilsLocation(this.theme?.utils?.location), this.elBody.setToolsLocation(this.theme?.tools?.location), this.log(`${this.name} id: ${this.id} : loaded a new ${this.state.status} state`);
    } else {
      i.watermark.display = !0, this.#m = this.#v.create(r, a, l), delete i.state, this.log(`${this.name} id: ${this.id} : created with a ${this.state.status} state`);
      let g = 0, C = this.#m.data.range.initialCnt, S = w(i?.range) ? i.range : {};
      S.interval = p, S.core = this, this.getRange(null, null, S), this.setRange(g, C), this.#H = new sf(this, { widgets: i?.widgets }), this.#_ = new Qm(this, i), this.#$ = new Ia(this, i), this.#A = new Xs(this, i), this.eventsListen(), this.elStart(this.theme), this.elBody.start(this.theme), this.UtilsBar.start(), this.ToolsBar.start(), this.MainPane.start(), this.WidgetsG.start(), this.#U = this.WidgetsG.insert("Progress", {});
    }
    this.insertAdjacentHTML("beforebegin", `<style title="${this.id}_style"></style>`), this.setTheme(this.#O.id), this.#N = this.bufferPx * -1, this.stream = this.#f.stream, !w(i?.stream) && this.state.data.chart.data.length < 2 ? this.warn(`${Bt} has no chart data or streaming provided.`) : w(i?.stream) && this.state.data.chart.data.length < 2 && (this.#R = !0), this.log(`Time Frame: ${this.#C.timeFrame} Milliseconds: ${this.#C.timeFrameMS}`), this.#R && this.on(Je, this.delayedSetRange, this), this.#f.callbacks = this.#f.callbacks || {}, this.#E = !0, this.refresh(), this.log(`${this.#u} V${N.version} configured and running...`);
  }
  use(e) {
    this.start(e);
  }
  destroy() {
    if (this?.destuction !== !0)
      return N.destroy(this), !0;
    this.log("...cleanup the mess"), this.removeEventListener("mousemove", this.onMouseMove), this.hub.expunge(this), this.UtilsBar.destroy(), this.ToolsBar.destroy(), this.MainPane.destroy(), this.WidgetsG.destroy(), this.#z.end(), this.#v = null;
  }
  eventsListen() {
    this.addEventListener("mousemove", this.onMouseMove.bind(this)), this.on(Je, this.onStreamUpdate, this), this.on("state_mergeComplete", () => this.#U.stop());
  }
  onMouseMove(e) {
    this.#B.x = e.clientX, this.#B.y = e.clientY;
  }
  onStreamUpdate(e) {
    const i = this.range;
    if (i.inRange(e[0])) {
      const s = i.valueMax, n = i.valueMin;
      (e[2] > s || e[3] < n) && (this.setRange(i.indexStart, i.indexEnd), this.emit("chart_yAxisRedraw", this.range));
    }
  }
  props() {
    return {
      width: (e) => this.setWidth(e),
      height: (e) => this.setHeight(e),
      widthMin: (e) => this.setWidthMin(e),
      heightMin: (e) => this.setHeightMin(e),
      widthMax: (e) => this.setWidthMax(e),
      heightMax: (e) => this.setHeightMax(e),
      logs: (e) => this.logs = F(e) ? e : !1,
      infos: (e) => this.infos = F(e) ? e : !1,
      warnings: (e) => this.warnings = F(e) ? e : !1,
      errors: (e) => this.errors = F(e) ? e : !1,
      indicators: (e) => this.setIndicators(e),
      theme: (e) => {
        this.#O = this.addTheme(e);
      },
      stream: (e) => this.#D = w(e) ? e : {},
      pricePrecision: (e) => this.setPricePrecision(e),
      volumePrecision: (e) => this.setVolumePrecision(e)
    };
  }
  getInCnt() {
    return this.#y;
  }
  setID(e) {
    b(e) ? this.id = e : this.id = `${se(qt)}_${this.#y}`;
  }
  setTitle(e) {
    this.Chart.setTitle(e);
  }
  setWatermark(e) {
    this.Chart.setWatermark(e);
  }
  setDimensions(e, i) {
    const s = super.setDimensions(e, i);
    this.emit("global_resize", s);
  }
  setUtilsH(e) {
    this.elUtils.style.height = `${e}px`;
  }
  setToolsW(e) {
    this.elTools.style.width = `${e}px`;
  }
  setPricePrecision(e) {
    (!T(e) || e < 0) && (e = Ul), this.#F = e;
  }
  setVolumePrecision(e) {
    (!T(e) || e < 0) && (e = zl), this.#W = e;
  }
  addTheme(e) {
    const i = De.create(e, this);
    return this.#L instanceof De || (this.#L = i), i;
  }
  setTheme(e) {
    if (!this.theme.list.has(e))
      return !1;
    this.#L.setTheme(e, this);
    const i = this.#L, s = document.querySelector(`style[title=${this.id}_style]`), n = `var(--txc-border-color, ${i.chart.BorderColour}`;
    let r = `.${this.id} { `;
    r += `--txc-background: ${i.chart.Background}; `, this.style.background = `var(--txc-background, ${i.chart.Background})`, this.style.border = `${i.chart.BorderThickness || 0}px solid`, this.style.borderColor = n, r += `--txc-border-color:  ${i.chart.BorderColour}; `, i.chart.BorderThickness > 0 ? this.elMain.rows.style.border = `1px solid ${n}` : this.elMain.rows.style.border = "none", r += `--txc-time-scrollbar-color: ${i.chart.BorderColour}; `, r += `--txc-time-handle-color: ${i.xAxis.handle}; `, r += `--txc-time-slider-color: ${i.xAxis.slider}; `, r += `--txc-time-cursor-fore: ${i.xAxis.colourCursor}; `, r += `--txc-time-cursor-back: ${i.xAxis.colourCursorBG}; `, r += `--txc-time-icon-color: ${i.icon.colour}; `, r += `--txc-time-icon-hover-color: ${i.icon.hover}; `, this.elTime.overview.scrollBar.style.borderColor = n, this.elTime.overview.handle.style.backgroundColor = `var(--txc-time-handle-color, ${i.xAxis.handle})`, this.elTime.overview.style.setProperty("--txc-time-slider-color", i.xAxis.slider), this.elTime.overview.style.setProperty("--txc-time-icon-color", i.icon.colour), this.elTime.overview.style.setProperty("--txc-time-icon-hover-color", i.icon.hover);
    for (let [a, l] of Object.entries(this.Chart.legend.list))
      l.el.style.color = `var(--txc-legend-color, ${i.legend.colour})`, l.el.style.font = `var(--txc-legend-font, ${i.legend.font})`;
    for (let a of this.elUtils.icons)
      a.className == "icon-wrapper" && (a.children[0].style.fill = i.icon.colour);
    for (let a of this.elTools.icons)
      a.className == "icon-wrapper" && (a.children[0].style.fill = i.icon.colour);
    return r += " }", s.innerHTML = r, !0;
  }
  setScrollPos(e) {
    e = Math.round(e), T(e) && e <= 0 && e >= this.bufferPx * -1 ? this.#N = e : this.emit("Error", "setScrollPos: not a valid value");
  }
  setState(e) {
    if (!_.has(e))
      return this.warn(`${this.name} id: ${this.id} : Specified state does not exist`), !1;
    if (e === this.#m.key)
      return !0;
    this.stream.stop(), this.MainPane.reset(), this.#m = _.get(e);
    const i = {
      interval: this.#m.data.chart.tfms,
      core: this
    };
    if (this.getRange(void 0, void 0, i), this.range.Length > 1) {
      const s = Gh(this.time), n = I(s) ? s + this.range.initialCnt : this.#m.data.chart.data.length - 1, r = I(s) ? s : n - this.range.initialCnt;
      this.range.initialCnt = n - r, this.setRange(r, n), this.config.range?.center && this.jumpToIndex(r, !0, !0);
    }
    this.MainPane.restart(), this.refresh();
  }
  createState(e, i, s) {
    return this.state.create(e, i, s);
  }
  deleteState(e) {
    return this.state.delete(e);
  }
  exportState(e = this.#m.key, i = {}) {
    return this.state.export(e, i);
  }
  setStream(e) {
    if (this.stream instanceof lt)
      return this.error("ERROR: Invoke stopStream() before starting a new one."), !1;
    if (w(e)) {
      if (this.allData.data.length == 0 && b(e.timeFrame)) {
        const { tf: i, ms: s } = _s(e?.timeFrame);
        this.range.interval = s, this.range.intervalStr = i, this.#I = new Yt(this.range);
      }
      return this.#D = new lt(this), this.#f.stream = this.#D.config, this.#D;
    }
  }
  stopStream() {
    this.stream instanceof lt && this.stream.stop();
  }
  delayedSetRange() {
    for (; this.#R; ) {
      let e = Math.floor(this.range.initialCnt * 0.5);
      this.setRange(e * -1, e), this.off(Je, this.delayedSetRange, this), this.#R = !1;
    }
  }
  updateRange(e) {
    if (!P(e) || !T(e[4]) || e[4] == 0 || e[4] < 0 && this.range.isPastLimit() || e[4] > 0 && this.range.isFutureLimit())
      return;
    let i, s;
    if (i = e[4], s = this.#N + i, s % this.candleW, s < this.bufferPx * -1) {
      if (!this.offsetRange(this.rangeScrollOffset * -1))
        return;
      s = 0;
    } else if (s > 0) {
      if (!this.offsetRange(this.rangeScrollOffset))
        return;
      s = this.bufferPx * -1;
    }
    this.#N = s, this.emit("scrollUpdate", s);
  }
  offsetRange(e) {
    let i = this.range.indexStart - e, s = this.range.indexEnd - e;
    return this.range.isPastLimit(i) || this.range.isFutureLimit(s) ? !1 : (this.setRange(i, s), !0);
  }
  getRange(e, i, s = {}) {
    this.#C = new zi(e, i, s), this.#I = new Yt(this.#C);
  }
  setRange(e = 0, i = this.rangeLimit) {
    const s = this.config?.maxCandles ? this.config.maxCandles : this.Chart?.layerWidth ? this.Chart.layerWidth : this.Chart.width;
    this.#C.set(e, i, s), e < 0 && !this.#k ? this.emit("range_limitPast", { chart: this, start: e, end: i }) : i > this.range.dataLength && !this.#k && this.emit("range_limitFuture", { chart: this, start: e, end: i });
  }
  jumpToIndex(e, i = !0, s = !0) {
    i && (e = R(e, 0, this.range.dataLength));
    let n = this.range.Length, r = e + n;
    s && (e -= n / 2, r -= n / 2), this.setRange(e, r);
  }
  jumpToTS(e, i = !0, s = !0) {
    let n = this.Timeline.xAxis.t2Index(e);
    this.jumpToIndex(n, i, s);
  }
  jumpToStart(e = !1) {
    this.jumpToIndex(0, !0, e);
  }
  jumpToEnd(e = !0) {
    let i = this.range.dataLength - this.range.Length;
    e && (i += Math.round(this.range.Length / 2)), this.jumpToIndex(i, !0, !1);
  }
  mergeData(e, i = !1, s = !1) {
    this.#k = !0;
    let n = this.state.mergeData(e, i, s);
    return F(n) && (this.#k = !1), n;
  }
  isOverlay(e) {
    return Jt(e) && O(e.prototype?.draw) && !this.isIndicator(e) && Object.getPrototypeOf(e.prototype).constructor.isOverlay;
  }
  hasOverlay(e) {
    const i = this.overlayEntries();
    return Object.keys(i).includes(e) ? i[e] : !1;
  }
  overlayKeys() {
    return Object.keys(this.overlayEntries());
  }
  overlayEntries() {
    const e = this.optionalOverlays;
    let i = {};
    for (let s in e)
      i = { ...i, ...e[s] };
    return i;
  }
  setCustomOverlays(e) {
    if (!w(e))
      return !1;
    const i = {};
    for (const [s, n] of Object.entries(e))
      w(n) && this.isOverlay(n?.class) && Object.keys(this.#S).includes(n?.location) ? (this.#S[n.location][s] = n, i[s] = !0, this.log(`Custom Overlay: ${s} - Registered`)) : (i[s] = !1, this.log(`Custom Overlay: ${s} - Rejected: Not a valid Overlay`));
    return i;
  }
  addOverlay(e, i) {
    let s;
    const n = this.findOverlayInGraph(e, i);
    if (!n)
      s = n;
    else {
      const { overlay: r, graph: a } = { ...n };
      s = a.addOverlay(e, r);
    }
    return s ? (this.log(`Overlay: ${e} - Added to ${i}`), !0) : (this.error(`Overlay: ${e} - Error attempting to add overlay to ${i}`), !1);
  }
  removeOverlay(e, i) {
    let s;
    const n = this.findOverlayInGraph(e, i);
    if (!n)
      s = n;
    else {
      const { overlay: r, graph: a } = { ...n };
      s = a.removeOverlay(e);
    }
    return s ? (this.log(`Overlay: ${e} - Removed from ${i}`), !0) : (this.error(`Overlay: ${e} - Error attempting to remove overlay from ${i}`), !1);
  }
  findGraph(e) {
    switch (e) {
      case "mainPane":
        return this.MainPane.graph;
      case "chartPane":
        return this.Chart.graph;
      case "chartScale":
        return this.Chart.scale.graph;
      case "timeLine":
        return this.Chart.time.graph;
      default:
        const i = Array.from(this.ChartPanes.keys());
        if (i.includes(e))
          return this.ChartPanes.get(e).graph;
        for (let s of i) {
          let n = this.ChartPanes.get(e).scale;
          if (n.id == e)
            return n.graph;
        }
        return !1;
    }
  }
  findOverlayInGraph(e, i) {
    if (!b(e) || !b(i))
      return !1;
    const s = this.hasOverlay(e);
    if (!s)
      return !1;
    const n = this.findGraph(i);
    return n ? { overlay: s, graph: n } : !1;
  }
  isIndicator(e) {
    return Jt(e) && O(e.prototype?.draw) && "primaryPane" in e.prototype && !!e?.isIndicator;
  }
  setIndicators(e, i = !1) {
    if (!w(e))
      return !1;
    i && (console.warn("Expunging all default indicators!"), this.#T = {});
    const s = {};
    for (const [n, r] of Object.entries(e))
      b(r?.id) && b(r?.name) && b(r?.event) && this.isIndicator(r?.ind) ? (r?.public && (this.#x[n] = r), this.#T[n] = r.ind, s[n] = !0, this.log(`Custom Indicator: ${n} - Registered`)) : (s[n] = !1, this.warn(`Custom Indicator: ${n} - Rejected: Not a valid indicator`));
    return s;
  }
  addIndicator(e, i = e, s = {}) {
    return this.#A.addIndicator(e, i, s) || this.error(`Indicator: ${e} - Error failed to add indicator`), e;
  }
  getIndicator(e) {
    return this.#A.getIndicator(e);
  }
  removeIndicator(e) {
    return this.#A.removeIndicator(e) || this.error(`Indicator: ${e} - Error failed to remove indicator`), e;
  }
  indicatorSettings(e, i) {
    return this.#A.indicatorSettings(e, i);
  }
  hasStateIndicator(e, i = "searchAll") {
    if (!b(e) || !b(i))
      return !1;
    const s = function(n, r) {
      for (let a of r)
        return a?.id == n || a?.name == n;
    };
    if (i == "searchAll") {
      for (let n of this.allData)
        if (s(e, n))
          return !0;
      return !1;
    } else if (i in this.allData)
      return s(e, d);
  }
  async calcAllIndicators(e) {
    const i = [], s = (n) => new Promise((r) => setTimeout(() => {
      r(n());
    }, 0));
    for (const [n, r] of Object.entries(this.Indicators))
      for (const [a, l] of Object.entries(r))
        i.push(l.instance.calcIndicatorHistory.bind(l.instance, e));
    await Promise.all(i.map(async (n) => {
      s(n);
    })), this.refresh();
  }
  addTrade(e) {
    return this.#v.addTrade(e);
  }
  removeTrade(e) {
    return this.#v.removeTrade(e);
  }
  addEvent(e) {
    return this.#v.addEvent(e);
  }
  removeEvent(e) {
    return this.#v.removeEvent(e);
  }
  resize(e, i) {
    return !T(e) && !T(i) ? !1 : (this.setDimensions(e, i), !0);
  }
  refresh() {
    this.ready && this.#A.refresh();
  }
  toImageURL(e, i, s, n) {
    return Yr(this, e, i, s, "url", n);
  }
  downloadImage(e = `${this.id}.png`, i, s, n) {
    Yr(this, e, i, s, "download", n);
  }
  notImplemented() {
    if (this.implemented)
      this.implemented.open();
    else {
      let i = {
        content: `
        This feature is not implemented yet.
      `,
        styles: {
          content: { padding: "1em" }
        }
      };
      this.implemented = this.#H.insert("Dialogue", i), this.implemented.start();
    }
  }
}
window.customElements.get("tradex-chart") || (document.head.insertAdjacentHTML("beforeend", su), document.head.insertAdjacentHTML("beforeend", nu), customElements.get("tradex-chart") || customElements.define("tradex-chart", N));
const nf = [
  "before",
  "after",
  "around",
  "afterReturning",
  "afterThrowing"
];
class Qs {
  static add(e, i) {
    return e instanceof Qs ? (Jt(i), new Proxy(i, {
      get: (n, r) => typeof n[r] == "function" ? Qs.intercept(e, n, r) : n[r]
    })) : !1;
  }
  static intercept(e, i, s) {
    const n = (r, a, l) => {
      let h = 0, p, f = l;
      for (let g of r)
        a == g.type && (h++, p = g.transfer ? f : l, p = g.type == "afterReturning" ? g.args : p, f = g.func.apply(i, p));
      return f = h > 0 ? f : void 0, f;
    };
    return function(...r) {
      const a = `${s}`, l = e.advice[a];
      if (!l)
        return i[s].apply(i, r);
      try {
        let h;
        if (h = n(l, "replace", r), h !== void 0)
          return h;
        h = n(l, "before", r), e.transfer && h !== void 0 && (r = h);
        const p = i[s].apply(i, r);
        return e.transfer && p !== void 0 && (r = p), h = n(l, "after", r), e.transfer && h !== void 0 && (r = p), h = n(l, "around", { args: r, result: p }), n(l, "afterReturning", r), h = h === void 0 ? p : h, h;
      } catch (h) {
        throw n(l, ["afterThrowing"], h), h;
      }
    };
  }
  constructor(e, i = !0) {
    this.name = e, this.advice = {}, this.transfer = i;
  }
  before(e, i, s, n) {
    this.#e(e, i, "before", s, n);
  }
  after(e, i, s, n) {
    this.#e(e, i, "after", s, n);
  }
  around(e, i, s, n) {
    this.#e(e, i, "around", s, n);
  }
  afterReturning(e, i, s, n) {
    this.#e(e, i, "afterReturning", s, n);
  }
  afterThrowing(e, i, s, n) {
    this.#e(e, i, "afterThrowing", s, n);
  }
  #e(e, i, s, n = !0, r = []) {
    return typeof e != "string" || typeof i != "function" || !Array.isArray(r) || nf.includes(e) ? !1 : (this.advice[e] = this.advice[e] || [], this.advice[e].push({ type: s, func: i, args: r, transfer: n }), !0);
  }
}
export {
  Qs as Aspect,
  N as Chart,
  of as DOM,
  zt as EventHub,
  le as Indicator,
  Bp as IndicatorClasses,
  W as Overlay,
  zi as Range,
  ss as StateMachine,
  V as canvas,
  he as copyDeep,
  Zr as isPromise,
  et as mergeDeep,
  cf as talibAPI,
  rf as typeChecks,
  se as uid,
  lf as utils
};
