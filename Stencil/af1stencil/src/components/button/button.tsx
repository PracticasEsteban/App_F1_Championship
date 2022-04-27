import { Component, EventEmitter,Event, h } from '@stencil/core';



@Component({
  tag: 'app-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class MyComponent {

    @Event() goBack: EventEmitter<boolean>;
 
 eventBack(){
    console.log("AAA");
    this.goBack.emit(true);

 }

  render() {
    return <div><button type="button" class="botonRight" onClick={()=>this.eventBack()}><slot></slot></button></div>;
  }
}
