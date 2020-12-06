import {Planet} from './Planet';

export interface PlanetsResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}
