import { SchemeService } from './../../core/services/scheme.service';
import { ProductColor } from './../../core/interfaces/product/product-color.interface';
import { ProductService } from './../../core/services/product.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { ColorCaptureService } from './../../core/services/color-capture.service';
import { NavController, Platform, AlertController, ToastController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scheme-editor',
  templateUrl: './scheme-editor.page.html',
  styleUrls: ['./scheme-editor.page.scss'],
})
export class SchemeEditorPage implements OnInit {

  @ViewChild('imageCanvas', { static: false }) canvas: any;
  canvasElement: any;
  ctx: any;
  background: any;

  translatePos: any;

  scale = 1.0;
  scaleMultiplier = 0.8;
  startDragOffset: any;
  mouseDown = false;
  lastZoomValue = 0;
  cursorPositionX = '0px';
  cursorPositionY = '0px';
  currentColor = '#f2f2f2';
  currentDisplay = 'hidden';
  oldColors;

  paintBrush;
  eraser;
  paintSize: number;
  isPaint: boolean;
  paint: boolean;
  clickX = new Array();
  clickY = new Array();
  clickSize = new Array();
  clickDrag = new Array();
  clickTool = new Array();
  clickColor = new Array();
  element;
  newWidth;
  newHeight;
  xOffset;
  yOffset;
  saveX;
  saveY;
  hasWriteAccess: boolean = false;
  selectedColor: ProductColor;
  constructor(
    public productService: ProductService,
    public schemeService: SchemeService,
    private navCtrl: NavController,
    public colorCaptureService: ColorCaptureService,
    private screenOrientation: ScreenOrientation,
    private plt: Platform,
    private dialogs: Dialogs,
    private alertCtrl: AlertController,
    private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController,
    private androidPermissions: AndroidPermissions
  ) { 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.selectedColor = this.productService.selectedProduct.color[0];
    /*this.platform.backButton.subscribe(() => {
      // this does work
      this.exitGameAlert();
    });//*/
  }
  checkPermissions() {
    if(this.plt.is('android')){
      this.androidPermissions
      .checkPermission(this.androidPermissions
      .PERMISSION.WRITE_EXTERNAL_STORAGE)
      .then((result) => {
       console.log('Has permission?',result.hasPermission);
       this.hasWriteAccess = result.hasPermission;
     },(err) => {
         this.androidPermissions
           .requestPermission(this.androidPermissions
           .PERMISSION.WRITE_EXTERNAL_STORAGE);
      });
      if (!this.hasWriteAccess) {
        this.androidPermissions
          .requestPermissions([this.androidPermissions
          .PERMISSION.WRITE_EXTERNAL_STORAGE]);
      }
    }else{
      this.hasWriteAccess = true;
    }
 }
 
  
  async permissionAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Permission Request',
      message: `This app requires the following permission to continue .`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.dialogs.alert('Failed. Please allow the Storage Permission to play the game')
            .then(() => {
              this.navCtrl.back();
              console.log('Dialog dismissed');
            })
            .catch(e => {
              console.log('Error displaying dialog', e);
              this.navCtrl.back();
            });
          }
        }, {
          text: 'Continue',
          handler: () => {
            this.checkPermissions();
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.checkPermissions();
  }

  exportCanvasImage(){
    const dataUrl = this.canvasElement.toDataURL(); 
    const data = dataUrl.split(',')[1];

    /*this.gameService.addCoin();
    this.navCtrl.back();
    return;//*/
    // Clear the current canvas
    if (this.plt.is('cordova')) {
      // this.dialogs.alert(dataUrl);
      this.base64ToGallery.base64ToGallery(data, { prefix: '_img', mediaScanner:  true  }).then(
        async res => {
          const toast = await this.toastCtrl.create({
            message: 'Image saved to gallery.',
            duration: 2000
          });
          toast.present();
          this.navCtrl.back();
        },
        async err => {
          const toast = await this.toastCtrl.create({
            message: 'Error saving image to gallery. This app requires storage permission. ' + err,
            duration: 2000
          });
          this.checkPermissions();
          // this.dialogs.alert(err);
          toast.present();
          console.log('Error saving image to gallery ', err);
        }
      );

      /*const options: Base64ToGallery = { prefix: 'canvas_', mediaScanner:  true };
  
      this.base64ToGallery.base64ToGallery(dataUrl, options).then(
        async res => {
          const toast = await this.toastCtrl.create({
            message: 'Image saved to gallery.',
            duration: 2000
          });
          toast.present();
        },
        err => console.log('Error saving image to gallery ', err)
      );//*/
    } else {
      this.dialogs.alert('Not Cordova');
      // Fallback for Desktop
      const data = dataUrl.split(',')[1];
      const blob = this.b64toBlob(data, 'image/png');
  
      const a = window.document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = 'canvasimage.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
  // https://forum.ionicframework.com/t/save-base64-encoded-image-to-specific-filepath/96180/3
  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    const sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  selectColor(color: ProductColor){
    this.selectedColor = color;
  }


}
