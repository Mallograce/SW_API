import {Component, OnInit} from '@angular/core';
import { OnePlanetInfo } from "../../models/planets-api.models";
import {ActivatedRoute, Router} from "@angular/router";
import {PlanetsApiService} from "../../services/planets-api.service";

@Component({
  selector: 'app-planet-information',
  standalone: true,
  imports: [

  ],
  templateUrl: './planet-information.component.html',
  styleUrl: './planet-information.component.css'
})
export class PlanetInformationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private planetsService: PlanetsApiService
  ) { }

  planet: OnePlanetInfo | null = null;

  ngOnInit() {
    const planetId = this.route.snapshot.paramMap.get('id');
    if (planetId) {
      this.planetsService.getOnePlanet(planetId).subscribe(data => {
        this.planet = data.result.properties;
      });
    }
  }
}
