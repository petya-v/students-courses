import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentsComponent} from './students-overview/students.component';
import {AddStudentComponent} from './students-overview/add-student/add-student.component';
import {RouterModule, Routes} from '@angular/router';
import {StudentsListComponent} from './students-overview/students-list/students-list.component';
import {StudentItemComponent} from './students-overview/students-list/student-item/student-item.component';
import {StudentsService} from './students.service';
import {FormsModule} from '@angular/forms';
import { EditStudentComponent } from './students-overview/students-list/student-item/edit-student/edit-student.component';
import { StudentsSelectComponent } from './students-select/students-select.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent,
    children: [
      { path: 'list', component: StudentsListComponent},
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'add', component: AddStudentComponent},
      { path: 'edit/:id', component: EditStudentComponent}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [StudentsService],
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentItemComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentsSelectComponent,
  ],
  exports: [
    StudentsSelectComponent
  ]
})

export class StudentsModule { }
