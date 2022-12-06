export class Categoria {
    public static contador: number = 0;
    public id: number;
    public nome: string;
    public descricao: string;

    constructor(nome?: string, descricao?: string) {
        Categoria.contador ++;
        this.id = Categoria.contador;
        this.nome = nome;
        this.descricao = descricao;
    }
}
