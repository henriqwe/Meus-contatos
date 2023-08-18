import { Input } from '&components/Input/Input'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useContacts } from '&contexts/contactsContext'
import { useNavigate } from 'react-router-dom'
import { routes } from '&utils/routes'
import { yupResolver } from '@hookform/resolvers/yup'
import { notification } from '&utils/notification'
import { Stepper } from '&components/Stepper/Stepper'
import {
  BuildingStorefrontIcon,
  MapPinIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakePromise } from '&utils/fakePromise'
import { IContact } from '&operations/queries/fetchContacts'
import { IFormData } from './type'
import * as S from './style'
import { ActionButtons } from './ActionButtons'
import { Modal } from '&components/Modal/Modal'

interface props {
  contact?: IContact
}
export function ContactForm({ contact }: props) {
  const typeForm = !!contact ? 'editContact' : 'newContact'
  const navigate = useNavigate()
  const { contactSchema, nextId, setNextId } = useContacts()
  const [activeStep, setActiveStep] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState<IFormData>()

  const queryClient = useQueryClient()

  const createContact = useMutation({
    mutationFn: (newContact: IContact) => fakePromise(),
    onSuccess: (result, newContact) => {
      queryClient.setQueryData(['contacts'], (old: any) => [
        ...old,
        { ...newContact }
      ])

      setNextId((old) => old + 1)
      onFinish(newContact.id)
    },
    onError: onError
  })
  const editContact = useMutation({
    mutationFn: (newContact: IContact) => fakePromise(),
    onSuccess: (result, newContact) => {
      queryClient.setQueryData(['contacts'], (old: any) =>
        old.map((oldContact: IContact) =>
          oldContact.id === newContact.id ? newContact : oldContact
        )
      )
      onFinish(newContact.id)
    },
    onError: onError
  })

  function onError(error: any) {
    console.error({ error })
    notification('Ops! algo deu errado.', 'error')
  }

  function onFinish(id: number) {
    const notificationMessage =
      typeForm === 'newContact'
        ? 'Contato cadastrado com sucesso!'
        : 'Contato editado com sucesso!'
    navigate(routes.viewContact.path(id))
    notification(notificationMessage, 'success')
    reset()
  }

  async function onSubmit() {
    let newContact = {
      id: typeForm === 'newContact' ? nextId : (contact?.id as number),
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      username: formData.username,
      website: formData.website,
      address: {
        city: formData.city,
        geo: {
          lat: formData.lat,
          lng: formData.lng
        },
        street: formData.street,
        suite: formData.suite,
        zipcode: formData.zipcode
      },
      company: {
        bs: formData.bs,
        catchPhrase: formData.catchPhrase,
        name: formData.companyName
      }
    }
    if (typeForm === 'newContact') {
      createContact.mutate(newContact)
      return
    }
    if (typeForm === 'editContact') {
      editContact.mutate(newContact)
      return
    }
  }

  function handleNextStep() {
    if (activeStep >= 2) {
      return
    }
    setActiveStep((old) => old + 1)
  }
  function handleConcludeForm(_formData: IFormData) {
    setOpenModal(true)
    setFormData(_formData)
  }
  function handlePreviusStep() {
    if (activeStep === 0) {
      if (typeForm === 'newContact') {
        navigate(routes.home.path)
        return
      }
      navigate(routes.viewContact.path(contact?.id!))
      return
    }
    setActiveStep((old) => old - 1)
  }
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    resolver: activeStep === 0 ? yupResolver(contactSchema) : undefined
  })

  const steps = [
    {
      icon: <UserIcon />,
      label: 'Dados pessoais'
    },
    {
      icon: <MapPinIcon />,
      label: 'Endereço'
    },
    {
      icon: <BuildingStorefrontIcon />,
      label: 'Empresa'
    }
  ]

  useEffect(() => {
    if (contact) {
      reset({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        username: contact.username,
        street: contact.address.street,
        suite: contact.address.suite,
        city: contact.address.city,
        zipcode: contact.address.zipcode,
        lat: contact.address.geo.lat,
        lng: contact.address.geo.lng,
        website: contact.website,
        companyName: contact.company.name,
        catchPhrase: contact.company.catchPhrase,
        bs: contact.company.bs
      })
    }
  }, [contact])

  return (
    <S.Container>
      {typeForm === 'newContact' ? (
        <h1>Cadastro de contato</h1>
      ) : (
        <h1>Edição de contato</h1>
      )}
      {typeForm === 'editContact' && <p>{contact?.name}</p>}
      <Stepper steps={steps} activeStep={activeStep} />
      <div>
        {activeStep === 0 && (
          <S.Form onSubmit={handleSubmit(handleNextStep)}>
            <Input
              control={control}
              name="name"
              label="Nome *"
              error={errors['name']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="email"
              label="Email *"
              error={errors['email']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="phone"
              label="Telefone *"
              error={errors['phone']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="username"
              label="Nome de usuário"
              error={errors['username']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="website"
              label="Website"
              error={errors['website']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <ActionButtons
              activeStep={activeStep}
              handlePreviusStep={handlePreviusStep}
              isLoading={createContact.isLoading || editContact.isLoading}
            />
          </S.Form>
        )}
        {activeStep === 1 && (
          <S.Form onSubmit={handleSubmit(handleNextStep)}>
            <Input
              control={control}
              name="street"
              label="Rua"
              error={errors['street']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="suite"
              label="Número"
              error={errors['suite']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="city"
              label="Cidade"
              error={errors['city']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="zipcode"
              label="CEP"
              error={errors['zipcode']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="lat"
              label="Latitude"
              error={errors['lat']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="lng"
              label="Longitude"
              error={errors['lng']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <ActionButtons
              activeStep={activeStep}
              handlePreviusStep={handlePreviusStep}
              isLoading={createContact.isLoading || editContact.isLoading}
            />
          </S.Form>
        )}
        {activeStep === 2 && (
          <S.Form onSubmit={handleSubmit(handleConcludeForm)}>
            <Input
              control={control}
              name="companyName"
              label="Nome"
              error={errors['companyName']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="catchPhrase"
              label="Frase de efeito"
              error={errors['catchPhrase']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <Input
              control={control}
              name="bs"
              label="Estratégia de negócio"
              error={errors['bs']}
              disabled={createContact.isLoading || editContact.isLoading}
            />
            <ActionButtons
              activeStep={activeStep}
              handlePreviusStep={handlePreviusStep}
              isLoading={createContact.isLoading || editContact.isLoading}
            />
          </S.Form>
        )}
      </div>
      <Modal
        action={() => onSubmit()}
        title={
          typeForm === 'newContact'
            ? 'Finalizar o cadastro?'
            : 'Finalizar a edição?'
        }
        actionsText="Sim"
        cancelText="Não"
        open={openModal}
        onOpenChange={setOpenModal}
      />
    </S.Container>
  )
}
