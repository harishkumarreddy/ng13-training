import { createSelector } from '@ngrx/store';
import { IAppState } from './store';

// Selectors
export const selectStudents = (state: IAppState) => {
    console.log('selectStudents', state.students);
    return state.students;
};
export const selectSelectedStudent = (state: IAppState) => state.selectedStudent;

export const getInactiveStudents = createSelector(
    selectStudents,
    (students) => students.filter((s: { status: string; }) => s.status === 'inactive')
);
