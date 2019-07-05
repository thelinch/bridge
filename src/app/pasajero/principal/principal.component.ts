import { Component, OnInit } from '@angular/core';
import { variablesConfiguracion } from 'src/app/global/miscelaneo/variablesConfiguracion';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      sessionStorage.setItem(variablesConfiguracion.nombreLatitud, position.coords.latitude.toString())
      sessionStorage.setItem(variablesConfiguracion.nombreLongitud, position.coords.longitude.toString())

    })
  }

}
