import {Component, OnInit} from '@angular/core';
import {Despesa} from "../../model/Despesa";
import {DadosService} from "../Dados.service";


@Component({
    selector: 'despesas-cmp',
    moduleId: module.id,
    templateUrl: 'despesas.component.html'
})

export class DespesasComponent implements OnInit {
    formasPagamento: string[] = ['ESCOLHA A FORMA DE PAGAMENTO','PIX', 'CHEQUE', 'DINHEIRO', 'CARTÃO'];
    despesas: Despesa[];
    tituloTabela: string[] =  [
        'ID',
        'Fornecedor',
        'Descrição',
        'Data Pagamento',
        'Data Vencimento',
        'Forma de Pagamento',
        'Nota Fiscal',
        'Valor',
        'Pago ?',
        'Operações'
    ];
    formulario: Despesa = new Despesa();
    isEditar: boolean = false;
    clicked: boolean = false;

    ngOnInit(){
        this.listarDespesas();
    }

    constructor(private dadosService: DadosService) {
    }

    cadastrarDespesa() {
        if (this.isEditar) {
            this.dadosService.atualizarDespesa(this.formulario.id, this.formulario)
                .subscribe(() => this.listarDespesas());
            this.fecharDialog();
            return;
        }
        this.dadosService.cadastrarDespesa(this.formulario)
            .subscribe(() => this.listarDespesas());
        this.fecharDialog();
        this.formulario = new Despesa();
    }

    deletar(id: number) {
        this.dadosService.deletarDespesa(id).subscribe(() => this.listarDespesas());
    }

    atualizar(id: number) {
        this.isEditar = true;
        this.clicked = true;
        this.dadosService.obterDespesa(id)
            .subscribe(res => {
                this.formulario = res
            });
    }

    listarDespesas() {
        this.dadosService.listarDespesas()
            .subscribe(
                res => this.despesas = res,
                error => console.log(error)
            )
    }

    marcarPago(despesa) {
        despesa.status = despesa.status !== true;
        this.dadosService.atualizarItemDespesa(despesa.id, despesa)
            .subscribe(res => this.listarDespesas());
    }

    fecharDialog() {
        this.clicked = false;
        this.isEditar = false;
    }

    novaDespesa() {
        this.formulario = new Despesa();
        this.clicked = true;
        this.isEditar = false;
    }
}

