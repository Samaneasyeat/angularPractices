import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    lastName:new FormControl("", [Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    address : new FormControl("",[Validators.required,Validators.minLength(12), Validators.maxLength(20)] ),
    mobileNum : new FormControl("",[Validators.required,Validators.min(1000000000),Validators.max(10000000000)]),
    companyName:new FormControl("",[Validators.required,Validators.minLength(15),Validators.maxLength(25)]),
    currentSalary:new FormControl("",Validators.required)
  })
}
