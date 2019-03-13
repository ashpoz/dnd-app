import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() character;
  @Input() characters;

  characterID;
  characterName;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterID = this.character;
    this.characterName = this.characters;
  }

  // save(): void {
  //   this.characterService.updateCharacter(this.character)
  //     .subscribe(() => this.goBack());
  // }

}
