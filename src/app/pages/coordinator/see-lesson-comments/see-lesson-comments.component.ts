import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationExtras} from "@angular/router";
import {LessonStudentsApiBriService} from "../../../services/lesson-students-api-bri.service";


@Component({
  selector: 'app-see-lesson-comments',
  templateUrl: './see-lesson-comments.component.html',
  styleUrls: ['./see-lesson-comments.component.css']
})
export class SeeLessonCommentsComponent implements OnInit {

  lessonComments: Array<any> = [];

  constructor(private router: Router, private route: ActivatedRoute,
              private lessonStudentsService: LessonStudentsApiBriService) { }

  ngOnInit(): void {
    this.getLessonComments();
  }
  navigateToSpecificComment(commentId: number): void {
    this.router.navigate([commentId], {relativeTo: this.route})
      .then(() => console.log('Navigated to see more about the lesson comment'));
  }
  getLessonComments():void{
    let lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    this.lessonStudentsService.getCommentsByLessonId(lessonId, false)
      .subscribe((response: any ) =>{
        this.lessonComments = response.content;
        console.log(this.lessonComments);
      });
  }
  navigateToLessons():void{
    let lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));

  }
}
