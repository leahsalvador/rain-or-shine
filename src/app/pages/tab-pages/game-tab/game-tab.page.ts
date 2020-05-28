import { LevelModel } from './../../../core/interfaces/level.interface';
import { Router } from '@angular/router';
import { GameService } from './../../../core/services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-tab',
  templateUrl: './game-tab.page.html',
  styleUrls: ['./game-tab.page.scss'],
})
export class GameTabPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };
  constructor(
    public gameService: GameService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   
  }

  selectLevel(level: LevelModel, difficulty: number){
    this.gameService.selectedColor = this.gameService.paintColors[0];
    this.gameService.currentSelectedDifficulty = difficulty;
    this.gameService.currentSelectedModel = level;
    this.router.navigateByUrl('gameplay');
  }

  openColorShop(){
    this.router.navigateByUrl('color-shop');
  }
}
