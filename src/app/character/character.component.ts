import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../characters';
<<<<<<< HEAD
=======
import {ActivatedRoute, Router} from '@angular/router';
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters = CHARACTERS;
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
=======
  characterID;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
        this.characterID = params.id;
    });
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20
  }

}
