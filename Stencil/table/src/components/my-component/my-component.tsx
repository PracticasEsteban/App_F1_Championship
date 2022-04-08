import { Component,State, h, Watch } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
    
  @State() clasificacion:any=[];

  @State() seleccionadoOption:any;
  @State() racesArray=[];

  componentDidLoad(){
    console.log('Entro')

    this.getRaces();
    this.seleccionadoOption=this.racesArray[0];
    this.consultarDatos();
  }

  @Watch('consultar')
  consultarDatos():void{

    if(this.seleccionadoOption==="Global"){
  
      this.getGlobalRank().then;
    }else{
      this.getRankingCarrera(this.seleccionadoOption);
    }
  }
  
  handleSecondSelect(event) {
    console.log(event.target.value);
    this.seleccionadoOption= event.target.value;
  }

  async getRaces(){
    let response = await fetch('http://localhost:9000/races');
    this.racesArray = await response.json();
    if(this.seleccionadoOption==null){
      this.seleccionadoOption=this.racesArray[0];
    }
  }
  async getGlobalRank() {
    
  let response = await fetch('http://localhost:9000/ranking');
  this.clasificacion = await response.json();
 
  
 }

 async getRankingCarrera(carrera:string) {
    
  let response = await fetch("http://localhost:9000/ranking/carrera?carrera="+carrera);
  this.clasificacion = await response.json();
  
 }
 


  render() {
    return <div>
      <div class="positionRanking">
      <h5><i>Ranking / {this.seleccionadoOption}</i></h5>

      <select name="miselect" class="button-right" onInput={(event) => this.handleSecondSelect(event)}>
        <option value="" disabled selected hidden>Elige la clasificacion</option>
        {this.racesArray.map((race:any) =>
          <option value={race} selected={this.seleccionadoOption === {race}}>{race}</option>
        )}
      </select>
    
      </div>

    </div>;
  }


  
}
