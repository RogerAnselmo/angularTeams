import { Component } from '@angular/core';

import { TeamService } from './Services/Team/team.service';
import { Team } from './Infra/Models/Team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  teams: Team[];

  constructor(private teamService: TeamService) {
    this.title = "Teams";
    this.getTeams();
  }
  getTeams(): void {
    this.teamService.get().subscribe(teams => this.teams = teams);
  }
}