import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { NewPlayer } from './new-player';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  url_docker: string = "http://backend:9000/players"
  url_local: string = "http://localhost:9000/players"
  url_server: string = "http://192.168.0.228:9000/players"
  url_distant: string = "https://api-trollball.makhai.xyz/players"

  constructor(private http: HttpClient) { }

  public get_players() {
    return this.http.get<Player[]>(this.url_distant, {responseType: 'json'});
  }

  public create_player(player: NewPlayer){
    console.log(player);
    return this.http.post<NewPlayer>(this.url_distant, player, {responseType: 'json'}).subscribe();
  }

}
