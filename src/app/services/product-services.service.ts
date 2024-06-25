import { Injectable } from "@angular/core";
import { Iproduct } from "../models/types";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private apiService: ApiService) {

  }

  getCategories(options?: object): Observable<string[]> {
    return this.apiService.get('https://fakestoreapi.com/products/categories', options)
  }

  getProducts(options?: object): Observable<Iproduct[]> {
    return this.apiService.get('https://fakestoreapi.com/products', options)
  }
}