import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products: any 
  constructor(private s: ProductserviceService) {}

  ngOnInit(): void { 
    this.Products = this.s.getProducts();  
  }
}
