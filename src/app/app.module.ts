import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {PersonaListComponent} from "./persona-list/persona-list.component";
import {DettagliPersonaComponent} from "./dettagli-persona/dettagli-persona.component";
import {FormsModule} from "@angular/forms";
import {CreaPersonaComponent} from "./crea-persona/crea-persona.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePersonaComponent } from './update-persona/update-persona.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonaListComponent,
    DettagliPersonaComponent,
    CreaPersonaComponent,
    UpdatePersonaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
