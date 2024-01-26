import { Component, OnInit } from '@angular/core';
import { Player } from './models/player';
import { PlayerServiceService } from './services/player-service.service';
import { NewPlayer } from './models/new-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit {

  player: NewPlayer = {
    pseudo: "",
    name: ""
  };

  players!: Player[];
  afficher_bloc_players: boolean = false;

  constructor(private playerService: PlayerServiceService) { }

  ngOnInit(): void {
    console.log("hello");
    this.actualiser_liste();
  }

  actualiser_liste() {
    this.playerService.get_players().subscribe((result) => {
      this.players = result;
    });
  }

  afficher_joueurs() {
    console.log(this.players);
    this.actualiser_liste();
    this.afficher_bloc_players = true;
  }

  cacher_joueurs() {
    this.afficher_bloc_players = false;
  }

  onSubmitForm() {
    if (this.player.name != "" && this.player.pseudo != "")
      this.playerService.create_player(this.player).subscribe(_ => {
        this.actualiser_liste();
        this.player.name = "";
        this.player.pseudo = "";
      }).unsubscribe;
  }
}
