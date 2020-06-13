import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    //user = model.user
    //pass = model.pass
   // this.api.login(user,pass).suscribe(response=>{
     // localStorage.setItem("token",response['token']);
      localStorage.setItem("logueado","true");
      this.router.navigate(['legajos']);
   // },error=>{
   //   this.toastr.error("error, clave invalida","Error");
   // })
  }

}
