import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Propriedades } from '../../models/propriedades';
import { SecaoRetangularVazada } from '../../models/secaoRetangularVazada';
import { SecaoRetangularVazadaService } from '../../services/domain/secaoRetangularVazada.service';

@IonicPage()
@Component({
  selector: 'page-secao-retangular-vazada-propriedades',
  templateUrl: 'secao-retangular-vazada-propriedades.html',
})
export class SecaoRetangularVazadaPropriedadesPage {

  secao: SecaoRetangularVazada = {
    larguraExterna: null,
    alturaExterna: null,
    larguraInterna: null,
    alturaInterna: null
  }

  propriedades: Propriedades = {
    area: null,
    inerciaxx: null,
    inerciayy: null,
    cx: null,
    cy: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoRetangularVazadaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoRetangularVazadaPropriedadesPage');
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


