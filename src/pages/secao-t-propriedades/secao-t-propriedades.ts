import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Propriedades } from '../../models/propriedades';
import { SecaoT } from '../../models/secaoT';
import { SecaoTService } from '../../services/domain/secaoT.service';

/**
 * Generated class for the SecaoTPropriedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-t-propriedades',
  templateUrl: 'secao-t-propriedades.html',
})
export class SecaoTPropriedadesPage {

  secao: SecaoT = {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoTService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoTPropriedadesPage');
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
