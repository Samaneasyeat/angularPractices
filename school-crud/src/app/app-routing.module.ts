import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentTableComponent } from './student-table/student-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' }, // Default route to form
  { path: 'form', component: StudentFormComponent },
  { path: 'table', component: StudentTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
