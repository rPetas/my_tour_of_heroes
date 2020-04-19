import { BloackingLoadDialogComponent } from './../bloacking-load-dialog/bloacking-load-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class LoadModalService {

  constructor(
    private dialog: MatDialog
  ) { }

  openModal(): MatDialogRef<BloackingLoadDialogComponent> {
    return this.dialog.open(BloackingLoadDialogComponent, {
      width: '50%', disableClose: true
    });
  }
}
