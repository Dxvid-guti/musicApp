import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayedSongPage } from './played-song.page';

const routes: Routes = [
  {
    path: '',
    component: PlayedSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayedSongPageRoutingModule {}
