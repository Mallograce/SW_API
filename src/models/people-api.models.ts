/// Интерфейсы для обитателей

export interface PeopleResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: PeopleSummary[];
}

export interface PeopleSummary {
  uid: string;
  name: string;
  url: string;
}

export interface PeopleDetail {
  message: string;
  result: PeopleResult;
}

export interface PeopleResult {
  properties: PeopleProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface PeopleProperties {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
}
