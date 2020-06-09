import { Component, OnInit } from '@angular/core';
import { Legajo } from '../legajo';
//import { LEGAJOS } from '../db-legajos';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-legajos',
  templateUrl: './legajos.component.html',
  styleUrls: ['./legajos.component.css']
})
export class LegajosComponent implements OnInit {

  hideForm : any = true;
  hideList : any = false;
  legajos : Legajo[] ;
  model : Legajo = {"LegAdministrador":"","IDCodigo":"","LegLegajo":"","LegCuil":"","LegFechaNacimiento":null,"LegEMail":"","LegEstado":"0","LegIntentos":"0","LegToken":null};
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getLegajos().subscribe(data =>{
      console.log("1");
      //console.log(data);
      this.legajos = data['data'];
    },error=>{
      console.log(error);
    });
    
console.log("2");
console.log("3");
console.log("4");
    //asigna de la base local
    //this.legajos = LEGAJOS;

   // this.model = new Legajo('','','','','','','','','');
  }

  editLegajo(legajo:Legajo){

    this.hideForm = false;
    this.hideList = true;
    console.log(legajo);
    
    this.model = legajo;
  }

}
