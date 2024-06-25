import { Component, OnInit } from '@angular/core';
import { PopularProductsComponent } from '../../sections/popular-products/popular-products.component';
import { Iproduct } from '../../models/types';
import { ProductService } from '../../services/product-services.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [PopularProductsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  $products: Iproduct[] = [];

  constructor(
    private productServices: ProductService
  ){
    
  }
 
  ngOnInit(): void {
    const options = {
      params: new HttpParams().set('limit', '5')
    };
    this.productServices.getProducts(options).subscribe(products => {
      
      this.$products = products || []; 

      console.log(products);
      
    })
  }
}
