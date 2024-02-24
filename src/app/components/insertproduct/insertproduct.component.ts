import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../services/products.service';
import { Insertproduct } from '../../models/insertproduct';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InsertproductsService } from '../services/insertproducts.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insertproduct',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './insertproduct.component.html',
  styleUrl: './insertproduct.component.css'
})
export class InsertproductComponent implements OnInit{
  // constructor(private http: HttpClient) { }

  // getAllProductbyMyIP(): Observable<any[]> {
  //   return this.http.get<any[]>(`http://localhost:3000/products`);
  // }
  product2:Insertproduct={
    // name: "aaa",
    // price: 25,
    // category: "sss",
    // id: 1
  } as Insertproduct

  insertproduct!:Insertproduct[];

  constructor( private router:Router, private iprod:InsertproductsService, private route:ActivatedRoute){
    this.insertproduct=[
    {
      'id': '10',
      'name': "SanDisk SSD PLUS 1TB Internal Monitor SSD - SATA III 6 Gb/s",
      'price': 109,
      "category": "electronics",
      
      },
      {
      "id": '11',
      "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Boost SATA III 2.5",
      "price": 109,
      "category": "electronics",

      },
 
      {
      "id": '13',
      "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "category": "electronics",

      },
 
    ]
  }
    //  ngOnInit(): void {
    //   this.prodeServi.getAllProductbyMyIP().subscribe({
    //     next:(data)=>{console.log(data)}
        
    //   })
    //  }

    addproduct(){
      this.iprod.createnewproduct(this.product2).subscribe({
        next:(data)=>{
          console.log(data)
          this.router.navigate(['/order'])
        }
      
      })
    }
    insertprod():void{
      this.iprod.createnewproduct(this.product2).subscribe((data)=>{
          console.log(data)
          this.router.navigate(['/order'])

      
      })
    }

    deleteprod(id:string){
      this.iprod.deletepro(id).subscribe({
        next:(data)=>{
          console.log(data)
          this.router.navigate(['/order'])
        }
      })
    }

    ngOnInit(): void {
      this.iprod.getall().subscribe({
        next:(data)=>{
          console.log(data)
          this.insertproduct=data
        }
    })

    // let prodid=Number( this.route.snapshot.paramMap.get('id'))
    // this.insertproduct= this.iprod.getProById(prodid)!

  //   this.route.paramMap.subscribe((params)=>{
  //     let id= Number(params.get('id'))
  //     this.getProById(id)
  //   })
  // }
  //   getProById(id:number){
  //   this.iprod.edit(id).subscribe((data)=>{
  //    this.product2=data
  //    console.log(data)
  //   })
   
    }


  
    // deleteitem(id:number){
    //   this.iprod.delete(id).subscribe((data)=>{
    //     this.insertproduct= this.insertproduct.filter(_ => _.id != id)
    //   })

    // }


      // deleteProduct(id:Number){
      //   this.iprod.deleteProduct(this.product2).subscribe({
      //     next:(data)=>{
      //       console.log(data)
      //     }
      //   })
      // }
       
}
