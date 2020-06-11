import { Component, OnInit } from '@angular/core';
import { Legajo } from '../legajo';
//import { LEGAJOS } from '../db-legajos';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-legajos',
  templateUrl: './legajos.component.html',
  styleUrls: ['./legajos.component.css']
})
export class LegajosComponent implements OnInit {
  ErrMessage = "";
  hideMessage = true;
  env = environment;
  alta:any = true;
  page:any = 1;
  pageSize:any = 30;
  hideForm : any = true;
  hideList : any = false;
  legajos : Legajo[] = [];
  model : Legajo = {"LegAdministrador":"","IDCodigo":"","LegLegajo":"","LegCuil":"","LegFechaNacimiento":null,"LegEMail":"","LegEstado":"0","LegIntentos":"0","LegToken":null};
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.getListado();
    

    //asigna de la base local
    //this.legajos = LEGAJOS;

   // this.model = new Legajo('','','','','','','','','');
  }

  getListado(){
    this.api.getLegajos().subscribe(data =>{
 
      //console.log(data);
      this.legajos = data['data'];
    },error=>{
      console.log(error);
    });
  }

  editLegajo(legajo:Legajo){
    this.alta = false;
    this.api.getLegajo(legajo.LegAdministrador+legajo.IDCodigo).subscribe(result=>{
      this.model = result['data'];
    },error=>{
      console.log(error);
    });
     
    this.hideForm = false;
    this.hideList = true;
      //console.log(legajo);
    
    //this.model = legajo;
  }

  updateLegajo(){
    this.api.updateLegajo(this.model).subscribe(result=>{
      console.log(result);
      this.hideForm = true;
      this.getListado();
      this.hideList = false;
    },error=>{
      console.log(error);
    });
  }

  addForm(){
    this.alta = true;
    this.model = {"LegAdministrador":this.env.LegAdministrador,"IDCodigo":"","LegLegajo":"","LegCuil":"","LegFechaNacimiento":null,"LegEMail":"","LegEstado":"0","LegIntentos":"0","LegToken":null};
    this.hideForm = false;
    this.hideList = true;
  }

  insertLegajo(){
    console.log(this.model)


    this.api.insertLegajo(this.model).subscribe(
    result=>{
        console.log(result);
        this.hideForm = true;
        this.getListado();
        this.hideList = false;
    },resError=>{
      if(resError['error']['status']  == "10"){
        this.ErrMessage= "clave duplicada";
        this.hideMessage=false;
      }
      //console.log(resError['error']);

    });
  }

  deleteLegajo(legajo:Legajo){

    this.api.deleteLegajo(legajo.LegAdministrador+legajo.IDCodigo).subscribe(result=>{
      this.ErrMessage= "Registro eliminado";
      this.hideMessage=false;
      this.getListado();
    },error=>{
      console.log(error);
    });
     
      //console.log(legajo);
    
    //this.model = legajo;
  }

}
