import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

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

  characters: Observable<any>;
  // characterObjs = this.characters.valueChanges();

  constructor(private db: AngularFirestore) {
    this.characters = db.collection('characters').valueChanges();
  }

  createChar(value, id) {
    return this.db.collection('characters').add({
      name: value.name,
      image: value.image,
      id: id
    });
  }

  getChars() {
    return this.characters;
  }

  // addChar() {
  //   // need to figure out how to push to db
  //   return this.characters;
  // }

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
