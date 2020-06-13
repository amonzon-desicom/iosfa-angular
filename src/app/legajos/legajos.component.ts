import { Component, OnInit } from '@angular/core';
import { Legajo } from '../legajo';
//import { LEGAJOS } from '../db-legajos';
import { ApiService } from '../api.service';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { NgxConfirmBoxService } from 'ngx-confirm-box';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-legajos',
  templateUrl: './legajos.component.html',
  styleUrls: ['./legajos.component.css']
})
export class LegajosComponent implements OnInit {

  bgColor           ='rgba(0,0,0,0.5)'; // overlay background color
  confirmHeading    = '';
  confirmContent    = "seguro que desea eliminar?";
  confirmCanceltext = "Cancelar";
  confirmOkaytext   = "Si";

  variableLocal = "Variable Local";

  ErrMessage = "";
  eliminar : any;
  hideMessage = true;
  env = environment;
  alta:any = true;
  page:any = 1;
  pageSize:any = 30;
  hideForm : any = true;
  hideList : any = false;
  legajos : Legajo[] = [];
  model : Legajo = {"LegAdministrador":"","IDCodigo":"","LegLegajo":"","LegCuil":"","LegFechaNacimiento":null,"LegEMail":"","LegEstado":"0","LegIntentos":"0","LegToken":null};
  
  constructor(private api: ApiService,
    private toastr:ToastrService,
    private confirmBox: NgxConfirmBoxService,
    private spiner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.variableLocal = localStorage.getItem("variableLocal");

    this.getListado();
    

    //asigna de la base local
    //this.legajos = LEGAJOS;

   // this.model = new Legajo('','','','','','','','','');
  }

  setVariableLocal(parametro:string){
    localStorage.setItem('variableLocal', parametro);
    this.variableLocal=parametro;

  }

  getListado(){

    this.spiner.show();


    this.api.getLegajos().subscribe (
      data =>{
 
      //console.log(data);
      this.legajos = data['data'];
     this.spiner.hide();
    },error=>{
      console.log(error);
      this.spiner.hide();
    }
    
    );



    //this.spiner.hide();
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
        
        this.toastr.error ("Clave duplicada","Error!",{progressBar:true,positionClass:'toast-top-center',closeButton:true,disableTimeOut:true});
        //this.ErrMessage= "clave duplicada";
        //this.hideMessage=false;
      }
      //console.log(resError['error']);

    });
  }

   confirmChange(showConfirm:boolean){
      if(showConfirm){
        console.log("eliminar");

        this.api.deleteLegajo(this.eliminar.LegAdministrador+this.eliminar.IDCodigo).subscribe(result=>{
          this.eliminar = null;
          this.toastr.success("Registro Eliminado","Exito")
          //this.ErrMessage= "Registro eliminado";
          //this.hideMessage=false;
          this.getListado();
        },error=>{
          console.log(error);
        });
      }
  }

  deleteLegajo(legajo:Legajo){

    this.eliminar = legajo;
    console.log("box");
    this.confirmBox.  show();
/*
    this.api.deleteLegajo(legajo.LegAdministrador+legajo.IDCodigo).subscribe(result=>{
      
      this.toastr.success("Registro Eliminado","Exito")
      //this.ErrMessage= "Registro eliminado";
      //this.hideMessage=false;
      this.getListado();
    },error=>{
      console.log(error);
    });
     */
      //console.log(legajo);
    
    //this.model = legajo;
  }

}
