import { TData, TTitle } from '&components/Table/types'
import { TableHeader } from '&components/Table/TableHeader'
import { TableBody } from '&components/Table/TableBody'

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
      <TableHeader titles={titles} hasActions={!!actions} />
      <TableBody
        data={data}
        titles={titles}
        emptyMessage={emptyMessage}
        actions={actions}
      />
    </table>
  )
}
