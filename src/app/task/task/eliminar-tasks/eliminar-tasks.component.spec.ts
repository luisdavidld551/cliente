import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTasksComponent } from './eliminar-tasks.component';

describe('EliminarTasksComponent', () => {
  let component: EliminarTasksComponent;
  let fixture: ComponentFixture<EliminarTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
