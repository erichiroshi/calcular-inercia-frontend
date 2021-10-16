import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecaoT } from '../../models/secaoT';
import { SecaoTService } from '../../services/domain/secaoT.service';

/**
 * Generated class for the SecaoTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-t',
  templateUrl: 'secao-t.html',
})
export class SecaoTPage {

  secaoT: SecaoT = {
    alturaAlma: null,
    espessuraAlma: null,
    larguraAba: null,
    espessuraAba: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoTService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoTPage');
  }

  calcular() {
    this.service.setSecao(this.secaoT);
    this.navCtrl.push("SecaoTPropriedadesPage");
  }

}
