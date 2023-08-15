import { TData, TTitle } from './types'

interface Props {
  data?: TData[]
  titles: TTitle[]
  emptyMessage: string
  actions?: (item: any) => JSX.Element
}
export function TableBody({ data, titles, emptyMessage, actions }: Props) {
  if (!data?.length) {
    return (
      <tbody>
        <tr>
          <td colSpan={titles?.length}>{emptyMessage}</td>
        </tr>
      </tbody>
    )
  }
  return (
    <tbody>
      {data?.map((tableData, idx) => (
        <tr key={idx}>
          {titles?.map((title) => (
            <td key={tableData[title.key]}>{tableData[title.key]}</td>
          ))}
          {actions?.(tableData)}
        </tr>
      ))}
    </tbody>
  )
}
