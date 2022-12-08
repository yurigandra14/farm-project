import { Injectable } from '@angular/core';
import {Categoria} from "../model/Categoria";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly urlBase = environment.url;

  constructor(private http: HttpClient) {
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.urlBase}/categorias`);
  }

  saveCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.urlBase}/categorias`, categoria);
  }

  atualizarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.urlBase}/categorias/${categoria.id}`, categoria);
  }

  deletarCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/categorias/${id}`);
  }
}
