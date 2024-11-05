import { useState } from 'react';
import studentsData from '../../data/students.json';

const useFindMentor = (discipline: string, studentFIO: string) => {
    const [mentor, setMentor] = useState<string | null>(null);

    const findMentor = () => {
        const disciplineData = studentsData[discipline];

        if (!disciplineData) {
            setMentor("Дисциплина не найдена");
            return;
        }

        for (const office in disciplineData) {
            const officeData = disciplineData[office];

            for (const mentorName in officeData) {
                const students = officeData[mentorName];


                if (Array.isArray(students)) {
                    const found = students.find(student => student.FIO === studentFIO);

                    if (found) {
                        setMentor(mentorName);
                        return;
                    }
                }
            }
        }

        setMentor("Наставник не найден");
    };

    return { mentor, findMentor };
};

export default useFindMentor;
