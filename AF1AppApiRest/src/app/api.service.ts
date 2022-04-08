import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getJson(url:string){

    return this.http.get(url);

  }

  getRaces(){
    return this.http.get("http://localhost:9000/races");
  }

  getRankingGlobal(){
    return this.http.get("http://localhost:9000/ranking");
  }

  getRankingCarrera(carrera:string){
    return this.http.get("http://localhost:9000/ranking/carrera?carrera="+carrera);
  }

  getDriverInfo(id:string){
    return this.http.get("http://localhost:9000/driver/"+id);
  }


}
