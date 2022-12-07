import { Injectable } from '@angular/core';
import {Categoria} from "../model/Categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  private categorias: Categoria[] = [];
  private indexId: number = 0

  getProximoId(): number {
    this.indexId += 1;
    return this.indexId
  }

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  saveCategoria(categoria: Categoria): void {
    categoria.id = this.getProximoId()
    this.categorias.push(categoria)
  }

  deletarCategoria(id: number): void {
    this.categorias = this.categorias.filter(categoria => categoria.id !== id);
  }

  atualizarCategoria(categoriaAtualizar: Categoria) {
    this.categorias = this.categorias.filter(categoria => categoria.id !== categoriaAtualizar.id);
    this.categorias.push(categoriaAtualizar)
  }
}
