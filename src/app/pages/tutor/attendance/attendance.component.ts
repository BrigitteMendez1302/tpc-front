import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LessonStudent } from '../interfaces/lesson-student.interface';
import { LessonStudentsApiService } from '../../../services/lesson-student-api.service';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonApiBriService} from "../../../services/lesson-api-bri.service";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['firstName', 'lastName', 'assistance'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator) paginator: any;

  constructor(private router: Router, private route: ActivatedRoute,
              private lessonsApiService: LessonApiBriService) {

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAllStudents(): void {
    let lessonId = Number(this.route.snapshot.paramMap.get('tutorshipId'));
    this.lessonsApiService.getLessonStudentsByLessonId(lessonId).subscribe((response: any) => {
      this.dataSource.data = response.content;
      console.log(response.content);
    });
  }

  /**Cuenta el numero de checkboxs en true y lo compara con el numero de rows totales */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Seleccion todas las filas (rows) y tambien deselecciona todas segun el caso */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.dataSource.data.forEach(row => row.assistance = false);
    }
    else {
      this.dataSource.data.forEach(row => { this.selection.select(row); row.assistance = true });
    }
  }


  toggleCheckbox(row: any) {
    this.selection.toggle(row);
    row.assistance = !row.assistance;
  }

  //Esto es para marcar los checkboxs si la data viene con true en asistió en algun estudiante
  ngOnInit() {
    this.getAllStudents();
    this.dataSource.data.forEach(p => {
      if (p.assistance)
        this.selection.toggle(p);
    })
  }
}
