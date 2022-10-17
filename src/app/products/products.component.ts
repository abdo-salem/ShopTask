import { Component, OnInit } from '@angular/core';
import products from '../../assets/data/porducts.json';

interface Product {
  ProductId: number;
  ProductName: string;
  ProductPrice: number;
  AvailablePieces: number;
  ProductImg: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productData: Product[] = products;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.productData);
  }
}
