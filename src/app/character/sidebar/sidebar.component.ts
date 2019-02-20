import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../../characters';
import {Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() character;
  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
    console.log(this.character);
  }

}
