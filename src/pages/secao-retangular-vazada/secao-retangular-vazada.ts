import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecaoRetangularVazada } from '../../models/secaoRetangularVazada';
import { SecaoRetangularVazadaService } from '../../services/domain/secaoRetangularVazada.service';

@IonicPage()
@Component({
  selector: 'page-secao-retangular-vazada',
  templateUrl: 'secao-retangular-vazada.html',
})
export class SecaoRetangularVazadaPage {
  secaoRetangularVazada: SecaoRetangularVazada = {
    larguraExterna: null,
    alturaExterna: null,
    larguraInterna: null,
    alturaInterna: null
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoRetangularVazadaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoRetangularVazadaPage');
  }

  calcular() {
    console.log(this.secaoRetangularVazada)
    this.service.setSecao(this.secaoRetangularVazada);
    this.navCtrl.push("SecaoRetangularVazadaPropriedadesPage");
  }

}
