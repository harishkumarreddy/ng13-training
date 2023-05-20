import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllstudentsComponent } from './allstudents.component';
import { Store } from '@ngrx/store';
import { StudentService } from '../../services/student.service';

describe('AllstudentsComponent', () => {
  let component: AllstudentsComponent;
  // let fixture: ComponentFixture<AllstudentsComponent>;
  let fixture: AllstudentsComponent;
  let studentService: StudentService;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    // fixture = TestBed.createComponent(AllstudentsComponent);
    studentService = jasmine.createSpyObj('StudentService', ['getAllStudents', 'getStudentById']);
    store = jasmine.createSpyObj('Store', ['dispatch', 'pipe', 'subscribe', 'select', 'action']);
    fixture = new AllstudentsComponent(store, studentService);
    component = fixture;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
