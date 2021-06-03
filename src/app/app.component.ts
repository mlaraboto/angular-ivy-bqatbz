import { Component, VERSION } from '@angular/core';
import sampleData from './data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  Users: any = sampleData;
}
