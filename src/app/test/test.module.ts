import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestOverviewComponent } from './test-overview/test-overview.component';
import {RouterModule, Routes} from '@angular/router';
import {StudentsModule} from '../students/students.module';
import {CoursesModule} from '../courses/courses.module';
import { CourseAssignmentComponent } from './course-assignment/course-assignment.component';
import { AssignmentListComponent } from './course-assignment/assignment-list/assignment-list.component';
import { AssignStudentToCourseComponent } from './course-assignment/assign-student-to-course/assign-student-to-course.component';
import {StudentCourseAssignmentService} from './course-assignment/student-course-assignment.service';
import { CourseSearchComponent } from './course-assignment/course-search/course-search.component';

const routes: Routes = [
  { path: 'test', component: TestOverviewComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StudentsModule,
    CoursesModule
  ],
  declarations: [
    TestOverviewComponent,
    CourseAssignmentComponent,
    AssignmentListComponent,
    AssignStudentToCourseComponent,
    CourseSearchComponent,
  ],
  providers: [
    StudentCourseAssignmentService
  ]
})
export class TestModule { }
