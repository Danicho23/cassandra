import { Injectable } from '@angular/core';
import { Vehiculo } from '../modelo/Vehiculo.components';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  Url = 'http://localhost:9094';
  constructor(private http: HttpClient) { }

  obtenerV(){
    return this.http.get<Vehiculo[]>(this.Url + '/vehiculos');
  }

  registrarV(vehiculo: Vehiculo){
    return this.http.post<Vehiculo>(this.Url + '/vehiculo', vehiculo);
  }
}
