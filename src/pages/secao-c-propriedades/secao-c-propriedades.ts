import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Propriedades } from '../../models/propriedades';
import { SecaoC } from '../../models/secaoC';
import { SecaoCService } from '../../services/domain/secaoC.service';

/**
 * Generated class for the SecaoCPropriedadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-secao-c-propriedades',
  templateUrl: 'secao-c-propriedades.html',
})
export class SecaoCPropriedadesPage {

  secao: SecaoC = {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoCService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoCPropriedadesPage');
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
