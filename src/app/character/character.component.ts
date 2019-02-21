import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../characters';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters = CHARACTERS;
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
  }

}
