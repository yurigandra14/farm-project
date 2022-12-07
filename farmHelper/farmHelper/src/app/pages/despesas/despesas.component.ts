import {Component, OnInit} from '@angular/core';
import {Despesa} from "../../model/Despesa";
import {DadosService} from "../Dados.service";
import {EnumPago} from "../../model/EnumStatusPagamento";


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

    constructor(private dadosService: DadosService) {
    }

    ngOnInit(){
        this.listarDespesas();
    }

    cadastrarDespesa() {
        this.ajustarStatus();
        if (this.isEditar) {
            this.dadosService.atualizarDespesa(this.formulario.id, this.formulario)
                .subscribe(() => this.listarDespesas());
            this.isEditar = false;
            return;
        }
        this.dadosService.cadastrarDespesa(this.formulario)
            .subscribe(() => this.listarDespesas());
        this.formulario = new Despesa();
    }

    deletar(id: number) {
        this.dadosService.deletarDespesa(id).subscribe(() => this.listarDespesas());
    }

    atualizar(id: number) {
        this.dadosService.obterDespesa(id)
            .subscribe(res => {
                this.formulario = new Despesa(res.fornecedor, res.descricao, res.dataPagamento, res.dataVencimento, res.formaPagamento,res.notaFiscal, res.valor, res.status)
            });
        this.isEditar = true;
    }

    listarDespesas() {
        this.dadosService.listarDespesas()
            .subscribe(
                res => this.despesas = res,
                error => console.log(error)
            )
    }

    marcarPago(despesa) {
        despesa.status = despesa.status === EnumPago.SIM ? EnumPago.NAO : EnumPago.SIM;
        this.dadosService.atualizarItemDespesa(despesa.id, despesa)
            .subscribe(res => this.listarDespesas());
    }

    private ajustarStatus() {
        if (this.formulario.status === undefined || this.formulario.status === null) {
            this.formulario.status = EnumPago.NAO;
            return;
        }
        this.formulario.status = EnumPago.SIM;
    }
}

