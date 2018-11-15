import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../models/Student';
import {StudentsService} from '../students.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-students-select',
  templateUrl: './students-select.component.html',
  styleUrls: ['./students-select.component.css']
})
export class StudentsSelectComponent implements OnInit {
  public get studentList$(): Observable<Student[]> {
    return this.studentsService.studentsSubj.pipe(
      map(students => students
        .map(
          student => new Student(
            student.name,
            student.surname,
            student.id
          )
        )
      )
    );
  }
  @Output() selectedId = new EventEmitter<number>();

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
  }

  onStudentChanged(id: number) {
    this.selectedId.emit(id);
  }



}
