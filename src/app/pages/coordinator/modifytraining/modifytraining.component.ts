import { Component, OnInit } from '@angular/core';
import {TrainingTutor} from "../../../models/training-tutor";
import {MatTableDataSource} from "@angular/material/table";
import {TrainingTutorService} from "../../../services/training-tutor.service";

@Component({
  selector: 'app-modifytraining',
  templateUrl: './modifytraining.component.html',
  styleUrls: ['./modifytraining.component.css']
})
export class ModifytrainingComponent implements OnInit {

  trainingTutor:TrainingTutor;
  dataSource = new MatTableDataSource();
  constructor(private trainingTutorService : TrainingTutorService ) {
    this.trainingTutor={} as TrainingTutor;
  }

  ngOnInit(): void {
    this.getAllTrainingTutors();
  }

  getAllTrainingTutors(): void {
    this.trainingTutorService.getAllTrainingTutors().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
}
