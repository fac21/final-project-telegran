import styled from "styled-components";

export const MessagesListContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledMessage = styled.div`
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    line-height: 2rem;
    background-color: #febeb5;
    margin-bottom: 1rem;
    align-items: center;
  }

  .avatar {
    grid-area: 1 / 1 / 3 / 2;
    margin-left: auto;
    margin-right: auto;
  }
  .time {
    grid-area: 1 / 2 / 2 / 3;
  }
  .name {
    grid-area: 1 / 3 / 2 / 4;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .content {
    grid-area: 2 / 2 / 3 / 4;
  }
`;
