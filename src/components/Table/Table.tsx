import { TData, TTitle } from './types'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'

interface Props {
  data?: TData[]
  titles: TTitle[]
  actions?: (item: any) => JSX.Element
  emptyMessage?: string
}
export function Table({
  data,
  titles,
  emptyMessage = 'Nem um dado a ser exibido',
  actions
}: Props) {
  return (
    <table test-id="table">
      <TableHeader titles={titles} />
      <TableBody
        data={data}
        titles={titles}
        emptyMessage={emptyMessage}
        actions={actions}
      />
    </table>
  )
}
