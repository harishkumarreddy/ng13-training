import { Action, createAction } from '@ngrx/store';
import { IStudentState } from './store';
// Store Actions

export const getStudents = createAction("[Student] Get Students");
export const setStudents = createAction("[Student] Set Students", (students: IStudentState[]) => ({ students }));
export const getSelectedStudent = createAction("[Student] Get Selected Student");
export const setSelectedStudent = createAction("[Student] Set Selected Student", (student: IStudentState) => ({ student }));
export const getStudentByid = createAction("[Student] Get Student By Id", (id: number) => ({ id }));
