import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'app-card-piloto',
  styleUrl: 'cardUser.css',
  shadow: true,
})
export class MyComponent {

  @Prop() piloto: any;


  render() {
    return <div>

    <div class="table-responsive tableAncho">
    <table class="table">
        <thead class="tableColorVerde">
        <tr>
          <th scope="col">Driver Card</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <img src={this.piloto.picture} class="me-1 imgB"></img>
          </td>
        </tr>
        <tr>  
          <td>
            <p class="textAlt">Name</p>
          </td>
        </tr>
        <tr>  
          <td>{ this.piloto.name }</td>
        </tr>
        <tr>  
          <td>
              <p class="textAlt">Age</p>
          </td>
        </tr>
        <tr>  
          <td>{this.piloto.age}</td>
        </tr>
        <tr>  
          <td>
              <p class="textAlt">Team</p>
          </td>
        </tr>
        <tr>  
          <td>{this.piloto.team}</td>
        </tr>
        <tr>  
          <td>
              <p class="textAlt">GLOBAL RANKING</p>
          </td>
        </tr>
        <tr>  
          <td>
            
            <p>{this.piloto.posicion}</p> 

          </td>
        </tr>
        </tbody>
      </table>
    </div>

    </div>;
  }
}
