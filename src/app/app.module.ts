import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';    

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SumAppModule } from './Infra/sum-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SumAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
