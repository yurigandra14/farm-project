import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TableComponent } from '../../pages/table/table.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReceitasComponent} from "../../pages/receitas/receitas.component";
import {DespesasComponent} from "../../pages/despesas/despesas.component";
import {CategoriaComponent} from "../../pages/categorias/categorias.component";
import {FornecedorComponent} from "../../pages/fornecedor/fornecedor.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    TableComponent,
    ReceitasComponent,
    DespesasComponent,
    CategoriaComponent,
    FornecedorComponent
  ]
})

export class AdminLayoutModule {}
