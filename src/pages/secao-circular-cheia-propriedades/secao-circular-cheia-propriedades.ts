import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Propriedades } from '../../models/propriedades';
import { SecaoCircularCheia } from '../../models/secaoCircularCheia';
import { SecaoCircularCheiaService } from '../../services/domain/secaoCircularCheia.service';

/**
 * Generated class for the SecaoCircularCheiaPropriedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-circular-cheia-propriedades',
  templateUrl: 'secao-circular-cheia-propriedades.html',
})
export class SecaoCircularCheiaPropriedadesPage {

  secao: SecaoCircularCheia = {
    diametro: null
  }

  propriedades: Propriedades = {
    area: null,
    inerciaxx: null,
    inerciayy: null,
    cx: null,
    cy: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoCircularCheiaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoCircularCheiaPropriedadesPage');
    this.secao = this.service.getSecao();
    console.log(this.secao);

    this.service.propriedades(this.secao)
      .subscribe(response => {
        console.log(response);
        this.propriedades = response;
      },
        error => { "erro" });
  }

}
