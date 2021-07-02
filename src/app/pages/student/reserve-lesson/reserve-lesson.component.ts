import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseApiService} from "../../../services/course.service";
import {Coursetpc} from "../../../models/coursetpc";

@Component({
  selector: 'app-reserve-lesson',
  templateUrl: './reserve-lesson.component.html',
  styleUrls: ['./reserve-lesson.component.css']
})
export class ReserveLessonComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  courses: Coursetpc[] = [];
  course = {} as Coursetpc;
  nm: number = 1;
  str:string = '';
  constructor(private _formBuilder: FormBuilder, private courseApiService: CourseApiService) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.courseApiService.getAllCourses().subscribe((response: any)=>{
      console.log(response.content)
      this.courses = response.content
    })
  }

}
