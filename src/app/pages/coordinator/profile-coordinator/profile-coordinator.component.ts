import { Component, OnInit } from '@angular/core';
import {TutorApiService} from "../../../services/tutor-api.service";
import {CoordinatorService} from "../../../services/coordinator.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TutorTpc} from "../../../models/tutortpc";
import * as _ from "lodash";

@Component({
  selector: 'app-profile-coordinator',
  templateUrl: './profile-coordinator.component.html',
  styleUrls: ['./profile-coordinator.component.css']
})
export class ProfileCoordinatorComponent implements OnInit {

  coordinatorId!: number;
  coordinatorData:any;
  constructor(private coordinatorsApi: CoordinatorService, private router: Router, private route: ActivatedRoute)
  {}

  ngOnInit(): void {
    this.retrieveCoordinator();
  }

  retrieveCoordinator(): void {
    this.coordinatorId= Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.coordinatorId)
    this.coordinatorsApi.getCoordinatorById(this.coordinatorId)
      .subscribe((response:any) => {
        this.coordinatorData = _.cloneDeep(response);
        console.log(this.coordinatorData);
      });
  }
  cursos: Course[] = [
    {id:1, name:'Programacion I', seccion: "C001"},
    {id:2, name:"Programacion II", seccion: "C002"}
  ]
}

export class Course {
  id: number = 0;
  seccion: string = '';
  name: string = '';
  constructor() {}
}
