import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TableComponent } from '../../pages/table/table.component';
import {ReceitasComponent} from "../../pages/receitas/receitas.component";
import {DespesasComponent} from "../../pages/despesas/despesas.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table',          component: TableComponent },
    { path: 'receitas',       component: ReceitasComponent },
    { path: 'despesas',          component: DespesasComponent },
];
