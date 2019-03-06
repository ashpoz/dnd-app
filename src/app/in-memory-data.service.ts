import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Character } from './character';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
      { id: 11, name: 'Mr. Nice', image: 'https://via.placeholder.com/150' },
      { id: 12, name: 'Narco', image: 'https://via.placeholder.com/150' },
      { id: 13, name: 'Bombasto', image: 'https://via.placeholder.com/150' },
      { id: 14, name: 'Celeritas', image: 'https://via.placeholder.com/150' },
      { id: 15, name: 'Magneta', image: 'https://via.placeholder.com/150' },
      { id: 16, name: 'RubberMan', image: 'https://via.placeholder.com/150' },
      { id: 17, name: 'Dynama', image: 'https://via.placeholder.com/150' },
      { id: 18, name: 'Dr IQ', image: 'https://via.placeholder.com/150' },
      { id: 19, name: 'Magma', image: 'https://via.placeholder.com/150' },
      { id: 20, name: 'Tornado', image: 'https://via.placeholder.com/150' }
    ];
    return {characters};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11;
  }
}
