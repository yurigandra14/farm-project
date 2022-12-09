import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/Categoria";
import {CategoriaService} from "../../service/categoria.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";



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
    formulario: FormGroup = new FormGroup({});
    isEditar: boolean = false;


    constructor(private categoriaService: CategoriaService) {
    }

    ngOnInit(){
        this.formulario = new FormGroup({
            id: new FormControl(''),
            nome: new FormControl('', Validators.required),
            descricao: new FormControl('', Validators.required)
        })
        this.categorias = this.categoriaService.getCategorias()
        this.categoriaService.saveCategoria(new Categoria('Ordenha', 'Mão de obra manejo ordenha'))
        this.categoriaService.saveCategoria(new Categoria('Manejo Leiteiro', 'Mão de obra manejo ordenha'))
        this.categoriaService.saveCategoria(new Categoria('Teste', 'Mão de obra manejo ordenha'))
        this.categoriaService.saveCategoria(new Categoria('teste2', 'Mão de obra manejo ordenha'))
        this.categorias = this.categoriaService.getCategorias();
    }

    cadastrarCategoria() {
        if (this.formulario.invalid) {
            return
        }
        if (this.isEditar) {
            this.categorias = this.atualizaAndBuscaCategorias()
            this.isEditar = false;
            this.formulario.reset();
            return;
        }
        this.categorias = this.salvaAndBuscaCategorias()
        this.formulario.reset();
    }

    salvaAndBuscaCategorias() {
        this.categoriaService.saveCategoria(this.formulario.getRawValue())
        return this.categoriaService.getCategorias();
    }

    atualizaAndBuscaCategorias() {
        this.categoriaService.atualizarCategoria(this.formulario.getRawValue())
        return this.categoriaService.getCategorias();
    }

    deletar(id: number) {
        this.categoriaService.deletarCategoria(id)
        this.categorias = this.categoriaService.getCategorias()
    }

    atualizar(despesa: Categoria) {
        this.formulario.controls['id'].setValue(despesa.id);
        this.formulario.controls['nome'].setValue(despesa.nome);
        this.formulario.controls['descricao'].setValue(despesa.descricao);
        this.isEditar = true
    }

    limparCampos() {
        if (this.isEditar) {
            this.isEditar = false
        }
        this.formulario.reset();
    }
}
