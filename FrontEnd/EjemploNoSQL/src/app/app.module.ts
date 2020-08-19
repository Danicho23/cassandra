import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APPROUTING } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
//componentes
import { TarjetaPersonaComponent } from './components/tarjeta-persona/tarjeta-persona.component';
import { TarjetaVehiculosComponent } from './components/tarjeta-vehiculos/tarjeta-vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    TarjetaPersonaComponent,
    TarjetaVehiculosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APPROUTING,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
