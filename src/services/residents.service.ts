import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resident} from '../models/Resident';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  constructor(private http: HttpClient) {
  }

  getResidentsByUrl(url: string): Observable<Resident> {
    return this.http.get<Resident>(url);
  }
}
