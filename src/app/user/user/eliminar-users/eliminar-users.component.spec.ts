import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarUsersComponent } from './eliminar-users.component';

describe('EliminarUsersComponent', () => {
  let component: EliminarUsersComponent;
  let fixture: ComponentFixture<EliminarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
