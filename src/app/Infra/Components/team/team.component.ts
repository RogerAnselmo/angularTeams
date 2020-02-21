import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../Models/Team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
    console.log(this.team);
  }

}
