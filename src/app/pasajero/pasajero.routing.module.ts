import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListaEmpresaComponent } from './lista-empresa/lista-empresa.component';
import { MapComponent } from '../global/componentes/map/map.component';

const routes: Routes = [
    {
        path: '', component: PrincipalComponent, children: [
            { path: "empresas", component: ListaEmpresaComponent },
            { path: "mapa", component: MapComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PasajeroRoutingModule { }
