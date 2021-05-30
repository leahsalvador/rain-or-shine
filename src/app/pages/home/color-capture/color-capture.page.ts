import { ColorCaptureService } from './../../../core/services/color-capture.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-color-capture',
  templateUrl: './color-capture.page.html',
  styleUrls: ['./color-capture.page.scss'],
})
export class ColorCapturePage implements OnInit {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  chosenPicture: any;
  
  constructor(private camera: Camera, private dialogs: Dialogs,
              public loadingCtrl: LoadingController,
              private navCtrl: NavController,
              public platform: Platform,
              private colorCaptureService: ColorCaptureService) { 
  }

  ngOnInit() {
  }

  openCamera(){

    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.colorCaptureService.currentImage = 'data:image/png;base64,' + imageData;
      // this.dialogs.alert(base64Image);
      this.navCtrl.navigateForward('color-capture-viewer');
    }, (err) => {
      // Handle error
      // this.dialogs.alert('error ' + err);
      //this.navCtrl.navigateForward('color-capture-viewer');
    });
  }

  async openGallery(){

    //const loading = this.loadingCtrl.create();

    if(this.platform.is('ios')){
      this.colorCaptureService.getPhotoFromGallery();
    }else{
      //loading.present();
      return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY).then(picture => {
        if (picture) {
          this.colorCaptureService.currentImage = picture;
          // this.dialogs.alert(base64Image);
          this.navCtrl.navigateForward('color-capture-viewer');
        }
        //loading.dismiss();
      }, error => {
        // this.dialogs.alert(error);
      });
    }
  }

  // This method takes optional parameters to make it more customizable
  getImage(pictureSourceType, crop = false, quality = 100, allowEdit = true, saveToAlbum = true) {
    const options = {
      quality,
      allowEdit,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: pictureSourceType,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: saveToAlbum
    };

    return this.camera.getPicture(options).then(imageData => {
      const base64Image = 'data:image/png;base64,' + imageData;
      return base64Image;
    }, error => {
      console.log('CAMERA ERROR -> ' + JSON.stringify(error));
      // this.dialogs.alert('CAMERA ERROR -> ' + JSON.stringify(error));
    });
  }
}
