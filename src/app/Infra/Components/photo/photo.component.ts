import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../../Models/Team';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
