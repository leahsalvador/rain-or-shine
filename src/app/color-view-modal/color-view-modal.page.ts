import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-view-modal',
  templateUrl: './color-view-modal.page.html',
  styleUrls: ['./color-view-modal.page.scss'],
})
export class ColorViewModalPage implements OnInit {
  @Input() color: any;
  constructor(
    public modalController: ModalController) { }

  ngOnInit() {
  }

}
