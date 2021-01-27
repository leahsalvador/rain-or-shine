import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class ColorCaptureService {

  currentImage: string;

  constructor(public navCtrl: NavController) { 
    this.currentImage = '';
  }

  async getPhotoFromGallery(){
    const image = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });
    // this.dialogs.alert(base64Image);
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.currentImage = image.base64String;
    this.navCtrl.navigateForward('color-capture-viewer');
  }
}
