import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayedSongPageRoutingModule } from './played-song-routing.module';

import { PlayedSongPage } from './played-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayedSongPageRoutingModule
  ],
  declarations: [PlayedSongPage]
})
export class PlayedSongPageModule {}
