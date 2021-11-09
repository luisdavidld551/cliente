import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUsersComponent } from './actualizar-users.component';

describe('ActualizarUsersComponent', () => {
  let component: ActualizarUsersComponent;
  let fixture: ComponentFixture<ActualizarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
