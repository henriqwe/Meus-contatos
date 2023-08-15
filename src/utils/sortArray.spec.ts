import { sortArray } from './sortArray'

describe('sortArray test', () => {
  it('should return a new array in descending with out change in the  array', () => {
    const array = [1, 2, 3]
    const newArray = sortArray({ data: array, asc: false })
    expect(newArray).toEqual([3, 2, 1])
    expect(array).toEqual([1, 2, 3])
  })
  it('should return a new array in ascending with out change in the  array', () => {
    const array = [3, 2, 1]
    const newArray = sortArray({ data: array })
    expect(newArray).toEqual([1, 2, 3])
    expect(array).toEqual([3, 2, 1])
  })
  it('should return a new array in ascending with out change in the  array', () => {
    const array = [3, 2, 1]
    const newArray = sortArray({ data: array })
    expect(newArray).toEqual([1, 2, 3])
    expect(array).toEqual([3, 2, 1])
  })
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
      }
    ]
    const newArray = sortArray({ data: array, key: 'name' })
    expect(newArray).toEqual([
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
