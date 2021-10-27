import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTasksComponent } from './buscar-tasks.component';

describe('BuscarTasksComponent', () => {
  let component: BuscarTasksComponent;
  let fixture: ComponentFixture<BuscarTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
