import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid'
import { TTitle } from './types'

interface Props {
  titles: TTitle[]
  hasActions: boolean
}
export function TableHeader({ titles, hasActions }: Props) {
  return (
    <thead>
      <tr>
        {titles?.map((title) => (
          <th key={title.key} onClick={title.onClick?.fn}>
            {title.name}
            {title.onClick?.ascIcon !== undefined && (
              <AscIcon asc={title.onClick?.ascIcon} />
            )}
          </th>
        ))}
        {hasActions && <th key={'action'} />}
      </tr>
    </thead>
  )
}

function AscIcon({ asc }: { asc: boolean }) {
  if (asc) {
    return <ArrowUpIcon style={{ width: '1rem', height: '1rem' }} />
  }
  return <ArrowDownIcon style={{ width: '1rem', height: '1rem' }} />
}
