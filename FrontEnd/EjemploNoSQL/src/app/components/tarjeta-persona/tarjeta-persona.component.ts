import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Persona} from '../../modelo/Persona.component';

@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.css']
})
export class TarjetaPersonaComponent implements OnInit {
  @Input() personas: Persona;
  @Input() indice: string;
  @Output() personaSleccionado: EventEmitter<string>;
  constructor() {
    this.personaSleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
