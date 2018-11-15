import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students/students.service';
import {CoursesService} from '../../courses/courses.service';

@Component({
  selector: 'app-test-overview',
  templateUrl: './test-overview.component.html',
  styleUrls: ['./test-overview.component.css']
})
export class TestOverviewComponent implements OnInit {
  private selectedStudentId: number;
  private selectedCourseId: number;

  constructor(private studentsService: StudentsService,
              private coursesService: CoursesService ) { }

  ngOnInit() {
    this.studentsService.findAll().subscribe();
    this.coursesService.findAll().subscribe();
  }

  onSelectedStudentId(id: number) {
    this.selectedStudentId = id;
  }

  onSelectedCourseId(id: number) {
    this.selectedCourseId = id;
  }
}
