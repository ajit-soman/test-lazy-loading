import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';
declare var Highcharts: any;

@Component({
    selector: 'gauge-column-chart',
    templateUrl: './gauge.column.component.html',
    styleUrls: ['./gauge.column.component.css']
})
export class GaugeColumnComponent implements OnInit {
    enableBack = false;
    constructor(private mainService: MainService) {

    }
    ngOnInit() {
        this.loadHighChart();
    }

    loadHighChart() {
        this.mainService.getData().subscribe(successData => {
            let septemberData = successData[8];
            // for gauge 
            let sum = 0, gaugeAvgData,columnxAxis = [],day=1;
            septemberData['data'].map(value => {
                columnxAxis.push(day);
                day++;
                sum = sum + value;
            })
            gaugeAvgData = sum / septemberData['data'].length;
            gaugeAvgData = Math.round(gaugeAvgData * 100) / 100;
            // !!!!!!!!!!!!! TITLE IN GAUGE !!!!!!!!!!!!!!
            // for column chart
            let columnData = {
                xAxis:columnxAxis,
                yAxis:septemberData['data']
            }

            this.drawHighChart(gaugeAvgData,columnData);
        }, errorData => {
            console.log(errorData);
        })
    }

    drawHighChart(gaugeAvgData,columnData) {
        console.log(columnData)
        this.enableBack = false;
        var self = this;
        // Create the chart
        var columnOptions,
            gaugeOptions;

        columnOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly values'
            },
            subtitle: {
                text: 'September'
            },
            xAxis: {
                categories: columnData.xAxis,
                // crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'values'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
            },
            series: [{
                name: 'Availability',
                data: columnData.yAxis

            }]
        };

        gaugeOptions = {
            chart: {
                type: 'solidgauge'
            },

            title: "Average of september",

            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },

            series: [{
                name: 'Speed',
                data: [gaugeAvgData],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                        '<span style="font-size:12px;color:silver">Avg</span></div>'
                },
                tooltip: {
                    valueSuffix: ' Avg'
                }
            }],
            tooltip: {
                enabled: false
            },

            // the value axis
            yAxis: {
                stops: [
                    [0, 'red'], // green
                    [50, 'orange'], // yellow
                    [100, 'green'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70,
                    text: 'Avg'
                },
                min: 0,
                max: 100,
                labels: {
                    y: 16
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                },
                series: {
                    point: {
                        events: {
                            click: function () {
                                var chart = this.series.chart;

                                chart.destroy();

                                Highcharts.chart('container', columnOptions);
                                self.enableBack = true;
                            }
                        }
                    }
                }
            }
        };

        Highcharts.chart('container', gaugeOptions);
    }

    back() {
        this.loadHighChart();
    }
}
