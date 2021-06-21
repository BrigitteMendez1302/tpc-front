import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-see-lesson-comments',
  templateUrl: './see-lesson-comments.component.html',
  styleUrls: ['./see-lesson-comments.component.css']
})
export class SeeLessonCommentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToSpecificComment(): void {
    this.router.navigate([`coordinator/102/lessons/1/reports/options/seecomments/101`])
      .then(() => console.log('Navigated to see more about the tutorship'));
  }
}
