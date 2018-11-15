import {Component, Input, OnInit} from '@angular/core';
import {StudentCourseAssignmentService} from '../student-course-assignment.service';
import {CourseStudent} from '../../../models/courseStudent';
import {Course} from '../../../models/Course';
import {CoursesService} from '../../../courses/courses.service';
import {StudentsService} from '../../../students/students.service';
import {map, switchMap} from 'rxjs/internal/operators';
import {Student} from '../../../models/Student';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  private assignmentsList:
    {
      courseName: string;
      studentName: string;
    }[];

  constructor(private studentCourseService: StudentCourseAssignmentService,
              private coursesService: CoursesService,
              private  studentsService: StudentsService) { }

  ngOnInit() {
    this.studentCourseService.findAll().subscribe();

    const combineFindAll = combineLatest(
      this.studentCourseService.assignmentSubj,
      this.coursesService.findAll(),
      this.studentsService.findAll()
    );

    const subscribe = combineFindAll.pipe(
      map(
      ([studentCourses, courses, students]) =>
        studentCourses.map(studentCourse =>
          ({
            courseName: courses.find(course => course.id == studentCourse.courseId).name,
            studentName: students.find(student => student.id == studentCourse.studentId).name
          })
        )
      ))
      .subscribe(courseStudentsWithNames => {
        this.assignmentsList = courseStudentsWithNames
      });

    /*this.studentCourseService.findAll()
  .pipe(switchMap(studentCourses => this.studentsService.findAll()
        .pipe(
        map(students => studentCourses.map(studentCourse =>
            ({courseId: studentCourse.courseId,
              studentName: students.find(student => student.id == studentCourse.studentId).name
            })
        ))
      )
        .pipe(switchMap(studentCoursesWithStudentNames => this.coursesService.findAll().pipe(
          map(courses =>
            studentCoursesWithStudentNames.map(studentCourseWithStudentNames =>
              ({
                courseName: courses.find(course => course.id == studentCourseWithStudentNames.courseId).name,
                studentName: studentCourseWithStudentNames.studentName
              })
            ))
        )))
      ))
      .subscribe(studentCoursesWithNames => {
        this.assignmentsList = studentCoursesWithNames;
      });*/
  }
}
