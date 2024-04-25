import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(6)]),
    lastName:new FormControl("", Validators.required),
    address : new FormControl("",Validators.required),
    mobileNum : new FormControl("",Validators.required),
    companyName:new FormControl("",Validators.required),
    currentSalary:new FormControl("",Validators.required)
  })
}
