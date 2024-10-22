import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/models/signup.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menuType: string = 'defult';
  public sellerName : string = '';
  public serachProduct?: any;
   constructor(private router: Router, private productservice: ProductService){}

   ngOnInit(): void {
     this.router.events.subscribe((value: any) =>{
      if (value.url){
       if(localStorage.getItem('seller') && value.url.includes('seller')){
        this.menuType = 'seller';
        console.log('in seller area');
     if(localStorage.getItem('seller')){
       let storedSeller = localStorage.getItem('seller');
       let storeData = storedSeller && JSON.parse(storedSeller)[0];
       this.sellerName = storeData.name;
     }
      }else{
         this.menuType = 'defult' 
        console.log('out of seller')
       }
      }
     })
   }

   logOut(){
    localStorage.removeItem('seller')
    this.router.navigate(['/'])
   }

   serachProducts(query: KeyboardEvent){
    if(query){
     const element = query.target as HTMLInputElement;
     console.log(element.value);
     this.productservice.searchProduct(element.value).subscribe((result) =>{
      this.serachProduct = result;
     })
    }
   }

   searchHide(){
    this.serachProduct = undefined;
   }

   searchProduct(value: string){
      console.log(value)
      this.router.navigate([`search/${value}`])
   }
}
