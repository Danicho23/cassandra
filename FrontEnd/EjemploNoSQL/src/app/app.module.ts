import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APPROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { TarjetaPersonaComponent } from './components/tarjeta-persona/tarjeta-persona.component';
import { TarjetaVehiculosComponent } from './components/tarjeta-vehiculos/tarjeta-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from './components/personas/personas.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { PersonaService } from './service/persona.service';
import { VehiculoService } from './service/vehiculo.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    TarjetaPersonaComponent,
    TarjetaVehiculosComponent,
    PersonasComponent,
    VehiculosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APPROUTING,
    HttpClientModule
  ],
  providers: [PersonaService,
  VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
