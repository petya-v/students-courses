import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Course} from '../models/Course';
import {map, switchMap, tap} from 'rxjs/internal/operators';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  get courses$(): Observable<Course[]> {
    return this._courses$.asObservable();
  }
  private _courses$: BehaviorSubject<Course[]> = new BehaviorSubject<Course[]>([]);

  constructor(private http: HttpClient) {
    this.findAll = this.findAll.bind(this);
  }

  findAll() {
    return this.http.get('http://localhost:3000/courses')
      .pipe(map<any, Course[]>(courses => courses
        .map(course => new Course(course.name, course.maxNbrStudents, course.id))))
      .pipe(tap((courses) => {
        this._courses$.next(courses);
      }));
    }

  find(id: number) {
    return this.http.get(`http://localhost:3000/courses/${id}`)
      .pipe(map<any, Course>(course => {
        return new Course(course.name, course.maxNbrStudents, course.id);
      }));
  }

  create(course: Course) {
    const courseCreateDto = {
      name: course.name,
      maxNbrStudents: course.maxNbrStudents,
      id: course.id
    };
    return this.http.post('http://localhost:3000/courses', courseCreateDto)
      .pipe(switchMap(
        () => this.findAll()
      ));
  }

  delete(course: Course) {
    return this.http.delete('http://localhost:3000/courses/' + course.id)
      .pipe(switchMap(
        () => this.findAll()
      ));
  }

  save(course: Course) {
    const courseCreateDto = {
      name: course.name,
      maxNbrStudents: course.maxNbrStudents,
      id: course.id
    };

    return this.http.put(`http://localhost:3000/courses/${course.id}`, courseCreateDto)
      .pipe(switchMap(
        () => this.findAll()
      ));
  }
}
