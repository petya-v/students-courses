import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSelectComponent } from './courses-select.component';

describe('CoursesSelectComponent', () => {
  let component: CoursesSelectComponent;
  let fixture: ComponentFixture<CoursesSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
