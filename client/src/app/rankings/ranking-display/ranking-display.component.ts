import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../interfaces/user';

@Component({
  selector: 'app-ranking-display',
  templateUrl: './ranking-display.component.html',
  styleUrls: ['./ranking-display.component.sass']
})
export class RankingDisplayComponent implements OnInit {
  private displayName: string;

  @Input() user: User;
  @Input() rank: number;


  constructor() { }

  ngOnInit() {
    this.displayName = this.user.name || this.user.username;
  }

}
