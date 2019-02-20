import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../../characters';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
  }

}
