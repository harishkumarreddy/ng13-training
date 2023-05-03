import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full'},
  { path: 'all', component: AllstudentsComponent },
  { path: 'view/:id', component: ViewstudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  bootstrap: [StudentsComponent]
})
export class StudentsRoutingModule { }
