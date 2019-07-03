import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../global/services/empresas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private empresaService: EmpresasService) { }

  ngOnInit() {
    this.empresaService.listarEmpresas().subscribe(listaEmpresas => {
      listaEmpresas.forEach(empresa => {
        console.log(empresa.pasajero.path)
      })
    });
  }

}
