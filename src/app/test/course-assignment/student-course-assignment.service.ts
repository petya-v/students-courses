import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CourseStudent} from '../../models/courseStudent';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, tap} from 'rxjs/internal/operators';
import {bind} from '@angular/core/src/render3';
import set = Reflect.set;

@Injectable({
  providedIn: 'root'
})
export class StudentCourseAssignmentService {
  private _assignmentSubj = new BehaviorSubject<CourseStudent[]>([]);

  constructor(private http: HttpClient) {
    this.findAll = this.findAll.bind(this);
  }

  get assignmentSubj(): Observable<CourseStudent[]> {
    return this._assignmentSubj.asObservable();
  }

  findAll(courseId?: string, studentId?: string) {
    const params = new HttpParams().set('courseId', courseId);

    return this.http.get('http://localhost:3000/courseAssignments', {params: params})
      .pipe(map<any, CourseStudent[]>(assignments => assignments
        .map(assignment => new CourseStudent(assignment.courseId, assignment.studentId))))
      .pipe(tap(assignments => {
        this._assignmentSubj.next(assignments);
      }));
  }

  findById(id: number) {
    return this.http.get(`http://localhost:3000/courseAssignments/${id}`);
  }

  create(courseAssignment: CourseStudent) {
    const courseAssignmentToDto = {
      courseId : courseAssignment.courseId,
      studentId : courseAssignment.studentId
    };

    return this.http.post('http://localhost:3000/courseAssignments', courseAssignmentToDto);
  }
}
