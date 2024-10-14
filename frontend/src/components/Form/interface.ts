export interface StudentInfo {
    ФИО: string;
    Telegram: string;
}

export interface MentorData {
    [mentor: string]: StudentInfo[];
}

export interface StudentsData {
    [group: string]: MentorData;
}