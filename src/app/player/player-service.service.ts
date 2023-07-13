import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { NewPlayer } from './new-player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  url_docker: string = "http://backend:8080/players"
  url_local: string = "http://localhost:8080/players"
  url_server: string = "http://192.168.0.80:8123/players"

  constructor(private http: HttpClient) { }

  public get_players() {
    return this.http.get<Player[]>(this.url_local, {responseType: 'json'});
  }

  public create_player(player: NewPlayer){
    console.log(player);
    return this.http.post<NewPlayer>(this.url_local, player, {responseType: 'json'}).subscribe();
  }

}
