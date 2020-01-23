import { Component } from '@angular/core';
import {Post} from './Posts/post.model';
import { defineBase } from '@angular/core/src/render3';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APDS PAGE';
Onsignout() {

}

  // storedOrders: [Order] = [];

  // onOrderCreated(order) {
  //   this.storedOrders.push(order);
  // }
}
