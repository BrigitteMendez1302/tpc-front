import { Component, OnInit } from '@angular/core';
import {LessonStudent} from "../../tutor/interfaces/lesson-student.interface";
import {TrainingTutor} from "../../../models/training-tutor";
import {MatTableDataSource} from "@angular/material/table";
import {Tutor} from "../../../models/tutor";
import {TutorService} from "../../../services/tutor.service";
import {TrainingTutorService} from "../../../services/training-tutor.service";

@Component({
  selector: 'app-organizetraining',
  templateUrl: './organizetraining.component.html',
  styleUrls: ['./organizetraining.component.css']
})
export class OrganizetrainingComponent implements OnInit {

  trainingtutor :TrainingTutor;

  dataSource = new MatTableDataSource<TrainingTutor>();
  constructor( private trainingtutorsService :TrainingTutorService) {

    this.trainingtutor={} as TrainingTutor

  }

  getAllTrainingTutors(): void {
    this.trainingtutorsService.getAllTrainingTutors().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  ngOnInit(): void {
    this.getAllTrainingTutors();
  }
}
