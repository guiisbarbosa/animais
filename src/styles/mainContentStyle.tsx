import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 180px);
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 28px;
`

export const Screen = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  max-width: 1440px;
  height: 100%;
`

export const SeeMoreButton = styled.button`
  background-color: #4C8D75;
  color: #EDEBE7;
  border: none;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #7fd4b5;
  }
`