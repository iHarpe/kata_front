import { Component } from '@angular/core';
import { Events } from '../models/events';
import { EventsService } from '../services/events.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  eventos!: Events[];

  constructor (private eventservice: EventsService){}

  ngOnInit() {
    this.getEventos();    
  }

  private getEventos(){
    this.eventservice.allEvents().subscribe(data => {
      this.eventos = data;
    }
    )
  }

}
