import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelo/Persona.component';
import { Vehiculo } from '../../modelo/Vehiculo.components';
import { PersonaService } from '../../service/persona.service';
import { VehiculoService } from '../../service/vehiculo.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  model: Persona = {id: '', cedula: '', nombre: '', apellido: '', edad: 0};
  model2: Vehiculo = { id: '', marca: '', modelo: '', colorP: '', colorS: '', anioFabri: ''};

  personas: Persona[];
  persona: Persona;

  constructor(private servicioP: PersonaService, private servicioV: VehiculoService) { }
  ngOnInit(): void {
    this.obtener();
  }

  obtener(){
    return this.servicioP.obtenerPersonas().subscribe(result => this.personas = result);
    
  }
  registrar(){
    this.registP();
    this.registV();
  }
  registP(){
    return this.servicioP.registrarPersonas(this.model).subscribe(data => console.log(data));
  }
  registV(){
    return this.servicioV.registrarV(this.model2).subscribe(data => console.log(data));
  }
}
