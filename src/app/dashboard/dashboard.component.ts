import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }
  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.characterService.addCharacter({ name } as Character)
      .subscribe(character => {
        this.characters.push(character);
      });
  }

}
