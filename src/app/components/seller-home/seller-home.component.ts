import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/signup.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
 public productList: undefined | product[];
 constructor(private productservice: ProductService){}

 ngOnInit(): void {
   this.productservice.productList().subscribe((result => {
     this.productList = result;
   }))
 }
}
