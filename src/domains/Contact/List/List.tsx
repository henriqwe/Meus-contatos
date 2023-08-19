import { Input } from '&components/Input/Input'
import { useForm } from 'react-hook-form'
import { Suspense, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'
import * as S from '&domains/Contact/List/style'
import { Button } from '&components/Button/Button'
import { ContactList } from './ContactsList'

export function List() {
  const navigate = useNavigate()

  const [ascendentName, setAscendentName] = useState(true)
  const { control } = useForm()
  const [nameValue, setNameValue] = useState<string>()

  function toggleAscendentName() {
    setAscendentName(!ascendentName)
  }

  function handleOnChange(text: string) {
    setNameValue(text)
  }

  return (
    <S.Container>
      <S.Header>
        <h1>Home</h1>
      </S.Header>

      <S.ActionsContainer>
        <div style={{ width: '100%' }}>
          <Input
            control={control}
            name="name"
            handleChangeDebounce={handleOnChange}
            label="Buscar"
          />
        </div>
        <div>
          <Button
            onClick={() => navigate(routes.createContact.path)}
            variant="success"
          >
            <S.ButtonText>Novo</S.ButtonText> <S.UserPlusIcon />
          </Button>
        </div>
      </S.ActionsContainer>
      <S.ListHeading>
        <h3 style={{ color: '#334155' }}>Contatos</h3>

        <S.OrderByNameContent onClick={() => toggleAscendentName()}>
          <span>Nome</span>
          {ascendentName ? <S.BarsArrowUpIcon /> : <S.BarsArrowDownIcon />}
        </S.OrderByNameContent>
      </S.ListHeading>
      <S.Separator />

      <S.CardList>
        <Suspense
          fallback={
            <S.LoadingContainer>
              <Loading />
            </S.LoadingContainer>
          }
        >
          <ContactList ascendentName={ascendentName} nameValue={nameValue} />
        </Suspense>
      </S.CardList>
    </S.Container>
  )
}
