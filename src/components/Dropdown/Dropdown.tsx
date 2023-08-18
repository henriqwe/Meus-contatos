import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import './style.css'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { ReactNode } from 'react'

interface props {
  options: { fn?: () => void; content: ReactNode }[]
}
export function Dropdown({ options }: props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <EllipsisVerticalIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          {options.map((option) => (
            <DropdownMenu.Item
              className="DropdownMenuItem"
              onClick={() => option.fn?.()}
            >
              {option.content}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
