import { Injectable } from '@angular/core';
import {Fornecedor} from "../model/Fornecedor";

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor() { }

  private fornecedores: Fornecedor[] = [];

  getForncedores(): Fornecedor[] {
    return this.fornecedores;
  }

  saveFornecedor(fornecedor: Fornecedor): void {
    this.fornecedores.push(fornecedor)
  }

  deletarFornecedor(id: number): void {
    this.fornecedores = this.fornecedores.filter(fornecedor => fornecedor.id !== id);
  }

  atualizarFornecedor(fornecedorAtualizar: Fornecedor) {
    this.fornecedores = this.fornecedores.filter(fornecedor => fornecedor.id !== fornecedorAtualizar.id);
    this.fornecedores.push(fornecedorAtualizar)
  }
}
