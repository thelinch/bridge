import { auto } from './auto';
import { DocumentReference } from "@angular/fire/firestore";
export interface chofer {
    id: string
    nombre: string
    apellido: string
    foto: string
    licencia: string
    calificacion: number
    auto: DocumentReference
}