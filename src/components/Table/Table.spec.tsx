import { render, screen } from '@testing-library/react'
import { Table } from './Table'

const mockedData = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447'
  }
]
const titles = [
  { name: 'Nome', key: 'name' },
  { name: 'Telefone', key: 'phone' },
  { name: 'Email', key: 'email' }
]
const defaultEmptyMessage = 'Nem um dado a ser exibido'
const customEmptyMessage = 'Lista sem contatos'

describe('Table test', () => {
  it('should render the component', () => {
    render(<Table titles={titles} data={mockedData} />)
    expect(screen.getByText(mockedData[0]?.name).innerHTML).toEqual(
      mockedData[0]?.name
    )
  })

  it('shows a default message to empty the data', () => {
    render(<Table titles={titles} data={[]} />)

    expect(screen.getByText(defaultEmptyMessage).innerHTML).toEqual(
      defaultEmptyMessage
    )
  })

  it('shows a default message to empty the data', () => {
    render(
      <Table titles={titles} data={[]} emptyMessage={customEmptyMessage} />
    )
    expect(screen.getByText(customEmptyMessage).innerHTML).toEqual(
      customEmptyMessage
    )
  })
})
