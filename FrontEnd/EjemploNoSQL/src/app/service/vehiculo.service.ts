import { Injectable } from '@angular/core';
import { Vehiculo } from '../modelo/Vehiculo.components';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  Url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  getProductos():Observable<any>{
    return this.http.get(this.Url+"/all");
  }

  obtenerV(){
    return this.http.get<Vehiculo[]>(this.Url + '/vehiculos');
  }

  registrarV(vehiculo: Vehiculo){
    return this.http.post<Vehiculo>(this.Url + '/vehiculo', vehiculo);
  }
}
