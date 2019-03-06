import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Character } from './character';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CharacterService {
  private characterUrl = 'api/characters';  // URL to web api

  constructor(
    private http: HttpClient) { }

    getCharacters(): Observable<Character[]> {
      return this.http.get<Character[]>(this.characterUrl);
    }

    updateCharacter (character: Character): Observable<any> {
      return this.http.put(this.charactersUrl, character, httpOptions).pipe(
        tap(_ => this.log(`updated character id=${hecharacterro.id}`)),
        catchError(this.handleError<any>('updateCharacter'))
      );
    }
}
