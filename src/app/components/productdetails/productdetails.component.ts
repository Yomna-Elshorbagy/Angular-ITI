import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{
  singleProduct!: IProduct;
  constructor(private prodService: ProductsService,private route:ActivatedRoute, private router:Router){

  }
  ngOnInit(): void {
    let prodid=Number( this.route.snapshot.paramMap.get('id'))
    this.singleProduct= this.prodService.getProductById(prodid)!
    console.log(this.singleProduct)
  }
  goToProducts() {
    this.router.navigate(['/products']);
  }

}
