import { Component, OnInit } from '@angular/core';
import {TrainingTutor} from "../../../models/training-tutor";
import {MatTableDataSource} from "@angular/material/table";
import {TrainingTutorService} from "../../../services/training-tutor.service";

import {SelectionModel} from "@angular/cdk/collections";
import {LessonStudent} from "../../tutor/interfaces/lesson-student.interface";
import {Tutor} from "../../../models/tutor";
import {TutorService} from "../../../services/tutor.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-organize-training-select-guests',
  templateUrl: './organize-training-select-guests.component.html',
  styleUrls: ['./organize-training-select-guests.component.css'],
  providers:[TrainingTutorService,TutorService],
})
export class OrganizeTrainingSelectGuestsComponent implements OnInit {


  displayedColumns: string[] = ['id', 'code','select'];

  tutor:Tutor;
  trainingtutor :TrainingTutor;
  dataTutor = new MatTableDataSource<Tutor>();
  dataSource = new MatTableDataSource<TrainingTutor>();
  constructor(private tutorService : TutorService , private trainingtutorsService :TrainingTutorService) {
    this.tutor={} as Tutor;
    this.trainingtutor={} as TrainingTutor

  }
  selection = new SelectionModel<TrainingTutor>(true, []);

  //Esto es para marcar los checkboxs si la data viene con true en asistió en algun estudiante
  ngOnInit() {
    this.getAllTrainingTutors();
    this.dataSource.data.forEach(p => {

      if (p.assistance)

        this.selection.toggle(p);
    })
    this.getAllTutors();


  }

  getAllTrainingTutors(): void {
    this.trainingtutorsService.getAllTrainingTutors().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  getAllTutors(): void {
    this.tutorService.getAllTutors().subscribe((response: any) => {
      this.dataTutor.data = response;
    });
  }

  /**Cuenta el numero de checkboxs en true y lo compara con el numero de rows totales */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Seleccion todas las filas (rows) y tambien deselecciona todas segun el caso */
  masterToggle() {

    if (this.isAllSelected()) {
      this.selection.clear();

      this.dataSource.data.forEach(row => row.assistance = false);

    }
    else {
      this.dataSource.data.forEach(row => { this.selection.select(row); row.assistance = true });
    }

  }


  toggleCheckbox(row: TrainingTutor) {
    this.selection.toggle(row)  ;
    row.assistance = !row.assistance ;

  }




}
