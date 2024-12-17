import styled from "styled-components";

export const SelectType = styled.div`
  display: flex;
  gap: 16px;
`

export const FormContent = styled.div`
  margin-top: 24px;

  h4 {
    margin-bottom: 12px;
  }
`

export const InputContent = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-size: 12px;
    color: #FF6E7A;
  }
`

export const Label = styled.label`
  font-size: 16px;
  color: #594D39;
`

export const InputField = styled.input`
  border: 1px solid #594D39;
  border-radius: 8px;
  outline: none;
  height: 28px;
  background-color: #FFF;
  padding-left: 8px;

  &:focus{
    border: 1px solid #4C8D75;
    box-shadow: 0 0 2px #4C8D75;
  }

  &::placeholder{
    color: #cfcfcf;
  }
`

export const SubmitBtn = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: #4C8D75;
  color: #EDEBE7;
  cursor: pointer;

  &:hover {
    background-color: #97CCBA;
    color: #594D39;
  }
`

export const Message = styled.div`
  height: 24px;
  font-size: 12px;
`