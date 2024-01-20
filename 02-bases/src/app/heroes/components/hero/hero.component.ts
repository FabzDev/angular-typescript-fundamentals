import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private name: string = 'Iron Man';
  private  age:  number = 45;

  get getName(){
    return this.name;
  }

  changeName(name: string){
    this.name = name;
  }

  get getAge(){
    return this.age;
  }

  changeAge(age: number){
    this.age = age;
  }

  capitalizedName():string {
    return this.name
            .split(' ')
            .map(str => str[0].toUpperCase() + str.slice(1))
            .join(' ')
  }

  getHero():string{
    return `${this.name} - ${this.age}`;
  }

  btnReset():void{
    this.name = 'Iron Man';
    this.age = 45;
  }

}
