import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { Propriedades } from "../../models/propriedades";
import { SecaoC } from "../../models/secaoC";

@Injectable()
export class SecaoCService {

    secao: SecaoC = {
        alturaAlma: null,
        espessuraAlma: null,
        larguraAba: null,
        espessuraAba: null
      }

    constructor(public http: HttpClient) {
    }

    propriedades(secao: SecaoC): Observable<Propriedades> {
        console.log("SecaoCService")
        console.log(secao)
        return this.http.get<Propriedades>(`${API_CONFIG.baseUrl}/secaoC/propriedades?larguraAlma=${secao.espessuraAlma}&alturaAlma=${secao.alturaAlma}&larguraAbaInferior=${secao.larguraAba}&alturaAbaInferior=${secao.espessuraAba}`);
    }
    setSecao(secaoI: SecaoC) {
        this.secao.alturaAlma = secaoI.alturaAlma;
        this.secao.espessuraAlma = secaoI.espessuraAlma;
        this.secao.larguraAba = secaoI.larguraAba;
        this.secao.espessuraAba = secaoI.espessuraAba;
    }

    getSecao() {
        return this.secao;
    }
}