import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';
import { Persona } from '../../modelo/Persona.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[];
  constructor(private servicio: PersonaService) { }

  ngOnInit(): void {
    this.servicio.obtenerPersonas().subscribe(datos => {
      this.personas = datos;
    });
  }

}
