<div align="center">

[![Version](https://badgen.net/npm/v/tradex-chart)](https://www.npmjs.com/package/tradex-chart)
[![Size](https://badgen.net/bundlephobia/minzip/tradex-chart)](https://bundlephobia.com/result?p=tradex-chart)
[![LICENSE](https://badgen.net/github/license/tradex-app/tradex-chart)](LICENSE)
[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/tradex-app/TradeX-chart)
[![NPM](https://badgen.net/badge/icon/npm?icon=npm&label)](https://www.npmjs.com/package/tradex-chart)

</div>

# README

## WIP - under heavy development - NOT production ready

TradeX-chart is a trade chart written in plain (vanilla) JavaScript with **one** dependency only; use it with any framework or backend. Customize and theme the chart any way to match your website or app.

![](assets/EMA.png)

## Table of Contents

* [Demo](#demo)
* [Getting Started](#getting-started)
* [Documentation](/docs/documentation.md)
* [Features](#features)
* [License](/LICENSE)

## Demo

### [Live Demo](https://tradex-chart.guildmedia.net/)

## Getting Started

### Requirements

TradeX-chart targets browsers that support [ECMAScript 2022](https://www.ecma-international.org/wp-content/uploads/ECMA-262_13th_edition_june_2022.pdfhttps:/).

## Install

### NPM

```
npm install tradex-chart
```

### In Browser

```
<script src="tradex-chart.es.js"></script>
```

## How to Use

Minimal working example:

```javascript
<div id="myChartDiv"></div>

<script>

import {Chart, DOM} from 'tradex-chart'
import * as talib from "talib-web"

// minimal data state
let state = {
  "ohlcv": [
// [timestamp, open, high, low, close, volume]
    [1543579200000,4035.6,4072.78348726,3965,4055.6,2157.50135341],
    [1543582800000,4055.6,4100,4035,4059.1719252,1660.6115119],
    [1543586400000,4059.1,4076.6,4014.1,4060,1070.09946267],
    [1543590000000,4060.5,4060.5,3987.2,4049.2,1530.46774287],
    [1543593600000,4049.2,4092.7,4035,4089.6691106,922.84509291]
  ]
}

// minimal config
const config = {
  id: "TradeX_test",
  title: "BTC/USDT",
  width: 1000,
  height: 800,
  utils: {none: true},
  tools: {none: true},
  talib: talib,
  rangeLimit: 30,
}

const mount = document.getElementById('myChartDiv')
const chart = document.createElement("tradex-chart")

mount.appendChild(chart)
chart.start(config)

</script>
```

## Documentation

Documentation can be found under:
[Documentation](/docs/documentation.md)
[API](https://tradex-app.github.io/TradeX-chart/api/)

## Features

* Plain JavaScript with no framework dependencies
* WIP: All chart features and functions accessible via API
* Built in a modular manner
* Provides message, emit and subscribe methods
* State object defines chart configuration, on and off chart indicators
* Drawing tool overlays and can be imported or exported.
* Export chart to png, jpg, webp.
* Indicator calculation provided by [talib-web](https://https://anchegt.github.io/talib-web/) as a WebAssembly module.
* Supports multiple candle types:
  * solid
  * hollow
  * solid up, hollow down
  * hollow up, solid down
  * OHLC
  * area
  * line
* Chart pan / scroll via mouse or cursor keys

## Support

For the latest news on TradeX-chart, feedback, feature requests, and community, join us over on Discord.

[TradeX Discord](https://discord.gg/XnfZudwpfg)

## Contributing

* Fork the Project
* Create your Feature Branch (git checkout -b feature/AmazingFeature)
* Commit your Changes (git commit -m 'Add some AmazingFeature)
* Push to the Branch (git push origin feature/AmazingFeature)
* Open a Pull Request

Testing, bug reports and feature requests welcome

You can help speed up development by contributing with crypto or PayPal.

* BTC - bc1qtw2vffqusc3jznn42hykp4sxrjvapsnz8qdqhn
* ETH - 0xe258FA38D130bd6D068F625235CF336c8E16DA1D
* XMR - 48vqLhZUwm32porTqkXDHZCSKHv1mqkrkCirKrrGK57xD59vHxv7gH3LmBc1UTFqs12eNWLExHFfYMx5KwyGSH9zVskgqsQ
* LTC - LKgHqsk3Tc2Z3uqos1Jzcw3fakXpfvp85r
* DIA (ETH) - 0xe258FA38D130bd6D068F625235CF336c8E16DA1D
