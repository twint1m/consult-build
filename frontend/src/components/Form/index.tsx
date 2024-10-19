import React, { useState } from "react";
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  MentorFormGroup,
  MentorLabel,
  MentorSpan,
  Link,
} from "./styles";
import { useFindMentor } from "./hook";
import { Outlet } from "react-router-dom";
import Toaster from "../ui/Toaster";

const ConsultationForm: React.FC = () => {
  const { studentName, setStudentName, mentor } = useFindMentor();
  const [topic, setTopic] = useState("");
  const [comments, setComments] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      student_name: studentName,
      mentor,
      topic,
      comments,
    };

    try {
      const response = await fetch("http://194.113.106.227:8000/add_consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке");
      }

      setToast({ message: "Вы записаны на консультацию!", type: "success" });
      setStudentName("");
      setTopic("");
      setComments("");
    } catch (error) {
      setToast({ message: "Ошибка при отправке данных", type: "error" });
    }
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
      <Container>
        <Title>Запись на консультацию</Title>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="student-name">ФИО</Label>
            <Input
                type="text"
                id="student-name"
                name="student_name"
                required
                value={studentName}
                placeholder={"Пример: Шкредов Антон Алеексеевич"}
                onChange={(e) => setStudentName(e.target.value)}
            />
          </FormGroup>
          <MentorFormGroup>
            <MentorLabel htmlFor="mentor">Ваш наставник:</MentorLabel>
            <MentorSpan id="mentor">{mentor}</MentorSpan>
          </MentorFormGroup>
          <FormGroup>
            <Label htmlFor="topic">Тема консультации</Label>
            <Input
                type="text"
                id="topic"
                name="topic"
                placeholder={"Пример: Эталонные модели"}
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="comments">
              Дополнительные комментарии или вопросы
            </Label>
            <TextArea
                id="comments"
                name="comments"
                placeholder="Пример: Вопросы по настройке сетевого оборудования или помощь в проекте по ИКТ"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Отправить</Button>
        </form>
        {toast && <Toaster message={toast.message} type={toast.type} onClose={closeToast} />}
        <Outlet />
      </Container>
  );
};

export default ConsultationForm;
