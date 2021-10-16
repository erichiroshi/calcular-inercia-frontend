import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { Propriedades } from "../../models/propriedades";
import { SecaoCircularVazada } from "../../models/secaoCircularVazada";

@Injectable()
export class SecaoCircularVazadaService {

    secao: SecaoCircularVazada = {
        diametroExterno: null,
        diametroInterno: null
    }

    constructor(public http: HttpClient) {
    }

    propriedades(secao: SecaoCircularVazada): Observable<Propriedades> {
        console.log("SecaoCircularCheiaService")
        return this.http.get<Propriedades>(`${API_CONFIG.baseUrl}/secaoCircularVazado/propriedades?raioExterno=${secao.diametroExterno}&raioInterno=${secao.diametroInterno}`);
    }

    setSecao(circulo: SecaoCircularVazada) {
        this.secao.diametroExterno = circulo.diametroExterno/2;
        this.secao.diametroInterno = circulo.diametroInterno/2;
    }

    getSecao() {
        return this.secao;
    }
}