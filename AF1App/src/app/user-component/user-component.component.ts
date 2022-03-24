import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

  id:any;

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.router.paramMap.subscribe((params:ParamMap)=>{

      this.id = params.get('id');

    });
    console.log("IDDDD "+this.id)

  }

}
