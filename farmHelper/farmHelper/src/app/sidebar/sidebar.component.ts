import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',               title: 'Dashboard',                   icon:'nc-bank',       class: '' },
    // { path: '/table',                   title: 'Categorias',                  icon:'nc-bullet-list-67',    class: '' },
    { path: '/categorias',         title: 'Categorias',        icon:'nc-single-copy-04',    class: '' },
    { path: '/fornecedor',         title: 'Fornecedor',        icon:'nc-single-02',    class: '' },
    // { path: '/fornecedor-cliente',      title: 'Fornecedor/Cliente',          icon:'nc-bus-front-12',    class: '' },
    { path: '/venc-padrao',             title: 'Dia Vencimento Padrão',       icon:'nc-calendar-60',    class: '' },
    { path: '/formas-pag',              title: 'Formas de Pagamento',         icon:'nc-money-coins',    class: '' },
    { path: '/receitas',                title: 'Receitas',                    icon:'nc-money-coins',    class: '' },
    { path: '/despesas',                title: 'Despesas',                    icon:'nc-paper',    class: '' },

    // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/despesas',         title: 'Despesas',        icon:'nc-paper',    class: '' },
    // { path: '/categorias',         title: 'Categorias',        icon:'nc-single-copy-04',    class: '' },
    
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
