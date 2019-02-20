import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../characters';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
  }

}
