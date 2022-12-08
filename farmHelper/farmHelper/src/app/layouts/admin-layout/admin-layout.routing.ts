import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {ReceitasComponent} from "../../pages/receitas/receitas.component";
import {DespesasComponent} from "../../pages/despesas/despesas.component";
import {CategoriaComponent} from "../../pages/categorias/categorias.component";
import {FornecedorComponent} from "../../pages/fornecedor/fornecedor.component";
import { FormasPagamentoComponent } from '../../pages/formaspagamento/formaspagamento.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'receitas',       component: ReceitasComponent },
    { path: 'despesas',          component: DespesasComponent },
    { path: 'categorias',          component: CategoriaComponent },
    { path: 'fornecedor',          component: FornecedorComponent },
    { path: 'formaspagamento',  component: FormasPagamentoComponent},
];
