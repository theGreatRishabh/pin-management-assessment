import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerFormComponent } from './shared/customer-form/customer-form.component';
import { PinFormComponent } from './shared/pin-form/pin-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openCustomerDialog() {
    this.dialog.open(CustomerFormComponent, { width: '400px' });
  }

  openPinDialog() {
    this.dialog.open(PinFormComponent, { width: '500px' });
  }
}
