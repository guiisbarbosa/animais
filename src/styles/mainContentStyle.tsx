import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 188px);
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin: 28px 20px;
`;

export const Screen = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  max-width: 1440px;
  height: 100%;
  margin-bottom: 20px;
`;

export const PaginationContainer = styled.div`
  height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 8px;
    background-color: #4C8D75;
    color: #EDEBE7;
    cursor: pointer;
  }

  button:disabled {
    background-color: #97CCBA;
    color: #EDEBE7;
    cursor: not-allowed;
  }

  h4 {
    color: #594D39;
  }
`