
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { TarjetaPersonaComponent } from './components/tarjeta-persona/tarjeta-persona.component';
import { TarjetaVehiculosComponent } from './components/tarjeta-vehiculos/tarjeta-vehiculos.component';

const ROUTES: Routes = [
    { path: 'home', component: BodyComponent},
    { path: 'listPerson', component: TarjetaPersonaComponent},
    { path: 'listCars', component: TarjetaVehiculosComponent}
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
