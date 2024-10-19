import { StudentInfo, StudentsData } from "./interface";
import { useEffect, useState } from "react";
import studentsData from '../../data/students.json';

export const useFindMentor = () => {
    const [studentName, setStudentName] = useState<string>('');
    const [mentor, setMentor] = useState<string>('');

    useEffect(() => {
        const normalizeString = (str: string) => str.trim().toLowerCase();

        if (studentName) {
            let foundMentor = 'Студент не найден';
            const normalizedStudentName = normalizeString(studentName);

            for (const group in studentsData) {
                const groupData = studentsData[group];
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
                if (foundMentor !== 'Студент не найден') break;
            }

            setMentor(foundMentor || 'Наставник не найден');
        }
    }, [studentName]);

    return { studentName, setStudentName, mentor };
};
