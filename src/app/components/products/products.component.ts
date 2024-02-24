import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { Store } from '../../models/store';
import { IProduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { CreditcardPipe } from '../../pipes/creditcard.pipe';
import { ProductsService } from '../services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf, ProductCardDirective, CreditcardPipe, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  shadowBorde :object={
    border:'2px solid blue',
    boxShadow:'10px 10px 10px 10px #aaaaaa' ,
    borderRadius: '20px'
  }
  // defaultshadow : string='10px 10px 10px 10px red'  

  store1:Store= new Store ('Daily-Dress',['CairoBranch', 'TantaBranch'], '../assets/image2.webp')

  ClientName: string ='Yomna'
  PurchasedDay= new Date
  IsPurshased: boolean = true
  Isdiv : boolean = false;
  creditcarddata:string='1234567892589631'


  product1:IProduct={
    id : 123,
    name : 'Coat',
    quantity: 2,
    price: 3500,
    image: '../assets/logo3.jpg',
    categoryId:45698,
    category: 'cloth'
  }

  products!:IProduct[];
  // prodeServi:ProductsService;

  constructor( private prodeServi:ProductsService){
  //  this.prodeServi=new ProductsService()
   }

   ngOnInit(): void {
    this.products=this.prodeServi.getAllProduct()
    // this.prodeServi.getAllProductbyMyIP().subscribe({
    //   next:(data)=>{console.log(data)}
      
    // })
    this.filterproduct = this.products;
   }


  filterproduct: IProduct[] = [];
  selectedCategory: string = '';

  @Input() set filterproducts(value: string) {
    this.filterproduct = this.filterselectedproduct(value);
  }

  filterselectedproduct(value: string): IProduct[] {
    return value === '' ? this.products : this.products.filter((product: IProduct) => 
   product.category === value);
  }
   
  filterSearchProduct(value:string): IProduct[]{
    return this.products.filter((product: IProduct)=>
    product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
  }
    set listFilteredValue(value:string){
    this.filterproduct=this.filterSearchProduct(value)
  }

  @Output() addchildEvent:EventEmitter<IProduct>=new EventEmitter<IProduct>()



   // quantity 
decreaseQuantity(product: IProduct) {
  if (product.quantity > 0) {
    product.quantity--;

    if (product.quantity === 0) {
      this.filterproduct = this.filterproduct.filter(p => p.id !== product.id);
    }
  }
}

   toggleImage(){

    this.IsPurshased= ! this.IsPurshased   
    this.Isdiv= ! this.Isdiv   
   }

   addToCart(prod:IProduct){
    this.addchildEvent.emit(prod)
   }
}
