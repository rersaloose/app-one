
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  basurl=environment.baseURL
  constructor(private http:HttpClient) { }
  login(email:string,password:string):Observable<any>{
    var headers= new HttpHeaders();
    headers.append("Access-Control-Allow-Origin","*")
    return this.http.post(`${this.basurl}/auth/tokens`,{"Email":email,"Password":password},{ headers:headers,observe:"response"})
  }
}

