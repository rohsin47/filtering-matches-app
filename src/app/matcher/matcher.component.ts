import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { of } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { User } from '../model/user';
import { UserResult } from '../model/user-result';
import { UserFilter } from '../model/user-filter';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-matcher',
  templateUrl: './matcher.component.html',
  styleUrls: ['./matcher.component.scss']
})
export class MatcherComponent {  
    score: number;
    age: number;
    height: number;
    result: UserResult;
    users: User[];
    model = new UserFilter();

  constructor(private userDataService: UserDataService) { 
      this.loadUsers();
  }

  loadUsers() {
    this.users = this.userDataService.getUsers();
  }

}
