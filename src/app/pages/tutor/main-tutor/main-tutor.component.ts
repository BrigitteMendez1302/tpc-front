import { Component, OnInit } from '@angular/core';
import {TutorApiService} from "../../../services/tutor-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TutorTpc} from "../../../models/tutortpc";
import * as _ from 'lodash';


@Component({
  selector: 'app-main-tutor',
  templateUrl: './main-tutor.component.html',
  styleUrls: ['./main-tutor.component.css']
})
export class MainTutorComponent implements OnInit {
  tutorData!: TutorTpc;
  tutorId!: number;
  constructor(private tutorsApi: TutorApiService, private router: Router, private route: ActivatedRoute) {
    this.tutorId= Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.retrieveTutor();
  }
  retrieveTutor(): void {
    this.tutorId= Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.tutorId)
    this.tutorsApi.getUserById(this.tutorId)
      .subscribe((response:TutorTpc) => {
        this.tutorData = _.cloneDeep(response);
        console.log(this.tutorData);
      });
  }
  navigateToSeeTutorShips(): void {
    this.router.navigate([`tutors/101/tutorships`])
      .then(() => console.log('Navigated to see more about the tutorship'));
  }
}
