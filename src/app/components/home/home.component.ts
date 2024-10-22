import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/signup.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public popularProducts: any;
  public trendyProducts: any;
  public value: any;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.popullarProduct().subscribe((data: product) =>{
      console.log(data, 'popularProducts');
      this.popularProducts = data;
    })
    this.productService.trendyProduct().subscribe((data: product) =>{
      this.trendyProducts = data;
    })
  }
}
  