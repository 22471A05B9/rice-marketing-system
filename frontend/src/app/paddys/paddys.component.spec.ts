import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddysComponent } from './paddys.component';

describe('PaddysComponent', () => {
  let component: PaddysComponent;
  let fixture: ComponentFixture<PaddysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaddysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaddysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
