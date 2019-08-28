import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';



const routes: Routes = [

    {
      path: '',
      component: TabsPage,
      children: [
        { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
        { path: 'novedades', loadChildren: '../novedades/novedades.module#NovedadesPageModule' },
        { path: 'productos', loadChildren: '../productos/productos.module#ProductosPageModule' },
        { path: 'informacion', loadChildren: '../informacion/informacion.module#InformacionPageModule' },
      ]
    }
    
    ];

    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    
    export class TabsRoutingModule { }