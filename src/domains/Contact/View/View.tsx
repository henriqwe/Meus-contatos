import { useNavigate, useParams } from 'react-router-dom'
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
import { useContact } from '&hooks/useContact'
import { deleteContact } from '&services/mutations/deleteContact'
import { IContact } from '&types/contact'
import { motion } from 'framer-motion'

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
    mutationFn: (id: number) => deleteContact(id),
    onSuccess: (data) => {
      navigate(routes.home.path)
      queryClient.setQueryData(
        ['contacts'],
        (old: IContact[] | undefined) =>
          old?.filter((contact: IContact) => contact.id !== data) || []
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
        <S.DropdownOptionContent data-testid={'edit-buttom'}>
          Editar
          <S.PencilIcon />
        </S.DropdownOptionContent>
      ),
      fn: () => navigate(routes.editContact.path(contact.data?.id as number))
    },
    {
      content: (
        <S.DropdownOptionContent data-testid={'remove-buttom'}>
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
        <S.LoadingContainer>{/* <Loading /> */}</S.LoadingContainer>
      ) : (
        <>
          <S.ContactHeaderWrapper>
            <S.ContactHeader>
              <div
                onClick={() => navigate(routes.home.path)}
                data-testid={'back-home-button'}
              >
                <S.ChevronLeftIcon />
              </div>
              <h1>Contato</h1>

              <Dropdown options={dropdownOption} />
            </S.ContactHeader>

            <Modal
              action={() => removeContact.mutate(contact.data?.id as number)}
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
              <TabItem data-testid="tab-dados">
                <S.UserIcon />
                Dados
              </TabItem>
              <TabItem data-testid="tab-endereco">
                <S.MapPinIcon />
                Endereço
              </TabItem>
              <TabItem data-testid={'tab-empresa'}>
                <S.BuildingStorefrontIcon />
                Empresa
              </TabItem>
            </Tab>
            <div>
              <motion.div
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 300, opacity: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 40
                }}
                style={{ width: '100%', height: '100%' }}
              >
                {TabsContent[selectedTab]}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </S.Container>
  )
}
