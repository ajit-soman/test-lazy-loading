import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { SpinnerVisibilityService } from 'ng-http-loader';


@Component({
    selector:'app-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css'],
    providers:[DashboardService]
})
export class DashboardComponent{

    constructor(private dashboardService:DashboardService,private spinner: SpinnerVisibilityService){
        // this.getDummyData();
        spinner.show();
    }

    getDummyData(){
        this.dashboardService.getDummyData().subscribe(success=>{
            console.log(success);
        },error=>{
            console.log(error);
        })
    }

    
        
}