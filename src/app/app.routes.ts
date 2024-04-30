import { Routes } from '@angular/router';
import {PlanetsComponent} from "./planets/planets.component";

export const routes: Routes = [
  {path: '', redirectTo: '/planets', pathMatch: 'full'},
  {path: 'planets', component: PlanetsComponent},
  /*{path: 'planets/:id', component: PlanetDetailsComponent}*/
];
