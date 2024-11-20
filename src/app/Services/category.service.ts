import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private CategoryApiUrl: string='https://api.escuelajs.co/api/v1/categories';
  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>
  {
    return this.http.get<Category[]>(this.CategoryApiUrl);
  }
  CeateCategory(category:Category):Observable<Category>
  {
    return this.http.post<Category>(this.CategoryApiUrl, category);
  }
}
