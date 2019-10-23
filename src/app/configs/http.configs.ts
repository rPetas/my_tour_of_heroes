import {HttpHeaders } from '@angular/common/http';

export const URL = 'api';
export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};