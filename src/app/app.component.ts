import { Component } from '@angular/core';
import { SpinnerComponent } from './spinner-component/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spinner = SpinnerComponent;

}
