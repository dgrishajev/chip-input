import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      chips: [[
        {name: 'Reactive Name'},
        {name: 'Reactive Name 2'}
      ]]
    });
  }

  entityProp: string = 'name';

  sampleChips: Array<Object> = [
    {name: 'Name'},
    {name: 'Name 2'}
  ]

}
