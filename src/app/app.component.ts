import { Component, OnInit } from '@angular/core';

import { TeamService } from './Services/team.service';
import { Team } from './Infra/Models/Team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = "Teams List";
  }
}