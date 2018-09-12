import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';;
import { HttpClientModule } from '@angular/common/http'; 
import { NgHttpLoaderModule } from 'ng-http-loader'; 
import { SpinnerComponent } from './spinner-component/spinner.component';
import { MatSnackBarModule } from '@angular/material';
import { DialogComponent } from './dialog-component/dialog.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    NgHttpLoaderModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes,{}),
    NgxMaterialTimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    SpinnerComponent
  ]
})
export class AppModule { }
