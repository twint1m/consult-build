import {StudentInfo, StudentsData} from "./interface";
import {useEffect, useState} from "react";
import studentsData from '../../data/students.json';

export const useFindMentor = () => {
    const [studentName, setStudentName] = useState<string>('');
    const [group, setGroup] = useState<string>('');
    const [mentor, setMentor] = useState<string>('');

    useEffect(() => {
        const normalizeString = (str: string) => str.trim().toLowerCase();

        if (studentName && group) {
            let foundMentor = 'Студент не найден';
            const normalizedStudentName = normalizeString(studentName);
            const normalizedGroup = normalizeString(group);

            const groupData = (studentsData as StudentsData)[normalizedGroup];
            if (groupData) {
                for (const mentorKey in groupData) {
                    const studentGroup = groupData[mentorKey];
                    const studentInfo = studentGroup.find((student: StudentInfo) => {
                        const normalizedFIO = normalizeString(student.ФИО);
                        return normalizedFIO.includes(normalizedStudentName);
                    });
                    if (studentInfo) {
                        foundMentor = mentorKey;
                        break;
                    }
                }
            }
            setMentor(foundMentor || 'Наставник не найден');
        }
    }, [studentName, group]);

    return { studentName, setStudentName, group, setGroup, mentor };
};