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
  @ViewChild(MatPaginator, {read: true}) paginator: MatPaginator;
  dataSource: MatTableDataSource<Planet> = new MatTableDataSource<Planet>();
  tableSizes = [tableSizes.small, tableSizes.medium, tableSizes.big];
  lengthOfArray = 0;

  constructor(private planetsService: PlanetsService) {
  }

  ngOnInit(): void {
    this.getInitialPlanetsList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getPlanets(page?: number): void {
    this.planetsService.getPlanetsByPage(page).subscribe((param) => {
      this.currentResponse = param;
      this.lengthOfArray = this.currentResponse.count;
      this.dataSource.data = this.currentResponse.results;
    });
  }

  changePage(event): void {
    this.getPlanets(event.pageIndex + 1);
  }

  getInitialPlanetsList(): void {
    this.getPlanets();
  }

  openSelectedPlanet(row): void {
    console.log(row);
  }
}
