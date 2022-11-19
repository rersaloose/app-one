import { Product } from '../Model/Products';
import { Component, OnInit } from '@angular/core';
import { ProService } from 'src/app/services/product.service';



@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.css']
})
export class SlidSectionComponent implements OnInit {
  imgCollection:Array<Product> = []
  constructor( private products:ProService )  {}
  imageObject:Array<object>=[]
  ngOnInit(): void {
    this.products.getProduct().subscribe(e=>{
      this.imgCollection=e
      for (let index = 0; index < this.imgCollection.length; index++) {
        const element = this.imgCollection[index];
        this.imageObject.push({
          image: element.src,
          thumbImage: element.src,
          alt: element.subTittle,
          title: element.tittle
        })
      }

    })


  }

}


