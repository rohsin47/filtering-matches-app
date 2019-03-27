import { Injectable } from '@angular/core';
import userData from '../../data/matches.json';
import { User } from '../model/user';
import { UserFilter } from '../model/user-filter';
import { UserResult } from '../model/user-result';
import { Observable } from 'rxjs';
import { of } from 'rxjs'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserDataService {

  private users : User[];

  constructor(private http: HttpClient) {
      this.users = [];
  }
  
  getUsers(): any {  
      return userData;
  }

  queryUsers(params?: any) {
      if(!params) {
        return this.getUsers();
      }

      return this.getUsers().filter((item) => {
        for(let key in params) {
          let field = item[key];
          if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) > -1) {
            return item;
          } else if(field == params[key]) {
            return item;
          }
        }
        return null;
      });
    }
}
