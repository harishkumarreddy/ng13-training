import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStudents() {
    return this.http.get('http://localhost:8080/students');
  }

  getStudentById(id: number) {
    return this.http.get(`http://localhost:8080/students/${id}`);
  }
}
