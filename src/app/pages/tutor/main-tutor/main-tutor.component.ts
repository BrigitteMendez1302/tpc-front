import { Component, OnInit } from '@angular/core';
import {TutorApiService} from "../../../services/tutor-api.service";
import {ActivatedRoute, Router} from "@angular/router";
// import * as _ from 'lodash';


@Component({
  selector: 'app-main-tutor',
  templateUrl: './main-tutor.component.html',
  styleUrls: ['./main-tutor.component.css']
})
export class MainTutorComponent implements OnInit {

  tutorData: {};
  constructor(private tutorsApi: TutorApiService, private router: Router, private route: ActivatedRoute) {
    this.tutorData = {};
    // this.studentId= Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    /*let studentId:number;
    this.route.queryParams.subscribe(params=> {
      studentId=params['id']}
    );
    studentId= Number(this.route.snapshot.paramMap.get('id'));
    console.log(studentId);
    this.retrieveTutor(studentId);*/
  }/*
  retrieveTutor(id: number): void {
    this.tutorsApi.getUserById(id)
      .subscribe((response:any) => {
        this.tutorData = {};
        this.tutorData = _.cloneDeep(response);
        console.log(this.tutorData);
        console.log(this.tutorData);
      });
  }*/
  navigateToSeeTutorShips(): void {
    this.router.navigate([`tutors/101/tutorships`])
      .then(() => console.log('Navigated to see more about the tutorship'));
  }
}
