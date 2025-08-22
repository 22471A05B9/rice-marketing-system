import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecleaningComponent } from './precleaning.component';

describe('PrecleaningComponent', () => {
  let component: PrecleaningComponent;
  let fixture: ComponentFixture<PrecleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrecleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
