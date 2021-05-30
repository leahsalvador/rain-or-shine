import { DsMenuModel } from './../interfaces/ds-menu.interface';
import { DsTypeModel } from './../interfaces/ds-type.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  types: DsTypeModel[];
  interior: DsMenuModel[];
  roof: DsMenuModel[];
  floor: DsMenuModel[];
  selectedMenus: DsMenuModel[];
  exterior: DsMenuModel[];
  selectedData: DsMenuModel;
  constructor() { 
    this.init();
  }

  init(){
    this.types = [
      {type: 'Interior', active: true} as DsTypeModel,
      {type: 'Exterior', active: false} as DsTypeModel,
      {type: 'Roof', active: false} as DsTypeModel,
      {type: 'Floor', active: false} as DsTypeModel,
    ];

    this.interior = [
      {type: 'wall', src1: 'assets/Interior/Interior-1.jpg', src2: 'assets/Interior/Interior-1a.png', src3: 'assets/Interior/Interior-1b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-2.jpg', src2: 'assets/Interior/Interior-2a.png', src3: 'assets/Interior/Interior-2b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-3.jpg', src2: 'assets/Interior/Interior-3a.png', src3: 'assets/Interior/Interior-3b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-4.jpg', src2: 'assets/Interior/Interior-4a.png', src3: 'assets/Interior/Interior-4b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-5.jpg', src2: 'assets/Interior/Interior-5a.png', src3: 'assets/Interior/Interior-5b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-6.jpg', src2: 'assets/Interior/Interior-6a.png', src3: ''} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-7.jpg', src2: 'assets/Interior/Interior-7a.png', src3: ''} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-8.jpg', src2: 'assets/Interior/Interior-8a.png', src3: ''} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-9.jpg', src2: 'assets/Interior/Interior-9a.png', src3: ''} as DsMenuModel,
      {type: 'wall', src1: 'assets/Interior/Interior-10.jpg', src2: 'assets/Interior/Interior-10a.png', src3: ''} as DsMenuModel,
    ];

    this.exterior = [
      {type: 'wall', src1: 'assets/Exterior/Exterior-1.jpg', src2: 'assets/Exterior/Exterior-1a.png', src3: 'assets/Exterior/Exterior-1b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-2.jpg', src2: 'assets/Exterior/Exterior-2a.png', src3: 'assets/Exterior/Exterior-2b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-3.jpg', src2: 'assets/Exterior/Exterior-3a.png', src3: 'assets/Exterior/Exterior-3b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-4.jpg', src2: 'assets/Exterior/Exterior-4a.png', src3: 'assets/Exterior/Exterior-4b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-5.jpg', src2: 'assets/Exterior/Exterior-5a.png', src3: 'assets/Exterior/Exterior-5b.png'} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-6.jpg', src2: 'assets/Exterior/Exterior-6a.png', src3: ''} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-7.jpg', src2: 'assets/Exterior/Exterior-7a.png', src3: ''} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-8.jpg', src2: 'assets/Exterior/Exterior-8a.png', src3: ''} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-9.jpg', src2: 'assets/Exterior/Exterior-9a.png', src3: ''} as DsMenuModel,
      {type: 'wall', src1: 'assets/Exterior/Exterior-10.jpg', src2: 'assets/Exterior/Exterior-10a.png', src3: ''} as DsMenuModel,
    ];
    this.floor = [
      {type: 'floor', src1: 'assets/Floor/Floor-1.jpg', src2: 'assets/Floor/Floor-1a.png', src3: ''} as DsMenuModel,
      {type: 'floor', src1: 'assets/Floor/Floor-2.jpg', src2: 'assets/Floor/Floor-2a.png', src3: ''} as DsMenuModel,
      {type: 'floor', src1: 'assets/Floor/Floor-3.jpg', src2: 'assets/Floor/Floor-3a.png', src3: ''} as DsMenuModel,
      {type: 'floor', src1: 'assets/Floor/Floor-4.jpg', src2: 'assets/Floor/Floor-4a.png', src3: ''} as DsMenuModel,
      {type: 'floor', src1: 'assets/Floor/Floor-5.jpg', src2: 'assets/Floor/Floor-5a.png', src3: ''} as DsMenuModel
    ];
    this.roof = [
      {type: 'roof', src1: 'assets/Exterior/Exterior-1.jpg', src2: 'assets/Roof/Roof-1.png', src3: ''} as DsMenuModel,
      {type: 'roof', src1: 'assets/Exterior/Exterior-2.jpg', src2: 'assets/Roof/Roof-2.png', src3: ''} as DsMenuModel,
      {type: 'roof', src1: 'assets/Exterior/Exterior-3.jpg', src2: 'assets/Roof/Roof-3.png', src3: ''} as DsMenuModel,
      {type: 'roof', src1: 'assets/Exterior/Exterior-8.jpg', src2: 'assets/Roof/Roof-8.png', src3: ''} as DsMenuModel,
      {type: 'roof', src1: 'assets/Exterior/Exterior-9.jpg', src2: 'assets/Roof/Roof-9.png', src3: ''} as DsMenuModel
    ];

    this.selectedMenus = this.interior;
  }
}
