import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from '../Infra/Models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl: string = "https://localhost:5001/Team/";

  constructor(private httpClient: HttpClient) {

  }

  Get() {
    return this.httpClient.get<Team[]>(this.baseUrl);
  }

  GetById(id: number) {
    return this.httpClient.get<Team>(this.baseUrl + id);
  }

  Post(team: Team) {
    return this.httpClient.post(this.baseUrl, team);
  }

  Put(team: Team) {
    return this.httpClient.put(this.baseUrl, team);
  }

}
