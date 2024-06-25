import { Component, Input } from '@angular/core';
import { Iproduct } from '../../models/types';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css'
})
export class PopularProductsComponent {
  @Input() products: Iproduct[] = []
}
