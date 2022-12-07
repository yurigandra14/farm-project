import {FormaPagamento} from "./FormaPagamento";
import {EnumPago} from "./EnumStatusPagamento";

export class Despesa {
    public id: number;
    public fornecedor: string;
    public descricao: string;
    public dataPagamento: Date;
    public dataVencimento: Date;
    public formaPagamento: FormaPagamento;
    public notaFiscal: string;
    public valor: number;
    public status: EnumPago = EnumPago.NAO;

    constructor() { }

}