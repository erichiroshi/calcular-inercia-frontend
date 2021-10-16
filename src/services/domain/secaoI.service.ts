import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { Propriedades } from "../../models/propriedades";
import { SecaoI } from "../../models/secaoI";

@Injectable()
export class SecaoIService {

    secao: SecaoI = {
        alturaAlma: null,
        espessuraAlma: null,
        larguraAba: null,
        espessuraAba: null
      }

    constructor(public http: HttpClient) {
    }

    propriedades(secao: SecaoI): Observable<Propriedades> {
        console.log("SecaoIService")
        console.log(secao)
        return this.http.get<Propriedades>(`${API_CONFIG.baseUrl}/secaoI/propriedades?larguraAlma=${secao.espessuraAlma}&alturaAlma=${secao.alturaAlma}&larguraAbaInferior=${secao.larguraAba}&alturaAbaInferior=${secao.espessuraAba}`);
    }
    setSecao(secaoI: SecaoI) {
        this.secao.alturaAlma = secaoI.alturaAlma;
        this.secao.espessuraAlma = secaoI.espessuraAlma;
        this.secao.larguraAba = secaoI.larguraAba;
        this.secao.espessuraAba = secaoI.espessuraAba;
    }

    getSecao() {
        return this.secao;
    }
}