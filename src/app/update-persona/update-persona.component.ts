import {Component, OnInit} from '@angular/core';
import {Persona} from "../persona";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonaServiceService} from "../persona-service.service";

@Component({
  selector: 'app-update-persona',
  templateUrl: './update-persona.component.html',
  styleUrls: ['./update-persona.component.css']
})
export class UpdatePersonaComponent implements OnInit {

  id: number;
  persona: Persona;
  submitted: any;


  constructor(private route: ActivatedRoute,private router: Router,
    private es: PersonaServiceService) { }

  ngOnInit() {
    this.persona = new Persona();

    this.id = this.route.snapshot.params['id'];

    this.es.getPersona(this.id)
      .subscribe(data => {

        this.persona = data;
      });
  }

  employee_list(){
    this.router.navigate(['persona']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  private save() {

      this.es.creaPersona(this.persona).subscribe(()=>{
        this.persona = new Persona();
        this.gotoList();
      });
  }

  private gotoList() {
    this.router.navigate(['/persona']);
  }
}
