import { CallNumber } from '@ionic-native/call-number/ngx';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact-us-tab',
  templateUrl: './contact-us-tab.page.html',
  styleUrls: ['./contact-us-tab.page.scss'],
})
export class ContactUsTabPage implements OnInit {

  constructor(private router: Router, private emailComposer: EmailComposer, private callNumber: CallNumber) { }

  ngOnInit() {
  }

  open(link: string){
    this.router.navigateByUrl(link);
  }

  sendEmail(){
    let email = {
      to: 'info@rainorshinepaint.com',
      subject: 'General Inquiry',
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }
  
  callPhone(phoneNumber){
    this.callNumber.callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
