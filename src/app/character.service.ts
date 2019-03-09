import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Character } from './character';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

    /** POST: add a new hero to the server */
    addCharacter (character: Character): Observable<Character> {
      return this.http.post<Character>(this.characterUrl, character, httpOptions).pipe(
        tap((newCharacter: Character) => console.log(`added hero w/ id=${newCharacter.id}`)),
        catchError(this.handleError<Character>('addCharacter'))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
