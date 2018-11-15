import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  studentsList: any = [];

  constructor(private studentsSubject: StudentsService) {
  }

  ngOnInit() {
    this.studentsSubject.studentsSubj.subscribe(students => {
      this.studentsList = students;
    });
    this.studentsSubject.findAll().subscribe();
  }

}
