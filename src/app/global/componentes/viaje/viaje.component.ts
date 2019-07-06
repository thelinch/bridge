import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss']
})
export class ViajeComponent implements OnInit {
  formularioViaje: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formularioViaje = this.fb.group({
      actual: new FormControl("", [Validators.required]),
      destino: new FormControl("", [Validators.required])
    })
  }

}
