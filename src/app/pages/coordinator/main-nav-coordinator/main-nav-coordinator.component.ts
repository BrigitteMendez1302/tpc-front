import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-nav-coordinator',
  templateUrl: './main-nav-coordinator.component.html',
  styleUrls: ['./main-nav-coordinator.component.css']
})
export class MainNavCoordinatorComponent  {

  userId: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              private route: ActivatedRoute) {}

  navigateToManagement(){
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate([`/coordinator/${id}/management`])
      .then(() => console.log(this.route.url) );
  }
  navigateToMain(){
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate([`/coordinator/${id}/main`])
      .then(() => console.log(this.route.url) );
  }
  navigateToProfile(){
    this.userId= Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate([`tutor/${this.userId}/profile`])
      .then(() => console.log('Navigated to see the profile'));
  }
  navigateToSchedule(){
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate([`/coordinator/${id}/schedule`])
      .then(() => console.log(this.route.url) );
  }
  logout(){
    this.router.navigate([`/login`])
      .then(() => console.log('Navigated to home'));
  }
}
