import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const MessageTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
`;

export const MessageText = styled.div`
  /* width: 100%; */
  height: 100%;
`;

export const MessageButtons = styled.div`
  width: 100%;
  flex-direction: row;
  font-size: 1rem;
  align-items: flex-end;
`;
