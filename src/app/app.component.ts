import {Component, OnInit} from '@angular/core';
import {PlanetsResponse} from '../models/PlanetsResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentResponse: PlanetsResponse;
  currentPage = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}
