import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Vehiculo} from '../../modelo/Vehiculo.components'

@Component({
  selector: 'app-tarjeta-vehiculos',
  templateUrl: './tarjeta-vehiculos.component.html',
  styleUrls: ['./tarjeta-vehiculos.component.css']
})
export class TarjetaVehiculosComponent implements OnInit {
  @Input() vehiculo: Vehiculo;
  @Input() indice: number;
  @Output() vehiculoSleccionado: EventEmitter<number>;
  constructor() {
    this.vehiculoSleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
