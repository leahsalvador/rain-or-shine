import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-tab',
  templateUrl: './contact-us-tab.page.html',
  styleUrls: ['./contact-us-tab.page.scss'],
})
export class ContactUsTabPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  open(link: string){
    this.router.navigateByUrl(link);
  }
}
