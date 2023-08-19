import React, { memo, useEffect, useState } from 'react'
import * as S from './styles'

interface Props {
  children: JSX.Element | JSX.Element[]
  onTabSelected: (item: number) => void
}

export function Tab({ children, onTabSelected }: Props) {
  const [itemId, setItemId] = useState(0)

  useEffect(() => {
    onTabSelected(itemId)
  }, [itemId])

  return (
    <S.TabContainer>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onClick: () => {
            setItemId(index)
          },
          selected: itemId === index
        })
      })}
    </S.TabContainer>
  )
}

export const TabItem = memo(({ children, ...restProps }: any) => (
  <S.TabItem {...restProps}>{children}</S.TabItem>
))
