import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService]
})
export class DashboardComponent {

    constructor(private dashboardService: DashboardService, private spinner: SpinnerVisibilityService, private snackBar: MatSnackBar) {
        // this.getDummyData();
        // spinner.show();
        this.showSnackbar();
    }

    getDummyData() {
        this.dashboardService.getDummyData().subscribe(success => {
            console.log(success);
        }, error => {
            console.log(error);
        })
    }

    showSnackbar() {
        this.snackBar.open('My message string','', {
            panelClass: ['snack-bar-error-color'], 
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
        });
    }

    showSnackbar1() {
        this.snackBar.open('My message string','', {
            panelClass: ['snack-bar-success-color'], 
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
        });
    }


}