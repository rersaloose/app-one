import { BlogService } from './../../../../services/blog.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BlogArticles } from './../../../../home/home-page/components/Model/Blog-Articles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  formValue!: FormGroup;
  blogObject: BlogArticles = new BlogArticles();
  blogData: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  constructor(
    private FormBuilder: FormBuilder,
    private BlogService: BlogService
  ) {}

  ngOnInit(): void {
    this.formValue = this.FormBuilder.group({
      Src: [''],
      tittle: [''],
      subTittle: [''],
      date: [''],
    });
    this.Getblog();
  }
  clickUser() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postBlog() {
    this.blogObject.src = this.formValue.value.Src;
    this.blogObject.tittle = this.formValue.value.tittle;
    this.blogObject.subTittle = this.formValue.value.subTittle;
    this.blogObject.date = this.formValue.value.date;

    this.BlogService.postBlog(this.blogObject).subscribe((e: any) => {
      alert('your blog is add');
      this.formValue.reset();
      var cancel = document.getElementById('cancel');
      cancel?.click();
      this.Getblog();
    });
  }

  Getblog() {
    this.BlogService.getBlog().subscribe((e: any) => {
      this.blogData = e;
    });
  }

  onEdit(blog: BlogArticles) {
    this.showUpdate = true;
    this.showAdd = false;
    this.blogObject.id = blog.id;
    this.formValue.controls['Src'].setValue(blog.src);
    this.formValue.controls['tittle'].setValue(blog.tittle);
    this.formValue.controls['saubTittle'].setValue(blog.subTittle);
    this.formValue.controls['date'].setValue(blog.date);
  }
  UPdateblog() {
    this.showUpdate = true;
    this.showAdd = false;
    this.blogObject.src = this.formValue.value.Src;
    this.blogObject.tittle = this.formValue.value.tittle;
    this.blogObject.subTittle = this.formValue.value.subTittle;
    this.blogObject.date = this.formValue.value.Date;
    this.BlogService.updatBlog(this.blogObject, this.blogObject.id).subscribe(
      (e: any) => {
        console.log(e);
        alert('UpDate Your Blog');
        var cancel = document.getElementById('cancel');
        cancel?.click();
        this.Getblog();
      }
    ); 
  }
  Deleteblog(blog: BlogArticles) {
    this.BlogService.deleteBlog(blog.id).subscribe((e: any) => {
      alert('Your Blog is Deleted');
      this.Getblog();
    });
  }
}
