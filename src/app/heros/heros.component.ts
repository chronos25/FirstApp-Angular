import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from '../mock-heros';

// decorator function @component
// selector : cmponet css element selector
// templateUrl : location of html template file
// styleUrls : location of css style
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros = HEROS;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit() {
  }

}
