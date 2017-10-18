import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../../services/user.service'
import { BattleService } from '../../services/battle.service'
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {
  private _playerFound : boolean = false;
  private _displayName : User

  @Input() name;
  @Output() readied = new EventEmitter();
  users: Array<User> = [];


  constructor(
    private _us : UserService,
    private _bs : BattleService,
  ) { 
    _bs.updateUsers(this.users);
    _bs.battlers.subscribe(
      users => this.users = users,
      err => console.error(err),
      () => {}
    )
  }

  ngOnInit() {
  }

  newUser(user : User) {
    // Launch Async Stuff
    this._us.newUser(user)
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err))
    this.readied.emit();

    this._bs.updateUsers(this.users.concat([user]));
    
    this._playerFound = true;
    this._displayName = user.name || user.username;
  }



}
