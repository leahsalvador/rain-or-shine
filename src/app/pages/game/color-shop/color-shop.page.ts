import { Dialogs } from '@ionic-native/dialogs/ngx';
import { GameColorModel } from './../../../core/interfaces/game-color.interface';
import { NavController, AlertController } from '@ionic/angular';
import { GameService } from './../../../core/services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-shop',
  templateUrl: './color-shop.page.html',
  styleUrls: ['./color-shop.page.scss'],
})
export class ColorShopPage implements OnInit {

  constructor(
    public gameService: GameService,
    private navCtrl: NavController,
    private dialogs: Dialogs,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  exitColorShop(){
    this.navCtrl.back();
  }

  

  selectColor(color: GameColorModel){
    if(color.isLocked){
      this.buyColorAlert(color);
    }else{
      this.gameService.selectedColor = color;
    }
  }

  async buyColorAlert(color: GameColorModel) {
    if(this.gameService.userData.coins < color.cost){
      this.dialogs.alert('Not enough coins');
      return;
    }
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Color is locked',
      message: `Buy ${color.name} for ${color.cost} coins?`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.gameService.buyColor(color);
            this.dialogs.alert(color.name + ' unlocked.');
          }
        }
      ]
    });

    await alert.present();
  }
}
