import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerServiceService } from './player-service.service';
import { NewPlayer } from './new-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: NewPlayer = {
    pseudo:"",
    name:""
  };

  players!: Player[];
  afficher_bloc_players: boolean = false;

  constructor(private playerService: PlayerServiceService){}

  ngOnInit(): void {
    console.log("hello");
    this.actualiser_liste();
    }

    actualiser_liste(){
      this.playerService.get_players().subscribe((result) => {
        this.players = result;
      });
    }

    afficher_joueurs(){
      console.log(this.players);
      this.actualiser_liste();
      this.afficher_bloc_players = true;
    }
  
    cacher_joueurs(){
      this.afficher_bloc_players = false;
    }

    onSubmitForm(){
      console.log(this.playerService.create_player(this.player));
      this.actualiser_liste();
      this.player.name="";
      this.player.pseudo="";
    }
  }
