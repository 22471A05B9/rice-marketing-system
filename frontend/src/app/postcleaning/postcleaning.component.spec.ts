import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcleaningComponent } from './postcleaning.component';

describe('PostcleaningComponent', () => {
  let component: PostcleaningComponent;
  let fixture: ComponentFixture<PostcleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostcleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
