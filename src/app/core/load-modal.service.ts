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

  openModal(message?: string, additionalMessage?: string): MatDialogRef<BloackingLoadDialogComponent> {
    const dialogData = {
      width: '50%', disableClose: true, data: {}
    };
    if (message) {
      dialogData.data['message'] = message;
    }
    if (additionalMessage) {
      dialogData.data['additionalMessage'] = additionalMessage;
    }
    return this.dialog.open(BloackingLoadDialogComponent, dialogData);
  }
}
