import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import * as _ from "lodash";
import {ActivatedRoute, Route, Router} from "@angular/router";


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './reservation-details-dialog.component.html',
  styleUrls: ['./reservation-details-dialog.component.css']
})
export class ReservationDetailsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReservationDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public workshop: any,
    private router:Router,private activate_router:ActivatedRoute
    ) {
  }

  ngOnInit(): void {
  }

  onClickNO(): void {
    this.dialogRef.close();
  }
  onClickYes():void{
    this.dialogRef.close();
    //implementar api delete session

    this.router.navigate([`./student/${this.workshop.id}/reservations`])
      .then(() => console.log('Delete and go away'));
  }
}
