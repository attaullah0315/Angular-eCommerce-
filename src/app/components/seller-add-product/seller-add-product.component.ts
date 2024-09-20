import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { product } from '../../models/signup.model';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  public addProductMessage: string| undefined;

  constructor(private productservice: ProductService){}

  addProduct(data: product){
     this.productservice.product(data).subscribe((result)=>{
      if(result){
        this.addProductMessage = 'product successfully added';
        setTimeout(()=> (this.addProductMessage = undefined),5000)
      }
     })
  }

}
