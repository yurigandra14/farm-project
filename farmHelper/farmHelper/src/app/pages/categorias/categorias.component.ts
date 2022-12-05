import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/enum/Categoria";



@Component({
    selector: 'categorias-cmp',
    moduleId: module.id,
    templateUrl: 'categorias.component.html'
})

export class CategoriaComponent implements OnInit {
    categorias: Categoria[];
    tituloTabela: string[] =  [
        'ID',
        'Nome',
        'Descrição',
        'Operações',
    ];
    formulario: Categoria = new Categoria();
    isEditar: boolean = false;

    ngOnInit(){
        this.categorias = [
            new Categoria('Yuri', 'Mão de obra manejo ordenha'),
            new Categoria('José Miguel', 'Minerais'),
            new Categoria('Rafaela', 'Medicamentos'),
            new Categoria('Josefina', 'Vacinas'),
        ]
    }

    cadastrarDespesa() {
        if (this.isEditar) {
            this.categorias.forEach(despesa => {
                if(despesa.id === this.formulario.id) {
                    despesa = this.formulario;
                }
            })
            this.isEditar = false;
            return;
        }
        this.formulario.id = Categoria.contador;
        this.categorias.push(this.formulario);
        this.formulario = new Categoria();
    }

    deletar(id: number) {
        this.categorias = this.categorias.filter(despesa => despesa.id !== id);
    }

    atualizar(despesa: Categoria) {
        console.log(despesa);
        this.formulario.id = despesa.id;
        this.formulario.nome = despesa.nome;
        this.formulario.descricao = despesa.descricao;
        this.isEditar = true
    }
}
