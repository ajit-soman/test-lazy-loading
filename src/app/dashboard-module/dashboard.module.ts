import { NgModule } from '@angular/core';
import { DashboardRouteModule } from './dashboard.route.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        DashboardRouteModule,
    ],
    declarations: [
        DashboardComponent
    ]

})
export class DashboardModule {

}