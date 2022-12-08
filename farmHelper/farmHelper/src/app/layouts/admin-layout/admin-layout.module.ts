import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReceitasComponent} from "../../pages/receitas/receitas.component";
import {DespesasComponent} from "../../pages/despesas/despesas.component";
import {CategoriaComponent} from "../../pages/categorias/categorias.component";
import {FornecedorComponent} from "../../pages/fornecedor/fornecedor.component";
import { FormasPagamentoComponent } from '../../pages/formaspagamento/formaspagamento.component';
import {IConfig, NgxMaskModule} from "ngx-mask";
import { DataVencimentoComponent } from '../../pages/datavencimento/datavencimento.component';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    ReceitasComponent,
    DespesasComponent,
    CategoriaComponent,
    FornecedorComponent,
    FormasPagamentoComponent,
    DataVencimentoComponent
  ]
})

export class AdminLayoutModule {}
