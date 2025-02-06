import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  userId$ = new EventEmitter<string>(); //obtiene el correo de quien inicio sesion
  sessionAct$ = new EventEmitter<boolean>(); //para saber si se ha inicado sesion o no
  back$ = new EventEmitter<string>(); //ruta para el boton de atras

  constructor() { }
}
