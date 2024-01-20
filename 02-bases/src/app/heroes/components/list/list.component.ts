import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames = ["Spiderman", "Iron Man", "Thor", "Loki"];
  public lastHero?: string;

  removeHero():void{
    this.lastHero = this.heroesNames.pop();
  }
}
