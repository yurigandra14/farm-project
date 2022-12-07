import { Component, OnInit } from '@angular/core';
import {PageService} from "../page.service";


@Component({
    selector: 'receitas-cmp',
    moduleId: module.id,
    templateUrl: 'receitas.component.html'
})

export class ReceitasComponent implements OnInit{

    constructor(private pageService: PageService) {
    }

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
        this.receitas = this.pageService.listaReceitas();
    }

    cadastrarReceita() {
        if (this.isEditar) {
            this.receitas.forEach(receita => {
                if(receita.id === this.formulario.id) {
                    this.receitas = this.receitas.filter(item => item.id != receita.id);
                }
            })
            this.receitas.push(this.formulario);
            this.isEditar = false;
            this.clicked = false;
            this.pageService.atualizarReceitas(this.receitas);
            return;
        }
        this.formulario.id = Receitas.contador;
        this.receitas.push(this.formulario);
        this.formulario = new Receitas();
        this.clicked = false;
        this.pageService.atualizarReceitas(this.receitas);
    }

    deletar(id: number) {
        this.receitas = this.receitas.filter(receita => receita.id !== id);
        this.pageService.atualizarReceitas(this.receitas);
    }

    atualizar(receitas: Receitas) {
        this.clicked = true;
        this.isEditar = true;
        this.formulario.id = receitas.id;
    }

    novaReceita() {
        this.clicked = true;
        this.isEditar = false;
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
