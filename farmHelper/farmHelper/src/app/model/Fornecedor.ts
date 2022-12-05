import {EnumTipoRelacionamento} from "./enum/EnumTipoRelacionamento";

export class Fornecedor {
    public static contador: number = 0;
    public id: number;
    public nome: string;
    public cnpj: string;
    public email: string;
    public descricao: string;
    public telefone: string;
    public status: EnumTipoRelacionamento = EnumTipoRelacionamento.FORNECEDOR;

    constructor(nome?: string, cnpj?: string, email?: string, descricao?: string, telefone?: string, valor?: string, status?: EnumTipoRelacionamento) {
        Fornecedor.contador ++;
        this.id = Fornecedor.contador;
        this.nome = nome;
        this.cnpj = cnpj;
        this.email = email;
        this.descricao = descricao;
        this.telefone = telefone;
        this.status = status;

    }

}