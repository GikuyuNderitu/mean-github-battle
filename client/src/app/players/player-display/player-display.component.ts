import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-display',
  templateUrl: './player-display.component.html',
  styleUrls: ['./player-display.component.sass']
})
export class PlayerDisplayComponent implements OnInit {

  private _name: string;

  @Input()
  set name(newName: string) {
    this._name = newName;
  }

  constructor() { }

  ngOnInit() {
    console.log(this._name);
  }

}
