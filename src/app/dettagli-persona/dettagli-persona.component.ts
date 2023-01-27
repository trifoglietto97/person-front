import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import {PersonaServiceService} from "../persona-service.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettagli-persona',
  templateUrl: './dettagli-persona.component.html',
  styleUrls: ['./dettagli-persona.component.css']
})
export class DettagliPersonaComponent implements OnInit{
  id: number;
  persona: Persona;

  constructor(private route: ActivatedRoute,private router: Router,
              private es: PersonaServiceService) { }

  ngOnInit() {
    this.persona = new Persona();

    this.id = this.route.snapshot.params['id'];

    this.es.getPersona(this.id).subscribe((res)=>{
      //console.log(res);
      this.persona = res;
    });
  }

  persona_list(){
    this.router.navigate(['persona']);
  }
}
