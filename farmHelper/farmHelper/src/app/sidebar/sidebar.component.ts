import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/receitas',         title: 'Receitas',        icon:'nc-money-coins',    class: '' },
    { path: '/despesas',         title: 'Despesas',        icon:'nc-paper',    class: '' },
    { path: '/categorias',         title: 'Categorias',        icon:'nc-single-copy-04',    class: '' },
    { path: '/fornecedor',         title: 'Fornecedor',        icon:'nc-single-02',    class: '' },
    { path: '/formaspagamento',         title: 'Formas Pagamento',        icon:'nc-money-coins',    class: '' },
    { path: '/datavencimento',         title: 'Data Vencimento',        icon:'nc-paper',    class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
