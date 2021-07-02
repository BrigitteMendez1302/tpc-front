import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonStudentsApiBriService} from "../../../services/lesson-students-api-bri.service";

@Component({
  selector: 'app-see-specific-lesson-comment',
  templateUrl: './see-specific-lesson-comment.component.html',
  styleUrls: ['./see-specific-lesson-comment.component.css']
})
export class SeeSpecificLessonCommentComponent implements OnInit {

  lessonComment: any;
  constructor(private router: Router, private route: ActivatedRoute,
              private lessonStudentsService: LessonStudentsApiBriService) {}

  ngOnInit(): void {
    this.getLessonComment();
  }

  getLessonComment(): void{
    let lessonId = Number(this.route.snapshot.paramMap.get('lessonId'));
    let studentId = Number(this.route.snapshot.paramMap.get('commentId'));
    this.lessonStudentsService.getCommentByLessonIdAndStudentId(lessonId, studentId)
      .subscribe((response: any)=>{
        this.lessonComment = response;
        console.log(this.lessonComment);
      })
  }
}
