import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
productForm:FormGroup;
constructor(private fb:FormBuilder, private productService: ProductService){
  this.productForm = this.fb.group({
    id : ['', Validators.required],
    title : ['', Validators.required],
    price: ['', [Validators.required, Validators.min(1)]],
    description: ['', Validators.required]
  });
}
onSubmit():void{
  const {id, ...product} = this.productForm.value;
  this.productService.UpdateProduct(id,product).subscribe((response)=>
  {
    console.log("Product Updated", response);

  });
}
}
