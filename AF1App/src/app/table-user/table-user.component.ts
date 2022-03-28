import { Component, Input, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
@Component({
  selector: 'table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {


  @Input() id;
  clasificacion:any=[];
  dataArray:any=[];
  piloto:any;


  constructor(private json:JsonService) { }

  ngOnInit(): void {

    this.json.getJson('../../assets/data.json').subscribe((res : any) => {
      //console.log(res.data)
      this.dataArray = res.data;
      this.pintarDom();
      });

  }

  pintarDom():void{

    //Obtenemos usuario piloto;

    this.piloto = this.dataArray.find(element => element._id == this.id);

    //Añadimos datos objeto para pintar DOM

      this.piloto.races.forEach(element => {

        let object = {race:element.name, time:element.time, position:null};
        let position = this.obtenerPosicionCarrera(element.name);

        object.position=position+1;
        this.clasificacion.push(object);
        
      });

    
  }

  obtenerPosicionCarrera(carreraName:String):number{

    let arrayACambiar:any=[];
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

  //Ordenamos el array por tiempo
  arrayACambiar=arrayACambiar.sort((a,b)=>a.time-b.time);

  //Retornamos el index de la posicion del usuario;

    return arrayACambiar.findIndex(element=>element.name==this.piloto.name);
  }

}
