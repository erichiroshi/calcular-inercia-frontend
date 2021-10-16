import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Propriedades } from '../../models/propriedades';
import { SecaoCircularVazada } from '../../models/secaoCircularVazada';
import { SecaoCircularVazadaService } from '../../services/domain/secaoCircularVazada.service';

/**
 * Generated class for the SecaoCircularVazadaPropriedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-circular-vazada-propriedades',
  templateUrl: 'secao-circular-vazada-propriedades.html',
})
export class SecaoCircularVazadaPropriedadesPage {

  secao: SecaoCircularVazada = {
    diametroExterno: null,
    diametroInterno: null
  }

  propriedades: Propriedades = {
    area: null,
    inerciaxx: null,
    inerciayy: null,
    cx: null,
    cy: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoCircularVazadaService) {
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
