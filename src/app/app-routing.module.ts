import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { PinListComponent } from './pins/pin-list/pin-list.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'pins', component: PinListComponent },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
