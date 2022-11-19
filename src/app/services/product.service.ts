


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../home/home-page/components/Model/Products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProService {

  constructor(private http:HttpClient) { }


  postProduct(data:Product){
    return this.http.post<any>("http://localhost:3000/products",data)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  getProduct(){
    return this.http.get<any>("http://localhost:3000/products")
    .pipe(map((res:any)=>{
      return res
    }))
  }
  updateProduct(data:Product,id: number){
    return this.http.put<any>("http://localhost:3000/products/"+id,data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  DeleteProduct(id:any){
    return this.http.delete<any>("http://localhost:3000/products/"+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }
}
