import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';
declare var Highcharts: any;

@Component({
    selector: 'column-chart',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
    enableBack = false;
    constructor(private mainService: MainService) {

    }
    ngOnInit() {
        this.loadHighChart();
    }

    loadHighChart() {
        this.mainService.getMoreData().subscribe(successData => {
            var yearData = [];
            var monthData = [];
            var dayData=[];
            successData.map(value => {
                yearData.push({
                    name: value.year,
                    y: value.avg,
                    drilldown: value.year.toString()
                })

                var monthTemp = {
                    id: value.year,
                    name: "Montly Avg",
                    data: []
                };
                value.data.map(v => {
                    var sum = v.data.reduce((a, b) => a + b, 0);
                    var avg = Math.round(sum * 100 / v.data.length) / 100;
                    var dayTemp = {
                        id: value.year+v.month,
                        data: v.data
                    };
                    monthTemp.data.push({
                        drilldown: monthTemp.id + v.month,
                        y: avg,
                        name: v.month
                    }) 
                    dayData.push(dayTemp);
                })
                monthData.push(monthTemp);
            });

            this.drawHighChart(yearData,monthData,dayData);
        }, errorData => {
            console.log(errorData);
        })
    }

    drawHighChart(yearColumnData,monthColumnData,dayColumnData) {
        let drillColumn = monthColumnData.concat(dayColumnData);
        this.enableBack = false;
        var self = this;
        var chartOptions = {
            chart: {
                type: 'column',
                events: {
                    drilldown: function (e) {
                        self.enableBack = true;
                    }
                }
            },
            title: {
                text: 'Average drilldown'
            },
            xAxis: {
                type: 'category'
            },

            legend: {
                enabled: false
            },

            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                    }
                }
            },

            series: [{
                name: 'Yearly Avg',
                colorByPoint: true,
                data: yearColumnData
            }],
            drilldown: {
                series: drillColumn
            }
        };

        Highcharts.chart('container', chartOptions);
    }

    back() {
        this.loadHighChart();
    }
}
