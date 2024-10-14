import React, { useState } from "react";
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  CheckboxGroup,
  Button,
  CheckboxInput,
  CheckboxLabel,
  MentorFormGroup,
  MentorLabel,
  MentorSpan,
  Link,
  ProblemButton
} from "./styles";
import { useFindMentor } from "./hook";
import { Outlet } from "react-router-dom";
import Toaster from "../ui/Toaster";

const ConsultationForm: React.FC = () => {
  const { studentName, setStudentName, group, setGroup, mentor } = useFindMentor();
  const [topic, setTopic] = useState("");
  const [comments, setComments] = useState("");
  const [discord, setDiscord] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      student_name: studentName,
      group,
      mentor,
      topic,
      comments,
      discord,
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
      setGroup("");
      setTopic("");
      setComments("");
      setDiscord("");
    } catch (error) {
      setToast({ message: "Ошибка при отправке данных", type: "error" });
    }
  };

  const handleProblemReport = () => {
    window.location.href = "https://github.com/twint1m/consult-build/issues/new";
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
          <FormGroup>
            <Label htmlFor="group">Группа</Label>
            <Select
                required
                value={group}
                onChange={(e) => setGroup(e.target.value)}
            >
              <option value="" disabled>
                Выберите группу
              </option>
              <option value="241-321">241-321</option>
              <option value="241-3210">241-3210</option>
            </Select>
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
          <FormGroup>
            <Label htmlFor="discord">Контакт в дискорде</Label>
            <Input
                type="text"
                id="discord"
                name="discord"
                placeholder={"В формате @username"}
                required
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
            />
          </FormGroup>
          <CheckboxGroup>
            <CheckboxInput type="checkbox" id="consent" name="consent" required />
            <CheckboxLabel htmlFor="consent">
              Подтверждаю
              <Link href={"/consent"}>согласие</Link>
              на обработку персональных данных
            </CheckboxLabel>
          </CheckboxGroup>
          <Button type="submit">Отправить</Button>
        </form>
        <ProblemButton type="button" onClick={handleProblemReport}>
          Сообщить о проблеме
        </ProblemButton>
        {toast && <Toaster message={toast.message} type={toast.type} onClose={closeToast} />}
        <Outlet />
      </Container>
  );
};

export default ConsultationForm;
