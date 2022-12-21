import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/home/home-page/components/Model/Products';
import { ProService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  [x: string]: any;
  currntPid: number = 0;
  productId: Product = new Product();
  // prdIds:number[]=[]
  constructor(
    private ActivatedRouter: ActivatedRoute,
    private product: ProService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    //  this.currntPid = Number (this.ActivatedRouter.snapshot.paramMap.get('pid'))
    this.ActivatedRouter.paramMap.subscribe((e) => {
      console.log(e);
      this.currntPid = Number(e.get('pid'));
      this.product.getProductByid(this.currntPid).subscribe((e) => {
        this.productId = e;
      });
    
    });



  }

  Prev() {

    if (this.productId.id > 0) {
      var prevId = this.productId.id - 1;
      // console.log(prevId);
      // this.product.getProductByid(prevId)
      this.router.navigate(['/control/products/', prevId]);
    }
  }

  BACK() {
    // this.location.back()
    this.router.navigate(["/"])
  }

  Next() {
    var nextId = this.productId.id + 1;
    // this.product.getProductByid(nextId)
    this.router.navigate(['/control/products', nextId]);
    console.log(nextId);
  }
}
