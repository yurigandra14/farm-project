import { Component, OnInit } from '@angular/core';
import {Categoria} from "../../model/Categoria";
import {CategoriaService} from "../../service/categoria.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
    selector: 'categorias-cmp',
    moduleId: module.id,
    templateUrl: 'categorias.component.html',
    styleUrls: ['categorias.component.css']
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
    temErro: boolean = false;

    constructor(private categoriaService: CategoriaService) {
    }

    ngOnInit(){
        this.formulario = new FormGroup({
            id: new FormControl(''),
            nome: new FormControl('', Validators.required),
            descricao: new FormControl('', Validators.required)
        })
        this.categoriaService.getCategorias().subscribe(res => {
            this.categorias = res
        })
    }

    cadastrarCategoria() {
        if (this.formulario.invalid) {
            this.temErro = true
            this.fecharModalAposCincoSegundos()
            return
        }
        if (this.isEditar) {
            this.atualizaAndBuscaCategorias()
            this.isEditar = false;
            this.formulario.reset();
            return;
        }
        this.salvaAndBuscaCategorias()
        this.formulario.reset();
    }

    salvaAndBuscaCategorias() {
        this.categoriaService.saveCategoria(this.formulario.getRawValue()).subscribe(res => {
            this.buscarCategorias()
        })
    }

    atualizaAndBuscaCategorias() {
        this.categoriaService.atualizarCategoria(this.formulario.getRawValue()).subscribe(res => {
            this.buscarCategorias()
        })
    }

    buscarCategorias(){
        this.categoriaService.getCategorias().subscribe(res => {
            this.categorias = res
        })
    }

    deletar(id: number) {
        this.categoriaService.deletarCategoria(id).subscribe(res => {
            this.buscarCategorias()
        })
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

    fecharModalAposCincoSegundos() {
        setTimeout(() => {
            this.temErro = false
        }, 5000)
    }
}
