import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoServiceComponent } from './to-do-service.component';

describe('ToDoServiceComponent', () => {
  let component: ToDoServiceComponent;
  let fixture: ComponentFixture<ToDoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
