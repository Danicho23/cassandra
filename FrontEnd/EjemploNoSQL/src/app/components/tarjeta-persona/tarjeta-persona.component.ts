import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Persona} from '../../modelo/Persona.component'

//componentes
@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.css']
})
export class TarjetaPersonaComponent implements OnInit {
  @Input() persona: Persona;
  @Input() indice: number;
  @Output() personaSleccionado: EventEmitter<number>;
  constructor() { 
    this.personaSleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
