import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../../models/student";
import {StudentService} from "../../../services/student.service";



@Component({
  selector: 'app-assists',
  templateUrl: './assists.component.html',
  styleUrls: ['./assists.component.css'],
  providers:[StudentService],
})
export class AssistsComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'code'];
  student: Student;
  dataSource = new MatTableDataSource<Student>();

  constructor(private studentService: StudentService) {
    this.student = {} as Student;


  }

  ngOnInit() {

    this.getAllStudents();

  }
  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }
}
