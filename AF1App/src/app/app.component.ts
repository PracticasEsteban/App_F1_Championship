import { AfterContentInit, Component, OnInit } from '@angular/core';

import { JsonService } from './json.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit{
  
  
  title = 'AF1App';

  dataArray=[];
  racesArray=[];
  seleccionadoOption;
  constructor(public json:JsonService){};
  
  
  

  ngOnInit(): void {

    //Obtenemos el json
    this.json.getJson('../assets/data.json').subscribe((res : any) => {
    //  console.log(res.data)
      this.dataArray = res.data;

      //Añadimos otro array solo carreras
      this.dataArray[0].races.forEach(element => {
        this.racesArray.push(element.name);
      });

      this.racesArray.unshift("Global")
     

      //Añadimos Default Global
     this.seleccionadoOption=this.racesArray[0];
    //this.seleccionadoOption="GP Barein";
      });

     

  };

  ngAfterContentInit(): void {
 
   
  }

  selectcambiado(){
    console.log(this.seleccionadoOption)
  
  }


   

}
