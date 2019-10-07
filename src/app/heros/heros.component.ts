import { Component, OnInit } from '@angular/core';
import { Hero } from '../heros/hero';
import { HEROS } from '../mock-heros';
import { HeroService } from '../hero.service';

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

  selectedHero: Hero;
  heros : Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {
  }
  getHeroes(): void {
    this.heros = this.heroService.getHeros();
  }
  ngOnInit() {
    this.getHeroes();
  }

}
