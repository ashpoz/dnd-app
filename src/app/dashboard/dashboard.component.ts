import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  characters;

  constructor(
    private router: Router,
    private characterService: CharacterService) { }

    add() {
      // 1. needs to create a new id number
      // 2. add new character to the firebase database
      this.characterService.addChar()
      .subscribe(characters => this.characters = characters);
      // console.log(this.newID);
      return this.characters.length + 1;
    }

  getCharacters(): void {
    this.characterService.getChars()
      .subscribe(characters => this.characters = characters);
  }


  ngOnInit() {
    this.getCharacters();
    // have to perform add() function AFTER the firebase data is successfully retrieved
    this.add();
  }



}

