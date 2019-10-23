import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Arena } from '../classes/arena';
import * as globals  from '../configs/http.configs';
import {ApiService} from "./api.service";
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ArenaService {
  private arenasURL = globals.URL + '/arenas';

  list(): Observable<Arena[]> {
    return this.apiService.get<Arena[]>(this.arenasURL, globals.httpOptions).pipe(
      tap(a => this.log(`fetched ${a.length} arenas`)),
      catchError(this.messageService.handleError<Arena[]>('getHeroes', [])));
  }
  
  private log(arg0: string): void {
    this.messageService.add(arg0);
  }

  constructor(private apiService:ApiService, private messageService:MessageService) { }
}
