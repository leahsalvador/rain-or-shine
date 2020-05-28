import { FaqContentModel } from './../../../../interfaces/faq-content.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-content',
  templateUrl: './faq-content.component.html',
  styleUrls: ['./faq-content.component.scss'],
})
export class FaqContentComponent implements OnInit {

  faqContent: FaqContentModel[];
  constructor() {
    this.faqContent = [
      {
        question: `Why is my paint peeling of?
        Is there a solution to this?`,
        answer:  `Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile`,
        active: false
      },
      {
        question: `Can I add thinner to water-based paint?`,
        answer:  `Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile`,
        active: false
      },
      {
        question: `I recently painted my door whitout using a primer. Now the paint is peeling off what should I do?`,
        answer:  `Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile`,
        active: false
      },
      {
        question: `Why does mould grow on my painter walls?`,
        answer:  `Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile`,
        active: false
      },
      {
        question: `What should I do to hairline cracks on my walls? Is repainting of the entier wall necessary?`,
        answer:  `Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
        Keep close to Nature's heart... and break clear away, once in awhile`,
        active: false
      }
    ];
   }

  ngOnInit() {}

}
