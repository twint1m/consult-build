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
} from "./styles";
import { useFindMentor } from "./hook";
import { Outlet } from "react-router-dom";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const ConsultationForm: React.FC = () => {
  const { studentName, setStudentName, group, setGroup, mentor } =
    useFindMentor();
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [topic, setTopic] = useState("");
  const [comments, setComments] = useState("");
  const [discord, setDiscord] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      student_name: studentName,
      group,
      mentor,
      preferred_date: preferredDate,
      preferred_time: preferredTime,
      topic,
      comments,
      discord,
    };

    try {
      const response = await fetch("/add_consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Консультация успешно записана");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Ошибка при отправке данных");
    }
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
          <Label htmlFor="date-time">
            Предпочтительная дата и время консультации
          </Label>
          <Input
            type="date"
            id="date-time"
            name="preferred_date"
            required
            onChange={(e) => setPreferredDate(e.target.value)}
          />
          <Input
            type="time"
            id="time"
            name="preferred_time"
            required
            onChange={(e) => setPreferredTime(e.target.value)}
          />
          {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
          {/*  <DemoContainer components={["DateTimePicker"]}>*/}
          {/*    <DateTimePicker label="Выберите время консультации" />*/}
          {/*  </DemoContainer>*/}
          {/*</LocalizationProvider>*/}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="topic">Тема консультации</Label>
          <Input
            type="text"
            id="topic"
            name="topic"
            placeholder={"Пример: Эталонные модели"}
            required
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
      <Outlet />
    </Container>
  );
};

export default ConsultationForm;
