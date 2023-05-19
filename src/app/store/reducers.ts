import { createReducer, on } from '@ngrx/store';
import { IAppState, IStudentState } from './store';
import { getSelectedStudent, getStudentByid, getStudents, setSelectedStudent, setStudents } from './actions';

export const initialState: IAppState = {
    students: [],
    selectedStudent: null
};

export const AppReducer = createReducer(
    // initial state
    initialState,
    
    // binding actions to state changes
    // on(getStudents, (state: IAppState) => ({ ...state })),
    on(setStudents, (state: IAppState, { students }) => ({ 
        ...state, 
        students: students 
    })),
    on(getStudentByid, (state: IAppState, {id}) => {
        const student = state.students.find(s => s.id === id);
        // state.selectedStudent = student;
        return { ...state, selectedStudent: student };
    }),
    // on(getSelectedStudent, (state: IAppState) => ({ ...state })),
    on(setSelectedStudent, (state: IAppState) => ({ ...state, selectedStudent: state.selectedStudent }))
);
