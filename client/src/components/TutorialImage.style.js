import styled from "styled-components";

export const TutorialImage = styled.div`
  max-width: 20rem;
  max-height: 20rem;
  text-align: center;
`;

export const InstructionsContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 90%;

  @media (min-width: 0px) and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TutorialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.15rem;
`;
