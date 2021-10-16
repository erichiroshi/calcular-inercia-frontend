import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { Propriedades } from "../../models/propriedades";
import { SecaoCircularCheia } from "../../models/secaoCircularCheia";

@Injectable()
export class SecaoCircularCheiaService {

    secao: SecaoCircularCheia = {
        diametro: null
    }

    constructor(public http: HttpClient) {
    }

    propriedades(secao: SecaoCircularCheia): Observable<Propriedades> {
        console.log("SecaoCircularCheiaService")
        return this.http.get<Propriedades>(`${API_CONFIG.baseUrl}/secaoCircular/propriedades?raio=${secao.diametro}`);
    }

    setSecao(circulo: SecaoCircularCheia) {
        this.secao.diametro = circulo.diametro/2;
    }

    getSecao() {
        return this.secao;
    }
}