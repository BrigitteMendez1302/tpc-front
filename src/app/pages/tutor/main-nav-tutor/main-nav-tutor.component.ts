import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main-nav-tutor',
  templateUrl: './main-nav-tutor.component.html',
  styleUrls: ['./main-nav-tutor.component.css']
})
export class MainNavTutorComponent{
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              private route: ActivatedRoute) {}

  navigateToMain(){
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate([`/tutor/${id}/main`])
      .then(() => console.log(this.route.url) );
  }
  navigateToTutorShips(){
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate([`/tutor/${id}/tutorships`])
      .then(() => console.log(this.route.url) );
  }
}
