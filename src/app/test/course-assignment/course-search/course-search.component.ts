import { Component, OnInit } from '@angular/core';
import {StudentCourseAssignmentService} from '../student-course-assignment.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {
  selectedCourseId: number;

  constructor(private courseStudentService: StudentCourseAssignmentService) { }

  ngOnInit() {
  }

  onSelectedCourseId(id: number) {
    this.selectedCourseId = id;
  }

  onSearchButtonClick() {
    this.courseStudentService.findAll(this.selectedCourseId + '')
      .subscribe(() => {});
  }

}
