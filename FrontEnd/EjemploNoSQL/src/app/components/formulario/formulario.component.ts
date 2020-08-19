import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelo/Persona.component';
import { Vehiculo } from '../../modelo/Vehiculo.components';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  model: Persona = {id: 0, cedula: '', nombre: '', apellido: '', edad: 0};
  model2: Vehiculo = { id: 0, marca: '', modelo: '', colorP: '', colorS: '', anioFabri: ''};

  constructor() { }
  ngOnInit(): void {
  }
  public registrar(){
  }
}
