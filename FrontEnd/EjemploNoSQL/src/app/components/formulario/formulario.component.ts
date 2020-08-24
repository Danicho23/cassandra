import { Component, OnInit } from '@angular/core';
import { Persona } from '../../modelo/Persona.component';
import { Vehiculo } from '../../modelo/Vehiculo.components';
import { PersonaService } from '../../service/persona.service';
import { VehiculoService } from '../../service/vehiculo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  model: Persona = {id: '', cedula: '', nombre: '', apellido: '', edad: 0};
  model2: Vehiculo = { id: '', marca: '', modelo: '', colorP: '', colorS: '', anioFabri: ''};

  constructor(private servicioP: PersonaService, private servicioV: VehiculoService, private routes: Router) { }
  ngOnInit(): void {
  }
  registrar(){
    this.registP();
    this.registV();
  }
  registP(){
    this.servicioP.registrarPersonas(this.model).subscribe(data => console.log(data));
    this.routes.navigate(['listPerson']);
  }
  registV(){
    this.servicioV.registrarV(this.model2).subscribe(data => console.log(data));
    this.routes.navigate(['listCars']);
  }
}
