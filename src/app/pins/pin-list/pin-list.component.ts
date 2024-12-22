import { Component, OnInit } from '@angular/core';
import { PinService } from 'src/app/services/pin.service';
import { MatDialog } from '@angular/material/dialog';
import { PinFormComponent } from 'src/app/shared/pin-form/pin-form.component';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss'],
})
export class PinListComponent implements OnInit {
  pins: any[] = [];
  columns: string[] = ['title', 'image', 'collaborators', 'privacy'];

  constructor(
    private pinService: PinService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.pinService.getPins().subscribe((data) => {
      this.pins = data;
    });
  }

  loadPins() {
    this.pinService.getPins().subscribe((data) => {
      this.pins = data;
    });
  }

  openPinForm() {
    const dialogRef = this.dialog.open(PinFormComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Pin added:', result);
        this.loadPins();
      }
    });
  }
}