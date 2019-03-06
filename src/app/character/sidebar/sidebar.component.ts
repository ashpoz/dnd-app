import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Character } from '../../character';
import { CharacterService } from '../../character.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() character;
  characterID;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterID = this.character;
  }

  save(): void {
    this.characterService.updateCharacter(this.character)
      .subscribe(() => this.goBack());
  }

}
