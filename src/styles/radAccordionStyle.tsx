import styled from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

export const AccordionTrigger = styled(Accordion.Trigger)`
  width: 100%;
  padding: 4px 8px;
  border: none;
  border-bottom: 2px solid #4c8d75;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  margin-bottom: 8px;
  background-color: unset;
  display: flex;
  justify-content: space-between;
  color: #594D39;

  .animateArrow {
    transition: transform 300ms;
  }

  &[data-state="open"] > .animateArrow {
	transform: rotate(180deg);
}

`

export const AccordionContent = styled(Accordion.Content)`
  padding: 16px;
  font-size: 0.9rem;
  overflow: hidden;

  &[data-state="open"] {
	animation: slideDown 0.1s ease-in-out;
  }

  &[data-state="closed"] {
	animation: slideUp 0.1s ease-in-out;
  }

  @keyframes slideDown {
	from {
		height: 0;
	}
	to {
		height: auto;
	}
  }

  @keyframes slideUp {
    from {
      height: auto;
    }
    to {
      height: 0;
    }
  }
`
export const FoodContent = styled.div`
    display: flex !important;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
`