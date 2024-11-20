import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productApiUrl: string = 'https://api.escuelajs.co/api/v1/products';
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productApiUrl);
  }
  getProductById(id: string): Observable<Product>
  {
    return this.http.get<Product>(`${this.productApiUrl}/${id}`);
  }
  CreateProduct(product: Product): Observable<Product>
  {
    return this.http.post<Product>(this.productApiUrl, product);
  }
  UpdateProduct(id:number,product: Product): Observable<Product>
  {
    return this.http.put<Product>(`${this.productApiUrl}/${id}`, product);
  }
  deleteProduct(id: number): Observable<void>
  {
    return this.http.delete<void>(`${this.productApiUrl}/${id}`);
  }
}
