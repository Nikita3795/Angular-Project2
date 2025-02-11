import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {


  constructor(private s : ProductserviceService , private activate : ActivatedRoute){}
   id : any
   product : any
  ngOnInit()
  {
     this.id = this.activate.snapshot.paramMap.get ('pid')
     this.product=this.s.getproductById(this.id)

  }

}
