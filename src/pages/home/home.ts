import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  secaoRetangular() {
    this.navCtrl.push("SecaoRetangularPage");
  }
  secaoRetangularVazada() {
    this.navCtrl.push("SecaoRetangularVazadaPage");
  }
  secaoCircularCheia() {
    this.navCtrl.push("SecaoCircularCheiaPage");
  }
  secaoCircularVazada() {
    this.navCtrl.push("SecaoCircularVazadaPage");
  }
  secaoI() {
    this.navCtrl.push("SecaoIPage");
  }
  secaoC() {
    this.navCtrl.push("SecaoCPage");
  }
  secaoT() {
    this.navCtrl.push("SecaoTPage");
  }
}
