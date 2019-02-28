import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './characters';

@Injectable({
  providedIn: 'root'
})


export class CharacterService {

    getCharacter(): Character[] {
        return CHARACTERS;
    }

    constructor() { }
}
