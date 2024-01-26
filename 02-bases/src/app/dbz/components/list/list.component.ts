import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public deleteEventEmitter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characters_list: Character[] = [
    {
      name: 'Trunks',
      power: 4000,
    },
  ];

  onDeleteChar(id?: string): void {

    if(!id)
      return
    this.deleteEventEmitter.emit(id);
  }
}
