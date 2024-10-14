import styled from "styled-components";

export const Title = styled.h1`
  margin: 2.5rem auto;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ConsentText = styled.p`
  margin-top: auto;
  flex-grow: 1;
  text-align: justify;
  line-height: 1.6;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  padding: 10%;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    border: none;
    box-shadow: none;
    padding-bottom: 5rem;
  }
`;
