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
  p: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
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

  //  table pagination
  onTableDataChange(event: any) {
    this.p = event;
    this.getData();
  }
}
