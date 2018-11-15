import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Student} from '../models/Student';
import {map, switchMap, tap} from 'rxjs/internal/operators';
import {bind} from '@angular/core/src/render3';
import {findAll} from '@angular/compiler-cli/src/ngcc/src/utils';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  get studentsSubj(): Observable<Student[]> {
    return this._studentsSubj.asObservable();
  }
  private _studentsSubj: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([]);

  constructor(private http: HttpClient) {
    this.findAll = this.findAll.bind(this);
  }

  findAll() {
    return this.http.get('http://localhost:3000/students')
      .pipe(map<any, Student[]>(students => students
        .map(student => new Student(student.name, student.surname, student.id))))
      .pipe(tap(students => {
        this._studentsSubj.next(students);
    }));
  }

  find(id: number) {
    return this.http.get(`http://localhost:3000/students/${id}`)
      .pipe(map<any, Student>(student => {
        return new Student(student.name, student.surname);
      }));
  }

  create(student: Student) {
    const studentCreateDto = {
      name: student.name,
      surname: student.surname,
      id: student.id
    };
    return this.http.post('http://localhost:3000/students', studentCreateDto)
      .pipe(switchMap(() => this.findAll()));
  }

  save(student: Student) {
    const studentToDto = {
      name: student.name,
      surname: student.surname,
      id: student.id
    };
    return this.http.put(`http://localhost:3000/students/${student.id}`, studentToDto)
      .pipe(switchMap(() => this.findAll()));
  }

}
