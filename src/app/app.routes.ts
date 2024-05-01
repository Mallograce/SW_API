import { Routes } from '@angular/router';
import { PlanetsComponent } from "./planets/planets.component";
import { PlanetInformationComponent } from "./planet-information/planet-information.component";

export const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    title: 'Planets Page'
  },

  {
    path: 'planets/:id',
    component: PlanetInformationComponent,
    title: 'Planet Info Page'
  }
];
