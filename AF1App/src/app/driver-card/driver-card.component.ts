import { Component, Input, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {

  @Input() id:any;

  dataArray:any=[];
  piloto:any;
  clasificacion:any=[];

  constructor(private json:JsonService) { }

  ngOnInit(): void {

     //Obtenemos el json
   this.json.getJson('../../assets/data.json').subscribe((res : any) => {
      //console.log(res.data)
      this.dataArray = res.data;
      this.piloto = this.dataArray.find(element => element._id==this.id);
      this.pintarDom();
      });
  }

  pintarDom():void{

    let posicion = this.posicionGlobal(); 
    posicion=parseInt(posicion.toString()) + 1;

    this.piloto.position = posicion;

  }

  posicionGlobal():Number{
    let posicion=0;


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


      let object = {name:element.name, team:element.team, time: timeUser }
      this.clasificacion.push(object);
      
    });

    this.clasificacion.sort((a,b) => a.time - b.time);

    posicion= this.clasificacion.findIndex(element => element.name==this.piloto.name);

  
    return posicion;
  }
}
