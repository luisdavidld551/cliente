import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarUsersComponent } from './buscar-users.component';

describe('BuscarUsersComponent', () => {
  let component: BuscarUsersComponent;
  let fixture: ComponentFixture<BuscarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
