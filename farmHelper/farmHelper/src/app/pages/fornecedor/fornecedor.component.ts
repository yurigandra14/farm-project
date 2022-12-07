import { Component, OnInit } from '@angular/core';
import {EnumTipoRelacionamento} from "../../model/enum/EnumTipoRelacionamento";
import {Fornecedor} from "../../model/Fornecedor";
import {FornecedorService} from "../../service/fornecedor.service";
import {Categoria} from "../../model/Categoria";



@Component({
    selector: 'fornecedor-cmp',
    moduleId: module.id,
    templateUrl: 'fornecedor.component.html',
    styleUrls: ['fornecedor.component.css']
})

export class FornecedorComponent implements OnInit {
    fornecedores: Fornecedor[];
    tituloTabela: string[] =  [
        'ID',
        'Nome',
        'CNPJ',
        'Email',
        'Descrição',
        'Telefone',
        'Tipo',
        'Operações'
    ];
    formulario: Fornecedor = new Fornecedor();
    isEditar: boolean = false;

    constructor(private fornecedorService: FornecedorService) {
    }

    ngOnInit(){
        this.fornecedores = this.fornecedorService.getForncedores()
        this.fornecedorService.saveFornecedor(new Fornecedor('Yuri', 'Mão de obra manejo ordenha', "teste@gmail.com", "teste", "37998456312", '555449841321', EnumTipoRelacionamento.FORNECEDOR))
        this.fornecedorService.saveFornecedor(new Fornecedor('José Miguel', 'Minerais', "teste@gmail.com", "teste", "37998456312", '65423334', EnumTipoRelacionamento.CLIENTE))
        this.fornecedorService.saveFornecedor(new Fornecedor('Rafaela', 'Medicamentos', "teste@gmail.com", "teste", "37998456312", '66962533', EnumTipoRelacionamento.FORNECEDOR))
        this.fornecedorService.saveFornecedor(new Fornecedor('Josefina', 'Vacinas', "teste@gmail.com", "teste", "37998456312", '112345434', EnumTipoRelacionamento.FORNECEDOR))
        this.fornecedores = this.fornecedorService.getForncedores()
    }

    cadastrarDespesa() {
        if (this.isEditar) {
            this.fornecedores = this.atualizaAndBuscaFornecedores()
            this.formulario = new Fornecedor();
            this.isEditar = false;
            return;
        }
        this.fornecedores = this.salvaAndBuscaFornecedores()
        this.formulario = new Fornecedor();
    }

    salvaAndBuscaFornecedores() {
        this.fornecedorService.saveFornecedor(this.formulario)
        return this.fornecedorService.getForncedores();
    }

    atualizaAndBuscaFornecedores() {
        this.fornecedorService.atualizarFornecedor(this.formulario)
        return this.fornecedorService.getForncedores();
    }

    deletar(id: number) {
        this.fornecedorService.deletarFornecedor(id)
        this.fornecedores = this.fornecedorService.getForncedores()
    }

    atualizar(fornecedor: Fornecedor) {
        this.formulario.id = fornecedor.id;
        this.formulario.nome = fornecedor.nome;
        this.formulario.cnpj = fornecedor.cnpj;
        this.formulario.email = fornecedor.email;
        this.formulario.descricao = fornecedor.descricao;
        this.formulario.telefone = fornecedor.telefone;
        this.formulario.status = fornecedor.status;
        this.isEditar = true;
    }

    limparCampos() {
        if (this.isEditar) {
            this.isEditar = false
        }
        this.formulario = new Fornecedor();
    }

    get EnumTipoRelacionameto(): typeof EnumTipoRelacionamento {
        return EnumTipoRelacionamento;
    }
}



