import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecaoC } from '../../models/secaoC';
import { SecaoCService } from '../../services/domain/secaoC.service';

/**
 * Generated class for the SecaoCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-c',
  templateUrl: 'secao-c.html',
})
export class SecaoCPage {

  secaoC: SecaoC = {
    alturaAlma: null,
    espessuraAlma: null,
    larguraAba: null,
    espessuraAba: null
 }

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoCService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoCPage');
  }

  calcular() {
    this.service.setSecao(this.secaoC);
    this.navCtrl.push("SecaoCPropriedadesPage");
  }
}