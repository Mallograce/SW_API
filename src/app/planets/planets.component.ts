import {Component, OnInit} from '@angular/core';
import {PlanetsApiService} from '../../services/planets-api.service'
import {AllPlanetInfo} from "../../models/planets-api.models";
import {HeaderComponent} from "../header/header.component";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
  ],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css'
})
export class PlanetsComponent implements OnInit {

  constructor(
    private apiPlanets: PlanetsApiService,
    private router: Router
  ) {
  }

  planets: AllPlanetInfo[] = [];
  prevPagePlanets: string | null = null; // Прошлая страница списка планет
  nextPagePlanets: string | null = null; // Следующая страница списка планет

  ngOnInit() {
    this.loadPagePlanets('https://swapi.tech/api/planets');
  }

  loadPagePlanets(url: string) { // Отрисовка первых 10 планет из списка
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

  openPlanet(id: string) {
    this.router.navigate(['/planets', id]); // Переход на страницу деталей планеты
  }
}
