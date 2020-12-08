import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Planet} from '../../models/Planet';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {
  @Output() closeInfo: EventEmitter<null> = new EventEmitter();
  @Input() planet: Planet;

  constructor() { }

  ngOnInit(): void {
  }

  closePlanetInfo(): void {
    this.closeInfo.emit();
  }
}
