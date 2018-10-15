import { Component, OnInit } from '@angular/core';
import { MainService } from '../main/main.service';
declare var Highcharts: any;

@Component({
    selector: 'column-chart',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
    enableBack=false;
    constructor(private mainService:MainService){

    }
    ngOnInit() {
        this.loadHighChart();
    }

    loadHighChart() {
        this.mainService.getData().subscribe(successData=>{
            console.log(successData);
        },errorData=>{
            console.log(errorData);
        })        
        this.drawHighChart();
    }

    drawHighChart(){
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
                text: 'Basic drilldown'
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
                name: 'Things',
                colorByPoint: true,
                data: [{
                    name: 'Animals',
                    y: 5,
                    drilldown: 'animals'
                }]
            }],
            drilldown: {
                series: [{
                    id: 'animals',
                    name: 'Animals',
                    data: [{
                        name: 'Cats',
                        y: 4,
                        drilldown: 'cats'
                    }, ['Dogs', 2],
                        ['Cows', 1],
                        ['Sheep', 2],
                        ['Pigs', 1]
                    ]
                }, {
    
                    id: 'cats',
                    data: [1, 2, 3]
                }]
            }
        };

        Highcharts.chart('container', chartOptions);
    }

    back(){
        this.loadHighChart();
    }
}
