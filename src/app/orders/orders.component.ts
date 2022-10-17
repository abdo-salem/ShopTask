import { Component, OnInit } from '@angular/core';
import orders from '../../assets/data/orders.json';
import products from '../../assets/data/porducts.json';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orderData: any[] = orders;
  productData: any[] = products;
  prices: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getPrice();
  }

  getPrice() {
    this.orderData.forEach((order) => {
      let total = 0;
      order.Products.map((prod: any) => {
        prod['price'] = this.productData.find(
          (obj) => obj.ProductId === prod.ProductId
        ).ProductPrice;
        total += Math.floor(prod.price * prod.Quantity);
      });
      this.prices.push(total);
    });
  }
}
