import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from '../modelo/Persona.component';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  Url = 'http://localhost:9094';
  constructor(private http: HttpClient) { }

  obtenerPersonas(){
    return this.http.get<Persona[]>(this.Url + '/personas');
  }

  registrarPersonas(persona: Persona){
    return this.http.post<Persona>(this.Url + '/persona', persona);
  }
}
