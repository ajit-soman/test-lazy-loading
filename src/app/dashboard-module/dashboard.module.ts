import { NgModule } from '@angular/core';
import { DashboardRouteModule } from './dashboard.route.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material';

@NgModule({
    imports: [
        DashboardRouteModule,
        MatSidenavModule
    ],
    declarations: [
        DashboardComponent
    ]

})
export class DashboardModule {

}