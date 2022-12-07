import {Injectable} from "@angular/core";
import {Receitas} from "./receitas/receitas.component";

@Injectable({
    providedIn: 'root'
})
export class PageService {
    constructor() {
    }
    receitas: Receitas[] = [];

    buscaReceitas(entrada: Receitas[]): void {
        this.receitas = [];
        this.receitas = [...this.receitas, ...entrada];
    }

    listaReceitas(): Receitas[] {
        return this.receitas;
    }

}
