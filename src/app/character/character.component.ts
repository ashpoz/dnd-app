import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characterID;
  characters;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private characterService: CharacterService) {
  }

  onSave(value) {
    this.characterService.createChar(value, this.characterID);
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
        this.characterID = params.id;
    });

    this.characterService.getChars().subscribe(characters => this.characters = characters);
  }

}
