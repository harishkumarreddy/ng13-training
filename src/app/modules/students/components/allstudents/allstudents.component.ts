import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.less']
})
export class AllstudentsComponent implements OnInit {

  students: any[];

  constructor(
    private studentService: StudentService
  ) { 
    this.students = [];
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((students:any) => {
      this.students = students;
    });
  }


}
