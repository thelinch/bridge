import { Component, OnInit } from '@angular/core';
import { variablesConfiguracion } from '../../miscelaneo/variablesConfiguracion';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  longitudActualPasajero: number = 0;
  latitudActualPasajero: number = 0;
  constructor() { }

  ngOnInit() {
    this.latitudActualPasajero = parseFloat(sessionStorage.getItem(variablesConfiguracion.nombreLatitud));
    this.longitudActualPasajero = parseFloat(sessionStorage.getItem(variablesConfiguracion.nombreLongitud));
    console.log(this.latitudActualPasajero, this.longitudActualPasajero)
  }

}
