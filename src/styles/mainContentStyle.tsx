import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const Screen = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  max-width: 1440px;
  height: 100%;
  margin-bottom: 28px;
`;
