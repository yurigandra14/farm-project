import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',                   icon:'nc-bank',       class: '' },
    { path: '/table',         title: 'Categorias',                  icon:'nc-bullet-list-67',    class: '' },
    { path: '/table',         title: 'Fornecedor/Cliente',          icon:'nc-bus-front-12',    class: '' },
    { path: '/table',         title: 'Dia Vencimento Padrão',       icon:'nc-calendar-60',    class: '' },
    { path: '/table',         title: 'Formas de Pagamento',         icon:'nc-money-coins',    class: '' },
    { path: '/table',         title: 'Receitas',                    icon:'nc-paper',    class: '' },
    { path: '/despesas',      title: 'Despesas',                    icon:'nc-paper',    class: '' },
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
