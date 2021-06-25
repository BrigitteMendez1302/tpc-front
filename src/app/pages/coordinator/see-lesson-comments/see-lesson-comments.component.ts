import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationExtras} from "@angular/router";


@Component({
  selector: 'app-see-lesson-comments',
  templateUrl: './see-lesson-comments.component.html',
  styleUrls: ['./see-lesson-comments.component.css']
})
export class SeeLessonCommentsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  navigateToSpecificComment(): void {
    this.router.navigate([':commentId'], {relativeTo: this.route})
      .then(() => console.log('Navigated to see more about the lesson comment'));
  }
}
