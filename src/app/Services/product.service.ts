import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  product(data: product){
   return this.http.post('http://localhost:3000/products', data)
  }

  productList(){
    return this.http.get<product[]>('http://localhost:3000/products')
  }
   
  deleteProduct(id: number){
   return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  getProduct(id: string){
   return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(product: product){
     return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)
  }

  popullarProduct(){
    return this.http.get<product>('http://localhost:3000/products?_limit-3')
  }

  trendyProduct(){
    return this.http.get<product>('http://localhost:3000/products?_limit-8')
  }

  searchProduct(query: string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)
  }
}
