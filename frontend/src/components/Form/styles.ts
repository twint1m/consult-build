import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: none;
  }
`;

export const Title = styled.h1`
  color: #2c3e50;
  text-align: left;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  [type="date"]::-webkit-inner-spin-button {
    color: black;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: black;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;

  @media (max-width: 768px) {
    padding: 10px;
    height: 100px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    height: 80px;
  }
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export const MentorFormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MentorLabel = styled.label`
  font-weight: bold;
`;

export const MentorSpan = styled.span`
  margin-left: 10px;
  white-space: nowrap;
`;

export const Link = styled.a`
  margin: 0 5px;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  font-size: 1rem;
  white-space: normal;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.45rem;
  }
`;
