vite build && 
cp ./dist/tradex-chart.es.js ./demo &&
cp ./dist/tradex-chart.umd.js ../trading-simulator/node_modules/tradex-chart/dist &&
cp ./dist/tradex-chart.es.js ../trading-simulator/node_modules/tradex-chart/dist &&
cp ./dist/tradex-chart.es.js ./src/docs/public && 
cd ./src/docs/ &&
echo "OK" &&
npm run build