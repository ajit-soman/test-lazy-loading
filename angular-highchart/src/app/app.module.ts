import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GaugeColumnComponent } from './gauge-column-chart/gauge.column.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ColumnComponent } from './column-chart/column.component';
import { ThreeDColumnComponent } from './threed.column.component/threed.column.component';
import { ActivityGaugeComponent } from './activity-gauge/activity.gauge.component';
import { StackGroupChartComponent } from './stack-group-chart/stack.group.chart.component';
import { HeatMapComponent } from './heat-map/heat.map.component';

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
  path: 'simple-gauge',
  component: GaugeColumnComponent
}, {
  path: 'basic-column',
  component: ColumnComponent
}, {
  path: 'three-d-column',
  component: ThreeDColumnComponent
},{
  path: 'activity-gauge',
  component: ActivityGaugeComponent
},{
  path: 'statck-group-chart',
  component: StackGroupChartComponent
},{
  path: 'heat-map',
  component: HeatMapComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GaugeColumnComponent,
    ColumnComponent,
    ThreeDColumnComponent,
    ActivityGaugeComponent,
    StackGroupChartComponent,
    HeatMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
