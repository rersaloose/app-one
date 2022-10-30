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

  ngOnInit(): void {
    this.imgCollection=this.slid.products
  }

}


