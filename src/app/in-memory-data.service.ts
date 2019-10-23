import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './classes/hero';
import { Arena } from './classes/arena';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const arenas = [
      {id:11, name:"Luz", spectators:50000},
      {id:12, name:"Antas", spectators:38000},
      {id:13, name:"Prophecy Arena", spectators:randomSpecs()},
      {id:14, name:"Millennium Falcon", spectators:randomSpecs()},
      {id:15, name:"Ebon Hawk", spectators:randomSpecs()},
      {id:16, name:"Area 51", spectators:randomSpecs()},
      {id:17, name:"Black Mustang", spectators:randomSpecs()},
      {id:18, name:"Citadel", spectators:randomSpecs()},
    ];

    function randomSpecs(){
      return Math.ceil(Math.random()*60000);
    }

    return {heroes:heroes, arenas:arenas};
  }

  genId<T extends Hero | Arena>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
