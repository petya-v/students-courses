import {Component, OnInit} from '@angular/core';
import {CoursesService} from './courses/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'students-courses';


  constructor(
    private courseService: CoursesService
  ) { }

  ngOnInit() {
    this.courseService.findAll().subscribe();
  }
}
