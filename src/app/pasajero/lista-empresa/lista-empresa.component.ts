import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { empresa } from 'src/app/global/modelos/empresa';
import { EmpresasService } from 'src/app/global/services/empresas.service';

@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.scss']
})
export class ListaEmpresaComponent implements OnInit {
  listaEmpresas: Observable<empresa[]>
  constructor(private empresaService: EmpresasService) { }

  ngOnInit() {
    this.listaEmpresas = this.empresaService.listarEmpresas()
  }

}
