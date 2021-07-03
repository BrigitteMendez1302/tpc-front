import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentApiService} from "../../../services/student-api.service";
import * as _ from "lodash";

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.css']
})
export class ProfileStudentComponent implements OnInit {

  studentId!: number;
  isEditedMode: Boolean = true;
  studentData:any;

  constructor(private studentsApi: StudentApiService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.retrieveStudent();
  }

  retrieveStudent(): void {
    this.studentId= Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.studentId)
    this.studentsApi.getStudentById(this.studentId)
      .subscribe((response:any) => {
        this.studentData = _.cloneDeep(response);
        console.log(this.studentData);
      });
  }
}
