import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from '../../../courses.service';
import {Course} from '../../../../models/Course';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  deleteCourse(course: Course) {
    this.coursesService.delete(course)
      .pipe(switchMap(
        () => this.coursesService.findAll()
      ))
      .subscribe();
  }

}
