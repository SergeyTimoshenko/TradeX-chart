const id = "reference/range.md";
						const collection = "docs";
						const slug = "reference/range";
						const body = "\nThe chart range determines what subset of price data is displayed to the user via a start and end bound.\n\n## Initial Range Config\n\nOn ``chart.start(config)`` the chart will look for a starting timestamp in the provided config. If none is found, it will default to displaying the latest price records (candles).\n\n```javascript\nconst config = {\n  range: {\n    // range starting timestamp, chart will display data from here\n    // if undefined, the range will position by default at the end of the price history ie. the most recent price records (candles)\n    startTS: 1543572000000,\n    // initial number of price records (candles) the chart will display\n    initialCnt: 40,\n    // maximum number of empty future price records (candles) the chart will display after the last candle\n    limitFuture: 200,\n    // maximum number of empty past price records (candles) the chart will display before the last candle\n    limitPast: 200,\n    // minimum number of price records (candles) the chart will display (minimum zoom)\n    minCandles: 20,\n    // padding top and bottom of price history (candles) and chart border so they don't touch\n    yAxisBounds: 0.3,\n    // center the chart on the startTS, ranter than place startTS on the left\n    center: true\n  }\n}\n```\n### startTS - center - initialCnt\n\nOn first starting ``chart.start()``, the chart will present the range, ``initialCnt`` the number of viewable price records (candles), starting from the start timestamp ``startTS``. If none is specified, the chart will present the last, most recent price history. ``center`` will place the ``startTS`` in the center of the chart.\n\n:::note\nAll timestamps must be in milliseconds!\n:::\n\n### minCandles\n\n``minCandles`` is the minimum number of price records (candles) that the chart will display. This is also the minimum zoom level. If not specified, the chart will use a default.\n\n### limitFuture - limitPast\n\nThese limits are the \"padding\" / \"empty\" candles at the end or start of the price data history. Say you have 1000 price records (candles) ``limitFuture`` and ``limitPast`` will then allow the chart to scroll, say for example, another 50 to the past, or future, depending upon what you define. If you add more data (merge) to the chart it doesn't matter, the padding is always present on either end no matter the dataset size. The chart will use defaults if neither are specified.\n\n### yAxisBounds\n\n``yAxisBounds`` determines the amount of padding between the chart border and the highest and lowest price records (candles). If ot specified a default will be used. This value is only used in automatic display mode, where the chart can only be scrolled / panned left or right In manual mode when the chart can be panned up, down, left or right, this value is ignored, until the display mode is reset to automatic again.\n\n## Set Range\n\n``setRange(start, end)`` expects price history data index values for ``start`` and ``end``. \n\nIt is more likely that you will want to reference your price data via timestamps. In that case [Jump to Timestamp](#jump-to-timestamp) ``jumpToTS(ts)`` is preferable.\n\n```javascript\nchart.setRange(start, end)\n```\n\n## Jump to Index\n\nPosition the chart display range on the specified data history index.\n\n``limited`` will limit the range start to in bounds values of the data history.\n``center`` will center the display range on the start value.\n\n```javascript\nchart.jumpToIndex(start, limited=true, center=true)\n```\n\n## Jump to Timestamp\n\nPosition the chart display range on the specified timestamp.\n\n``limited`` will limit the range start to in bounds values of the data history.\n``center`` will center the display range on the start value.\n\n```javascript\nchart.jumpToTS(ts, limited=true, center=true)\n```\n\n## Jump to Start\n\nPosition the chart display range on the earliest (first) data history value.\n\n``center`` will center the display range on the start value.\n\n```javascript\nchart.jumpToStart(center=false) \n```\n\n## Jump to End\n\nPosition the chart display range on the most recent (last) data history value.\n\n``center`` will center the display range on the start value.\n\n```javascript\nchart.jumpToEnd(center=true)\n```\n\n## Merge Data\n\nMerge any of the following data into the chart data:\n\n* Price history (candles)\n* Indicator data\n\n```javascript\nchart.mergeData(merge, newRange=false, calc=false)\n```\nRefer to [Merging Data Into the State](../state/#merging-data-into-the-state) for further information.\n\n# Range Instance\n\nThe range instance can be referenced from the root API.\n\n```javascript\nchart.range\n```\n\nIt provides several helper methods and status for handling the range, indexes and timestamps.\n\n## Value\n\nReturn the value (array) at price history index. If price history index, out of bounds will return null filled entry (array).\n\nIf the ``id`` is specified, then it will return the matching indicator data.\n\n```javascript\nchart.range.value (index, id)\n```\n\n## ValueByTS\n\n## Get Data By ID\n\n## Get Time Index\n\n## In Range\n\n## In Price History\n\n## In Render Range\n\n## Range Index\n\n## Snapshot\n\n# Range Exports\n\nTradeX Chart also exports it's internal Range module. \n\n```javascript\nimport { range } from \"tradex-chart\"\n```\n\nIncluded is a helper function you might find useful.\n\n## Detect Interval\n\nDetects candles interval from an array of ohlcv values (price history). It requires an minimum of two entries, otherwise it cannot make any comparison. The returned interval value is in milliseconds.\n\n```javascript\nimport { detectInterval } from \"tradex-chart\"\n\nconst history = [\n  [timestamp, open, high, low, close, volume],\n  [timestamp, open, high, low, close, volume],\n  [timestamp, open, high, low, close, volume],\n]\n// returns the interval in millisecons\nconst tfms = detectInterval(history)\n```\n\n";
						const data = {title:"Range",description:"Temporal subset of chart data displayed to the user",editUrl:true,head:[],template:"doc"};
						const _internal = {
							type: 'content',
							filePath: "/mnt/ext4/Home/neoarttec/Archives/Linux/Crypto/Trading/Mercury/MercuryTrader/component-module-tests/TradeX/tradex-chart/src/docs/src/content/docs/reference/range.md",
							rawData: "\ntitle: Range\ndescription: Temporal subset of chart data displayed to the user",
						};

export { _internal, body, collection, data, id, slug };