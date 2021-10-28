import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCardVideosComponent } from './grade-card-videos.component';

describe('GradeCardVideosComponent', () => {
  let component: GradeCardVideosComponent;
  let fixture: ComponentFixture<GradeCardVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeCardVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeCardVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
