import { Platform } from '@ionic/angular';
import { ColorCaptureService } from './../../../core/services/color-capture.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-capture-viewer',
  templateUrl: './color-capture-viewer.page.html',
  styleUrls: ['./color-capture-viewer.page.scss'],
})
export class ColorCaptureViewerPage implements AfterViewInit, OnInit {

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

  constructor(
    public colorCaptureService: ColorCaptureService,
    private plt: Platform
  ) { }

  ngOnInit() {
    this.currentColor = '';
    this.currentDisplay = 'hidden';
    this.oldColors = [];
    //this.oldColors.push(this.currentColor);
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

    if (this.colorCaptureService.currentImage.length > 0) {
      this.background.src = this.colorCaptureService.currentImage;
    } else {
      // tslint:disable-next-line:max-line-length
      this.background.src = 'assets/sample.jpg';
    }

    this.background.onload = () => {
      const wrh = this.background.width / this.background.height;
      let newWidth = this.canvasElement.width;
      let newHeight = newWidth / wrh;
      if (newHeight > this.canvasElement.height) {
          newHeight = this.canvasElement.height;
          newWidth = newHeight * wrh;
      }
      const xOffset = newWidth < this.canvasElement.width ? ((this.canvasElement.width - newWidth) / 2) : 0;
      const yOffset = newHeight < this.canvasElement.height ? ((this.canvasElement.height - newHeight) / 2) : 0;
      
      console.log('Draw');
      this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      this.ctx.drawImage(this.background, xOffset, yOffset, newWidth, newHeight);
      this.ctx.save();
    };
  }
  
  draw() {
    const wrh = this.background.width / this.background.height;
    let newWidth = this.canvasElement.width;
    let newHeight = newWidth / wrh;
    if (newHeight > this.canvasElement.height) {
        newHeight = this.canvasElement.height;
        newWidth = newHeight * wrh;
    }
    const xOffset = newWidth < this.canvasElement.width ? ((this.canvasElement.width - newWidth) / 2) : 0;
    const yOffset = newHeight < this.canvasElement.height ? ((this.canvasElement.height - newHeight) / 2) : 0;
    
    console.log('Draw');
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.ctx.save();
    this.ctx.translate(this.translatePos.x, this.translatePos.y);
    
    // this.ctx.setTransform(this.scale, 0, 0, this.scale, this.canvasElement.width / 2, this.canvasElement.height / 2);
    this.ctx.scale(this.scale, this.scale);
    // console.log('Draw X ' + this.translatePos.x  + ' Y ' + this.translatePos.y);
    this.ctx.drawImage(this.background, xOffset, yOffset, newWidth * this.scale, newHeight * this.scale);
    this.ctx.restore();
  }

  drawZoomout() {
    const wrh = this.background.width / this.background.height;
    let newWidth = this.canvasElement.width;
    let newHeight = newWidth / wrh;
    if (newHeight > this.canvasElement.height) {
        newHeight = this.canvasElement.height;
        newWidth = newHeight * wrh;
    }
    const xOffset = newWidth < this.canvasElement.width ? ((this.canvasElement.width - newWidth) / 2) : 0;
    const yOffset = newHeight < this.canvasElement.height ? ((this.canvasElement.height - newHeight) / 2) : 0;
    
    console.log('Draw');
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.ctx.save();
    this.ctx.translate(this.translatePos.x, this.translatePos.y);
    // this.ctx.setTransform(this.scale, 0, 0, this.scale, this.canvasElement.width / 2, this.canvasElement.height / 2);
    this.ctx.scale(this.scale, this.scale);
    // console.log('Draw X ' + this.translatePos.x  + ' Y ' + this.translatePos.y);
    this.ctx.drawImage(this.background, xOffset, yOffset, newWidth * this.scale, newHeight * this.scale);
    this.ctx.restore();
  }

  canvasMouseDown(evt: any){
    console.log(evt);
    /*this.mouseDown = true;
    this.startDragOffset.x = evt.targetTouches[0].clientX - this.translatePos.x;
    this.startDragOffset.y = evt.targetTouches[0].clientY - this.translatePos.y;//*/
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
    let coord = "x=" + x + ", y=" + y;
    let p = this.ctx.getImageData(x, y, 1, 1).data; 
    const hex = "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
    this.currentColor = hex;
    this.oldColors.push(this.currentColor);
    // console.log(this.oldColors);
    console.log(hex);
  }
  cursorEvent(evt){
    let coordinates;
    let target;
    try{
      if(evt.touches){
        coordinates = evt.touches['0'];
        target = coordinates.target;
      }else{
        coordinates = evt;
        target = coordinates.srcElement;
      }
    }catch(ex){
       coordinates = evt;
       target = coordinates.srcElement;
    }

    console.log(coordinates);
    console.log(target.localName);
    if(target.localName === 'canvas'){
      this.currentDisplay = 'visible';
      this.cursorPositionX = (coordinates.clientX - 12) + 'px';
      this.cursorPositionY = (coordinates.clientY - 67 + 5) + 'px';
      console.log(target.localName);
    }
  }
  canvasMouseUp(){
    console.log('MouseUP');
    this.mouseDown = false;
  }
  canvasMouseMove(evt: any){
    /*console.log('Mouse move ' + this.mouseDown);
    if (this.mouseDown) {
      this.translatePos.x = evt.targetTouches[0].clientX - this.startDragOffset.x;
      this.translatePos.y = evt.targetTouches[0].clientY - this.startDragOffset.y;
      this.draw();
    }//*/
    //console.log(evt);
    //console.log(`Mouse move ${evt.targetTouches[0].clientX},${evt.targetTouches[0].clientY}`);
    //this.sampleColor(evt.pageX, evt.pageY);
  }
  zoom(e: any){
    if (parseFloat(e.target.value) > this.lastZoomValue) {
      console.log('Zoom In');
      this.scale /= this.scaleMultiplier;
      //this.scale = parseFloat(e.target.value); //Math.min(5, this.scale * 1.1); // zoom in
      this.draw();
    } else {
      console.log('Zoom Out');
      this.scale *= this.scaleMultiplier;
      //this.scale = (1 / parseFloat(e.target.value)); //Math.max(0.1, this.scale * (1 / 1.1)); // zoom out is inverse of zoom in
      this.drawZoomout();
    }
    this.lastZoomValue = parseFloat(e.target.value);
  }

  findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
  }

  rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255)
          throw "Invalid color component";
      return ((r << 16) | (g << 8) | b).toString(16);
  }
}
