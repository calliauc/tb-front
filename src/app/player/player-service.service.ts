import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { NewPlayer } from './new-player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  url: string = "http://localhost:8080/players"

  constructor(private http: HttpClient) { }

  public get_players() {
    return this.http.get<Player[]>(this.url, {responseType: 'json'});
  }

  public create_player(player: NewPlayer){
    console.log(player);
    return this.http.post<NewPlayer>(this.url, player, {responseType: 'json'}).subscribe();
  }

}
