import { Component, OnInit, SimpleChanges, ChangeDetectorRef} from '@angular/core';

import { JsonService } from '../json.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']

})
export class TableComponent implements OnInit {

  dataArray=[];
  racesArray=[];
  seleccionadoOption;
  clasificacion:any=[];
  
  constructor(public json:JsonService) {}

ngOnInit(): void {
  console.log("NGINIT");

   //Obtenemos el json
   this.json.getJson('../assets/data.json').subscribe((res : any) => {
    //  console.log(res.data)
      this.dataArray = res.data;

      //Añadimos otro array solo carreras
      this.dataArray[0].races.forEach(element => {
        this.racesArray.push(element.name);
      });
      //Añadimos opcion global al principio
      this.racesArray.unshift("Global")
     

      //Añadimos Default Global
     this.seleccionadoOption=this.racesArray[0];

     //Ejecutamos funcion para ordenacion
     this.consultarDatos();
    
      });
    
}

  consultarDatos():void{
    let carreraName = this.seleccionadoOption;
    let arrayACambiar:any=[];

    //Eliminamos datos antes de ordenar nuevamente
    this.clasificacion=[];
    arrayACambiar.pop();

  if(carreraName=="Global"){
      this.ordenarGlobal();
  }else{

    this.dataArray.forEach(function(element){
  
      element.races.forEach(carrera => {
         if(carrera.name == carreraName){
          
          //Pasamos time a secons
          let timeUser:any=0;
          let [hours, minutes, seconds] = carrera.time.split(':');
          let totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);

          //Quitamos milisegundos para poder hacer la resta
          timeUser=totalSeconds.toFixed(0);

          //Creamos objeto con los datos a mostrar/usar
          let object = {id:element._id,picture:element.picture, name:element.name, team:element.team, carrera: carrera.name, time: timeUser }
           arrayACambiar.push(object);
         
         }
      });
       
  });
//Array a utilizar es el nuevo
  this.clasificacion=arrayACambiar;
  this.clasificacion=this.clasificacion.sort((a,b) => a.time - b.time);


  }
  }

  ordenarGlobal():void{
    console.log("GLOBAAAAl")

    //Limpiamos array POrSI
    this.clasificacion=[];

    this.dataArray.forEach(element => {

      //Tiempo empleado segundos General
      let timeUser:any=0;

      element.races.forEach(carrera => {

        let [hours, minutes, seconds] = carrera.time.split(':');
        let totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);

     
        timeUser+=totalSeconds;

      });
      //Formateo los segundos
      timeUser=parseFloat(timeUser).toFixed(0);

      let object = {id:element._id,picture:element.picture, name:element.name, team:element.team, carrera: "Global", time: timeUser }
      this.clasificacion.push(object);
      
    });

    this.clasificacion=this.clasificacion.sort((a,b) => a.time - b.time);

  }

  onChangeSelect():void{
    this.consultarDatos();
  }

}
