import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-see-lesson-options',
  templateUrl: './see-lesson-options.component.html',
  styleUrls: ['./see-lesson-options.component.css']
})
export class SeeLessonOptionsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToSeeLessons(): void {
    this.router.navigate(['lessons'], {relativeTo: this.route})
      .then(() => console.log('Navigated to see all lessons'));
  }
  navigateToSeeTrainings(): void {
    this.router.navigate(['trainings'], {relativeTo: this.route})
      .then(() => console.log('Navigated to see all lessons'));
  }
}
