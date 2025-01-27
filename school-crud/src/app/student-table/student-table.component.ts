import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  @Input() students: any[] = []; // Accepts data from parent component
  userData: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.userData = this.studentService.getStudents();
  }
}
