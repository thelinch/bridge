import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { ListaEmpresaComponent } from './lista-empresa/lista-empresa.component';
import { PasajeroRoutingModule } from './pasajero.routing.module';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [PrincipalComponent, ListaEmpresaComponent],
  imports: [
    CommonModule,
    PasajeroRoutingModule,
    GlobalModule
  ]
})
export class PasajeroModule { }
