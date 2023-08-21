import { Input } from '&components/Input/Input'
import { useForm } from 'react-hook-form'
import { Suspense, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '&utils/routes'
import * as S from '&domains/Contact/List/style'
import { Button } from '&components/Button/Button'
import { ContactList } from './ContactsList'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ContactCardSkelton } from '&components/ContactCard/ContactCardSkeleton'

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
        <S.InputWrapper>
          <Input
            control={control}
            name="name"
            handleChangeDebounce={handleOnChange}
            label="Buscar"
            debounceDelay={1000}
            data-testid={'search-input'}
          />
        </S.InputWrapper>
        <div>
          <Button
            onClick={() => navigate(routes.createContact.path)}
            variant="success"
            data-testid={'button-new-contact'}
          >
            <S.ButtonText>Novo</S.ButtonText> <S.UserPlusIcon />
          </Button>
        </div>
      </S.ActionsContainer>
      <S.ListHeading>
        <S.Title>Contatos</S.Title>

        <S.OrderByNameContent
          onClick={() => toggleAscendentName()}
          data-testid={'button-sort-name'}
        >
          <span>Nome</span>
          {ascendentName ? <S.BarsArrowUpIcon /> : <S.BarsArrowDownIcon />}
        </S.OrderByNameContent>
      </S.ListHeading>
      <S.Separator />

      <S.CardList>
        <Suspense
          fallback={
            <S.CardList>
              <SkeletonTheme baseColor="#d9d8df" highlightColor="#bebbbb">
                {Array.from({ length: 9 }).map((_, idx) => (
                  <ContactCardSkelton key={'Skeleton' + idx} />
                ))}
              </SkeletonTheme>
            </S.CardList>
          }
        >
          <ContactList ascendentName={ascendentName} nameValue={nameValue} />
        </Suspense>
      </S.CardList>
    </S.Container>
  )
}
