import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentChecked {

  characterID;
  characters;

  constructor(
    private router: Router,
    private characterService: CharacterService) { }



  getCharacters(): void {
    this.characterService.getChars()
      .subscribe(characters => this.characters = characters);
  }

  addId() {
    // 1. needs to create a new id number
    // 2. add new character to the firebase database
    this.characterService.getChars()
    .subscribe(characters => this.characterID = characters.length + 1);
    // console.log(this.characterID);
  }


  ngOnInit() {
    this.getCharacters();
    // have to perform add() function AFTER the firebase data is successfully retrieved
  }

  ngAfterContentChecked(): void {
    this.addId();
  }

}

