import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {TutorApiService} from "../../../services/tutor-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-nav-student',
  templateUrl: './main-nav-student.component.html',
  styleUrls: ['./main-nav-student.component.css']
})
export class MainNavStudentComponent {
  userId: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, private tutorsApi: TutorApiService, private router: Router, private route: ActivatedRoute) {}
  navigateToProfile(){
    this.userId= Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate([`tutor/${this.userId}/profile`])
      .then(() => console.log('Navigated to see the profile'));
  }
  logout(){
    this.router.navigate([`/login`])
      .then(() => console.log('Navigated to home'));
  }
}
