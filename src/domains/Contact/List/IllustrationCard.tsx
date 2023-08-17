import { DreamerIllustration } from '&components/Illustrations/DreamerIllustration'
import { PeopleSearchIllustration } from '&components/Illustrations/PeopleSearchIllustration'
import {
  SIllustrationContainer,
  SIllustrationMessage,
  SIllustrationWrapper
} from '&domains/Contact/List/style'

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
    <SIllustrationContainer>
      <SIllustrationWrapper>{illustration}</SIllustrationWrapper>
      <SIllustrationMessage>{message}</SIllustrationMessage>
    </SIllustrationContainer>
  )
}
