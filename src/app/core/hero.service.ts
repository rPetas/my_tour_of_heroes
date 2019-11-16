import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import * as globals  from '../configs/http.configs';
import { Hero } from '../classes/hero';
import { MessageService } from './message.service';
import {ApiService} from "./api.service";
import { environment } from 'src/environments/environment.dev';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroesUrl = globals.URL + '/heroes';

  getHeroes(): Observable<Hero[]> {
    console.log(environment.apiURL);
    return this.api.get<Hero[]>(this.heroesUrl).pipe(
      tap(h => this.log(`fetched ${h.length} heroes`)),
      catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  strongestHero(): Observable<Hero> {
    const strongURL = this.heroesUrl + '/strongest';
    return this.http.get<Hero>(strongURL).pipe(
      tap(_ => this.log(`fetched hero id=${_.id}`)),
      catchError(this.handleError<Hero>('cant find strongest hero')));;
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  retrieveHero(id:number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`)));;
  }

  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, globals.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, globals.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, globals.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return this.messageService.handleError(operation, result);
  }

  constructor(private messageService: MessageService,
    private http: HttpClient,
    private api: ApiService) { }
}
