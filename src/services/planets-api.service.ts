import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { Planets, PlanetStatus } from "../models/planets-api.models";

@Injectable({
  providedIn: 'any'
})
export class PlanetsApiService {
  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://swapi.tech/api';

  getPlanetsAPI(url: string): Observable<Planets> {
    return this.http.get<Planets>(url);
  }

  getOnePlanet(id: string): Observable<PlanetStatus> {
    return this.http.get<PlanetStatus>(`${this.baseUrl}/planets/${id}`);
  }
}
