import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }