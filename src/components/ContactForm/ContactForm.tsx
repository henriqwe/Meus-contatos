import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
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
import { IFormData } from './type'
import * as S from './style'
import { Modal } from '&components/Modal/Modal'
import { contactSchema } from '&schemas/contact'
import { PersonalInfoFormStep } from './Steps/PersonalInfoFormStep'
import { AddressFormStep } from './Steps/AddressFormStep'
import { CompanyFormStep } from './Steps/CompanyFormStep'
import type { IContact } from '&types/contact'
import { createContact } from '&services/mutations/createContact'
import { editContact } from '&services/mutations/editContact'

type TActiveStep = 0 | 1 | 2
interface props {
  contact?: IContact
}
export function ContactForm({ contact }: props) {
  const typeForm = contact ? 'editContact' : 'newContact'
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState<TActiveStep>(0)
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState<IFormData>()
  const queryClient = useQueryClient()
  const [contactMapLocalition, setContactMapLocalition] = useState<{
    lat: number
    lng: number
  }>()

  const createContactMutation = useMutation({
    mutationFn: (newContact: Omit<IContact, 'id'>) => createContact(newContact),
    onSuccess: (data) => {
      queryClient.setQueryData(['contacts'], (old: IContact[] | undefined) => [
        ...(old ?? []),
        data
      ])

      onFinish(data.id)
    },
    onError: onError
  })

  const editContactMutation = useMutation({
    mutationFn: (newContact: IContact) => editContact(newContact),
    onSuccess: (data) => {
      queryClient.setQueryData(['contacts'], (old: IContact[] | undefined) => {
        if (!old) {
          return [data]
        }
        return old.map((oldContact: IContact) =>
          oldContact.id === data.id ? data : oldContact
        )
      })

      onFinish(data.id)
    },
    onError: onError
  })

  function onError(error: Error) {
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
    const newContact = {
      id: typeForm === 'newContact' ? undefined : (contact?.id as number),
      email: formData!.email,
      name: formData!.name,
      phone: formData!.phone,
      username: formData!.username,
      website: formData!.website,
      address: {
        city: formData!.city,
        geo: {
          lat: contactMapLocalition?.lat.toString(),
          lng: contactMapLocalition?.lng.toString()
        },
        street: formData!.street,
        suite: formData!.suite,
        zipcode: formData!.zipcode
      },
      company: {
        bs: formData!.bs,
        catchPhrase: formData!.catchPhrase,
        name: formData!.companyName
      }
    }
    if (typeForm === 'newContact') {
      createContactMutation.mutate(newContact)
      return
    }
    if (typeForm === 'editContact') {
      editContactMutation.mutate(newContact as IContact)
      return
    }
  }

  function handleNextStep() {
    if (activeStep >= 2) {
      return
    }
    setActiveStep((old) => (old + 1) as TActiveStep)
  }
  function handleConcludeForm(_formData: IFormData) {
    setOpenModal(true)
    setFormData(_formData)
  }
  function handlePreviousStep() {
    if (activeStep === 0 && typeForm === 'newContact') {
      navigate(routes.home.path)
      return
    }
    if (activeStep === 0 && typeForm === 'editContact') {
      navigate(routes.viewContact.path(contact?.id as number))
      return
    }
    setActiveStep((old) => (old - 1) as TActiveStep)
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

  const FormSteps = {
    0: (
      <PersonalInfoFormStep
        activeStep={activeStep}
        control={control}
        errors={errors}
        handlePreviousStep={handlePreviousStep}
        handleSubmit={handleSubmit}
        isLoading={
          createContactMutation.isLoading || editContactMutation.isLoading
        }
        onSubmit={handleNextStep}
      />
    ),
    1: (
      <AddressFormStep
        activeStep={activeStep}
        control={control}
        errors={errors}
        handlePreviousStep={handlePreviousStep}
        handleSubmit={handleSubmit}
        isLoading={
          createContactMutation.isLoading || editContactMutation.isLoading
        }
        onSubmit={handleNextStep}
        contactMapLocalition={contactMapLocalition}
        setContactMapLocalition={setContactMapLocalition}
      />
    ),
    2: (
      <CompanyFormStep
        activeStep={activeStep}
        control={control}
        errors={errors}
        handlePreviousStep={handlePreviousStep}
        handleSubmit={handleSubmit}
        isLoading={
          createContactMutation.isLoading || editContactMutation.isLoading
        }
        onSubmit={handleConcludeForm}
      />
    )
  }

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

        website: contact.website,
        companyName: contact.company.name,
        catchPhrase: contact.company.catchPhrase,
        bs: contact.company.bs
      })
      if (contact.address.geo.lat && contact.address.geo.lng) {
        setContactMapLocalition({
          lat: Number(contact.address.geo.lat),
          lng: Number(contact.address.geo.lng)
        })
      }
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
      <div>{FormSteps[activeStep]}</div>
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
