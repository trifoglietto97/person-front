import { Injectable } from '@angular/core';
import {Persona} from "./persona";
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  private url= 'http://localhost:8080/springboot-crud-rest/api/persone';


  constructor(private http: HttpClient) { }

  getPersonaList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  deletePersona(id: number)  {
   return this.http.delete(`${this.url}/${id}`);
  }

  creaPersona(persona: Persona): Observable<any> {
    return this.http.post(`${this.url}`, persona);
  }

  getPersona(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  updatePersona(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }

}
