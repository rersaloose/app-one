import { Component, OnInit } from '@angular/core';
import { BlogArticles } from '../Model/Blog-Articles';
import { BlogService } from './../../../../services/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  blogObject:BlogArticles[]=[];
  constructor( private BlogService:BlogService) { }

  ngOnInit(): void {
    this.BlogService.getBlog().subscribe((e:any)=>{
      this.blogObject=e
  })

}
}