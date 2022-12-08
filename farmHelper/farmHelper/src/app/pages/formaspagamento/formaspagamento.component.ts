import {Component, OnInit} from '@angular/core';
import {FormasPagamento} from "../../model/FormasPagamento";
import {FormasPagamentoService} from "../../service/formaspagamento.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'formaspagamento-cmp',
    moduleId: module.id,
    templateUrl: 'formaspagamento.component.html'
})

export class FormasPagamentoComponent implements OnInit {
    formasPagamento: FormasPagamento[];
    tituloTabela: string[] =  [
        'ID',
        'Nome',
        'Descrição'
    ];
    formulario: FormGroup = new FormGroup({});
    isEditar: boolean = false;
    temErro: boolean = false;
    
    constructor(private formasPagamentoService: FormasPagamentoService) {
    }

    ngOnInit(){
        this.formulario = new FormGroup({
            id: new FormControl(''),
            nome: new FormControl('', Validators.required),
            descricao: new FormControl('', Validators.required)
        })
        this.formasPagamento = this.formasPagamentoService.getFormasPagamento()
    }

    cadastrarFormaPagamento() {
        if (this.formulario.invalid) {
            this.temErro = true
            this.fecharModalAposCincoSegundos()
            return
        }
        if (this.isEditar) {
            this.formasPagamento = this.atualizaFormasPagamento()
            this.formulario.reset();
            this.isEditar = false;
            return;
        }
        this.formasPagamento = this.salvaFormasPagamento()
        this.formulario.reset();
    }

    salvaFormasPagamento() {
        this.formasPagamentoService.saveFormasPagamento(this.formulario.getRawValue())
        return this.formasPagamentoService.getFormasPagamento();
    }

    atualizaFormasPagamento() {
        this.formasPagamentoService.atualizarFormasPagamento(this.formulario.getRawValue())
        return this.formasPagamentoService.getFormasPagamento();
    }

    deletar(id: number) {
        this.formasPagamentoService.deletarFormasPagamento(id)
        this.formasPagamento = this.formasPagamentoService.getFormasPagamento()
    }

    atualizar(formasPagamento: FormasPagamento) {
        this.formulario.controls['id'].setValue(formasPagamento.id);
        this.formulario.controls['nome'].setValue(formasPagamento.nomeForma);
        this.formulario.controls['descricao'].setValue(formasPagamento.descricaoForma);
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
  }