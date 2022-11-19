
import { Component, OnInit } from '@angular/core';
import { ProService } from 'src/app/services/product.service';



@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})

export class ProjectsCardComponent implements OnInit {
 product2:any=[];
  constructor(private product:ProService) {}

  ngOnInit(): void {
 this.product.getProduct().subscribe((e:any)=>{
this.product2=e
})
console.log(this.product2)
  }

}
