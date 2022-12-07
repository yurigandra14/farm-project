import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'despesas-cmp',
    moduleId: module.id,
    templateUrl: 'despesas.component.html'
})

export class DespesasComponent implements OnInit {
    formasPagamento: string[] = ['ESCOLHA A FORMA DE PAGAMENTO','PIX', 'CHEQUE', 'DINHEIRO', 'CARTÃO'];
    despesas: Despesas[];
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
    formulario: Despesas = new Despesas();
    isEditar: boolean = false;

    ngOnInit(){
        this.despesas = [
            new Despesas('Yuri', 'Mão de obra manejo ordenha', new Date(2022, 11, 8), new Date(2022, 11, 15), FormaPagamento.DINHEIRO, '555449841321', 800),
            new Despesas('José Miguel', 'Minerais', new Date(2022, 11, 11), new Date(2022, 11, 13), FormaPagamento.DINHEIRO, '65423334', 900),
            new Despesas('Rafaela', 'Medicamentos', new Date(2022, 11, 17), new Date(2022, 11, 18), FormaPagamento.DINHEIRO, '66962533', 1500),
            new Despesas('Josefina', 'Vacinas', new Date(2022, 11, 22), new Date(2022, 11, 23), FormaPagamento.DINHEIRO, '112345434', 3600),
        ]
    }

    cadastrarDespesa() {
        console.log(this.formulario);
        if (this.isEditar) {
            this.despesas.forEach(despesa => {
                if(despesa.id === this.formulario.id) {
                    despesa = this.formulario;
                }
            })
            this.isEditar = false;
            return;
        }
        this.formulario.id = Despesas.contador;
        this.despesas.push(this.formulario);
        this.formulario = new Despesas();
    }

    deletar(id: number) {
        this.despesas = this.despesas.filter(despesa => despesa.id !== id);
    }

    atualizar(despesa: Despesas) {
        console.log(despesa);
        this.formulario.id = despesa.id;
        this.formulario.fornecedor = despesa.fornecedor;
        this.formulario.descricao = despesa.descricao;
        this.formulario.dataPagamento = despesa.dataPagamento;
        this.formulario.dataVencimento = despesa.dataVencimento;
        this.formulario.formaPagamento = despesa.formaPagamento;
        this.isEditar = true;
    }
}

export class Despesas {
    public static contador: number = 0;
    public id: number;
    public fornecedor: string;
    public descricao: string;
    public dataPagamento: Date;
    public dataVencimento: Date;
    public formaPagamento: FormaPagamento;
    public notaFiscal: string;
    public valor: number;
    public status: EnumPago = EnumPago.NAO;

    constructor(fornecedor?: string, descricao?: string, dataPagamento?: Date, dataVencimento?: Date, formaPagamento?: FormaPagamento, notaFiscal?: string, valor?: number, status?: EnumPago) {
        Despesas.contador ++;
        this.id = Despesas.contador;
        this.fornecedor = fornecedor;
        this.descricao = descricao;
        this.dataPagamento = dataPagamento;
        this.dataVencimento = dataVencimento;
        this.formaPagamento = formaPagamento;
        this.notaFiscal = notaFiscal;
        this.valor = valor;
        this.status = status;

    }

}

export enum FormaPagamento {
    PIX = 'PIX',
    CHEQUE = 'CHEQUE',
    DINHEIRO = 'DINHEIRO',
    CARTAO = 'CARTAO'
}

export enum EnumPago {
    SIM = 1,
    NAO = 0
}