export class Categoria {
    public static contador: number = 0;
    public id: number;
    public nome: string;
    public descricao: string;

    constructor(nome?: string, descricao?: string) {
        this.nome = nome;
        this.descricao = descricao;
    }
}
