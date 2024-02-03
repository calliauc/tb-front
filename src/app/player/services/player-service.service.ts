import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';
import { NewPlayer } from '../models/new-player';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {


  constructor(private http: HttpClient) { }

  URL_API: string = environment.API_URL;
  ENDPOINT: string = "/joueurs";

  URL: string = this.URL_API + this.ENDPOINT;

  public get_players() {
    return this.http.get<Player[]>(this.URL, {responseType: 'json'});
  }

  public create_player(player: NewPlayer): Observable<NewPlayer> {
    return this.http.post<NewPlayer>(this.URL, player, {responseType: 'json'});
  }

}