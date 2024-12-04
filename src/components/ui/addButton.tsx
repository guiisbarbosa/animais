import React from 'react';
import * as S from '../../styles/addButtonStyle'

export const AddButton = React.forwardRef<HTMLButtonElement, { children: React.ReactNode }>(
  ({ children, ...props }, ref) => (
    <S.AddBtn ref={ref} type="button" {...props}>
      {children}
    </S.AddBtn>
  )
);