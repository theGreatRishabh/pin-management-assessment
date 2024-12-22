import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [CustomersComponent, CustomerListComponent],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
