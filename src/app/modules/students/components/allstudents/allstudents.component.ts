import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Observable } from 'rxjs';
import { IAppState, IStudentState } from 'src/app/store/store';
import { Store } from '@ngrx/store';
import { setStudents } from 'src/app/store/actions';
import { selectStudents } from 'src/app/store/selectors';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.less']
})
export class AllstudentsComponent implements OnInit {

  students: IStudentState[] = [];
  studentsState$: Observable<IStudentState[]>

  constructor(
    private store: Store<any>,
    private studentService: StudentService
  ) { 
    this.studentsState$ =  this.store.select(state => {
      console.log('---selectStudents', state['app']);
      this.students = state['app'].students;
      console.log('---selectStudents', this.students)
      return state['app'].students;
    });
    // this.students$ = this.store.select(selectStudents);
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('getAllStudents');
      this.getAllStudents();
    },
    3000);
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe((students:any) => {
      // this.students = students;
      console.log('getAllStudents', students);
      // this.store.dispatch(setStudents({...students}));
      this.store.dispatch(setStudents(students));
    });
  }


}
