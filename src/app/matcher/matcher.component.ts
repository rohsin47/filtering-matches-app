import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { of } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { User } from '../model/user';
import { UserFilter } from '../model/user-filter';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-matcher',
  templateUrl: './matcher.component.html',
  styleUrls: ['./matcher.component.scss']
})
export class MatcherComponent {  
    hasPhoto: string;
    inContact: string;
    isFavorite: string;
    compatibilityScore : { lower: number; upper: number; }  = {'lower':1, 'upper':99}
    age: { lower: number; upper: number; } = {'lower':18, 'upper':95};
    height: { lower: number; upper: number; } = {'lower':135, 'upper':210};
    users: User[];
    model = new UserFilter();

  constructor(private userDataService: UserDataService) { 
      this.loadUsers();
  }

  loadUsers() {
    this.users = this.userDataService.getUsers();
  }
  
  filterUsers(event) {
      this.model.hasphoto = this.hasPhoto;
      this.model.incontact = this.inContact;
      this.model.isfavourite = this.isFavorite;
      this.model.mincompatibilityscore = this.compatibilityScore.lower;
      this.model.maxcompatibilityscore = this.compatibilityScore.upper;
      this.model.minimumage = this.age.lower;
      this.model.maximumage = this.age.upper;
      this.model.minimumheight = this.height.lower;
      this.model.maximumheight = this.height.upper;
      console.log(this.model);
      this.users = this.userDataService.filterUsers(this.model);
  }

}
