import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Planet} from '../../models/Planet';
import {FilmsService} from '../../services/films.service';
import {Film} from '../../models/Film';
import {ResidentsService} from '../../services/residents.service';
import {Resident} from '../../models/Resident';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {
  @Output() closeInfo: EventEmitter<null> = new EventEmitter();
  @Input() planet: Planet;
  films: Film[] = [];
  residents: Resident[] = [];

  constructor(private filmsService: FilmsService, private residentsService: ResidentsService) {
  }

  ngOnInit(): void {
    for (const filmUrl of this.planet.films) {
      this.filmsService.getFilmByUrl(filmUrl).subscribe(film => this.films.push(film));
    }
    for (const residentUrl of this.planet.residents) {
      this.residentsService.getResidentsByUrl(residentUrl).subscribe(film => this.residents.push(film));
    }
  }

  closePlanetInfo(): void {
    this.closeInfo.emit();
  }
}
