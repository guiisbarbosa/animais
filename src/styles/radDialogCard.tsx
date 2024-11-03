import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const StRadDiagOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`

export const StRadDiagContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`

export const DiagBtnClose = styled.button`

    border: 1px solid red;
    border-radius: 4px;
    position: absolute;
    top: 24px;
    right: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #a3a3a3;
    font-size: 16px;

    &:hover{
        color: #FF6E7A;
    }
`

export const StRadDiagTitle = styled(Dialog.Title)`
    font-size: 28px;
    font-family: "Fredoka", system-ui;
    font-weight: 500;
    color: #594D39;
`
