import { Component, OnInit } from '@angular/core';
import { PlanetsApiService } from '../services/planets-api.service'
import { PlanetSummary } from "../models/planets-api.models";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent implements OnInit {

  constructor(private apiPlanets: PlanetsApiService) { }

  planets: PlanetSummary[] = [];
  prevPagePlanets: string | null = null;
  nextPagePlanets: string | null = null;

  ngOnInit() {
    this.loadPagePlanets('https://swapi.tech/api/planets');
  }

  loadPagePlanets(url: string) {
    this.apiPlanets.getPlanetsAPI(url).subscribe(data => {
      this.planets = data.results;
      this.nextPagePlanets = data.next;
      this.prevPagePlanets = data.previous;
    });
  }

  goToNextPage() {
    if (this.nextPagePlanets) {
      this.loadPagePlanets(this.nextPagePlanets);
    }
  }

  goToPreviousPage() {
    if (this.prevPagePlanets) {
      this.loadPagePlanets(this.prevPagePlanets);
    }
  }

  openPlanet() {

  }
}
