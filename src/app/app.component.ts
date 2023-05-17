import { Component } from '@angular/core';
import { CrudService } from './services/crud.service';
import { ProductInterface } from './interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  viewPost = false;

}