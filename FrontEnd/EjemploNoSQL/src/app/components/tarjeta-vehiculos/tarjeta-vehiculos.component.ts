import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import{Vehiculo} from '../../modelo/Vehiculo.components'
import{VehiculoService}from '../../service/vehiculo.service'

@Component({
  selector: 'app-tarjeta-vehiculos',
  templateUrl: './tarjeta-vehiculos.component.html',
  styleUrls: ['./tarjeta-vehiculos.component.css']
})
export class TarjetaVehiculosComponent implements OnInit {
  @Input() vehiculo: Vehiculo;
  @Input() indice: number;
  @Output() vehiculoSleccionado: EventEmitter<number>;
  vehicul: Vehiculo[];
  constructor(private service: VehiculoService) {
    this.vehiculoSleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    this.service.obtenerV().subscribe(data => {
      this.vehicul = data;
      console.log('prod', data);
    });
  }

}
