import {NgModule} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {PersonaListComponent} from "./persona-list/persona-list.component";
import {CreaPersonaComponent} from "./crea-persona/crea-persona.component";
import {UpdatePersonaComponent} from "./update-persona/update-persona.component";
import {DettagliPersonaComponent} from "./dettagli-persona/dettagli-persona.component";




const routes: Routes = [{ path: '', redirectTo: 'persona', pathMatch: 'full' },
  { path: 'persona', component: PersonaListComponent },
  { path: 'add', component: CreaPersonaComponent },
  { path: 'dettagli/:id', component: DettagliPersonaComponent },
  {path: 'update/:id', component: UpdatePersonaComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
