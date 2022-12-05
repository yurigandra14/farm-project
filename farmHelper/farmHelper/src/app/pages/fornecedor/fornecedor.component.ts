import { Component, OnInit } from '@angular/core';
import {EnumTipoRelacionamento} from "../../model/enum/EnumTipoRelacionamento";
import {Fornecedor} from "../../model/Fornecedor";



@Component({
    selector: 'fornecedor-cmp',
    moduleId: module.id,
    templateUrl: 'fornecedor.component.html'
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

    ngOnInit(){
        this.fornecedores = [
            new Fornecedor('Yuri', 'Mão de obra manejo ordenha', "teste@gmail.com", "teste", EnumTipoRelacionamento.FORNECEDOR, '555449841321', EnumTipoRelacionamento.FORNECEDOR),
            new Fornecedor('José Miguel', 'Minerais', "teste@gmail.com", "teste", EnumTipoRelacionamento.CLIENTE, '65423334', EnumTipoRelacionamento.CLIENTE),
            new Fornecedor('Rafaela', 'Medicamentos', "teste@gmail.com", "teste", EnumTipoRelacionamento.FORNECEDOR, '66962533', EnumTipoRelacionamento.FORNECEDOR),
            new Fornecedor('Josefina', 'Vacinas', "teste@gmail.com", "teste", EnumTipoRelacionamento.FORNECEDOR, '112345434', EnumTipoRelacionamento.FORNECEDOR),
        ]
    }

    cadastrarDespesa() {
        if (this.isEditar) {
            this.fornecedores.forEach(fornecedor => {
                if(fornecedor.id === this.formulario.id) {
                    fornecedor = this.formulario;
                }
            })
            this.isEditar = false;
            return;
        }
        this.formulario.id = Fornecedor.contador;
        this.fornecedores.push(this.formulario);
        this.formulario = new Fornecedor();
    }

    deletar(id: number) {
        this.fornecedores = this.fornecedores.filter(fornecedor => fornecedor.id !== id);
    }

    atualizar(fornecedor: Fornecedor) {
        this.formulario.id = fornecedor.id;
        this.formulario.nome = fornecedor.nome;
        this.formulario.cnpj = fornecedor.cnpj;
        this.formulario.email = fornecedor.email;
        this.formulario.descricao = fornecedor.descricao;
        this.formulario.telefone = fornecedor.telefone;
        this.isEditar = true;
    }

    get EnumTipoRelacionameto(): typeof EnumTipoRelacionamento {
        return EnumTipoRelacionamento;
    }
}



