import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLigneComponent } from './player-ligne.component';

describe('PlayerLigneComponent', () => {
  let component: PlayerLigneComponent;
  let fixture: ComponentFixture<PlayerLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerLigneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
