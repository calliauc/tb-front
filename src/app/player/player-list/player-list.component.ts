import { Component, Input } from '@angular/core';
import { Player } from '../models/player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent {
  @Input() players?: Player[];

}
