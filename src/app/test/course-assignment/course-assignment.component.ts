import { Component, OnInit } from '@angular/core';
import {StudentCourseAssignmentService} from './student-course-assignment.service';

@Component({
  selector: 'app-course-assignment',
  templateUrl: './course-assignment.component.html',
  styleUrls: ['./course-assignment.component.css']
})
export class CourseAssignmentComponent implements OnInit {

  constructor(private studentCourseService: StudentCourseAssignmentService) { }

  ngOnInit() {
  }

}
