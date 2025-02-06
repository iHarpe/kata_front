import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../models/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private getAllEventsUrl = 'http://localhost:8080/getAllEvents';

  constructor(private httpCliente: HttpClient) {}

  allEvents(): Observable<Events[]>{
    return this.httpCliente.get<Events[]>(`${this.getAllEventsUrl}`)
  }
}
