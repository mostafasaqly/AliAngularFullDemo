import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
products: Product[] = [];
constructor(private productService: ProductService, private router:Router){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=> (this.products = data));
  }
  deleteProduct(id:number):void {
    this.productService.deleteProduct(id).subscribe(()=>{
      this.products = this.products.filter((p)=> p.id !== id);
    });
  }
  updateProduct(id:number, product:Product):void {
    this.router.navigate(['/update-product', id, product]);
  }

}
