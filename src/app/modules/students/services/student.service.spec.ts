import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StudentService } from './student.service';

describe('StudentService', () => {
  let http = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    
    service = new StudentService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test the getAllStudents', () => {
    service.getAllStudents();
    expect(http.get).toHaveBeenCalled();
  });

  it('should test the getStudentById', () => {
    service.getStudentById(1);
    expect(http.get).toHaveBeenCalled();
  });
});
