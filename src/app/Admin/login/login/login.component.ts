import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService:LoginService,private rout:Router) { }

  ngOnInit(): void {
  }
  login(){
    var email = (<HTMLInputElement>document.getElementById("email")).value
    var pass =(<HTMLInputElement>document.getElementById("pass")).value

    this.LoginService.login(email,pass).subscribe(e=>{
      if (e.status!=201) {
        alert("chick your email or password ")
      }
      else{
        var token=e.headers.get("Authorization")
        localStorage.setItem("token",token)
        this.rout.navigate(["/control"])
      }
    })
  }
}
