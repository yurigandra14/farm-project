import { Injectable } from '@angular/core';
import {FormasPagamento} from "../model/FormasPagamento";

@Injectable({
  providedIn: 'root'
})
export class FormasPagamentoService {

  constructor() { }

  private formasPagamento: FormasPagamento[] = [];
  private indexId: number = 0

  getProximoId(): number {
    this.indexId += 1;
    return this.indexId
  }

  getFormasPagamento(): FormasPagamento[] {
    return this.formasPagamento;
  }

  saveFormasPagamento(formaPagamento: FormasPagamento): void {
    formaPagamento.id = this.getProximoId()
    this.formasPagamento.push(formaPagamento)
  }

  deletarFormasPagamento(id: number): void {
    this.formasPagamento = this.formasPagamento.filter(fornecedor => fornecedor.id !== id);
  }

  atualizarFormasPagamento(fornecedorAtualizar: FormasPagamento) {
    this.formasPagamento = this.formasPagamento.filter(fornecedor => fornecedor.id !== fornecedorAtualizar.id);
    this.formasPagamento.push(fornecedorAtualizar)
  }
}
