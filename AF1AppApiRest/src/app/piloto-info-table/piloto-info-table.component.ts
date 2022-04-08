import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piloto-info-table',
  templateUrl: './piloto-info-table.component.html',
  styleUrls: ['./piloto-info-table.component.css']
})
export class PilotoInfoTableComponent implements OnInit {

  @Input() piloto:any;

  constructor() { }

  ngOnInit(): void {
  }

}
