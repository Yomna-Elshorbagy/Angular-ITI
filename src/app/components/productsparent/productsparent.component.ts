import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-productsparent',
  standalone: true,
  imports: [FormsModule, ProductsComponent],
  templateUrl: './productsparent.component.html',
  styleUrl: './productsparent.component.css'
})
export class ProductsparentComponent {
  filterproducts:string='';
  cart:IProduct[]=[]
 
  getCartItem(receivedProduct: IProduct) {
    // Check if the product is already in the cart
    const existingProduct = this.cart.find(p => p.id === receivedProduct.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...receivedProduct, quantity: 1 });
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }
}
