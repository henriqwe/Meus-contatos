import { TTitle } from './types'

interface Props {
  titles: TTitle[]
}
export function TableHeader({ titles }: Props) {
  return (
    <thead>
      <tr>{titles?.map((title) => <th key={title.key}>{title.name}</th>)}</tr>
    </thead>
  )
}
