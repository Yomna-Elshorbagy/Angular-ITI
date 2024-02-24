import { Injectable } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insertproduct } from '../../models/insertproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // createnewproduct(product2: Insertproduct) {
  //   throw new Error('Method not implemented.');
  // }

 private products:IProduct[] =[   
    {
      'id': 10,
      'name': "SanDisk SSD PLUS 1TB Internal Monitor SSD - SATA III 6 Gb/s",
      'price': 109,
      "category": "electronics",
      'categoryId': 3,
       'quantity': 1,
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
      
      },
      {
      "id": 11,
      "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Boost SATA III 2.5",
      "price": 109,
      "category": "electronics",
      'categoryId': 3,
      'quantity': 0,
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"

      },
 
      {
      "id": 13,
      "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "category": "electronics",
      'categoryId': 3,
      'quantity': 3,
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"

      },
      {
      "id": 14,
      "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Mnitor Screen ",
      "price": 999.99,
      "category": "electronics",
      'categoryId': 3,
      'quantity': 0,
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
 
      },
      {
      "id": 15,
      "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 3,
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
 
      },
      {
      "id": 16,
      "name": "Lock and Love Women's Removable Hooded Leather Moto Jacket",
      "price": 29.95,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 4,
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
  
      },
      {
      "id": 17,
      "name": "Rain Jacket Windbreaker Striped Climbing Raincoats",
      "price": 900,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 3,
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
 
      },
      {
      "id": 18,
      "name": "MBJ Women's Solid Short Sleeve Striped Boat Neck V ",
      "price": 600,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 25,
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"

      },
      {
      "id": 19,
      "name": "Opna Women's Short Sleeve Moisture Striped  Neck V",
      "price": 800,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 30,
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
 
      },
      {
      "id": 20,
      "name": "DANVOUY Womens T Shirt Casual Cotton Striped Short",
      "price": 1500,
      "category": "women's clothing",
      'categoryId': 3,
      'quantity': 8,
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" 
      },
        {
        "id": 2,
        "name": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "category": "men's clothing",
        'categoryId': 3,
        'quantity': 8,
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
        {
        "id": 3,
        "name": "Mens Cotton Jacket",
        "price": 55.99,
        "category": "men's clothing",
        'categoryId': 3,
        'quantity': 8,
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",

        },
        {
        "id": 4,
        "name": "Mens Casual Slim Fit",
        "price": 15.99,
        "category": "men's clothing",
        'categoryId': 3,
        'quantity': 8,
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

        },

        {
          "id": 1,
          "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "category": "men's clothing",
          'categoryId': 3,
          'quantity': 8,
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          },
          {
            "id": 6,
            "name": "Solid Gold Petite Micropave ",
            "price": 168,
            "category": "jewelery",
            'categoryId': 3,
            'quantity': 8,
            "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            },
            {
            "id": 7,
            "name": "White Gold Plated Princess",
            "price": 9.99,
            "category": "jewelery",
            'categoryId': 3,
            'quantity': 8,
            "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            },
  ];

  constructor(private http: HttpClient) { }
  // get all products 
  getAllProduct(): IProduct[] {
    return this.products;
  }
  getAllProductbyMyIP(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/insertproduct`);
  }

  //get product id
  getProductById(prodId: number): IProduct | undefined {
    return this.products.find((product) => product.id == prodId);
  }
  //get by categoryid
  getProductByCatId(catId: number): IProduct | undefined {
    return this.products.find((product) => product.categoryId == catId);
  }
}
