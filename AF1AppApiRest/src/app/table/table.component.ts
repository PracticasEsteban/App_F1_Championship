import { Component, OnInit, SimpleChanges, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']

})
export class TableComponent implements OnInit {

  racesArray=[];
  seleccionadoOption:any;
  clasificacion:any=[];
  
  constructor(public api:ApiService, private router:Router) {}

ngOnInit(): void {
  console.log("NGINIT");

  //Obtenemos races Array para Select
  this.api.getRaces().subscribe((listaRaces:any) =>{

    console.log("ListaRaces "+listaRaces);
    this.racesArray=listaRaces;
    this.seleccionadoOption=this.racesArray[0];

    //Pintamos Global
    this.consultarDatos();
  });

   
   
}

consultarDatos():void{

  if(this.seleccionadoOption==="Global"){

    this.api.getRankingGlobal().subscribe((lista:any)=>{
      this.clasificacion=lista;
    });
  }else{
    this.api.getRankingCarrera(this.seleccionadoOption).subscribe((lista:any)=>{
      this.clasificacion=lista;
    });
  }
}

  //Cuando cambia el select volvemos a consultar datos
  onChangeSelect():void{
    this.consultarDatos();
  }

  //Navigate to user component
  userInfo(id:any):void{
   this.router.navigate(['/piloto',id]);
  }

}

