import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { AllstudentsComponent } from './components/allstudents/allstudents.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './services/student.service';


@NgModule({
  declarations: [
    StudentsComponent,
    AllstudentsComponent,
    ViewstudentComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule,
  ],
  providers: [
  ],
})
export class StudentsModule { }
