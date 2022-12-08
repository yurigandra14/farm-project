import { Injectable } from '@angular/core';
import {Fornecedor} from "../model/Fornecedor";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categoria} from "../model/Categoria";

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private readonly urlBase = environment.url;

  constructor(private http: HttpClient) { }

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.urlBase}/fornecedor`);
  }

  saveFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(`${this.urlBase}/fornecedor`, fornecedor);
  }

  atualizarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(`${this.urlBase}/fornecedor/${fornecedor.id}`, fornecedor);
  }

  deletarFornecedor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/fornecedor/${id}`);
  }
}
