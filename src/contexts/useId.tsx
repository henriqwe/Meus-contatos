import { createContext, ReactNode, useContext, useState } from 'react'

interface props {
  children: ReactNode
}

interface IdContextProps {
  data: number
  nextId(): number
}
export const IdContext = createContext<IdContextProps>({} as IdContextProps)

export const IdProvider = ({ children }: props) => {
  const [data, setNextId] = useState<number>(1000)

  function nextId() {
    const value = data + 1

    setNextId(value)

    return value
  }
  return (
    <IdContext.Provider
      value={{
        data,
        nextId
      }}
    >
      {children}
    </IdContext.Provider>
  )
}

export const useId = () => {
  return useContext(IdContext)
}
