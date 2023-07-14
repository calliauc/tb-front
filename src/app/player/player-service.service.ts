import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { NewPlayer } from './new-player';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  url_docker: string = "http://backend:8080/players"
  url_local: string = "http://localhost:9000/players"
  url_server: string = "http://192.168.0.228:9000/players"

  constructor(private http: HttpClient) { }

  public get_players() {
    return this.http.get<Player[]>(this.url_server, {responseType: 'json'});
  }

  public create_player(player: NewPlayer){
    console.log(player);
    return this.http.post<NewPlayer>(this.url_server, player, {responseType: 'json'}).subscribe();
  }

}
