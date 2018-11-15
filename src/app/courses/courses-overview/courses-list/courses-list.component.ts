import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../courses.service';
import {Course} from '../../../models/Course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  coursesList: Array<Course>;

  constructor(private coursesService: CoursesService) {
    this.coursesService.courses$.subscribe(courses => {
      this.coursesList = courses;
    });
  }

  ngOnInit() {
  }

  deleteCourse(course: Course) {
    this.coursesService.delete(course).subscribe();
  }

}
