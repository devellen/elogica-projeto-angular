import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHookComponent } from './formulario-hook.component';

describe('FormularioHookComponent', () => {
  let component: FormularioHookComponent;
  let fixture: ComponentFixture<FormularioHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
