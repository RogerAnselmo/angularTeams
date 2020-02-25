import { Component, OnInit, Input } from '@angular/core';

import { Team } from 'src/app/Infra/Models/Team';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.Get().subscribe(teams => this.teams = teams);
  }

}
