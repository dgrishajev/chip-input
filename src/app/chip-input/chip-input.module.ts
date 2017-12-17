import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ChipInputComponent } from './chip-input.component';
import { ChipInputService } from './chip-input.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ChipInputComponent],
  exports: [ChipInputComponent],
  providers: [ChipInputService]
})
export class ChipInputModule { }
