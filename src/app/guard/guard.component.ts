import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class GuardComponent implements OnInit, CanActivate{

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  canActivate(){
    if(localStorage.getItem("logueado")=="true"){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
