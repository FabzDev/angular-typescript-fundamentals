import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  constructor() {}

  public characters_service: Character[] = [
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  add_character(char: Character): void {
    const newCharacter = { ...char, id: uuidv4() };

    this.characters_service.push(newCharacter);
  }

  deleteCharById(id: string): void {
    this.characters_service = this.characters_service.filter( (char) => char.id !== id );
  }
}
