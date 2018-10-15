import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';
declare var Highcharts: any;

@Component({
    selector: 'stack-group-chart',
    templateUrl: './stack.group.chart.component.html',
    styleUrls: ['./stack.group.chart.component.css']
})
export class StackGroupChartComponent implements OnInit {

    constructor(private mainService: MainService) {

    }
    ngOnInit() {
        this.loadHighChart();
    }

    loadHighChart() {
        // this.mainService.getXmlData().subscribe(successData=>{
        //     console.log(successData);
        // },errorData=>{
        //     console.log(errorData);
        // })        
        this.drawHighChart();
    }

    drawHighChart() {
        Highcharts.chart('container', {

            chart: {
                type: 'column'
            },
        
            title: {
                text: 'Total fruit consumtion, grouped by gender'
            },
        
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
        
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },
        
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
        
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
        
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }]
        });
    }

}
