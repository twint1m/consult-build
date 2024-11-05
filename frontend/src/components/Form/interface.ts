export interface StudentInfo {
    FIO: string;
}

export interface MentorData {
    [mentor: string]: StudentInfo[];
}

export interface StudentsData {
    [group: string]: MentorData;
}