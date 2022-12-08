import { Component, OnInit } from '@angular/core';
import {EnumTipoRelacionamento} from "../../model/enum/EnumTipoRelacionamento";
import {Fornecedor} from "../../model/Fornecedor";
import {FornecedorService} from "../../service/fornecedor.service";
import {Categoria} from "../../model/Categoria";
import {FormControl, FormGroup, Validators} from "@angular/forms";



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
    formulario: FormGroup = new FormGroup({});
    isEditar: boolean = false;

    constructor(private fornecedorService: FornecedorService) {
    }

    ngOnInit(){
        this.formulario = new FormGroup({
            id: new FormControl(''),
            nome: new FormControl('', Validators.required),
            cnpj: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            descricao: new FormControl('', Validators.required),
            telefone: new FormControl('', Validators.required),
            status: new FormControl('', Validators.required),
        })
        this.fornecedores = this.fornecedorService.getForncedores()
        this.fornecedorService.saveFornecedor(new Fornecedor('Yuri', 'Mão de obra manejo ordenha', "teste@gmail.com", "teste", "37998456312", '555449841321', EnumTipoRelacionamento.FORNECEDOR))
        this.fornecedorService.saveFornecedor(new Fornecedor('José Miguel', 'Minerais', "teste@gmail.com", "teste", "37998456312", '65423334', EnumTipoRelacionamento.CLIENTE))
        this.fornecedorService.saveFornecedor(new Fornecedor('Rafaela', 'Medicamentos', "teste@gmail.com", "teste", "37998456312", '66962533', EnumTipoRelacionamento.FORNECEDOR))
        this.fornecedorService.saveFornecedor(new Fornecedor('Josefina', 'Vacinas', "teste@gmail.com", "teste", "37998456312", '112345434', EnumTipoRelacionamento.FORNECEDOR))
        this.fornecedores = this.fornecedorService.getForncedores()
    }

    cadastrarDespesa() {
        if (this.formulario.invalid) {
            return
        }
        if (this.isEditar) {
            this.fornecedores = this.atualizaAndBuscaFornecedores()
            this.formulario.reset();
            this.isEditar = false;
            return;
        }
        this.fornecedores = this.salvaAndBuscaFornecedores()
        this.formulario.reset();
    }

    salvaAndBuscaFornecedores() {
        this.fornecedorService.saveFornecedor(this.formulario.getRawValue())
        return this.fornecedorService.getForncedores();
    }

    atualizaAndBuscaFornecedores() {
        this.fornecedorService.atualizarFornecedor(this.formulario.getRawValue())
        return this.fornecedorService.getForncedores();
    }

    deletar(id: number) {
        this.fornecedorService.deletarFornecedor(id)
        this.fornecedores = this.fornecedorService.getForncedores()
    }

    atualizar(fornecedor: Fornecedor) {
        this.formulario.controls['id'].setValue(fornecedor.id);
        this.formulario.controls['nome'].setValue(fornecedor.nome);
        this.formulario.controls['cnpj'].setValue(fornecedor.cnpj);
        this.formulario.controls['email'].setValue(fornecedor.email);
        this.formulario.controls['descricao'].setValue(fornecedor.descricao);
        this.formulario.controls['telefone'].setValue(fornecedor.telefone);
        this.formulario.controls['status'].setValue(fornecedor.status);
        this.isEditar = true;
    }

    limparCampos() {
        if (this.isEditar) {
            this.isEditar = false
        }
        this.formulario.reset();
    }

    get EnumTipoRelacionameto(): typeof EnumTipoRelacionamento {
        return EnumTipoRelacionamento;
    }
}



