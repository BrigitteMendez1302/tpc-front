import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivatedRoute, Router} from "@angular/router";
import { AfterViewInit } from '@angular/core';
import {TrainingsApiService} from "../../../services/trainings-api.service";
@Component({
  selector: 'app-list-trainings',
  templateUrl: './list-trainings.component.html',
  styleUrls: ['./list-trainings.component.css']
})
export class ListTrainingsComponent implements OnInit, AfterViewInit {

  @ViewChild('studentForm', { static: false }) studentForm!: NgForm;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['descripcion', 'fecha',  'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  isEditMode = false;
  isFiltering = false;

  constructor(private router: Router, private route: ActivatedRoute,
              private trainingsApi : TrainingsApiService) {
  }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings(){
    this.trainingsApi.getAllTrainings().subscribe((response: any) => {
      this.dataSource.data = response.content;
    });
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.isFiltering = !!filterValue;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  formatDateIsoDate(paramDate:any){
    let date = new Date(paramDate);
    let year = date.getFullYear();
    let month: string|number = date.getMonth()+1;
    let dt: string|number = date.getDate();
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return year+'-' + month + '-'+dt
  }
  navigateToSpecificTraining(trainingId: number): void {
    this.router.navigate([trainingId], {relativeTo: this.route})
      .then(() => console.log('Navigated to see more about the training'));
  }

  navigateToEditTraining(trainingId: number): void {
    this.router.navigate([`${trainingId}/edit`], {relativeTo: this.route})
      .then(() => console.log('Navigated to edit the training'));
  }
}
