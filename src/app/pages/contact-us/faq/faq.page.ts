import { FaqContentComponent } from './../../../core/modules/component/faq/faq-content/faq-content.component';
import { FaqModel } from './../../../core/interfaces/faq.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  
  faqTabs: FaqModel[];
  selectedTabs: FaqModel;
  test = '<app-faq-content></app-faq-content>';
  constructor() { 
    console.log('FAQ Constructor Initialize');
  }

  ngOnInit() {
    console.log('FAQ Initialize');
    this.faqTabs = [
      {
        id: 'paint-issues',
        name: 'Paint Issues',
        active: true
      },
      {
        id: 'colors',
        name: 'Colors',
        active: false
      },
      {
        id: 'products',
        name: 'Products',
        active: false
      },
      {
        id: 'app',
        name: 'App',
        active: false
      }
    ];
    this.selectedTabs = this.faqTabs[0];
  }

  selectTab(faqTab: FaqModel){
    this.selectedTabs.active = !this.selectedTabs.active;
    faqTab.active = !faqTab.active;
    this.selectedTabs = faqTab;
  }
}
