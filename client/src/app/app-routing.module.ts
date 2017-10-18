import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
// import { PlayersComponent } from './players/players.component';
// import { PlayersComponent } from './players/players.component';

import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';


const routes: Routes = [
  {path: '', redirectTo:"players", pathMatch: "full"},
  {path: 'players', component: PlayersComponent,
    children: [
    ]
  },
  {path: 'results', component: ResultsComponent },
  {path: 'rankings', component: RankingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
