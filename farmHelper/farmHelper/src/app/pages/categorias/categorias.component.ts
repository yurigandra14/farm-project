import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/Categoria";
import {CategoriaService} from "../../service/categoria.service";



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


    constructor(private categoriaService: CategoriaService) {
    }

    ngOnInit(){
        this.categorias = this.categoriaService.getCategorias()
        this.categoriaService.saveCategoria(new Categoria('Ordenha', 'Mão de obra manejo ordenha'))
        this.categoriaService.saveCategoria(new Categoria('Manejo Leiteiro', 'Mão de obra manejo ordenha'))
        this.categoriaService.saveCategoria(new Categoria('Teste', 'Mão de obra manejo ordenha'))
        this.categoriaService.saveCategoria(new Categoria('teste2', 'Mão de obra manejo ordenha'))
        this.categorias = this.categoriaService.getCategorias();
    }

    cadastrarCategoria() {
        if (this.isEditar) {
            this.categorias = this.atualizaAndBuscaCategorias()
            this.isEditar = false;
            return;
        }
        this.categorias = this.salvaAndBuscaCategorias()
        this.formulario = new Categoria();
    }

    salvaAndBuscaCategorias() {
        this.formulario.id = Categoria.contador;
        this.categoriaService.saveCategoria(this.formulario)
        return this.categoriaService.getCategorias();
    }

    atualizaAndBuscaCategorias() {
        this.categoriaService.atualizarCategoria(this.formulario)
        return this.categoriaService.getCategorias();
    }

    deletar(id: number) {
        this.categoriaService.deletarCategoria(id)
        this.categorias = this.categoriaService.getCategorias()
    }

    atualizar(despesa: Categoria) {
        this.formulario.id = despesa.id;
        this.formulario.nome = despesa.nome;
        this.formulario.descricao = despesa.descricao;
        this.isEditar = true
    }

    limparCampos() {
        if (this.isEditar) {
            this.isEditar = false
        }
        this.formulario = new Categoria();
    }
}
