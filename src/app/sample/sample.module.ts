import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChipInputModule } from './../chip-input/chip-input.module';

import { SampleComponent } from './sample.component';

import { ROUTES } from './sample.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChipInputModule,
    ROUTES
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
