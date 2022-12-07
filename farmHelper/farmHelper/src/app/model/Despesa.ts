import {FormaPagamento} from "./FormaPagamento";

export class Despesa {
    public id: number;
    public fornecedor: string;
    public descricao: string;
    public dataPagamento: Date;
    public dataVencimento: Date;
    public formaPagamento: FormaPagamento;
    public notaFiscal: string;
    public valor: number;
    public status: boolean = false;

    constructor() { }

}