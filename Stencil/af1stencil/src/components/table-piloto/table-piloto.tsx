import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'app-table-piloto',
  styleUrl: 'table-piloto.css',
  shadow: true,
})
export class MyComponent {
  
  @Prop() piloto:any;


  render() {
    return <div>

<div class="table-responsive tableAncho">
    <table>
        <thead class="tableColorVede">
        <tr>
          <th scope="col" class="bordeIz"><i>Race</i></th>
          <th scope="col"><i>Position</i></th>
          <th scope="col" class="bordeDr"><i>Time</i></th>
        </tr>
        </thead>
        <tbody>
        {this.piloto.races.map((carrera:any)=>
            <tr>

            <td>
            {carrera.name}
            </td>
            <td>
            <p>{carrera.position}</p>
             </td>
            <td>{ carrera.time }</td>
            </tr>

        )}
        </tbody>
      </table>
    </div>

    </div>;
  }
}
