
import { Component, OnInit } from '@angular/core';
import { SlidService } from 'src/app/services/slid.service';


@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})

export class ProjectsCardComponent implements OnInit {
 product2:any=[];
  constructor(private slid:SlidService) {}

  ngOnInit(): void {
this.product2 = this.slid.products
console.log(this.product2)
  }

}
