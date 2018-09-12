import { NgModule } from '@angular/core';
import { DashboardRouteModule } from './dashboard.route.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule, MatDialogModule, MatRadioModule, MatInputModule, MatButtonModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { DialogComponent } from '../dialog-component/dialog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
    imports: [
        DashboardRouteModule,
        MatSidenavModule,
        MatDialogModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
        CommonModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMaterialTimepickerModule.forRoot()
    ],
    declarations: [
        DashboardComponent,
        DialogComponent
    ],
    entryComponents:[
        DialogComponent
    ]

})
export class DashboardModule {

}