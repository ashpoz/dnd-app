import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../../characters';
<<<<<<< HEAD
=======
import {Input} from '@angular/core';
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
<<<<<<< HEAD

=======
  @Input() character;
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20
  characters = CHARACTERS;

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
=======
    console.log(this.character);
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20
  }

}
