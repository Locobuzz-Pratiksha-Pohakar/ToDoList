import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoParentComponent } from './to-do-parent.component';

describe('ToDoParentComponent', () => {
  let component: ToDoParentComponent;
  let fixture: ComponentFixture<ToDoParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
