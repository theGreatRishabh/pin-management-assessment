import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinsRoutingModule } from './pins-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [CommonModule, PinsRoutingModule, MatTableModule],
})
export class PinsModule {}
