import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PlanetsService} from '../services/planets.service';
import {HttpClientModule} from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetsTableComponent } from './planets-table/planets-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { PlanetInfoComponent } from './planet-info/planet-info.component';
import {FilmsService} from '../services/films.service';
import {MatLineModule} from '@angular/material/core';
import {ResidentsService} from '../services/residents.service';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsTableComponent,
    PlanetInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatLineModule
  ],
  providers: [PlanetsService, FilmsService, ResidentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
