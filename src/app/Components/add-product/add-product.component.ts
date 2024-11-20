import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
constructor(private productService: ProductService){}
onSubmit(form: NgForm) {
  if (form.valid) {
    const formData = { ...form.value };

    // Manually set the images field
    formData.images = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ];

    this.productService.CreateProduct(formData).subscribe(
      (response) => {
        console.log("Product Added successfully", response);
      },
      (error) => {
        console.error("Error occurred:", error);
      }
    );
  }
}

}
