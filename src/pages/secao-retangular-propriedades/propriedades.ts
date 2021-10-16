import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Propriedades } from '../../models/propriedades';
import { SecaoRetangular } from '../../models/secaoRetangular';
import { SecaoRetangularService } from '../../services/domain/secaoRetangular.service';

@IonicPage()
@Component({
  selector: 'page-propriedades',
  templateUrl: 'propriedades.html',
})
export class PropriedadesPage {

  secao: SecaoRetangular = {
    altura: null,
    largura: null,
  }

  propriedades: Propriedades = {
    area: null,
    inerciaxx: null,
    inerciayy: null,
    cx: null,
    cy: null
  }

  constructor(public navCtrl: NavController,
            public navParams: NavParams,
            public service: SecaoRetangularService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropriedadesPage');
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
