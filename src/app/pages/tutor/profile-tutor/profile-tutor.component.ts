import { Component, OnInit } from '@angular/core';
import {TutorApiService} from "../../../services/tutor-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TutorTpc} from "../../../models/tutortpc";
import * as _ from "lodash";

@Component({
  selector: 'app-profile-tutor',
  templateUrl: './profile-tutor.component.html',
  styleUrls: ['./profile-tutor.component.css']
})
export class ProfileTutorComponent implements OnInit {
  tutorData:any;
  cursos: Course[] = [
    {id:1, name:'Programacion I', seccion: "C001"},
    {id:2, name:"Programacion II", seccion: "C002"}
  ]
  tutorId!: number;

  constructor(private tutorsApi: TutorApiService, private router: Router, private route: ActivatedRoute) {
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

}

export class Course {
  id: number = 0;
  seccion: string = '';
  name: string = '';
  constructor() {
  }
}
