import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../interfaces/user';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.sass']
})
export class ResultsDisplayComponent implements OnInit {

  @Input() user: User;
  @Input() rank: number;

  private first: boolean;
  private rankDisplay: string;
  private name: string;

  constructor() { }

  ngOnInit() {
    this.rankDisplay = this.rank === 1 ? '1st Place' : '2nd Place';
    this.first = this.rank === 1;
    this.name = this.user.name || this.user.username;
  }

}
