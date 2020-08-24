import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../service/vehiculo.service';
import { Vehiculo } from '../../modelo/Vehiculo.components';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[];
  constructor(private service: VehiculoService) { }

  ngOnInit(): void {
    this.service.obtenerV().subscribe(datos => {
      this.vehiculos = datos;
    });
  }

}
