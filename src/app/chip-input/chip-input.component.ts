import { Component, Input, forwardRef, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChipInputService } from './chip-input.service';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipInputComponent),
      multi: true
    }
  ],
  host: {
    '(document:click)': 'onBodyClick($event)',
  },
})
export class ChipInputComponent implements ControlValueAccessor {

  @Input() _chips: Array<Object> = [];
  @Input() propName: string = 'name';

  fetchedSuggestions: Array<Object> = [];
  focusedSuggestionIdx: number = -1;
  inputVal: string = '';
  efficientSearch: Function = this.debounce(this.search, 0.04);

  constructor(
    private chipInputService: ChipInputService,
    private _eref: ElementRef
  ) {}

  get chips() {
    return this._chips;
  }

  set chips(val) {
    this._chips = val;
    this.propagateChange(this._chips);
  }

  writeValue(value: Array<Object>) {
    if ( value ) {
      this.chips = value;
    } else {
      this.chips = [];
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  search(keyWord: string): void {
    if ( this.inputVal ) {
      this.chipInputService.getEntities(keyWord)
        .subscribe(responce => this.fetchedSuggestions = responce['results']);
    }
  }

  onInput(event): void {
    if ( event.target.value ) {
      this.efficientSearch(event.target.value);
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

  onBodyClick(event): void {
   if ( !this._eref.nativeElement.contains(event.target) ) this.collapseDropdown();
  }

  isSelected(entity: Object): boolean {
    return this.chips.some(obj => {
      return JSON.stringify(entity) === JSON.stringify(obj);
    });
  }

  debounce(func, ms): Function {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, ms);
    };
  }

  collapseDropdown(): void {
    this.fetchedSuggestions = [];
    this.inputVal = '';
    this.focusedSuggestionIdx = -1;
  }

}
