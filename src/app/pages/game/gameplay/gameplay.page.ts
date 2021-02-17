import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { GameColorModel } from './../../../core/interfaces/game-color.interface';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Platform, NavController, AlertController, ToastController } from '@ionic/angular';
import { ColorCaptureService } from './../../../core/services/color-capture.service';
import { GameService } from './../../../core/services/game.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.page.html',
  styleUrls: ['./gameplay.page.scss'],
})
export class GameplayPage implements AfterViewInit, OnInit {

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
  constructor(
    public gameService: GameService,
    private router: Router,
    private navCtrl: NavController,
    public colorCaptureService: ColorCaptureService,
    private screenOrientation: ScreenOrientation,
    private plt: Platform,
    private dialogs: Dialogs,
    private platform: Platform,
    private alertCtrl: AlertController,
    private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController,
    private androidPermissions: AndroidPermissions
  ) { 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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

  exitGame(){
    this.exitGameAlert();
    /*this.dialogs.alert('Hello world')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => {
        console.log('Error displaying dialog', e);
        this.navCtrl.back();
      });//*/
  }
  async exitGameAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Quit Game',
      message: `Are you sure you want to quit?`,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.navCtrl.back();
          }
        }
      ]
    });

    await alert.present();
  }
  
  async permissionAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Permission Request',
      message: `This app requires the store permission to save the image .`,
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
    this.gameService.selectedColor = this.gameService.paintColors[0];
    this.paint = false;
    this.paintSize = 2;
    this.usePaintbrush();
    this.clickX = new Array();
    this.clickY = new Array();
    this.clickSize = new Array();
    this.clickDrag = new Array();
    this.clickTool = new Array();
    this.clickColor = new Array();
  }

  async exportCanvasImage(){
    const dataUrl = this.canvasElement.toDataURL(); 
    const data = dataUrl.split(',')[1];

    /*this.gameService.addCoin();
    this.navCtrl.back();
    return;//*/
    // Clear the current canvas
    if (this.plt.is('cordova')) {
      if(this.plt.is('ios')){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Save Image',
          message: `Earn and unlock the next level by saving the image to your gallery.`,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
              }
            }, {
              text: 'Continue',
              handler: () => {
                 // this.dialogs.alert(dataUrl);
                this.base64ToGallery.base64ToGallery(data, { prefix: '_img', mediaScanner:  true  }).then(
                  async res => {
                    const toast = await this.toastCtrl.create({
                      message: 'Image saved to gallery.',
                      duration: 2000
                    });
                    toast.present();
                    this.gameService.addCoin();
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
              }
            }
          ]
        });
        await alert.present();
      }else{
        // this.dialogs.alert(dataUrl);
        this.base64ToGallery.base64ToGallery(data, { prefix: '_img', mediaScanner:  true  }).then(
          async res => {
            const toast = await this.toastCtrl.create({
              message: 'Image saved to gallery.',
              duration: 2000
            });
            toast.present();
            this.gameService.addCoin();
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
      }

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
      this.gameService.addCoin();
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

  usePaintbrush(){
    this.paintBrush = 'light';
    this.eraser = 'medium';
    this.isPaint = true;
  }

  useEraser(){
    this.paintBrush = 'medium';
    this.eraser = 'light';
    this.isPaint = false;
  }

  ngAfterViewInit(){

    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = this.plt.width() + '';
    this.canvasElement.height = this.plt.height() / 2 + '';
    this.ctx = this.canvasElement.getContext('2d');
    this.background = new Image();
    this.startDragOffset = {};
    this.translatePos = {
        x: 0,
        y: 0
    };

    if (this.gameService.currentSelectedModel.src.length > 0) {
      this.background.src = this.gameService.currentSelectedModel.src;
    } else {
      // tslint:disable-next-line:max-line-length
      this.background.src = 'assets/sample.jpg';
    }

    this.background.onload = () => {
      const wrh = this.background.width / this.background.height;
      this.newWidth = this.canvasElement.width;
      this.newHeight = this.newWidth / wrh;
      if (this.newHeight > this.canvasElement.height) {
        this.newHeight = this.canvasElement.height;
        this.newWidth = this.newHeight * wrh;
      }
      this.xOffset = this.newWidth < this.canvasElement.width ? ((this.canvasElement.width - this.newWidth) / 2) : 0;
      this.yOffset = this.newHeight < this.canvasElement.height ? ((this.canvasElement.height - this.newHeight) / 2) : 0;
      
      ////console.log('Draw');
      this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
      // this.ctx.save();
    };
  }

  canvasMouseDown(evt){
    //console.log('Touch Down');
    ////console.log(evt);

    let coordinates;
    try{
       coordinates = evt.touches ? evt.touches['0'] : evt;
    }catch(ex){
       coordinates = evt;
    }
    // this.cursor.style.cssText  = `position:abosulte; display:block; top: ${coordinates.clientY}; left: ${coordinates.clientX};`;

    let pos = this.findPos(this.canvasElement);
    let x = coordinates.pageX - pos.x;
    let y = coordinates.pageY - pos.y;
    let coord = 'x=' + x + ', y=' + y;
    /*this.element = coordinates.pageX + coordinates.pageY;
    //console.log('Element ' + this.element);//*/
    this.paint = true;
    this.addClick(coordinates.pageX - pos.x, coordinates.pageY - pos.y, false);
    this.saveX = x;
    this.saveY = y;
    
    //this.redraw(coordinates.pageX - pos.x, coordinates.pageY - pos.y, false);
  }

  canvasMouseMove(evt){
    //console.log('Touch Move');
    ////console.log(evt);
    /*const temp = coordinates.pageX + coordinates.pageY;
    if (this.element !== temp) {
        this.touchleave();
    }//*/
      
    if(this.paint){
      let coordinates;
      try{
        coordinates = evt.touches ? evt.touches['0'] : evt;
      }catch(ex){
        coordinates = evt;
      }
      // this.cursor.style.cssText  = `position:abosulte; display:block; top: ${coordinates.clientY}; left: ${coordinates.clientX};`;

      let pos = this.findPos(this.canvasElement);
      let x = coordinates.pageX - pos.x;
      let y = coordinates.pageY - pos.y;
      let coord = 'x=' + x + ', y=' + y;
      this.addClick(coordinates.pageX - pos.x, coordinates.pageY - pos.y, true);
      this.redraw(coordinates.pageX - pos.x, coordinates.pageY - pos.y, true);
    }
  }

  canvasMouseUp(){
    //console.log('Touch up');
    
    this.touchleave();
    //this.redraw();
  }

  clearCanvas()
  {
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }
  
  redraw(x, y, dragging){
    //this.clearCanvas();
    let radius;
    let i = 0;

    /*const wrh = this.background.width / this.background.height;
    let newWidth = this.canvasElement.width;
    let newHeight = newWidth / wrh;
    if (newHeight > this.canvasElement.height) {
        newHeight = this.canvasElement.height;
        newWidth = newHeight * wrh;
    }
    const xOffset = newWidth < this.canvasElement.width ? ((this.canvasElement.width - newWidth) / 2) : 0;
    const yOffset = newHeight < this.canvasElement.height ? ((this.canvasElement.height - newHeight) / 2) : 0;//*/

    radius = this.clickSize[i];
    this.ctx.beginPath();
    /*if(dragging){
      this.ctx.moveTo(this.saveX, this.saveY);
    }else{
      this.ctx.moveTo(this.clickX[i], this.clickY[i]);
    }//*/
    this.ctx.moveTo(this.saveX, this.saveY);
    this.ctx.lineTo(x, y);
    this.ctx.closePath();
    //For Eraser
    if(!this.isPaint){
      //this.ctx.globalCompositeOperation = "destination-out"; // To erase instead of draw over with white
      this.ctx.strokeStyle = 'white';
    }else{
      //this.ctx.globalCompositeOperation = "source-over";	// To erase instead of draw over with white
      this.ctx.strokeStyle = this.gameService.selectedColor.color;
      //console.log(this.clickColor[i]);
    }
    this.ctx.lineJoin = 'round';
    this.ctx.lineWidth = this.paintSize;
    this.ctx.stroke();
    this.saveX = x;
    this.saveY = y;
    /*for(; i < this.clickX.length; i++)
    {		
      radius = this.clickSize[i];
      this.ctx.beginPath();
      if(this.clickDrag[i] && i){
        this.ctx.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
      }else{
        this.ctx.moveTo(this.clickX[i], this.clickY[i]);
      }
      this.ctx.lineTo(this.clickX[i], this.clickY[i]);
      this.ctx.closePath();
      //For Eraser
      if(!this.clickTool[i]){
        //this.ctx.globalCompositeOperation = "destination-out"; // To erase instead of draw over with white
        this.ctx.strokeStyle = 'white';
      }else{
        //this.ctx.globalCompositeOperation = "source-over";	// To erase instead of draw over with white
        this.ctx.strokeStyle = this.clickColor[i];
        //console.log(this.clickColor[i]);
      }
      this.ctx.lineJoin = 'round';
      this.ctx.lineWidth = radius;
      this.ctx.stroke();
    }//*/
    //this.ctx.globalCompositeOperation = "source-over";// To erase instead of draw over with white
    //this.ctx.restore();
    this.ctx.drawImage(this.background, this.xOffset, this.yOffset, this.newWidth, this.newHeight);
  }

  findPos(obj) {
    let curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        // tslint:disable-next-line:no-conditional-assignment
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
  }

  addClick(x, y, dragging)
  {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);//*/
    this.clickTool.push(this.isPaint);
    this.clickColor.push(this.gameService.selectedColor.color);
    this.clickSize.push(this.paintSize);
  }

  touchleave(){
    this.paint = false;
    //console.log ('You\'re not touching the element anymore');
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
