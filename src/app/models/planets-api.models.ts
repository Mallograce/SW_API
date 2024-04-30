export interface PlanetsResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  results: PlanetSummary[];
}

export interface PlanetSummary {
  uid: string;
  name: string;
  url: string;
}
