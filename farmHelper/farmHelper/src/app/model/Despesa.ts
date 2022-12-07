import {FormaPagamento} from "./FormaPagamento";
import {EnumPago} from "./EnumStatusPagamento";

export class Despesa {
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
        this.id = Despesa.contador;
        this.fornecedor = fornecedor;
        this.descricao = descricao;
        this.dataPagamento = dataPagamento;
        this.dataVencimento = dataVencimento;
        this.formaPagamento = formaPagamento;
        this.notaFiscal = notaFiscal;
        this.valor = valor;
        this.status = status;
        console.log(status);

    }

}