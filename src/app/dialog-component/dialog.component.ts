import { MatDialogRef } from "@angular/material";
import { Component } from "@angular/core";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls:['./dialog.component.css']
  })
  export class DialogComponent {
    time='days';
    duration="1Day";
    slide=false;
    constructor(
      public dialogRef: MatDialogRef<DialogComponent>) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }