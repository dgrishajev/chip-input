import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChipInputModule } from './chip-input/chip-input.module';
import { SampleModule } from './sample/sample.module';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChipInputModule,
    SampleModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
