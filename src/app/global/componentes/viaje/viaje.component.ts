import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
declare var google: any;

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.scss']
})
export class ViajeComponent implements OnInit {
  formularioViaje: FormGroup;
  @ViewChild("destino", { static: true })
  public searchElementRef: ElementRef;

  constructor(private fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.formularioViaje = this.fb.group({
      actual: new FormControl("", [Validators.required]),
      destino: new FormControl("", [Validators.required])
    });
    //load Places Autocomplete
    console.log(this.searchElementRef)
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // some details
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //set latitude, longitude and zoom
        });
      });
    });
  }
}

