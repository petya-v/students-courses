import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../../../students.service';
import {ActivatedRoute} from '@angular/router';
import {Student} from '../../../../../models/Student';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  viewModel: StudentViewModel = {};

  constructor(private studentsService: StudentsService,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.viewModel.id = params.id;
    });
  }

  ngOnInit() {
    this.studentsService.find(this.viewModel.id)
      .subscribe(student => {
        this.viewModel.name = student.name;
        this.viewModel.surname = student.surname;
      });
  }

  editStudent() {
    this.studentsService.save(
        new Student(
          this.viewModel.name,
          this.viewModel.surname,
          this.viewModel.id
        )
      )
      .subscribe();
  }

}
