import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { Propriedades } from "../../models/propriedades";
import { SecaoRetangular } from "../../models/secaoRetangular";

@Injectable()
export class SecaoRetangularService {

    secao: SecaoRetangular = {
        altura: null,
        largura: null,
    }

    constructor(public http: HttpClient) {
    }

    propriedades(secao: SecaoRetangular): Observable<Propriedades> {
        console.log("SecaoRetangularService")
        return this.http.get<Propriedades>(`${API_CONFIG.baseUrl}/secaoRetangular/propriedades?altura=${secao.altura}&largura=${secao.largura}`);
    }

    setSecao(retangulo:SecaoRetangular){
        this.secao.altura= retangulo.altura;
        this.secao.largura= retangulo.largura;    
    }

    getSecao(){
        return this.secao;
    }
}