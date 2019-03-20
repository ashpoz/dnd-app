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

  getCharacters(): void {
    this.characterService.getChars()
      .subscribe(characters => this.characters = characters);
  }

  add(id: number): void {
    // 1. needs to create a new id number
    // 2. add new character to the firebase database
  }

  ngOnInit() {
    this.getCharacters();
  }

}

