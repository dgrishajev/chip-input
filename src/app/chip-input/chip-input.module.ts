import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipInputComponent } from './chip-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChipInputComponent],
  exports: [ChipInputComponent]
})
export class ChipInputModule { }
