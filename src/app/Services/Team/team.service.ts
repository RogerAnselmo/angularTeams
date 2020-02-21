import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Team } from 'src/app/Infra/Models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  baseUrl = "https://localhost:5001/Team";
  teams: Team[];

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.baseUrl);
  }
}
