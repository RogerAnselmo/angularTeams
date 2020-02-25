import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './Infra/Components/photo/photo.component';
import { TeamService } from './Services/team.service';
import { FormComponent } from './Template/form/form.component';
import { DetailsComponent } from './Template/details/details.component';
import { ListComponent } from './Template/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    FormComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
