import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Alura Teams";

  photos = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Clube_do_Remo_S%C3%ADmbolo.svg/539px-Clube_do_Remo_S%C3%ADmbolo.svg.png",
      Name: "Remo"
    },
    {
      url: "https://img.favpng.com/8/19/7/fc-barcelona-museum-fc-barcelona-handbol-fc-barcelona-femen-uefa-champions-league-png-favpng-KtW92tpHPkEzRPH0EqTG8qZzh_t.jpg",
      Name: "Barça"
    },
    {
      url: "https://a.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fsoccer%2F500%2F86.png",
      Name: "Real"
    }
  ]
}
