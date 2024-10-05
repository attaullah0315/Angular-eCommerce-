import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/signup.model';
import { ProductService } from 'src/app/Services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
 public productList: any | product[];
 public productMessage: undefined | string;
 public deleteIcon = faTrash;
 public updateIcon = faEdit;

 constructor(private productservice: ProductService){}

 ngOnInit(): void {
  this.productTable();
 }

 deleteProduct(id: number){
    console.log(id)
    this.productservice.deleteProduct(id).subscribe((result) =>{
      if(result){
        this.productMessage = 'product is deleted'
      }
      this.productTable();
    })
     
    setTimeout(() =>(
       this.productMessage = undefined
    ), 3000)
    
 }

 productTable(){
  this.productservice.productList().subscribe((result => {
     this.productList = result;
   }))
 }
}
