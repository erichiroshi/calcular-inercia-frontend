import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecaoRetangular } from '../../models/secaoRetangular';
import { SecaoRetangularService } from '../../services/domain/secaoRetangular.service';

@IonicPage()
@Component({
  selector: 'page-secao-retangular',
  templateUrl: 'secao-retangular.html',
})
export class SecaoRetangularPage {

  secaoRetangular: SecaoRetangular = {
    altura: null,
    largura: null,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: SecaoRetangularService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecaoRetangularPage');
  }

  calcular() {
    this.service.setSecao(this.secaoRetangular);
    this.navCtrl.push("PropriedadesPage");
  }

}
