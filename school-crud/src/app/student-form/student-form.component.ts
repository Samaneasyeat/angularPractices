import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  name: string = '';
  address: string = '';
  profile: string = '';
  age: number | undefined;

  constructor(private studentService: StudentService) {}

  addStudent() {
    if (this.name && this.address && this.profile && this.age !== undefined) {
      const newStudent = {
        name: this.name,
        Address: this.address,
        Profile: this.profile,
        age: this.age,
      };
      this.studentService.addStudent(newStudent);
      alert('Student added successfully!');
    } else {
      alert('Please fill all the fields!');
    }
  }
}
