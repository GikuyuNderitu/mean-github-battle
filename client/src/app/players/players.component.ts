import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})
export class PlayersComponent implements OnInit {
  private ready : boolean

  playerCount: number = 0

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  playerReady() {
    this.playerCount ++
    if(this.playerCount >= 2) this.ready = true
    console.log(this.playerCount);
  }

  battle() {
    this.router.navigate(['/results']);
  }

}
