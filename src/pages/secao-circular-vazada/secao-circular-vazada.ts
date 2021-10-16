import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecaoCircularVazada } from '../../models/secaoCircularVazada';
import { SecaoCircularVazadaService } from '../../services/domain/secaoCircularVazada.service';

/**
 * Generated class for the SecaoCircularVazadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-circular-vazada',
  templateUrl: 'secao-circular-vazada.html',
})
export class SecaoCircularVazadaPage {

  secaoCircularVazada: SecaoCircularVazada = {
    diametroExterno: null,
    diametroInterno: null
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoCircularVazadaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoCircularVazadaPage');
  }

  calcular() {
    this.service.setSecao(this.secaoCircularVazada);
    this.navCtrl.push("SecaoCircularVazadaPropriedadesPage");
  }
}
