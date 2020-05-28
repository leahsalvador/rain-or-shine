import { StoreLocationModel } from './../../../core/interfaces/store-lication.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores-tab',
  templateUrl: './stores-tab.page.html',
  styleUrls: ['./stores-tab.page.scss'],
})
export class StoresTabPage implements OnInit {
  
  storeLocations: StoreLocationModel[];
  selectedStore: StoreLocationModel;
  constructor() { 
  }

  ngOnInit() {

    let active = true;
    this.storeLocations = [];
    for(let x = 0; x <= 10; x++){
      this.storeLocations.push({
        name: `Sample Branch Name ${(x+1)}`,
        address: `Sample Branch Address Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum `,
        long: 0,
        lat: 0,
        distance: 0,
        active
      });
      if(active){
        active = false;
        this.selectedStore = this.storeLocations[x];
      }
    }
  }

  selectStore(store: StoreLocationModel){
    this.selectedStore.active = !this.selectedStore.active;
    store.active = !store.active;
    this.selectedStore = store;
  }
}
