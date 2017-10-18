import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerInputComponent } from './players/player-input/player-input.component';
import { PlayerDisplayComponent } from './players/player-display/player-display.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

import { GithubService } from './services/github.service';
import { UserService } from './services/user.service';
import { BattleService } from './services/battle.service';
import { PlayerComponent } from './players/player/player.component';
import { RankingDisplayComponent } from './rankings/ranking-display/ranking-display.component';
import { ResultsDisplayComponent } from './results/results-display/results-display.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerInputComponent,
    PlayerDisplayComponent,
    ResultsComponent,
    RankingsComponent,
    PlayerComponent,
    RankingDisplayComponent,
    ResultsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    GithubService,
    UserService,
    BattleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
