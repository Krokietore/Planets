import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlanetsResponse} from '../models/PlanetsResponse';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private apiUrl = 'https://swapi.dev/api/planets/';

  constructor(private http: HttpClient) {
  }


  getPlanetsByPage(page = 1): Observable<PlanetsResponse> {
    const params = new HttpParams({fromObject: {page: page.toString()}});
    return this.http.get<PlanetsResponse>(this.apiUrl, {params});
  }
}
