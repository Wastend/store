import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product-services.service';
import { Iproduct } from './models/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'store';
  $categories: string[] = [];
  $products: Iproduct[] = [];

  constructor(
    private productServices: ProductService
  ){
    
  }
 
  ngOnInit(): void {
    this.productServices.getCategories().subscribe(categories => {
      
      this.$categories = categories || []; 
    })
    this.productServices.getProducts().subscribe(products => {
      
      this.$products = products || []; 
    })
  }
}
