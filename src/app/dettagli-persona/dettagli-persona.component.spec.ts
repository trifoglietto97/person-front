import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPersonaComponent } from './dettagli-persona.component';

describe('DettagliPersonaComponent', () => {
  let component: DettagliPersonaComponent;
  let fixture: ComponentFixture<DettagliPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
