import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GameControlComponent } from './Components/game-control/game-control.component';
import { OddComponent } from './Components/odd/odd.component';
import { EvenComponent } from './Components/even/even.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './Components/home/home.component';
import { ParentComponentComponent } from './Components/parent-component/parent-component.component';
import { ChildComponentComponent } from './Components/child-component/child-component.component';
import { LoginComponent } from './Components/login/login.component';
import { BodyComponent } from './Components/body/body.component';
import { EditTodosComponent } from './Components/edit-todos/edit-todos.component';
import { ListTodosComponent } from './Components/list-todos/list-todos.component';
import { AddTodosComponent } from './Components/add-todos/add-todos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    HomeComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    LoginComponent,
    BodyComponent,
    EditTodosComponent,
    ListTodosComponent,
    AddTodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
