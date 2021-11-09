import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTasksComponent } from './actualizar-tasks.component';

describe('ActualizarTasksComponent', () => {
  let component: ActualizarTasksComponent;
  let fixture: ComponentFixture<ActualizarTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
