import { TestBed } from '@angular/core/testing';

import { StudentCourseAssignmentService } from './student-course-assignment.service';

describe('StudentCourseAssignmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentCourseAssignmentService = TestBed.get(StudentCourseAssignmentService);
    expect(service).toBeTruthy();
  });
});
