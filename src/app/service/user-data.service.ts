import { Injectable } from '@angular/core';
import userData from '../../data/matches.json';
import { User } from '../model/user';
import { UserFilter } from '../model/user-filter';
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
  
  filterUsers(filterBy: UserFilter){
      
      let query = true;
      
      return this.getUsers().filter((item) => {
          if(filterBy.hasphoto) {
              if(filterBy.hasphoto == 'yes') {
                  query = item["main_photo"]; 
              } else {
                  query = !item["main_photo"];
              }
          }
          if(filterBy.incontact) {
              if(filterBy.incontact == 'yes') {
                  query = query && item["contacts_exchanged"] > 0
              } else {
                  query = query && item["contacts_exchanged"] < 0
              }
          }
          if(filterBy.isfavourite){
              if(filterBy.isfavourite == 'yes') {
                  query = query && item["favourite"]; 
              } else {
                  query = query && !item["favourite"];
              }
          }
          if(filterBy.mincompatibilityscore) {
              query = query && (item["compatibility_score"] > (filterBy.mincompatibilityscore/100)); 
          } 
          if(filterBy.maxcompatibilityscore) {
              query = query && (item["compatibility_score"] < (filterBy.maxcompatibilityscore/100)); 
          } 
          if(filterBy.minimumage) {
              query = query && (item["age"] > filterBy.minimumage); 
          } 
          if(filterBy.maximumage) {
              query = query && (item["age"] < filterBy.maximumage); 
          } 
          if(filterBy.minimumheight) {
              query = query && (item["height_in_cm"] > filterBy.minimumheight); 
          } 
          if(filterBy.maximumheight) {
              query = query && (item["height_in_cm"] < filterBy.maximumheight); 
          } 
          console.log(query);
          return query;
      });     
  }
  
  queryUsers(params?: any) {
      if(!params) {
        return this.getUsers();
      }

      return this.getUsers().filter((item) => {
        for(let key in params) {
          let field = item[key];
          if(!field){
             return null;
          }
          else if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) > -1) {
            return item;
          } else if(field == params[key]) {
            return item;
          }
        }
        return null;
      });
    }
}
