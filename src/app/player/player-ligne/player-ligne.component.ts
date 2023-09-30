import { Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-ligne',
  templateUrl: './player-ligne.component.html'
})
export class PlayerLigneComponent {
  @Input() player: Player;

  constructor(){
    this.player = new Player("","",1);
  }
}
