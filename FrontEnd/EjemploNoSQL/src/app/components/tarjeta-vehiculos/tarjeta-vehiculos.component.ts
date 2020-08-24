import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Vehiculo} from '../../modelo/Vehiculo.components';

@Component({
  selector: 'app-tarjeta-vehiculos',
  templateUrl: './tarjeta-vehiculos.component.html',
  styleUrls: ['./tarjeta-vehiculos.component.css']
})
export class TarjetaVehiculosComponent implements OnInit {
  @Input() vehiculos: Vehiculo;
  @Input() indice: string;
  @Output() vehiculoSleccionado: EventEmitter<string>;
  constructor() {
    this.vehiculoSleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
