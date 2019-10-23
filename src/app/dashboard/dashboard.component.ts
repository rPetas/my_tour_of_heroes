import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HeroService } from '../core/hero.service';
import { ArenaService } from '../core/arena.service';
import {Arena} from "../classes/arena";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  arenas: Arena[] = [];
  strongestHero: Hero;

  constructor(private heroService: HeroService,
      private arenaService:ArenaService) { }

  ngOnInit() {
    this.getHeroes();
    this.initArenas();
    this.findStrongestHero();
  }

  findStrongestHero() {
    this.heroService.strongestHero()
      .subscribe(hero => this.strongestHero = hero);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
  initArenas(): void {
    this.arenaService.list()
      .subscribe(arenas => this.allocArenas(arenas));
  }

  private allocArenas(arr:Arena[]) :void {
    this.arenas = arr.slice(0, 4);
  }
}