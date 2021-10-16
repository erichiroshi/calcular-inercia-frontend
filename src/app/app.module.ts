import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SecaoRetangularService } from '../services/domain/secaoRetangular.service';
import { SecaoRetangularVazadaService } from '../services/domain/secaoRetangularVazada.service';
import { SecaoCircularCheiaService } from '../services/domain/secaoCircularCheia.service';
import { SecaoCircularVazadaService } from '../services/domain/secaoCircularVazada.service';
import { SecaoIService } from '../services/domain/secaoI.service';
import { SecaoCService } from '../services/domain/secaoC.service';
import { SecaoTService } from '../services/domain/secaoT.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SecaoRetangularService,
    SecaoRetangularVazadaService,
    SecaoCircularCheiaService,
    SecaoCircularVazadaService,
    SecaoIService,
    SecaoCService,
    SecaoTService
  ]
})
export class AppModule { }
