import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../courses.service';
import {Course} from '../../../models/Course';
import {until} from 'selenium-webdriver';
import ableToSwitchToFrame = until.ableToSwitchToFrame;
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  viewModel: CourseViewModel = {};

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  addCourse()  {
    this.coursesService.create(new Course(
      this.viewModel.name,
      this.viewModel.maxNbrStudents)
    ).subscribe();
  }

}
