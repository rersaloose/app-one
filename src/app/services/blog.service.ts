import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BlogArticles } from '../home/home-page/components/Model/Blog-Articles';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private http:HttpClient) { }
  postBlog(data:any){
    return this.http.post<any>(" http://localhost:3000/Articles",data)
    .pipe(map((res:any)=>{
        return res;
    }))

  }
getBlog():Observable<BlogArticles>{
  return this.http.get<BlogArticles[]>(" http://localhost:3000/Articles")
  .pipe(map((res:any)=>{
    return res;
  }))
}
 updatBlog(data:any,id:any){
  return this.http.put<any>(" http://localhost:3000/Articles/"+id,data)
  .pipe(map((res)=>{
    return res;
  }))
 }
 deleteBlog(id:any){
  return this.http.delete<any>(" http://localhost:3000/Articles/"+id)
  .pipe(map((res)=>{
    return res;
  }))
 }

}
