import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../../characters';
import { Input } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {
  @Input() character;
  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
    console.log('atts ' + this.character);
  }

}
