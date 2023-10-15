import { i as createVNode, F as Fragment, s as spreadAttributes } from './astro.7b6fbd1f.mjs';
import '@astrojs/internal-helpers/path';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'slash';
import 'node:fs/promises';
import './pages/404.astro.1d69ba63.mjs';
import 'html-escaper';
import 'fs';
import 'path';
/* empty css                        */import 'zod';
/* empty css                                                             */import 'execa';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Currently event data can only be added to the chart via the <a href=\"../state\">initial data state provide via the config</a>. It will be in the near future be possible to add events via the API.</p>\n<h2 id=\"event-markers\">Event Markers</h2>\n<p>Event makers representing buy or sell, are placed on the primary chart pane, above the individual price history intervals (candles) they are associated with via their timestamp.</p>\n<p>EventX Chart provides a number of marker icon options. Their size and colour is also configurable. The <a href=\"../themes#events\">theming configuration</a> has more details.</p>\n<h2 id=\"event-entry\">Event Entry</h2>\n<p>An individual event entry has the following format:</p>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">event</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #B392F0\"> {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  timestamp</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F8F8F8\">1558605600000</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> </span><span style=\"color: #6B737C\">// number - time stamp</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  id</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"012336352\"</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\">          </span><span style=\"color: #6B737C\">// string - event id</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  title</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"Some Event\"</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\">      </span><span style=\"color: #6B737C\">// string</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  content</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"</span><span style=\"color: #BBBBBB\">,</span><span style=\"color: #B392F0\"> </span><span style=\"color: #6B737C\">// string (HTML)</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  url</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"https://www.coindesk.com/\"</span><span style=\"color: #B392F0\"> </span><span style=\"color: #6B737C\">// string - URL</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">}</span></span></code></pre>\n<h2 id=\"add-event\">Add Event</h2>\n<p>A single event can be added to the chart data state via the following:</p>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #79B8FF\">chart</span><span style=\"color: #B392F0\">.addEvent(event)</span></span></code></pre>\n<p>Where the <a href=\"#event-entry\">event entry object format</a> is defined in the previous section. <code>addEvent()</code> will validate the event entry and return a boolean as the result.</p>\n<h2 id=\"remove-event\">Remove Event</h2>\n<p>Not implemented yet.</p>\n<h2 id=\"event-state-data\">Event State Data</h2>\n<p>The <a href=\"../state\">chart State Data</a> provides a collection of all of the events that can be displayed on the chart. <a href=\"#event-entry\">Event entries (objects)</a> are grouped by timestamp in an array as it may be possible that multiple events may be executed on the same time interval (candle).</p>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">config</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #B392F0\"> {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">ohlcv</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> []</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">primary</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> []</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">secondary</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> []</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  events</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">    </span><span style=\"color: #F8F8F8\">1558666800000</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> [</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">      {            </span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">        timestamp</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F8F8F8\">1558666800000</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">        id</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"abc123\"</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">        title</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"Some Event\"</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">        content</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\"</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">        link</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #FFAB70\">\"https://www.coindesk.com/\"</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">      }</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">    ]</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  }</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">}</span></span></code></pre>\n<h2 id=\"event-marker-event\">Event Marker Event</h2>\n<p>By default, if a event marker is clicked, it will invoke the events overlay method which will display the event data over the chart.</p>\n<p>This can be disabled via the <a href=\"../../02_configuration\">chart config</a>.</p>\n<pre is:raw=\"\" class=\"astro-code min-dark\" style=\"background-color: #1f1f1f; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">const</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">config</span><span style=\"color: #B392F0\"> </span><span style=\"color: #F97583\">=</span><span style=\"color: #B392F0\"> {</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  events</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> { </span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">    display</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">true</span><span style=\"color: #BBBBBB\">,</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">    displayInfo</span><span style=\"color: #F97583\">:</span><span style=\"color: #B392F0\"> </span><span style=\"color: #79B8FF\">false</span><span style=\"color: #B392F0\"> </span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">  }</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">}</span></span></code></pre>\n<p>The chart emits a <code>event_selected</code> <a href=\"../../events\">event</a> which you can subscribe to and invoke your own method.</p>\n<p>The event will pass the information for that <a href=\"#event-entry\">event entry</a> to the subscribed event listener.</p>");

				const frontmatter = {"title":"Overlay News Events","description":"News Events data and markers"};
				const file = "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/src/content/docs/reference/overlays_news_events.md";
				const url = undefined;
				function rawContent() {
					return "\nCurrently event data can only be added to the chart via the [initial data state provide via the config](../state). It will be in the near future be possible to add events via the API.\n\n## Event Markers\n\nEvent makers representing buy or sell, are placed on the primary chart pane, above the individual price history intervals (candles) they are associated with via their timestamp.\n\nEventX Chart provides a number of marker icon options. Their size and colour is also configurable. The [theming configuration](../themes#events) has more details.\n\n## Event Entry\n\nAn individual event entry has the following format:\n\n```javascript\nconst event = {\n  timestamp: 1558605600000, // number - time stamp\n  id: \"012336352\",          // string - event id\n  title: \"Some Event\",      // string\n  content: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\", // string (HTML)\n  url: \"https://www.coindesk.com/\" // string - URL\n}\n```\n\n## Add Event\n\nA single event can be added to the chart data state via the following:\n\n```javascript\nchart.addEvent(event)\n```\nWhere the [event entry object format](#event-entry) is defined in the previous section. ``addEvent()`` will validate the event entry and return a boolean as the result.\n\n## Remove Event\n\nNot implemented yet.\n\n## Event State Data\n\nThe [chart State Data](../state) provides a collection of all of the events that can be displayed on the chart. [Event entries (objects)](#event-entry) are grouped by timestamp in an array as it may be possible that multiple events may be executed on the same time interval (candle).\n\n```javascript\nconst config = {\nohlcv: [],\nprimary: [],\nsecondary: [],\n  events: {\n    1558666800000: [\n      {            \n        timestamp: 1558666800000,\n        id: \"abc123\",\n        title: \"Some Event\",\n        content: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\n        link: \"https://www.coindesk.com/\"\n      }\n    ]\n  },\n}\n```\n## Event Marker Event\n\nBy default, if a event marker is clicked, it will invoke the events overlay method which will display the event data over the chart.\n\nThis can be disabled via the [chart config](../../02_configuration).\n\n```javascript\nconst config = {\n  events: { \n    display: true,\n    displayInfo: false \n  }\n}\n```\n\nThe chart emits a ``event_selected`` [event](../../events) which you can subscribe to and invoke your own method.\n\nThe event will pass the information for that [event entry](#event-entry) to the subscribed event listener.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"event-markers","text":"Event Markers"},{"depth":2,"slug":"event-entry","text":"Event Entry"},{"depth":2,"slug":"add-event","text":"Add Event"},{"depth":2,"slug":"remove-event","text":"Remove Event"},{"depth":2,"slug":"event-state-data","text":"Event State Data"},{"depth":2,"slug":"event-marker-event","text":"Event Marker Event"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };