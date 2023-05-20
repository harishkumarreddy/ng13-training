import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstudentComponent } from './viewstudent.component';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

describe('ViewstudentComponent', () => {
  let component: ViewstudentComponent;
  // let fixture: ComponentFixture<ViewstudentComponent>;
  let fixture: ViewstudentComponent;
  let router: ActivatedRoute;
  let stuService: StudentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = jasmine.createSpyObj('ActivatedRoute', ['params']);
    stuService = jasmine.createSpyObj('StudentService', ['getStudentById', 'getAllStudents']);
    fixture = new ViewstudentComponent(router, stuService);
    component = fixture;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
