import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-boton-back',
  templateUrl: './boton-back.component.html',
  styleUrls: ['./boton-back.component.css']
})
export class BotonBackComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  backTable(): void{
    this.router.navigate(['/table']);
      }

}
