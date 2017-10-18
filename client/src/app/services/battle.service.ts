import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { User } from '../interfaces/user';

@Injectable()
export class BattleService {

  battlers = new BehaviorSubject(undefined);

  constructor() { }

  updateUsers(users: Array<User>) {
    this.battlers.next(users);
  }

  resetUsers() {
    this.battlers = new BehaviorSubject(undefined);
  }
}
