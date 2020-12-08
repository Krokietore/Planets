import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PlanetsResponse} from '../../models/PlanetsResponse';
import {PlanetsService} from '../../services/planets.service';
import {Planet} from '../../models/Planet';
import {tableSizes} from '../../models/tableSizes';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.scss']
})
export class PlanetsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'climate', 'terrain'];
  currentResponse: PlanetsResponse;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Planet> = new MatTableDataSource<Planet>();
  tableSizes = [tableSizes.small, tableSizes.medium, tableSizes.big];
  lengthOfArray: number;
  choosenPlanet: Planet;

  constructor(private planetsService: PlanetsService) {
  }

  ngOnInit(): void {
    this.getPlanets();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getPlanets(page = 1, planetsTable: Planet[] = []): void {
    this.planetsService.getPlanetsByPage(page).subscribe((param) => {
      planetsTable = planetsTable.concat(param.results);
      if (param.next) {
        this.getPlanets(++page, planetsTable);
      } else {
        planetsTable = this.sortPlanetList(planetsTable);
        this.dataSource.data = planetsTable;
        this.lengthOfArray = planetsTable.length;
      }
    });
  }

  sortPlanetList(value): Planet[] {
    value.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return value;
  }

  showPlanetInfo(planet): void {
    this.choosenPlanet = planet;
  }

  closePlanetInfo(): void {
    this.choosenPlanet = null;
  }
}
