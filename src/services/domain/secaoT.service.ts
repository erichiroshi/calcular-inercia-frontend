import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { Propriedades } from "../../models/propriedades";
import { SecaoT } from "../../models/secaoT";

@Injectable()
export class SecaoTService {

    secao: SecaoT = {
        alturaAlma: null,
        espessuraAlma: null,
        larguraAba: null,
        espessuraAba: null
      }

    constructor(public http: HttpClient) {
    }

    propriedades(secao: SecaoT): Observable<Propriedades> {
        console.log("SecaoTService")
        console.log(secao)
        return this.http.get<Propriedades>(`${API_CONFIG.baseUrl}/secaoT/propriedades?larguraAlma=${secao.espessuraAlma}&alturaAlma=${secao.alturaAlma}&larguraAbaInferior=${secao.larguraAba}&alturaAbaInferior=${secao.espessuraAba}`);
    }
    setSecao(secaoT: SecaoT) {
        this.secao.alturaAlma = secaoT.alturaAlma;
        this.secao.espessuraAlma = secaoT.espessuraAlma;
        this.secao.larguraAba = secaoT.larguraAba;
        this.secao.espessuraAba = secaoT.espessuraAba;
    }

    getSecao() {
        return this.secao;
    }
}