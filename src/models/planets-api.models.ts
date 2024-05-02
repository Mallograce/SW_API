/// Интерфейсы для плаенет

export interface Planets {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: AllPlanetInfo[];
}

export interface AllPlanetInfo {
  uid: string;
  name: string;
  url: string;
}

export interface PlanetStatus {
  message: string;
  result: PlanetResult;
}

export interface PlanetResult {
  properties: OnePlanetInfo;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface OnePlanetInfo {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
  url: string;
}
