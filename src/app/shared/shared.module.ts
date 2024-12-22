import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { PinFormComponent } from './pin-form/pin-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [PinFormComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule,
  ],
  exports: [PinFormComponent, CustomerFormComponent],
})
export class SharedModule {}
