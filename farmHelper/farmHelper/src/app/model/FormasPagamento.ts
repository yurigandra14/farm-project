export class FormasPagamento {
    public id: number;
    public nomeForma: string;
    public descricaoForma: string;
    
    constructor(nome?: string, descricao?: string) {
        this.nomeForma = nome;
        this.descricaoForma = descricao;
    }

}