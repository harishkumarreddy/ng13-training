import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.less']
})
export class ViewstudentComponent implements OnInit, AfterViewInit {
  id: number = 0;
  student: any = {};

  constructor(
    private router: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = parseInt(params['id']);
      this.getStudentById();
    });
  }

  ngAfterViewInit(): void {
      
  }

  getStudentById() {
    this.studentService.getStudentById(this.id).subscribe((data: any) => {
      this.student = data;
    });
  }

}
