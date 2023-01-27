
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import {PersonaServiceService} from "../persona-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crea-persona',
  templateUrl: './crea-persona.component.html',
  styleUrls: ['./crea-persona.component.css']
})
export class CreaPersonaComponent implements OnInit {

  persona: Persona = new Persona();
  submitted = false;


  constructor(private es: PersonaServiceService,
              private router: Router) { }ngOnInit() {
  }

  newPersona(): void {
    this.submitted = false;
    this.persona = new Persona();
  }

  save() {
    this.es.creaPersona(this.persona).subscribe(()=>{
      this.persona = new Persona();
      this.gotoList();
    });


  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  private gotoList() {
    this.router.navigate(['/persona']);
  }
}
