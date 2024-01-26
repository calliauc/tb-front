import { Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-ligne',
  templateUrl: './player-ligne.component.html'
})
export class PlayerLigneComponent {
  @Input() player: Player = new Player("Pseudo", "Name", 0);


}
