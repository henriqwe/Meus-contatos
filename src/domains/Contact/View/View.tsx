import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'
import { Avatar } from '&components/Avatar/Avatar'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { notification } from '&utils/notification'
import * as S from './style'
import { Tab, TabItem } from '&components/Tab/Tabs'
import { useState } from 'react'
import { ContactData } from './ContactData'
import { ContactAddrees } from './ContactAddrees'
import { ContactCompany } from './ContactCompany'
import { Dropdown } from '&components/Dropdown/Dropdown'
import { Modal } from '&components/Modal/Modal'
import { fakePromise } from '&utils/fakePromise'
import { useContact } from '&hooks/useContact'

type TSelectedTab = 0 | 1 | 2

export function ViewContact() {
  const { id } = useParams()

  const contact = useContact(id as string)

  const navigate = useNavigate()

  const onTabSelected = (index: number) => {
    setSelectedTab(index as TSelectedTab)
  }

  const [selectedTab, setSelectedTab] = useState<TSelectedTab>(0)
  const [openModal, setOpenModal] = useState(false)
  const queryClient = useQueryClient()

  const removeContact = useMutation({
    mutationFn: (_: number) => fakePromise(),
    onSuccess: (_, id) => {
      navigate(routes.home.path)
      queryClient.setQueryData(['contacts'], (old: any) =>
        old.filter((contact: any) => contact.id !== id)
      )

      notification('Contato removido com sucesso', 'success')
    },
    onError: (error: Error) => notification(error.message, 'error')
  })
  if (contact.error) {
    navigate(routes.home.path)
    notification(contact.error.message, 'error')
    return <></>
  }

  const TabsContent = {
    0: <ContactData contact={contact.data!} />,
    1: <ContactAddrees contact={contact.data!} />,
    2: <ContactCompany contact={contact.data!} />
  }
  const dropdownOption = [
    {
      content: (
        <S.DropdownOptionContent>
          Editar
          <S.PencilIcon />
        </S.DropdownOptionContent>
      ),
      fn: () => navigate(routes.editContact.path(contact.data?.id!))
    },
    {
      content: (
        <S.DropdownOptionContent>
          Remover
          <S.TrashIcon />
        </S.DropdownOptionContent>
      ),
      fn: () => setOpenModal(true)
    }
  ]
  return (
    <S.Container>
      {contact.isLoading || !contact.data ? (
        <S.LoadingContainer>
          <Loading />
        </S.LoadingContainer>
      ) : (
        <>
          <S.ContactHeaderWrapper>
            <S.ContactHeader>
              <div onClick={() => navigate(routes.home.path)}>
                <S.ChevronLeftIcon />
              </div>
              <h1>Contato</h1>

              <Dropdown options={dropdownOption} />
            </S.ContactHeader>

            <Modal
              action={() => removeContact.mutate(contact.data?.id!)}
              title="Deseja realmente remover esse contato?"
              actionsText="Sim"
              cancelText="Não"
              open={openModal}
              onOpenChange={setOpenModal}
            />
            <S.AvatarWrapper>
              <Avatar name={contact.data.name} variant="md" />
              <S.AvatarName>{contact.data.name}</S.AvatarName>
              <S.AvatarPhone>{contact.data.phone}</S.AvatarPhone>
            </S.AvatarWrapper>
          </S.ContactHeaderWrapper>
          <div>
            <Tab onTabSelected={onTabSelected}>
              <TabItem>
                <S.UserIcon />
                Dados
              </TabItem>
              <TabItem>
                <S.MapPinIcon />
                Endereço
              </TabItem>
              <TabItem>
                <S.BuildingStorefrontIcon />
                Empresa
              </TabItem>
            </Tab>
            <div>{TabsContent[selectedTab]}</div>
          </div>
        </>
      )}
    </S.Container>
  )
}
