import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {PeopleResponse, PeopleDetail} from "../models/people-api.models";

@Injectable({
  providedIn: 'any'
})
export class PeopleApiService {
  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://swapi.tech/api';

  getPeople(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(`${this.baseUrl}/people`);
  }

  getPerson(id: string): Observable<PeopleDetail> {
    return this.http.get<PeopleDetail>(`${this.baseUrl}/people/${id}`);
  }
}
