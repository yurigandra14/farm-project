import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Despesa} from "../model/Despesa";
import {environment} from "../../environments/environment";

@Injectable()
export class DadosService {

    private readonly urlBase = environment.url;
    constructor(private http: HttpClient) {
    }

    obterDespesa(id: number): Observable<Despesa> {
        return this.http.get<Despesa>(`${this.urlBase}/despesas/${id}`);
    }

    listarDespesas(): Observable<Despesa[]> {
        return this.http.get<Despesa[]>(`${this.urlBase}/despesas`);
    }

    cadastrarDespesa(despesa: Despesa): Observable<Despesa> {
        return this.http.post<Despesa>(`${this.urlBase}/despesas`, despesa);
    }

    atualizarDespesa(id: number, despesa: Despesa): Observable<Despesa> {
        return this.http.put<Despesa>(`${this.urlBase}/despesas/${id}`, despesa);
    }

    atualizarItemDespesa(id: number, despesa: Despesa): Observable<Despesa> {
        return this.http.patch<Despesa>(`${this.urlBase}/despesas/${id}`, despesa);
    }

    deletarDespesa(id: number): Observable<void> {
        return this.http.delete<void>(`${this.urlBase}/despesas/${id}`);
    }
}
