import {Injectable} from "@angular/core";
import {FormaPag, Receitas} from "./receitas/receitas.component";

@Injectable({
    providedIn: 'root'
})
export class PageService {
    constructor() {
    }
    receitas: Receitas[] = [
        new Receitas('Yuri', 'Mão de obra manejo ordenha', new Date(2022, 11, 8), new Date(2022, 11, 15), FormaPag.DINHEIRO, '555449841321', 800),
        new Receitas('José Miguel', 'Minerais', new Date(2022, 11, 11), new Date(2022, 11, 13), FormaPag.DINHEIRO, '65423334', 900),
        new Receitas('Rafaela', 'Medicamentos', new Date(2022, 11, 17), new Date(2022, 11, 18), FormaPag.DINHEIRO, '66962533', 1500),
        new Receitas('Josefina', 'Vacinas', new Date(2022, 11, 22), new Date(2022, 11, 23), FormaPag.DINHEIRO, '112345434', 3600),
    ];

    atualizarReceitas(entrada: Receitas[]): void {
        this.receitas = [];
        this.receitas = [...this.receitas, ...entrada];
    }

    listaReceitas(): Receitas[] {
        return this.receitas;
    }

}
