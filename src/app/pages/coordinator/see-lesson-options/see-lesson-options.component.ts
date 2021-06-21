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

  navigateToSeeComments(): void {
    this.router.navigate([`coordinator/102/lessons/1/reports/options/seecomments`])
      .then(() => console.log('Navigated to see more about the tutorship'));
  }
}
