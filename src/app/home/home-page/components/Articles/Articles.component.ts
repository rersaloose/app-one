import { BlogService } from './../../../../services/blog.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
blogObject=[]
  constructor(private BlogService:BlogService) { }
  ngOnInit(): void {
  this.BlogService.getBlog().subscribe((e:any)=>{
    this.blogObject=e
    console.log(e)
  })
  }

}
