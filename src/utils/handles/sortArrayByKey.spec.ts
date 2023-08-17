import { sortArrayByKey } from '&utils/handles/sortArrayByKey'

describe('sortArrayByKey test', () => {
  it('should return a new array in ascending order by name', () => {
    const array = [
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
      },
      {
        id: 4,
        name: 'abraao silva',
        email: 'abraao@yesenia.net',
        phone: '1-263-123-4447'
      }
    ]
    const newArray = sortArrayByKey({ data: array, key: 'name' })
    expect(newArray).toEqual([
      {
        id: 4,
        name: 'abraao silva',
        email: 'abraao@yesenia.net',
        phone: '1-263-123-4447'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        phone: '1-463-123-4447'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125'
      },
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442'
      }
    ])
  })
})
