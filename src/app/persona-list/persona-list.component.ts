import {Component, OnInit} from '@angular/core';
import { DettagliPersonaComponent } from '../dettagli-persona/dettagli-persona.component';
import { Observable } from "rxjs";
import { Persona } from "../persona";
import { Router } from '@angular/router';

import {PersonaServiceService} from "../persona-service.service";

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit{
  persona: Observable<Persona[]>;

  constructor(private es: PersonaServiceService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.persona = this.es.getPersonaList();
  }

  deletePersona(id: number) {
    this.es.deletePersona(id).subscribe((a:any)=>{
      this.reloadData();
    });
  }

  dettagliPersona(id: number){
    this.router.navigate(['dettagli', id]);
  }
}
