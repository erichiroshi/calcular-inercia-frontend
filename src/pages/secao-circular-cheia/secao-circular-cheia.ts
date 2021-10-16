import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecaoCircularCheia } from '../../models/secaoCircularCheia';
import { SecaoCircularCheiaService } from '../../services/domain/secaoCircularCheia.service';

@IonicPage()
@Component({
  selector: 'page-secao-circular-cheia',
  templateUrl: 'secao-circular-cheia.html',
})
export class SecaoCircularCheiaPage {

  secaoCircular: SecaoCircularCheia = {
    diametro: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoCircularCheiaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoCircularCheiaPage');
  }

  calcular() {
    this.service.setSecao(this.secaoCircular);
    this.navCtrl.push("SecaoCircularCheiaPropriedadesPage");
  }

}
