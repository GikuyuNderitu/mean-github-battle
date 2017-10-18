import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { GithubService } from '../../services/github.service'
import { BattleService } from '../../services/battle.service'
import {User} from '../../interfaces/user'

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.sass']
})
export class PlayerInputComponent implements OnInit {

  @Input() name;
  @Output() newUser: EventEmitter<User> = new EventEmitter<User>();
  users = []

  user: User = {
    username: ""
  }

  gitError: boolean = false;

  constructor(
    private _gh : GithubService,
    private _bs : BattleService
  ) { 
    _bs.battlers.subscribe(
      battlers => this.users = battlers,
      (err) => {},
      () => {}
    )
  }

  ngOnInit() {
  }

  submitForm() {
    console.log(this.user);
    this._gh.getUser(this.user.username)
    .then(this.processUser.bind(this))
    .catch(err => {
      this.gitError = true;
    });
  }

  processUser(data) {
    console.log(data);
    this.user.username = data.login;
    this.user.name = data.name
    this.user.score = data.followers + data.public_repos;

    this.newUser.emit(this.user)
  }

}
