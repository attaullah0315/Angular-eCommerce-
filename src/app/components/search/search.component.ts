import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/signup.model';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   public searchData: undefined | product[];
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService){}

  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query')

    query && this.productService.searchProduct(query).subscribe((result) =>{
      this.searchData = result;
    })
  }

}
