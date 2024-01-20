import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component"
import { ListComponent } from "./components/list/list.component"


@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroModule { }
