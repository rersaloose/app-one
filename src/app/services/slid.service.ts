import { Product } from './../home/home-page/components/Model/Products';


import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class SlidService {
  products:Product[]=[]
  constructor() {

  // this.products=[
  // new Product("assets/team-01.jpg"," Team-1","Ana-One"),
  // new Product("assets/team-02.jpg"," Team-2","Ana-Two"),
  // new Product("assets/team-03.jpg"," Team-3","Ana-Three"),
  // new Product("assets/team-04.jpg"," Team-4","Ana-Four"),
  // new Product("assets/team-05.png"," Team-5","Ana-Five"),
  // new Product("assets/team-06.png"," Team-6","Ana-six"),
  // new Product("assets/team-01.jpg"," Team-1","Ana-One"),
  // new Product("assets/team-02.jpg"," Team-2","Ana-Two"),
  // new Product("assets/team-03.jpg"," Team-3","Ana-Three"),
  // new Product("assets/team-04.jpg"," Team-4","Ana-Four"),
  // new Product("assets/team-05.png"," Team-5","Ana-Five"),
  // new Product("assets/team-06.png"," Team-6","Ana-six"),
  //     ];

   }
}
