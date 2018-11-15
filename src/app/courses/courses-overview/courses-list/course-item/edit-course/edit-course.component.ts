import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../../../../courses.service';
import {Course} from '../../../../../models/Course';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  viewModel: CourseViewModel = {};

  constructor(
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params => {
      this.viewModel.id = params.id;
    });
  }

  ngOnInit() {
    this.coursesService.find(this.viewModel.id)
      .subscribe( course => {
        this.viewModel.name = course.name;
        this.viewModel.maxNbrStudents = course.maxNbrStudents;
    });
  }

  editCourse() {
    this.coursesService
      .save(new Course(
        this.viewModel.name,
        this.viewModel.maxNbrStudents,
        this.viewModel.id
      )).subscribe();
  }

}
