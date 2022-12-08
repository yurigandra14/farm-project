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
    temErro: boolean = false;

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
        this.fornecedorService.getFornecedores().subscribe(res => {
            this.fornecedores = res
        })
    }

    cadastrarDespesa() {
        if (this.formulario.invalid) {
            this.temErro = true
            this.fecharModalAposCincoSegundos()
            return
        }
        if (this.isEditar) {
            this.atualizaAndBuscaFornecedores()
            this.formulario.reset();
            this.isEditar = false;
            return;
        }
        this.salvaAndBuscaFornecedores()
        this.formulario.reset();
    }

    salvaAndBuscaFornecedores() {
        this.fornecedorService.saveFornecedor(this.formulario.getRawValue()).subscribe(res => {
            this.fornecedorService.getFornecedores().subscribe(res => {
                this.fornecedores = res
            })
        })
    }

    atualizaAndBuscaFornecedores() {
        this.fornecedorService.atualizarFornecedor(this.formulario.getRawValue()).subscribe(res => {
            this.fornecedorService.getFornecedores().subscribe(res => {
                this.fornecedores = res
            })
        })
    }

    deletar(id: number) {
        this.fornecedorService.deletarFornecedor(id).subscribe(res => {
            this.fornecedorService.getFornecedores().subscribe(res => {
                this.fornecedores = res
            })
        })
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

    fecharModalAposCincoSegundos() {
        setTimeout(() => {
            this.temErro = false
        }, 5000)
    }

    get EnumTipoRelacionameto(): typeof EnumTipoRelacionamento {
        return EnumTipoRelacionamento;
    }
}



