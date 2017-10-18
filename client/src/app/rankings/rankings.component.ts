import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.sass']
})
export class RankingsComponent implements OnInit {

  private _users: Array<User>

  constructor(
    private _us : UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._us.getUsers()
    .then( data => this._users = data.sort((a, b) => b.score - a.score))
    .catch( err => {
      console.error(err)
    })
  } 

}
