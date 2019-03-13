import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CharacterService } from '../../character.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  @Input() character;
  @Input() characters;

  constructor(private characterService: CharacterService) { }

  // Attributes form control
  // Panel 1
  abilityScoresForm = new FormGroup({
    strengthModifier: new FormControl(1),
    strengthAbilityScore: new FormControl(10),
    dexterityModifier: new FormControl(1),
    dexterityAbilityScore: new FormControl(10),
    constitutionModifier: new FormControl(1),
    constitutionAbilityScore: new FormControl(10),
    intelligenceModifier: new FormControl(1),
    intelligenceAbilityScore: new FormControl(10),
    wisdomModifier: new FormControl(1),
    wisdomAbilityScore: new FormControl(10),
    charismaModifier: new FormControl(1),
    charismaAbilityScore: new FormControl(10),
  });

  updatedMod;

  updateMod(value: number) {
    this.updatedMod = Math.floor((this.abilityScoresForm.get('strengthAbilityScore').value - 10) / 2);
    this.abilityScoresForm.controls['strengthModifier'].setValue(this.updatedMod);
  }

  ngOnInit() {
    console.log('atts ' + this.character);
  }

}
