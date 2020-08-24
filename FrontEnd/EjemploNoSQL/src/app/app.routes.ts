
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { PersonasComponent } from './components/personas/personas.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';

const ROUTES: Routes = [
    { path: 'home', component: BodyComponent},
    { path: 'listPerson', component: PersonasComponent},
    { path: 'listCars', component: VehiculosComponent}
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
