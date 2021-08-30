import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { LoadingController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { StoreService } from './../../core/services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.page.html',
  styleUrls: ['./store-list.page.scss'],
})
export class StoreListPage implements OnInit {


  typesDisplayed = [];
  validIndex= [];

  constructor(
    public storeService: StoreService,
    private callNumber: CallNumber,
    private loadingController: LoadingController,
    private emailComposer: EmailComposer
  ) { }

  ngOnInit() {
    this.typesDisplayed = [];
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentInit(){
    this.loadingController.dismiss();
  }

  callPhone(phoneNumber){
    this.callNumber.callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  openMap(address){
    const value = encodeURIComponent(address).replace('%20','+');
    window.open('https://www.google.com/maps?q=' + value, '_system');
  }

  hasType(type, i){
    if ( ! this.typesDisplayed.includes(type)){
      this.typesDisplayed.push(type);
      this.validIndex.push(i);
      console.log(this.typesDisplayed);
    }
  }
  sendEmail(storeEmail){
    let email = {
      to: storeEmail,
      subject: 'General Inquiry',
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }
  
}
