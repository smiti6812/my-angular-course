import { Component, Input, NgModule, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from  '../CourseService';
import { Course } from '../interfaces/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Input() Courses!: any [];
  @Input() index!: number;
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
}

}
