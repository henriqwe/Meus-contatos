import * as AlertDialog from '@radix-ui/react-alert-dialog'
import './styles.css'
import * as S from './styles'
import { ReactNode } from 'react'
import { Button } from '&components/Button/Button'

interface props {
  triggerContent?: ReactNode
  action: () => void
  title: string
  content?: ReactNode
  cancelText?: string
  actionsText?: string
  open?: boolean
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>
}
export function Modal({
  triggerContent,
  action,
  title,
  content,
  open,
  onOpenChange,
  cancelText = 'Não',
  actionsText = 'Sim'
}: props) {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      {triggerContent && (
        <AlertDialog.Trigger asChild>
          <button>{triggerContent}</button>
        </AlertDialog.Trigger>
      )}
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            {content}
          </AlertDialog.Description>
          <S.AlertWrapper>
            <AlertDialog.Cancel asChild>
              <div>
                <Button variant="danger" data-testid={'modal-buuton-cancel'}>
                  <span>{cancelText}</span> <S.XMarkIcon />
                </Button>
              </div>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant="primary"
                onClick={() => action()}
                data-testid={'modal-button-ok'}
              >
                <span>{actionsText}</span> <S.CheckIcon />
              </Button>
            </AlertDialog.Action>
          </S.AlertWrapper>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
