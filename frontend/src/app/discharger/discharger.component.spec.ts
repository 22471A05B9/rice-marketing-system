import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargerComponent } from './discharger.component';

describe('DischargerComponent', () => {
  let component: DischargerComponent;
  let fixture: ComponentFixture<DischargerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DischargerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DischargerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
