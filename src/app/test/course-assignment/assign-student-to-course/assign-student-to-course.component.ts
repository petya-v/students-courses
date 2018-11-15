import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Course} from '../../../models/Course';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/internal/operators';
import {CoursesService} from '../../../courses/courses.service';
import {StudentCourseAssignmentService} from '../student-course-assignment.service';
import {CourseStudent} from '../../../models/courseStudent';

@Component({
  selector: 'app-assign-student-to-course',
  templateUrl: './assign-student-to-course.component.html',
  styleUrls: ['./assign-student-to-course.component.css']
})
export class AssignStudentToCourseComponent {
  private selectedStudentId: number;
  private selectedCourseId: number;

  public get courseList$(): Observable<Course[]> {
    return this.coursesService.courses$
      .pipe(map(
        courses => courses.map(course =>
          new Course(
            course.name,
            course.maxNbrStudents,
            course.id
          ))
      ));
  }

  constructor(private coursesService: CoursesService,
              private courseStudentService: StudentCourseAssignmentService) { }

  onSelectedStudentId(id: number) {
    this.selectedStudentId = id;
  }

  onSelectedCourseId(id: number) {
    this.selectedCourseId = id;
  }

  onButtonAssignClick(courseId, studentId) {
    this.courseStudentService.create(new CourseStudent(courseId, studentId))
      .pipe(switchMap(() => this.courseStudentService.findAll()))
      .subscribe();
  }


}
