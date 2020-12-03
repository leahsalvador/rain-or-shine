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
    data.active = true;//!data.active;
    if(data.type === 'Interior'){
      this.scheme.selectedMenus = this.scheme.interior;
    }else{
      this.scheme.selectedMenus = this.scheme.exterior;
    }
  }

  selectMenu(data){
    this.scheme.selectedData = data;
    this.router.navigateByUrl('scheme-colors');
  }

}
