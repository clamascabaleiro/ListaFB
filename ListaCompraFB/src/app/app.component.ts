import { Component } from '@angular/core';
import {FireDBService} from './fire-db.service';
import { products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products = products;

  constructor(public dbApp: FireDBService) { }

  title = 'Minimal';

}
