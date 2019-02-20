import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../characters';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
  }

}
