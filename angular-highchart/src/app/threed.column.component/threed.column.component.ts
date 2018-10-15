import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';
declare var Highcharts: any;

@Component({
    selector: 'threed-column-chart',
    templateUrl: './threed.column.component.html',
    styleUrls: ['./threed.column.component.css']
})
export class ThreeDColumnComponent implements OnInit {

    constructor(private mainService: MainService) {

    }
    ngOnInit() {
        this.loadHighChart();
    }

    loadHighChart() {
        this.mainService.getData().subscribe(successData => {
            console.log(successData);
            var months = [], day1to115 = [], day15to30 = [];
            successData.map(value => {
                months.push(value.month);
                let data1 = value.data;
                let data2 = value.data.splice(0, 15);
                var data2Avg = Math.round(data2.reduce((a, b) => a + b, 0) / data2.length) * 100 / 100;
                var data1Avg = Math.round(data1.reduce((a, b) => a + b, 0) / data1.length) * 100 / 100;
                day15to30.push(data1Avg);
                day1to115.push(data2Avg);
            })

            var dayData = [{
                name: 'Day 1-15',
                data: day1to115,
                stack: 'male'
            }, {
                name: 'Day 15-30',
                data: day15to30,
                stack: 'male'
            }]
            console.log(months, dayData);
            this.drawHighChart(months, dayData);
        }, errorData => {
            console.log(errorData);
        })
    }

    drawHighChart(monthData, dayData) {

        Highcharts.chart('container', {
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    viewDistance: 25,
                    depth: 40
                }
            },

            title: {
                text: 'Total fruit consumption, grouped by gender'
            },

            xAxis: {
                categories: monthData,
                labels: {
                    skew3d: true,
                    style: {
                        fontSize: '16px'
                    }
                }
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits',
                    skew3d: true
                }
            },

            tooltip: {
                headerFormat: '<b>{point.key}</b><br>',
                pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
            },

            plotOptions: {
                column: {
                    stacking: 'normal',
                    depth: 40
                }
            },

            series: dayData
        });
    }

}
