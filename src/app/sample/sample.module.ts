import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';

import { ChipInputModule } from './../chip-input/chip-input.module';

import { ROUTES } from './sample.routing';

@NgModule({
  imports: [
    CommonModule,
    ChipInputModule,
    ROUTES
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
