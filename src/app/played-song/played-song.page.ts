import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-played-song',
  templateUrl: './played-song.page.html',
  styleUrls: ['./played-song.page.scss'],
})

export class PlayedSongPage implements OnInit {

  isIconHeartSelected = false;
  isPlaying = false;
  pushedBack = false;
  pushedNext = false;

  toggleIconHeart() {
    this.isIconHeartSelected = !this.isIconHeartSelected;
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
  }

  togglePushedBack() {
    this.pushedBack = !this.pushedBack;
  }

  togglePushedNext() {
    this.pushedNext = !this.pushedNext;
  }


  constructor() { }

  ngOnInit() {
  }

}
