import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../global/services/empresas.service';
import { Observable } from 'rxjs';
import { empresa } from '../global/modelos/empresa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  listaEmpresas: Observable<empresa[]>
  constructor(private empresaService: EmpresasService) { }

  ngOnInit() {
    this.listaEmpresas = this.empresaService.listarEmpresas()
  }

}
