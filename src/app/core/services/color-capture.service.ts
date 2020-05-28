import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorCaptureService {

  currentImage: string;

  constructor() { 
    this.currentImage = '';
  }
}
