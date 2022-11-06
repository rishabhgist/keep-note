import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) {}
  
   openDialog() {
    const dialogRef = this.dialog.open(AddDataDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'add-note',
  templateUrl: '../add-note/add-note.component.html',
})
  
export class AddDataDialog {}