import { DreamerIllustration } from '&components/Illustrations/DreamerIllustration/DreamerIllustration'
import { PeopleSearchIllustration } from '&components/Illustrations/PeopleSearchIllustration/PeopleSearchIllustration'
import * as S from '&domains/Contact/List/style'

export function IllustrationCard({
  isEmpty,
  notFound
}: {
  notFound: boolean
  isEmpty: boolean
}) {
  if (!isEmpty && !notFound) {
    return <></>
  }
  const illustration = isEmpty ? (
    <DreamerIllustration />
  ) : (
    <PeopleSearchIllustration />
  )

  const message = isEmpty
    ? 'Lista de contatos está vazia'
    : 'Contato não encontrado'

  return (
    <S.IllustrationContainer>
      <S.IllustrationWrapper>{illustration}</S.IllustrationWrapper>
      <S.IllustrationMessage>{message}</S.IllustrationMessage>
    </S.IllustrationContainer>
  )
}
