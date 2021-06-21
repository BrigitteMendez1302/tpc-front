import { Component, OnInit } from '@angular/core';
import { MatDialog} from "@angular/material/dialog";
import { ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-workshops-student',
  templateUrl: './list-workshops-student.component.html',
  styleUrls: ['./list-workshops-student.component.css']
})
export class ListWorkshopsStudentComponent implements OnInit {
  courses: Array<any> = [
    {id: 1, courseName: 'Programación 1'},
    {id: 2, courseName: 'Programación 2'},
  ];
  tutors: Array<any> = [
    {id: 1, firstName: 'Lucas', lastName:'Moreno'},
    {id: 2, firstName: 'Rodrigo', lastName:'Uribe'},
    {id: 3, firstName: 'Rodrigo', lastName:'Garay'},
  ];
  workshops: Array<any> = [
    {id: 1, courseName: 'Programación 1', tutorName: 'Lucas Moreno', starDate: '13:00', endDate: '15:00'},
    {id: 1, courseName: 'Programación 2', tutorName: 'Rodrigo Uribe',  starDate: '13:00', endDate: '15:00'},
    {id: 1, courseName: 'Programación 1', tutorName: 'Rodrigo Garay', starDate: '13:00', endDate: '15:00'},
  ];
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar():void {
    this.snackBar.open('Taller reservado con éxito', '',
      {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition:"right",
        panelClass: ['success']
      });
  }

  openDialog(object: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: [object.courseName, object.tutorName, object.starDate, object.endDate]
    });
    dialogRef.afterClosed().subscribe(response =>{
      console.log(response);
      if (response){
        // console.log('Se reservo un taller');
        console.log(this.openSnackBar());
      }
    });
  }
}
