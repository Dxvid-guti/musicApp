import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayedSongPage } from './played-song.page';

describe('PlayedSongPage', () => {
  let component: PlayedSongPage;
  let fixture: ComponentFixture<PlayedSongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayedSongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
