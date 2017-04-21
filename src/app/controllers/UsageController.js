(function () {
    angular
        .module('app')
        .controller('UsageController', [ng-fusioncharts,
            UsageController
        ]);

    function UsageController() {
        var vm = this;

        // TODO: move data to the service
        vm.ramChartData = [{key: 'Memory', y: 768660}, { key: 'Cache', y: 367404}, {key: 'Swap', y: 41924 }];
        vm.storageChartData = [{key: 'System', y: 126560}, {key: 'Other', y: 224365 }];
		
		vm.dataSource = {
    "chart": {
      "caption": "Sales - 2015",
      "captionFontSize": "30",
      "captionFontBold": "0",
      "captionPadding": "18",
      "baseFontSize": "14",
      "baseFontColor": "#e0e4e6",
      "baseFont": "Roboto Slab",
      "subcaptionFontBold": "0",
      "outCnvBaseFontSize": "12",
      "canvasBgColor": "#000000",
      "showValues": "0",
      "numberPrefix": "$",
      "showBorder": "0",
      "showShadow": "0",
      "showHoverEffect": "1",
      "canvasBgAlpha": "0",
      "paletteColors": "#00AEF5, #4EE29B",
      "bgColor": "#293C47",
      "bgAlpha": "93",
      "showAlternateHGridColor": "0",
      "showCanvasBorder": "0",

      // line and anchor customizations
      "lineThickness": "4.5",
      "anchorRadius": "5",
      "anchorBorderThickness": "3",
      "anchorTrackingRadius": "18",

      // div line cosmetics
      "divlineAlpha": "50",
      "divlineColor": "#858585",
      "divlineThickness": "0.5",
      "divLineIsDashed": "0",
      "divLineGapLen": "2",

      // axes customizations
      "showXAxisLine": "1",
      "xAxisLineThickness": "1",
      "xAxisLineColor": "#cdcdcd",
      "xAxisNameFontColor": "#8d8d8d",
      "yAxisNameFontColor": "#8d8d8d",

      // legend customizations
      "legendBgAlpha": "0",
      "legendItemFontColor": "#e0e4e6",
      "legendBorderThickness": "0",
      "legendShadow": "0",
      "drawCustomLegendIcon": "1",
      "legendPadding": "20",
      "legendItemFontSize": "16",
      "legendItemFontBold": "0",

      // tool tip customizations
      "toolTipColor": "#e0e4e6",
      "toolTipBorderColor": "#e0e4e6",
      "toolTipBorderThickness": "1.73",
      "toolTipBgColor": "#000000",
      "toolTipBgAlpha": "70",
      "toolTipBorderRadius": "4",
      "toolTipPadding": "13",
      "plotToolText": "<div>$seriesname <br> $label: $dataValue</div>"

    },
    "categories": [{
      "category": [{
        "label": "Jan"
      }, {
        "label": "Feb"
      }, {
        "label": "Mar"
      }, {
        "label": "Apr"
      }, {
        "label": "May"
      }, {
        "label": "Jun"
      }, {
        "label": "Jul"
      }, {
        "label": "Aug"
      }, {
        "label": "Sep"
      }, {
        "label": "Oct"
      }, {
        "label": "Nov"
      }, {
        "label": "Dec"
      }]
    }],
    "dataset": [{
      "seriesname": "McDonalds",
      "lineAlpha": "55",
      "anchorBgColor": "#293C47",
      "data": [{
        "value": "12123"
      }, {
        "value": "8233"
      }, {
        "value": "25507"
      }, {
        "value": "9110"
      }, {
        "value": "13529"
      }, {
        "value": "6803"
      }, {
        "value": "19202"
      }, {
        "value": "13500"
      }, {
        "value": "16202"
      }, {
        "value": "19200"
      }, {
        "value": "6202"
      }, {
        "value": "10366"
      }]
    }, {
      "seriesname": "Burger King",
      "lineAlpha": "55",
      "anchorBgColor": "#293C47",
      "data": [{
        "value": "13400"
      }, {
        "value": "9800"
      }, {
        "value": "22800"
      }, {
        "value": "12400"
      }, {
        "value": "15800"
      }, {
        "value": "9800"
      }, {
        "value": "21800"
      }, {
        "value": "9310"
      }, {
        "value": "12362"
      }, {
        "value": "17230"
      }, {
        "value": "10202"
      }, {
        "value": "14366"
      }]
    }]
  };

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 130,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753', 'rgb(235, 235, 235)'],
                showLabels: false,
                showLegend: false,
                title: '83%',
                margin: { top: -10, left: -20, right: -20 }
            }
        };
    }
})();
