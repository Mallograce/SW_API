import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

import { PlanetsResponse } from "../models/planets-api.models";

@Injectable({
  providedIn: 'any'
})
export class PlanetsApiService {
  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://swapi.tech/api';

  getPlanetsAPI(url: string): Observable<PlanetsResponse> {
    return this.http.get<PlanetsResponse>(url);
  }
}
