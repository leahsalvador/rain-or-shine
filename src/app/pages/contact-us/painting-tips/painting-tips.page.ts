import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painting-tips',
  templateUrl: './painting-tips.page.html',
  styleUrls: ['./painting-tips.page.scss'],
})
export class PaintingTipsPage implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  open(link: string){
    this.router.navigateByUrl(link);
  }

}
