import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinsRoutingModule } from './pins-routing.module';
import { PinsComponent } from './pins.component';

@NgModule({
  declarations: [PinsComponent],
  imports: [CommonModule, PinsRoutingModule],
})
export class PinsModule {}
