import { UserDataModel } from './../interfaces/userdata.interface';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GameColorModel } from './../interfaces/game-color.interface';
import { LevelModel } from './../interfaces/level.interface';
import { GameDifficultyModel } from './../interfaces/game-difficulty.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  gameDifficulties: GameDifficultyModel [];
  currentSelectedModel: LevelModel;
  paintColors: GameColorModel [];
  selectedColor: GameColorModel;
  userData: UserDataModel;
  currentSelectedDifficulty: number;

  constructor(
    private nativeStorage: NativeStorage
  ) { 
    this.init();
  }

  async init(){
    this.setGameDifficultiesDefault();
    this.setDefaultPaintColors();
    this.setUserDataDefault();
    await this.initGameDiffiulties();
    await this.initializePaintColors();
    // Filler
    await this.getUserData();
  }

  setUserDataDefault(){
    this.userData = {
      coins: 0,
      currentEasyLevel: 0,
      currentNormalLevel: 0,
      currentHardLevel: 0,
    };
  }

  async getUserData(){
    await this.nativeStorage.getItem('userData').then(
      data => {
        console.log(typeof data);
        console.log(data);
        this.userData = JSON.parse(data);
      },
      error => {
        console.error(error);
        this.setUserData();
      }
    );
  }

  async setUserData(coins = 0,
                    currentEasyLevel = 0,
                    currentNormalLevel = 0,
                    currentHardLevel = 0){
    await this.nativeStorage.setItem('userData', {
      coins,
      currentEasyLevel,
      currentNormalLevel,
      currentHardLevel,
    })
    .then(
      () => {
        console.log('User Data item!');
        this.getUserData();
      },
      error => console.error('Error storing item', error)
    );
  }

  async initGameDiffiulties(){
    await this.nativeStorage.getItem('gameDifficulties').then(
      data => {
        console.log(typeof data);
        console.log(data);
        this.gameDifficulties = JSON.parse(data);
      },
      error => {
        console.error(error);
        this.setupGameDifficulties();
      }
    );

  }

  setGameDifficultiesDefault(){
    this.gameDifficulties = [
      {
        difficulty: 'Easy',
        level: [
          {src: 'assets/game/easy/easy 1.png', active: false, isLocked: false},
          {src: 'assets/game/easy/easy 2.png', active: false, isLocked: true},
          {src: 'assets/game/easy/easy 3.svg', active: false, isLocked: true},
          {src: 'assets/game/easy/easy 4.png', active: false, isLocked: true},
          {src: 'assets/game/easy/easy 5.png', active: false, isLocked: true},
        ]
      },
      {
        difficulty: 'Normal',
        level: [
          {src: 'assets/game/normal/normal 1.svg', active: false, isLocked: false},
          {src: 'assets/game/normal/normal 2.svg', active: false, isLocked: true},
          {src: 'assets/game/normal/normal 3.svg', active: false, isLocked: true},
          {src: 'assets/game/normal/normal 4.svg', active: false, isLocked: true},
          {src: 'assets/game/normal/normal 5.svg', active: false, isLocked: true},
        ]
      },
      {
        difficulty: 'Hard',
        level: [
          {src: 'assets/game/hard/hard 1.png', active: false, isLocked: false},
          {src: 'assets/game/hard/hard 2.svg', active: false, isLocked: true},
          {src: 'assets/game/hard/hard 3.svg', active: false, isLocked: true},
          {src: 'assets/game/hard/hard 4.svg', active: false, isLocked: true},
          {src: 'assets/game/hard/hard 5.svg', active: false, isLocked: true},
        ]
      },
    ];
  }

  async setupGameDifficulties(){
    // this.setGameDifficultiesDefault();
    await this.nativeStorage.setItem('gameDifficulties', JSON.stringify(this.gameDifficulties))
    .then(
      () => {
        console.log('Game Difficulties Loaded!');
        this.initGameDiffiulties();
      },
      error => console.error('Error storing item', error)
    );
  }


  setDefaultPaintColors(){
    this.paintColors = [
      // Classic
      {color: '#1a6bad', name: 'Smart Blue ROS-CL 709', cost: 2, isLocked: false},
      {color: '#d2593e', name: 'Lipstick ROS-CL 383', cost: 2, isLocked: false},
      {color: '#015730', name: 'Dollar Green ROS-CL 903', cost: 2, isLocked: false},
      // Deck Seal
      {color: '#d6d6ce', name: 'Deck Gray ROS-DK 112', cost: 2, isLocked: true},
      {color: '#e2cdb2', name: 'Deck Beige ROS-DK 131', cost: 2, isLocked: true},
      {color: '#e6c331', name: 'Deck Yellow ROS-DK 624', cost: 2, isLocked: true},
      {color: '#d2191f', name: 'Deck Red ROS-DK 219', cost: 2, isLocked: true},
      {color: '#8d4a2d', name: 'Deck Brown ROS-DK 402', cost: 2, isLocked: true},
      {color: '#214a22', name: 'Deck Green ROS-DK 909', cost: 2, isLocked: true},
      {color: '#263f81', name: 'Deck Blue ROS-DK 722', cost: 2, isLocked: true},
      // Main Colors
      {color: '#FBF8F3', name: 'Gentle Touch ROS-530', cost: 2, isLocked: true},
      {color: '#FCEFEC', name: 'Romance ROS-175', cost: 2, isLocked: true},
      {color: '#FFFCEB', name: 'Bridal Gown ROS-559', cost: 2, isLocked: true},
      {color: '#FFFBE1', name: 'Milk ROS-809', cost: 2, isLocked: true},
      {color: '#FFF4DE', name: 'Tulip ROS-629', cost: 2, isLocked: true},
      {color: '#FEF6D9', name: 'Light Apricot ROS-638', cost: 2, isLocked: true},
      {color: '#F4E9C9', name: 'Sugarcane ROS-853', cost: 2, isLocked: true},
      {color: '#F8EECB', name: 'China White ROS-818', cost: 2, isLocked: true},
      {color: '#F4E2BA', name: 'Coconut ROS-739', cost: 2, isLocked: true},
      {color: '#E2CDA0', name: 'Cappuccino ROS-623', cost: 2, isLocked: true},
      {color: '#FEE7A7', name: 'Ivory ROS-862', cost: 2, isLocked: true},
      {color: '#FEF3A7', name: 'Red Earth ROS-285', cost: 2, isLocked: true},
      {color: '#FDD883', name: 'Honey Bun ROS-239', cost: 2, isLocked: true},
      {color: '#FDEF88', name: 'Citrus ROS-513', cost: 2, isLocked: true},
      {color: '#E9E081', name: 'Mango ROS-635', cost: 2, isLocked: true},
      {color: '#F6DA6F', name: 'French Vanilla ROS-619', cost: 2, isLocked: true},
      {color: '#FED55F', name: 'Golden Butter ROS-678', cost: 2, isLocked: true},
      {color: '#DFBC6A', name: 'Sunshine Yellow ROS-206', cost: 2, isLocked: true},
      {color: '#FEDD4F', name: 'Cheese RO-333', cost: 2, isLocked: true},
      {color: '#FEE44B', name: 'Happy Days ROS-618', cost: 2, isLocked: true},
      {color: '#FCC25C', name: 'Sweet Corn ROS-808', cost: 2, isLocked: true},
      {color: '#F5AE64', name: 'Boracay ROS-339', cost: 2, isLocked: true},
      {color: '#FBC795', name: 'Irvine Peach ROS-313', cost: 2, isLocked: true},
      {color: '#F9BD9E', name: 'Angelina ROS-363', cost: 2, isLocked: true},
      {color: '#F49171', name: 'Amber Rose ROS-350', cost: 2, isLocked: true},
      {color: '#F69C70', name: 'Red Earth ROS-285', cost: 2, isLocked: true},
      {color: '#E28D68', name: 'Bittersweet ROS-777', cost: 2, isLocked: true},
      {color: '#E27346', name: 'Sunkiss ROS-247', cost: 2, isLocked: true},
      {color: '#F27E41', name: 'Orange Twist ROS-203', cost: 2, isLocked: true},
      {color: '#F09E20', name: 'Gold Rush ROS-529', cost: 2, isLocked: true},
      {color: '#F68C1E', name: 'Lucky Orange ROS-888', cost: 2, isLocked: true},
      {color: '#EFD4B7', name: 'Candy Turf ROS-367', cost: 2, isLocked: true},
      {color: '#D4AE89', name: 'Natural Tan ROS-359', cost: 2, isLocked: true},
      {color: '#C1966C', name: 'Mocha ROS-186', cost: 2, isLocked: true},
      {color: '#A88164', name: 'Safari Brown ROS-538', cost: 2, isLocked: true},
      {color: '#875942', name: 'Terra Cotta ROS-101', cost: 2, isLocked: true},
      {color: '#724A30', name: 'Maple ROS-965', cost: 2, isLocked: true},
      {color: '#8C4122', name: 'Red Earth ROS-285', cost: 2, isLocked: true},
      {color: '#8B2F22', name: 'Victory Red ROS-889', cost: 2, isLocked: true},
      {color: '#6E2A15', name: 'Tile Red ROS-302', cost: 2, isLocked: true},
      {color: '#351D13', name: 'Choco Brown ROS-633', cost: 2, isLocked: true},
      {color: '#F9BEBA', name: 'Nicole Pink ROS-223', cost: 2, isLocked: true},
      {color: '#F5A5A4', name: 'Princess ROS-813', cost: 2, isLocked: true},
      {color: '#D1747C', name: 'Foxy ROS-393', cost: 2, isLocked: true},
      {color: '#BE535B', name: 'Watermelon ROS-168', cost: 2, isLocked: true},
      {color: '#E65041', name: 'True Orange ROS-252', cost: 2, isLocked: true},
      {color: '#C52A28', name: 'Oh So Red ROS-298', cost: 2, isLocked: true},
      {color: '#B92928', name: 'Vibrant Ruby ROS-823', cost: 2, isLocked: true},
      {color: '#D8D1A5', name: 'Antique White ROS-270', cost: 2, isLocked: true},
      {color: '#A69A82', name: 'Light Biege ROS-353', cost: 2, isLocked: true},
      {color: '#A2987F', name: 'Beige ROS-901', cost: 2, isLocked: true},
      {color: '#83796D', name: 'Arcadia ROS-757', cost: 2, isLocked: true},
      {color: '#6E7275', name: 'Stone Gray ROS-115', cost: 2, isLocked: true},
      {color: '#EDF6F3', name: 'Touch of Gray ROS-171', cost: 2, isLocked: true},
      {color: '#EDF6F3', name: 'Snow ROS-233', cost: 2, isLocked: true},
      {color: '#EBF6F2', name: 'Faith ROS-781', cost: 2, isLocked: true},
      {color: '#AEB8B0', name: 'Neutral Gray ROS-883', cost: 2, isLocked: true},
      {color: '#8CA6B7', name: 'Powder Blue ROS-389', cost: 2, isLocked: true},
      {color: '#E5F0D0', name: 'Serenity ROS-381', cost: 2, isLocked: true},
      {color: '#CAE5D6', name: 'Faraway Blue ROS-370', cost: 2, isLocked: true},
      {color: '#BBDFC5', name: 'Cool Water ROS-928', cost: 2, isLocked: true},
      {color: '#B5DAA4', name: 'Cool Mint ROS-933', cost: 2, isLocked: true},
      {color: '#9CD19B', name: 'My Way ROS-368', cost: 2, isLocked: true},
      {color: '#B6C67D', name: 'Lime ROS-138', cost: 2, isLocked: true},
      {color: '#C8DD76', name: 'Fresh Mint ROS-829', cost: 2, isLocked: true},
      {color: '#D8E265', name: 'Pistachio ROS-238', cost: 2, isLocked: true},
      {color: '#B1D362', name: 'Temptation ROS-518', cost: 2, isLocked: true},
      {color: '#95BA74', name: 'Archer Green ROS-728', cost: 2, isLocked: true},
      {color: '#338A43', name: 'Bright Green ROS-728', cost: 2, isLocked: true},
      {color: '#317157', name: 'Asian Gree ROS-929', cost: 2, isLocked: true},
      {color: '#1D5538', name: 'Baguio Green ROS-701', cost: 2, isLocked: true},
      {color: '#B7DCD4', name: 'Tiffany ROS-835', cost: 2, isLocked: true},
      {color: '#62BEAF', name: 'Aquamarine ROS-505', cost: 2, isLocked: true},
      {color: '#45767A', name: 'Maritime Blue ROS-735', cost: 2, isLocked: true},
      {color: '#72CDE0', name: 'Blue Heaven ROS-218', cost: 2, isLocked: true},
      {color: '#62C1E1', name: 'Aqua Blue ROS-587', cost: 2, isLocked: true},
      {color: '#428ECC', name: 'Blue Denim ROS-501', cost: 2, isLocked: true},
      {color: '#00a5df', name: 'Blue Ocean ROS-723', cost: 2, isLocked: true},
      {color: '#00739a', name: 'China Blue ROS-762', cost: 2, isLocked: true},
      {color: '#005689', name: 'Royal Blue ROS-301', cost: 2, isLocked: true},
      {color: '#AECDE9', name: 'Lavender ROS-309', cost: 2, isLocked: true},
      {color: '#8F7BB8', name: 'Violet ROS-801', cost: 2, isLocked: true},
      {color: '#61217F', name: 'Royal Purple ROS-909', cost: 2, isLocked: true},
      {color: '#501268', name: 'Color Purple ROS-999', cost: 2, isLocked: true}
    ];
  }
  async setupPaintColors(){
    // this.setDefaultPaintColors();
    await this.nativeStorage.setItem('paintColors', JSON.stringify(this.paintColors))
    .then(
      () => {
        console.log('First Time Setup Paint COlors Loaded!');
        this.initializePaintColors();
      },
      error => console.error('Error storing item', error)
    );
  }

  async initializePaintColors(){
    await this.nativeStorage.getItem('paintColors').then(
      data => {
        console.log(typeof data);
        console.log(data);
        this.paintColors = JSON.parse(data);
      },
      error => {
        console.error(error);
        this.setupPaintColors();
      }
    );
  }

  async addCoin(coin = 2){
    this.userData.coins += coin;
    this.nextLevel();
    await this.updateUserData();
    await this.updateGameDifficulties();
  }

  nextLevel(){
    if(this.currentSelectedDifficulty == 0){
      if(this.userData.currentEasyLevel < this.gameDifficulties[this.currentSelectedDifficulty].level.length - 1){
        this.userData.currentEasyLevel++;
        this.gameDifficulties[this.currentSelectedDifficulty].level[this.userData.currentEasyLevel].isLocked = false;
      }
    }else if(this.currentSelectedDifficulty == 1){
      if(this.userData.currentNormalLevel < this.gameDifficulties[this.currentSelectedDifficulty].level.length - 1){
        this.userData.currentNormalLevel++;
        this.gameDifficulties[this.currentSelectedDifficulty].level[this.userData.currentNormalLevel].isLocked = false;
      }
    }else if(this.currentSelectedDifficulty == 2){
      if(this.userData.currentHardLevel < this.gameDifficulties[this.currentSelectedDifficulty].level.length - 1){
        this.userData.currentHardLevel++;
        this.gameDifficulties[this.currentSelectedDifficulty].level[this.userData.currentHardLevel].isLocked = false;
      }
    }
  }

  async buyColor(color: GameColorModel){
    this.userData.coins -= color.cost;
    color.isLocked = false;
    await this.updateUserData();
    await this.updatePaintColor();
  }

  async updatePaintColor(){
    await this.nativeStorage.setItem('paintColors', JSON.stringify(this.paintColors))
    .then(
      () => {
        console.log('Paint Updated!');
      },
      error => console.error('Error updating coin', error)
    );
  }

  async updateUserData(){
    await this.nativeStorage.setItem('userData', JSON.stringify(this.userData))
    .then(
      () => {
        console.log('User Data Coins Updated!');
      },
      error => console.error('Error updating coin', error)
    );
  }

  async updateGameDifficulties(){
    await this.nativeStorage.setItem('gameDifficulties', JSON.stringify(this.gameDifficulties))
    .then(
      () => {
        console.log('Game Difficulties Updated!');
      },
      error => console.error('Error updating coin', error)
    );
  }
}
