import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BattleService } from '../services/battle.service';
import { User } from '../interfaces/user';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})

export class ResultsComponent implements OnInit {
  battlers = []
  private winner: string;
  constructor(
    private _bs: BattleService,
    private router: Router
  ) { 
    _bs.battlers.subscribe(
      updatedBattlers => this.battlers = updatedBattlers,
      err => {console.error(err)},
      () => {}
    )
  }

  ngOnInit() {
    this.battlers = this.battlers.sort((a, b) => {
      return b.score - a.score;
    })

    this.winner = this.battlers[0].name || this.battlers[0].username;
  }

  reset() {
    this._bs.resetUsers();
    this.router.navigate(['/']);
  }



}
