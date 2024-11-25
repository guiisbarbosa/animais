import styled from "styled-components";
import * as Select from '@radix-ui/react-select';

export const SelectDiv = styled.div`
  width: 100%;
	display: flex;
	gap: 24px;

	.btnSend {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 36px;
    border: none;
    border-radius: 8px;
    background-color: #4C8D75;
    color: #EDEBE7;
    cursor: pointer;

		&:disabled {
			background-color: #97CCBA;
    	color: #EDEBE7;
    	cursor: auto;
		}
	}
`

export const SelectTrigger = styled(Select.Trigger)`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
  border: none;
	border-radius: 8px;
	padding: 0 16px;
	font-size: 12px;
	width: 200px;
	height: 36px;
	gap: 5px;
	background-color: #EDEBE7;
	color: #4C8D75;
	box-shadow: 2px 2px 10px #6e6961;
  cursor: pointer;
`;

export const SelectContent = styled(Select.Content)`
	width: 200px;
	max-height: 170px;
	border: 5px solid #FFF;
	overflow-y: scroll;
	background-color: white;
	border-radius: 6px;
	box-shadow:
		0px 10px 10px rgba(0, 0, 0, 0.35);
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 8px;
`

export const SelectItem = styled(Select.Item)`
	font-size: 13px;
	line-height: 1;
	color: #6e6961;
	border-radius: 3px;
	display: flex;
	align-items: center;
	height: 25px;
	padding: 0 8px;
	user-select: none;
	cursor: pointer;
    
  &:focus {
    background-color: #97CCBA;
  }
`;

export const SelectIcon = styled(Select.Icon)`
  margin-left: 8px;
`