import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinsRoutingModule } from './pins-routing.module';
import { PinsComponent } from './pins.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PinsComponent],
  imports: [CommonModule, PinsRoutingModule, MatTableModule],
})
export class PinsModule {}
