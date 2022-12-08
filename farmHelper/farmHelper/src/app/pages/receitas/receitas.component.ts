import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'receitas-cmp',
    moduleId: module.id,
    templateUrl: 'receitas.component.html'
})

export class ReceitasComponent implements OnInit{

    formasPagamento: string[] = ['ESCOLHA A FORMA DE PAGAMENTO','PIX', 'CHEQUE', 'DINHEIRO', 'CARTÃO'];
    receitas: Receitas[];
    tituloTabela: string[] = [
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
    formulario: Receitas = new Receitas();
    isEditar: boolean = false;
    clicked: boolean = false;

    ngOnInit(){
        this.receitas = [
            new Receitas('Yuri', 'Mão de obra manejo ordenha', new Date(2022, 11, 8), new Date(2022, 10, 15), FormaPag.DINHEIRO, '555449841321', 800,EnumPag.NAO),
            new Receitas('José Miguel', 'Minerais', new Date(2022, 11, 11), new Date(2022, 10, 13), FormaPag.DINHEIRO, '65423334', 900,EnumPag.NAO),
            new Receitas('Rafaela', 'Medicamentos', new Date(2022, 11, 17), new Date(2022, 11, 18), FormaPag.DINHEIRO, '66962533', 1500,EnumPag.NAO),
            new Receitas('Josefina', 'Vacinas', new Date(2022, 11, 22), new Date(2022, 11, 23), FormaPag.DINHEIRO, '112345434', 3600,EnumPag.NAO),

            new Receitas('José Miguel', 'Minerais', new Date(2022, 11, 11), new Date(2023, 0, 13), FormaPag.DINHEIRO, '65423334', 900,EnumPag.NAO),
        ]
    }

    cadastrarReceita() {
        console.log(this.formulario);
        if (this.isEditar) {
            this.receitas.forEach(receita => {
                if(receita.id === this.formulario.id) {
                    receita = this.formulario;
                }
            })
            this.isEditar = false;
            return;
        }
        this.formulario.id = Receitas.contador;
        this.receitas.push(this.formulario);
        this.formulario = new Receitas();
    }

    deletar(id: number) {
        this.receitas = this.receitas.filter(receita => receita.id !== id);
    }

    atualizar(receitas: Receitas) {
        this.clicked = true;
        this.isEditar = true;
        this.formulario.id = receitas.id;
        this.formulario.fornecedor = receitas.fornecedor;
        this.formulario.descricao = receitas.descricao;
        this.formulario.dataPagamento = receitas.dataPagamento;
        this.formulario.dataVencimento = receitas.dataVencimento;
        this.formulario.formaPagamento = receitas.formaPagamento;
        this.formulario.valor = receitas.valor;
        this.formulario.notaFiscal = receitas.notaFiscal;
        this.formulario.status = receitas.status;
    }

    novaReceita() {
        this.clicked = true;
        this.isEditar = false;
    }

    getReceitas(){
        return this.receitas
    }
}

export class Receitas {
    public static contador: number = 0;
    public id: number;
    public fornecedor: string;
    public descricao: string;
    public dataPagamento: Date;
    public dataVencimento: Date;
    public formaPagamento: FormaPag;
    public notaFiscal: string;
    public valor: number;
    public status: EnumPag = EnumPag.NAO;

    constructor(fornecedor?: string, descricao?: string, dataPagamento?: Date, dataVencimento?: Date, formaPagamento?: FormaPag, notaFiscal?: string, valor?: number, status?: EnumPag) {
        Receitas.contador ++;
        this.id = Receitas.contador;
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

export enum FormaPag {
    PIX = 'PIX',
    CHEQUE = 'CHEQUE',
    DINHEIRO = 'DINHEIRO',
    CARTAO = 'CARTAO'
}

export enum EnumPag {
    SIM = 1,
    NAO = 0
}
