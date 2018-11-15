import {Component, EventEmitter, Output} from '@angular/core';
import {Course} from '../../models/Course';
import {CoursesService} from '../courses.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-courses-select',
  templateUrl: './courses-select.component.html',
  styleUrls: ['./courses-select.component.css']
})
export class CoursesSelectComponent {
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

  @Output() selectedCourseId = new EventEmitter<number>();

  constructor(private coursesService: CoursesService) { }

  onCourseChange(id: number) {
    this.selectedCourseId.emit(id);
  }

}
