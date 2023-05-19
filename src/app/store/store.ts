// App Store Object

export interface IStudentState {
    id: number;
    name: string;
    age: number;
    email: string;
    contact: string;
    address: string;
    status: string;
}


export interface IAppState {
    // list of students
    students: IStudentState[];
    selectedStudent: IStudentState | null | undefined;
}