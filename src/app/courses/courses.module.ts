import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseItemComponent} from './courses-overview/courses-list/course-item/course-item.component';
import {CoursesListComponent} from './courses-overview/courses-list/courses-list.component';
import {CoursesComponent} from './courses-overview/courses.component';
import {AddCourseComponent} from './courses-overview/add-course/add-course.component';
import {EditCourseComponent} from './courses-overview/courses-list/course-item/edit-course/edit-course.component';
import {RouterModule, Routes} from '@angular/router';
import {CoursesService} from './courses.service';
import {FormsModule} from '@angular/forms';
import { CoursesSelectComponent } from './courses-select/courses-select.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: CoursesListComponent},
      { path: 'add', component: AddCourseComponent},
      { path: 'edit/:id', component: EditCourseComponent}
    ]
  }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [CoursesService],
  declarations: [
    CourseItemComponent,
    CoursesListComponent,
    CoursesComponent,
    AddCourseComponent,
    EditCourseComponent,
    CoursesSelectComponent
  ],
  exports: [
    CoursesSelectComponent
  ]
})


export class CoursesModule { }
