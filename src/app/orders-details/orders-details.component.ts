import { Component, OnInit } from '@angular/core';
import orders from '../../assets/data/orders.json';
import products from '../../assets/data/porducts.json';
import users from '../../assets/data/users.json';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss'],
})
export class OrdersDetailsComponent implements OnInit {
  orderData: any[] = orders;
  productData: any[] = products;
  usersData: any[] = users;
  p: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    // add user data object to order object as prop
    this.orderData.map((order: any) => {
      order['user'] = this.usersData.find((obj) => obj.Id === order.UserId);
    });

    // add name and price for each product as props
    this.orderData.forEach((order) => {
      order.Products.map((prod: any) => {
        prod['name'] = this.productData.find(
          (obj) => obj.ProductId === prod.ProductId
        ).ProductName;
        prod['price'] = this.productData.find(
          (obj) => obj.ProductId === prod.ProductId
        ).ProductPrice;
      });
    });
  }

  //  table pagination
  onTableDataChange(event: any) {
    this.p = event;
    this.getAllData();
  }
}
