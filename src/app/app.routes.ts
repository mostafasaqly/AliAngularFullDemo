import { Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';

export const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'add-product', component: AddProductComponent},
  {path:'update-product/:id', component: UpdateProductComponent}

];
