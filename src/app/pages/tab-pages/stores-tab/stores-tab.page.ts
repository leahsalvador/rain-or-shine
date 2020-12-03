import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StoreService } from './../../../core/services/store.service';
import { StoreLocationModel } from '../../../core/interfaces/store-location.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores-tab',
  templateUrl: './stores-tab.page.html',
  styleUrls: ['./stores-tab.page.scss'],
})
export class StoresTabPage implements OnInit {
  
  constructor(
    private router: Router,
    public storeService: StoreService,
    private loadingController: LoadingController
  ) { 
  }

  ngOnInit() {

  }


  async selectStore(store: StoreLocationModel){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.storeService.selectedStore = store;
    this.router.navigateByUrl('store-list');
  }

}
