import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students.service';
import {Student} from '../../../models/Student';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  viewModel: StudentViewModel = {};

  constructor(private studentsService: StudentsService) {}

  addStudent() {
    this.studentsService.create(new Student(this.viewModel.name, this.viewModel.surname))
      .subscribe();
  }

  ngOnInit() {
  }

}
