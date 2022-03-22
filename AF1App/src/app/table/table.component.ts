import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']

})
export class TableComponent implements OnInit, OnChanges, AfterContentInit {

  @Input() ubicacion : any;
  @Input() datos : any;

  clasificacion:any=[];
  
  constructor() { }
  

  ngOnChanges(changes: SimpleChanges): void {
    
   // console.log("Cambios"+JSON.stringify(changes, null, 2));
    this.consultarDatos();
  }

ngOnInit(): void {
  console.log("NGINIT")

  this.consultarDatos();
    
}

  ngAfterContentInit(): void {
 
 //   this.clasificacion.sort((a,b)=>a.time )

  }

  consultarDatos():void{
    let carreraName = this.ubicacion;
    let arrayACambiar:any=[];

    this.clasificacion=[];
    arrayACambiar.pop();

  if(carreraName=="Global"){
      this.ordenarGlobal();
  }else{

    this.datos.forEach(function(element){
  
      element.races.forEach(carrera => {
         if(carrera.name == carreraName){
          
          let timeUser:any=0;
          let [hours, minutes, seconds] = carrera.time.split(':');
          let totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
          timeUser=totalSeconds.toFixed(0);


          let object = {picture:element.picture, name:element.name, team:element.team, carrera: carrera.name, time: timeUser }
           arrayACambiar.push(object);
         
         }
      });
       
  });

  this.clasificacion=arrayACambiar;
  this.clasificacion=this.clasificacion.sort((a,b) => a.time - b.time);
  console.log(this.clasificacion)

  }
  }

  ordenarGlobal():void{
    console.log("GLOBAAAAl")

    //Limpiamos array POrSI
    this.clasificacion=[];

    this.datos.forEach(element => {

      //Tiempo empleado segundos General
      let timeUser:any=0;

      element.races.forEach(carrera => {

        let [hours, minutes, seconds] = carrera.time.split(':');
        let totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);

     
        timeUser+=totalSeconds;

      });
      //Formateo los segundos
      timeUser=parseFloat(timeUser).toFixed(0);

      let object = {picture:element.picture, name:element.name, team:element.team, carrera: "Global", time: timeUser }
      this.clasificacion.push(object);
      
    });

    this.clasificacion=this.clasificacion.sort((a,b) => a.time - b.time);

  }

}
