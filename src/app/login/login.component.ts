import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any = {'username':"",password:""};

  constructor(
    private router:Router,
    private toastr:ToastrService,
    private api: ApiService
    ) { }

  ngOnInit(): void {
    localStorage.setItem("logueado","false");
  }

  login(){
   // console.log(this.model);
    //user = model.user
    //pass = model.pass
   this.api.login(this.model.username,this.model.password).subscribe(
     response=>{
        //localStorage.setItem("token",response['token']);
        console.log(response);
        localStorage.setItem("logueado","true");
        this.router.navigate(['/pages/legajos']);
    },error=>{
      this.toastr.error(error['error']['data'],"Error");
    })
  }

}
