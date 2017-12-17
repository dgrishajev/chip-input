import { Component, ElementRef } from '@angular/core';
import { ChipInputService } from './chip-input.service';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
  host: {
    '(document:click)': 'onBodyClick($event)',
  },
})
export class ChipInputComponent {

  chips: Array<Object> = [];
  fetchedSuggestions: Array<Object> = [];
  focusedSuggestionIdx: number = -1;
  entityProp: string = 'name';
  inputVal: string = '';

  constructor(
    private chipInputService: ChipInputService,
    private _eref: ElementRef
  ) {}

  onInput(event): void {
    if ( event.target.value ) {
      this.chipInputService.getEntities(event.target.value)
        .subscribe(responce => this.fetchedSuggestions = responce['results']);
    } else {
      this.fetchedSuggestions = [];
    }
  }

  onKeyDown(event): void {
    if ( event.keyCode === 8 && !event.target.value ) {
      this.chips.splice( this.chips.length - 1, 1 );
    }
    if ( event.keyCode === 40 && this.fetchedSuggestions.length && this.focusedSuggestionIdx < this.fetchedSuggestions.length - 1 ) {
      this.focusedSuggestionIdx++;
    }
    if ( event.keyCode === 38 && this.fetchedSuggestions.length && this.focusedSuggestionIdx > -1 ) {
      this.focusedSuggestionIdx--;
    }
    if ( event.keyCode === 13 && this.focusedSuggestionIdx > -1 ) {
      this.onSelect( this.fetchedSuggestions[this.focusedSuggestionIdx] );
    }
  }

  onSelect(suggestion): void {
    if ( !this.isSelected(suggestion) ) {
      this.chips.push(suggestion);
      this.collapseDropdown();
    }
  }

  onMouseOver(): void {
    this.focusedSuggestionIdx = -1;
  }

  onRemove(chip): void {
    this.chips.splice( this.chips.indexOf(chip), 1 );
  }

  isSelected(entity: Object): boolean {
    return this.chips.some(obj => {
      return JSON.stringify(entity) === JSON.stringify(obj);
    });
  }

  collapseDropdown(): void {
      this.fetchedSuggestions = [];
      this.inputVal = '';
      this.focusedSuggestionIdx = -1;
  }

  onBodyClick(event): void {
   if (!this._eref.nativeElement.contains(event.target)) this.collapseDropdown();
  }

}
