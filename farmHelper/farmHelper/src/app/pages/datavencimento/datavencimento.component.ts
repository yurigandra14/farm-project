import { Component, OnInit } from '@angular/core';
import {PageService} from "../page.service";
import { Receitas } from '../receitas/receitas.component';

@Component({
    selector: 'datavencimento-cmp',
    moduleId: module.id,
    templateUrl: 'datavencimento.component.html'
})

export class DataVencimentoComponent implements OnInit{
    receitas: Receitas[];
    tituloTabela: string[] = [
        'ID',
        'Nota Fiscal',
        'Data Vencimento',
        'Valor'
    ];

    constructor(private pageService: PageService) {
    }

    ngOnInit(){
        this.receitas = this.pageService.listaReceitas();
    }
}