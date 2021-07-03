import { Component, OnInit } from '@angular/core';
import {Coordinator} from "../../../models/coordinator";
import {CoordinatorService} from "../../../services/coordinator.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as _ from 'lodash';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  coordinatorData!: Coordinator;
  coordinatorId!: number;
  isLoaded: boolean = false;

  constructor(private coordinatorsApi: CoordinatorService, private router: Router,private route: ActivatedRoute) {
    this.coordinatorId= Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.retrieveCoordinator();
  }
  retrieveCoordinator(): void {
    this.coordinatorId= Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.coordinatorId)
    this.coordinatorsApi.getCoordinatorById(this.coordinatorId)
      .subscribe((response:Coordinator) => {
        this.coordinatorData = _.cloneDeep(response);
        this.isLoaded = true;
      });
  }
  navigateToManagement(){
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate([`/coordinator/${id}/management`])
      .then(() => console.log(this.route.url) );
  }
}
