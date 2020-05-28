import { ProductService } from './core/services/product.service';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private productService: ProductService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // Initialize Product
    this.productService.init();

    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }
}
