import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Persona} from '../../modelo/Persona.component'
import {PersonaService} from '../../service/persona.service'
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
  person: Persona[];
  constructor(private service: PersonaService) { 
    this.personaSleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    this.service.obtenerPersonas().subscribe(data => {
      this.person = data;
      console.log('prod', data);
    });
  }

}
