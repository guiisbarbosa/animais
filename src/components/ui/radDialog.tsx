import * as Dialog from '@radix-ui/react-dialog'
import { FaWindowClose } from 'react-icons/fa'
import * as StRad from './radDialogStyle'

interface RadixDialogProps {
  title: string
  triggerButton: React.ReactNode
  children: React.ReactNode
}

export const RadixDialog: React.FC<RadixDialogProps> = ({
  title,
  triggerButton,
  children,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggerButton}</Dialog.Trigger>
      <Dialog.Portal>
        <StRad.DiagOverlay />
        <Dialog.Content asChild>
          <StRad.DiagContent>
            <StRad.DiagTitle>{title}</StRad.DiagTitle>
            <Dialog.Description asChild aria-describedby="dialog-description">
              <div>{children}</div>
            </Dialog.Description>
            <div>
              <Dialog.Close asChild>
                <StRad.DiagBtnClose type="button">
                  <FaWindowClose />
                </StRad.DiagBtnClose>
              </Dialog.Close>
            </div>
          </StRad.DiagContent>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
