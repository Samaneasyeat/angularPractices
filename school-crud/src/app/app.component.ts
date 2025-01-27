import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData: any[] = [
    {
      name: 'Saman',
      address: 'Pune',
      profile: 'Software Developer',
      age: 18,
    },
  ];

  onStudentAdded(student: any) {
    this.userData.push(student);
  }
}
