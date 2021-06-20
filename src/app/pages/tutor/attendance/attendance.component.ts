import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { LessonStudent } from '../interfaces/lesson-student.interface';
import { LessonStudentsApiService } from '../../../services/lesson-student-api.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers:[LessonStudentsApiService],
})
export class AttendanceComponent implements OnInit{
  displayedColumns: string[] = ['select', 'id', 'name', 'lastname', 'assistance'];
  dataSource = new MatTableDataSource<LessonStudent>();
  selection = new SelectionModel<LessonStudent>(true, []);

  constructor(private lessonStudentsApiService:LessonStudentsApiService) {
 
  }

  getAllStudents(): void {
    this.lessonStudentsApiService.getAllLessonStudents().subscribe((response: any) => {
      this.dataSource.data = response;
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
  

  toggleCheckbox(row: LessonStudent) {
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
