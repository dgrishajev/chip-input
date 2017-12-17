import { Component } from '@angular/core';
import { ChipInputService } from './chip-input.service';

console.log(ChipInputService);

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
})
export class ChipInputComponent {

  chips: Array<Object> = [];
  fetchedSuggestions: Array<Object> = [];
  entityProp: string = 'name';
  inputVal: string = '';

  constructor(private chipInputService: ChipInputService) {}

  onInput(event): void {
    if ( event.target.value ) {
      this.chipInputService.getEntities(event.target.value)
        .subscribe(responce => this.fetchedSuggestions = responce['results']);
    } else {
      this.fetchedSuggestions = [];
    }
  }

  onSelect(suggestion): void {
    this.chips.indexOf(suggestion) === -1 ? this.chips.push(suggestion) : null;
    this.fetchedSuggestions = [];
    this.inputVal = '';
  }

  onRemove(chip): void {
    this.chips.splice( this.chips.indexOf(chip), 1 );
  }

}
