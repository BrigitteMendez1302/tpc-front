import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Lessontpc} from "../../../models/lessontpc";
import * as _ from "lodash";
import {LessonApiService} from "../../../services/lesson-api.service";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public workshop: any) {
  }

  ngOnInit(): void {
  }

  onClickNO(): void {
    this.dialogRef.close();
  }
}
