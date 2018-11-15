import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSelectComponent } from './students-select.component';

describe('StudentsSelectComponent', () => {
  let component: StudentsSelectComponent;
  let fixture: ComponentFixture<StudentsSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
