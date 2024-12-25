import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerFormComponent } from './shared/customer-form/customer-form.component';
import { PinFormComponent } from './shared/pin-form/pin-form.component';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  customers: any[] = [];

  constructor(
    private dialog: MatDialog,
    private customerService: CustomerService,
  ) {}

  ngOnInit() {
    this.loadCustomers();
  }

  openCustomerDialog() {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      width: '900px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadCustomers();
    });
  }

  openPinDialog() {
    this.dialog.open(PinFormComponent, { width: '900px' });
  }

  loadCustomers() {
    this.customers = this.customerService.getCustomers();
  }
}
