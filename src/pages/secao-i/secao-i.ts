import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecaoI } from '../../models/secaoI';
import { SecaoIService } from '../../services/domain/secaoI.service';

/**
 * Generated class for the SecaoIPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-i',
  templateUrl: 'secao-i.html',
})
export class SecaoIPage {

  secaoI: SecaoI = {
    alturaAlma: null,
    espessuraAlma: null,
    larguraAba: null,
    espessuraAba: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoIService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoIPage');
  }

  calcular() {
    this.service.setSecao(this.secaoI);
    this.navCtrl.push("SecaoIPropriedadesPage");
  }
}
