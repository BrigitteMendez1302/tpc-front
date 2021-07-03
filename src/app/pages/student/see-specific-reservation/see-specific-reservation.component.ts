import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LessonApiService } from 'src/app/services/lesson-api.service';
import {ReservationDetailsDialogComponent} from "../reservation-details-dialog/reservation-details-dialog.component";
import {Lessontpc} from "../../../models/lessontpc";



@Component({
  selector: 'app-see-specific-reservation',
  templateUrl: './see-specific-reservation.component.html',
  styleUrls: ['./see-specific-reservation.component.css']
})
export class SeeSpecificReservationComponent implements OnInit {
  // @ts-ignore
  lesson:Lessontpc
  reservationId:string|null =""
  id:String|null = ""
  constructor(private lessonApiService:LessonApiService,private route: ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reservationId= this.route.snapshot.paramMap.get('reservationId');
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.reservationId !== null)
    this.getLessonById(this.reservationId);
  }

  getLessonById(id:string): void {
    this.lessonApiService.getLessonById(parseInt(id)).subscribe((response: any) => {
      this.lesson = response;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReservationDetailsDialogComponent, {
      width: '300px',
      height:'300px',
      data: {
        title: "¿Desea cancelar este " + this.lesson.lessonType + "?", content: "No podrá deshacer esta opción luego",
        id: this.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}



