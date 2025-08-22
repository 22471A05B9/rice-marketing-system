import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevatorComponent } from './elevator.component';

describe('ElevatorComponent', () => {
  let component: ElevatorComponent;
  let fixture: ComponentFixture<ElevatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElevatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
