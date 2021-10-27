import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTasksComponent } from './registrar-tasks.component';

describe('RegistrarTasksComponent', () => {
  let component: RegistrarTasksComponent;
  let fixture: ComponentFixture<RegistrarTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
