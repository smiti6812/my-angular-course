import { Component, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseService } from './CourseService';
import { Course } from './interfaces/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';
  @Input() courses!: any[];
  courseService : CourseService = Inject(CourseService);

  constructor(private _courseService: CourseService){
    this.courseService = _courseService;
    this.courses = this.courseService.getCourses();
  }
  onCourseSelected(course:Course) {
    alert(course.description)
  }
}
