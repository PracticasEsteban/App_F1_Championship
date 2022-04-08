import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-piloto-info',
  templateUrl: './piloto-info.component.html',
  styleUrls: ['./piloto-info.component.css']
})
export class PilotoInfoComponent implements OnInit {
    id:any;
    piloto:any;

    constructor(private router:ActivatedRoute, private api:ApiService) { }

    ngOnInit(): void {

      this.router.paramMap.subscribe((params:ParamMap)=>{

        this.id = params.get('id');

        this.api.getDriverInfo(this.id).subscribe((res: any) => {

          this.piloto=res;
  
      });
  
      });

      
    }

}
