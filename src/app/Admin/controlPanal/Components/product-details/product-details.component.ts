import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/home/home-page/components/Model/Products';
import { ProService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
currntPid:number=0;
productId:Product= new Product()
  constructor(private ActivatedRouter:ActivatedRoute ,  private product:ProService) { }

  ngOnInit(): void {
     this.currntPid = Number (this.ActivatedRouter.snapshot.paramMap.get('pid'))
     console.log(this.currntPid)
     this.product.getProductByid(this.currntPid).subscribe(e=>{
      console.log(e)
      this.productId=e
     })
  }

}
