import { chofer } from './chofer';
import { DocumentReference } from '@angular/fire/firestore';

export interface empresa {
    id: string
    ruc: string
    ubicacion: { latitud: string, longitud: string }
    choferes: chofer[]
    sucursales: empresa[]
    pasajero: DocumentReference
}