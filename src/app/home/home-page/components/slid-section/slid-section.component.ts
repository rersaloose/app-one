import { Component, OnInit } from '@angular/core';
import { SlidService } from 'src/app/services/slid.service';
import { Product } from '../Model/Products';

@Component({
  selector: 'app-slid-section',
  templateUrl: './slid-section.component.html',
  styleUrls: ['./slid-section.component.css']
})
export class SlidSectionComponent implements OnInit {
  imgCollection:Array<Product> = []
  constructor(private slid:SlidService) { }
  imageObject:Array<object>=[]
  ngOnInit(): void {
    this.imgCollection=this.slid.products

    for (let index = 0; index < this.imgCollection.length; index++) {
      const element = this.imgCollection[index];
      this.imageObject.push({
        image: element.src,
        thumbImage: element.src,
        alt: element.subTittle,
        title: element.tittle
      })
    }
  }

}


