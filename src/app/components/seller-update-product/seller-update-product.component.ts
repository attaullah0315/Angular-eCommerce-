import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/signup.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit{
  public productData: undefined | product;
  public productMessage: undefined | string;

     constructor(private route: ActivatedRoute, private productservice: ProductService, private router: Router){}
     
     ngOnInit(): void {
       let productId = this.route.snapshot.paramMap.get('id');
       console.log(productId);

      productId && this.productservice.getProduct(productId).subscribe((data) =>{
        this.productData = data;
       }) 
     }

  updateProduct(data: product){
    if(this.productData){
       data.id = this.productData.id;
    }
   this.productservice.updateProduct(data).subscribe((result) =>{
   if(result){
    this.productMessage = 'product is updated';
    this.router.navigate(['/seller-home'])
   }
   })
  }
}
