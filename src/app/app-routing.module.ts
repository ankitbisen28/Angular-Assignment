import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { GameControlComponent } from './Components/game-control/game-control.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ParentComponentComponent } from './Components/parent-component/parent-component.component';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"gamecontrol", component: GameControlComponent},
  {path:"2inputbox", component: ParentComponentComponent},
  {path:"TodoApp", component: BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
