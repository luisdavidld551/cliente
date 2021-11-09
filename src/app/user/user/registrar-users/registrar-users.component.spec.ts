import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUsersComponent } from './registrar-users.component';

describe('RegistrarUsersComponent', () => {
  let component: RegistrarUsersComponent;
  let fixture: ComponentFixture<RegistrarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
