import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { Propriedades } from "../../models/propriedades";
import { SecaoRetangularVazada } from "../../models/secaoRetangularVazada";

@Injectable()
export class SecaoRetangularVazadaService {

    secao: SecaoRetangularVazada = {
        larguraExterna: null,
        alturaExterna: null,
        larguraInterna: null,
        alturaInterna: null
    }

    constructor(public http: HttpClient) {
    }

    propriedades(secao: SecaoRetangularVazada): Observable<Propriedades> {
        console.log("SecaoRetangularVazadaService")
        console.log(secao)
        return this.http.get<Propriedades>(`${API_CONFIG.baseUrl}/secaoCaixao/propriedades?larguraExterna=${secao.larguraExterna}&alturaExterna=${secao.alturaExterna}&larguraInterna=${secao.larguraInterna}&alturaInterna=${secao.alturaInterna}`);
    }

    setSecao(retangularVazado: SecaoRetangularVazada) {
        this.secao.larguraExterna = retangularVazado.larguraExterna;
        this.secao.alturaExterna = retangularVazado.alturaExterna;
        this.secao.larguraInterna = retangularVazado.larguraInterna;
        this.secao.alturaInterna = retangularVazado.alturaInterna;
    }

    getSecao() {
        return this.secao;
    }
}