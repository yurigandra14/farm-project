import { Injectable } from '@angular/core';
import {Categoria} from "../model/Categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  private categorias: Categoria[] = [];

  getCategorias(): Categoria[] {
    return this.categorias;
  }

  saveCategoria(categoria: Categoria): void {
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
