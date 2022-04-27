import { Component,State,Event, h, EventEmitter} from '@stencil/core';

@Component({
  tag: 'app-table',
  styleUrl: 'table.css',
  shadow: false,
})
export class MyComponent {
    
  @State() clasificacion:any=[];
  @State() seleccionadoOption:any;
  @State() racesArray=[];
  @Event() goPagePilot: EventEmitter<any>;

  eventClickPilot(piloto:any){

    this.goPagePilot.emit(piloto);
  }

  componentDidLoad(){
    console.log('Entro')

    this.getRaces();
    this.consultarDatos("Global");
  }

  
  consultarDatos(race:string):void{
      this.seleccionadoOption=race;

    if(this.seleccionadoOption==="Global"){
    console.log("Entro consultarGlobal");
      this.getGlobalRank();
    }else{
        console.log("Entro consultarCarrera");
      this.getRankingCarrera(this.seleccionadoOption);
    }
  }
  
  handleSecondSelect(event) {
      console.log("CambioSelect "+event.target.value)
    console.log(event.target.value);
    this.seleccionadoOption= event.target.value;
    this.consultarDatos(this.seleccionadoOption);

  }

  async getRaces(){
    let response = await fetch('http://localhost:9000/races');
    this.racesArray = await response.json();


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
      <div class="inLine">
      <h3 class="positionRanking"><i>Ranking / {this.seleccionadoOption}</i></h3>

      <select name="miselect" class="button-right" onInput={(event) => this.handleSecondSelect(event)}>
        <option value="" disabled selected hidden>Elige la clasificacion</option>
        {this.racesArray.map((race:any) =>
          <option value={race}>{race}</option>
        )}
      </select>
    
      </div>

      <div>
      <div class="table-responsive">
        <table>
            <thead class="tableColorVede">
            <tr>
              <th scope="col" class="bordeIz"></th>
              <th scope="col"><i>Rank</i></th>
              <th scope="col"><i>Name</i></th>
              <th scope="col" class="bordeDr"><i>Team</i></th>
            </tr>
            </thead>
            <tbody>
              {this.clasificacion.map((piloto:any, index)=>
              <tr onClick={()=>this.eventClickPilot(piloto)}>
              <td><img src={piloto.picture} class="me-1"></img></td>
              <td>
                <p>{index+1}</p>
              </td>
              <td>{ piloto.name }</td>
              <td>{ piloto.team }</td>
            </tr>
               )}
            </tbody>
          </table>
        </div>
      </div>

    </div>;
  }


  
}