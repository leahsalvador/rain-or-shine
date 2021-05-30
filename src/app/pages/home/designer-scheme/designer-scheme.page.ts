import { DsTypeModel } from './../../../core/interfaces/ds-type.interface';
import { Router } from '@angular/router';
import { SchemeService } from './../../../core/services/scheme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designer-scheme',
  templateUrl: './designer-scheme.page.html',
  styleUrls: ['./designer-scheme.page.scss'],
})
export class DesignerSchemePage implements OnInit {

  constructor(
    private router: Router,
    public scheme: SchemeService
  ) { 
  }

  ngOnInit() {
  }

  select(data: DsTypeModel){
    this.scheme.types[0].active = false;
    this.scheme.types[1].active = false;
    this.scheme.types[2].active = false;
    this.scheme.types[3].active = false;
    data.active = true;//!data.active;
    console.log(data.type);
    if(data.type === 'Interior'){
      this.scheme.selectedMenus = this.scheme.interior;
    }else if(data.type === 'Floor'){
      this.scheme.selectedMenus = this.scheme.floor;
    }else if(data.type === 'Roof'){
      this.scheme.selectedMenus = this.scheme.roof;
    }else{
      this.scheme.selectedMenus = this.scheme.exterior;
    }
  }

  selectMenu(data){
    this.scheme.selectedData = data;
    console.log(this.scheme.selectedData);
    this.router.navigateByUrl('scheme-colors');
  }

}
