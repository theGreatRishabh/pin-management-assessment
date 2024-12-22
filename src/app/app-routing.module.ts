import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinService } from 'src/app/services/pin.service';
import { MatDialog } from '@angular/material/dialog';

import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { PinListComponent } from './pins/pin-list/pin-list.component';
import { PinFormComponent } from 'src/app/shared/pin-form/pin-form.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'pins', component: PinListComponent },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  pins: any[] = [];
  columns: string[] = ['title', 'image', 'collaborators', 'privacy'];

  constructor(
    private pinService: PinService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadPins();
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
        this.loadPins();
      }
    });
  }
}
