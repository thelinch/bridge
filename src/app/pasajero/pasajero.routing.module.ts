import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListaEmpresaComponent } from './lista-empresa/lista-empresa.component';

const routes: Routes = [
    {
        path: '', component: PrincipalComponent, children: [
            { path: "empresas", component: ListaEmpresaComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PasajeroRoutingModule { }
