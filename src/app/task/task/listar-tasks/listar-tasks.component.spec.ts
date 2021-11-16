import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTasksComponent } from './listar-tasks.component';

describe('ListarTasksComponent', () => {
  let component: ListarTasksComponent;
  let fixture: ComponentFixture<ListarTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
