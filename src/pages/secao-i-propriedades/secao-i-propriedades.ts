import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Propriedades } from '../../models/propriedades';
import { SecaoI } from '../../models/secaoI';
import { SecaoIService } from '../../services/domain/secaoI.service';

/**
 * Generated class for the SecaoIPropriedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-i-propriedades',
  templateUrl: 'secao-i-propriedades.html',
})
export class SecaoIPropriedadesPage {

  secao: SecaoI = {
    alturaAlma: null,
    espessuraAlma: null,
    larguraAba: null,
    espessuraAba: null
  }
  
  propriedades: Propriedades = {
    area: null,
    inerciaxx: null,
    inerciayy: null,
    cx: null,
    cy: null
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoIService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoCircularVazadaPropriedadesPage');
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
