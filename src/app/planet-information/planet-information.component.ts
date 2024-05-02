import {Component, OnInit} from '@angular/core';
import {OnePlanetInfo} from "../../models/planets-api.models";
import {ActivatedRoute} from "@angular/router";
import {PlanetsApiService} from "../../services/planets-api.service";
import {PeopleApiService} from "../../services/people-api.service";
import {PeopleDetail, PeopleProperties} from "../../models/people-api.models";
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "../header/header.component";
import {NgClass} from "@angular/common";

import {forkJoin} from "rxjs";

@Component({
  selector: 'app-planet-information',
  standalone: true,
  imports: [
    FormsModule,
    HeaderComponent,
    NgClass
  ],
  templateUrl: './planet-information.component.html',
  styleUrl: './planet-information.component.css'
})
export class PlanetInformationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private planetsService: PlanetsApiService,
    private peopleService: PeopleApiService
  ) {
  }

  planet: OnePlanetInfo | null = null;
  residents: PeopleProperties[] = [];
  selectedGender: string = '';
  filteredResidents: PeopleProperties[] = []; // Для фильтра по полу
  selectedResidentIndex: number | null = null; // Для выпадающего списка

  ngOnInit() {
    const planetId = this.route.snapshot.paramMap.get('id');
    if (planetId) { // If id найден, загружаем данные о планете
      this.planetsService.getOnePlanet(planetId).subscribe(data => {
        this.planet = data.result.properties;
        this.loadResidentsForPlanet(this.planet.url);
      });
    }
  }

  // Выводит жителей конкретной планеты
  loadResidentsForPlanet(planetUrl: string) {
    this.peopleService.getPeople().subscribe(data => { // Получаем список ВСЕХ жителей
      const observables = data.results.map(personSummary =>
        this.peopleService.getPerson(personSummary.uid));
      forkJoin(observables).subscribe((details: PeopleDetail[]) => { // Отдельный запрос
        this.residents = details
          .map(detail => detail.result.properties)
          .filter(person => person.homeworld === planetUrl); // Проверка homeworld жителя на url планеты
        this.filterResidentsByGender();
      });
    });
  }

  filterResidentsByGender() {
    this.filteredResidents = this.residents.filter(resident => {
      return this.selectedGender ? (resident.gender === this.selectedGender) : true; // If true (инпут пустой), то фильтрации нет
    });
  }

  toggleDetails(index: number) { // Dropdown доп. инфы о жителях
    if (this.selectedResidentIndex === index) {
      this.selectedResidentIndex = null;
    } else {
      this.selectedResidentIndex = index;
    }
  }
}
