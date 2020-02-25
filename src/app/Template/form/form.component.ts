import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from 'src/app/Infra/Models/Team';
import { TeamService } from 'src/app/Services/team.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Input() team: Team = new Team;

  constructor(private teamservice: TeamService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.team.id = +this.route.snapshot.paramMap.get('id');

    if (this.team.id)
      this.teamservice
        .GetById(this.team.id)
        .subscribe(team => this.team = team);
  }

  postTeam() {

    if (this.team.id)
      this.updateTeam();
    else
      this.newTeam();
  }

  updateTeam() {
    this.teamservice.Put(this.team).subscribe(result => {
      if (result == 200) {
        alert('Atualizou!');
        this.team = new Team;
      }
      else {
        alert('deu erro');
        console.log(result);
      }
    },
      error => {
        console.log('There was an error: ')
        console.log(error);
      });
  }

  newTeam() {
    this.teamservice.Post(this.team).subscribe(result => {
      if (result == 201) {
        alert('Salvou!');
        this.team = new Team;
      }
      else {
        alert('deu erro');
        console.log(result);
      }
    },
      error => {
        console.log('There was an error: ')
        console.log(error);
      });
  }
}
