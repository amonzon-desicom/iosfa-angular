import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
  variableLocal:any;
  constructor() { }

  ngOnInit(): void {
    this.variableLocal = localStorage.getItem("variableLocal");
  }

}
