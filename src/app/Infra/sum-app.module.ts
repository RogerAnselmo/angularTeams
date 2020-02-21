import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { TeamComponent } from './Components/team/team.component';
import { TeamService } from '../Services/Team/team.service';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[TeamComponent],
  providers:[TeamService]
})

export class SumAppModule { }
