import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TutorTpc} from "../../../models/tutortpc";
import {StudentApiService} from "../../../services/student-api.service";
import * as _ from "lodash";

@Component({
  selector: 'app-main-student',
  templateUrl: './main-student.component.html',
  styleUrls: ['./main-student.component.css']
})
export class MainStudentComponent implements OnInit {

  studentData!: any;
  studentId!: number;
  isLoaded: boolean = false;

  constructor(private studentsApi: StudentApiService, private router: Router, private route: ActivatedRoute) {
    this.studentId= Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.retrieveStudent();
  }

  retrieveStudent(): void {
    this.studentId= Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.studentId)
    this.studentsApi.getStudentById(this.studentId)
      .subscribe((response:TutorTpc) => {
        this.studentData = _.cloneDeep(response);
        this.isLoaded = true;
      });
  }

  navigateToSeeReservations(): void {
    this.router.navigate([`student/1/reservations`])
      .then(() => console.log('Navigated to see more about the reservations'));
  }
}
