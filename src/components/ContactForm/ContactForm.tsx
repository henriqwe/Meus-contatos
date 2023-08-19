import { Input } from '&components/Input/Input'
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
import { fakePromise } from '&utils/fakePromise'
import { IContact } from '&operations/queries/fetchContacts'
import { IFormData } from './type'
import * as S from './style'
import { Modal } from '&components/Modal/Modal'
import { contactSchema } from '&schemas/contact'
import { useId } from '&contexts/useId'
import { PersonalInfoFormStep } from './Steps/PersonalInfoFormStep'
import { AddressFromStep } from './Steps/AddressFromStep'
import { CompanyFromStep } from './Steps/CompanyFromStep'

type TActiveStep = 0 | 1 | 2
interface props {
  contact?: IContact
}
export function ContactForm({ contact }: props) {
  const typeForm = !!contact ? 'editContact' : 'newContact'
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState<TActiveStep>(0)
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState<IFormData>()
  const Id = useId()
  const queryClient = useQueryClient()
  const [contactMapLocalition, setContactMapLocalition] = useState<{
    lat: number
    lng: number
  }>()

  const createContact = useMutation({
    mutationFn: (newContact: IContact) => fakePromise(),
    onSuccess: (result, newContact) => {
      queryClient.setQueryData(['contacts'], (old: any) => [
        ...old,
        { ...newContact }
      ])

      Id.nextId()
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
      id: typeForm === 'newContact' ? Id.data : (contact?.id as number),
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
      navigate(routes.viewContact.path(contact?.id!))
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
        isLoading={createContact.isLoading || editContact.isLoading}
        onSubmit={handleNextStep}
      />
    ),
    1: (
      <AddressFromStep
        activeStep={activeStep}
        control={control}
        errors={errors}
        handlePreviousStep={handlePreviousStep}
        handleSubmit={handleSubmit}
        isLoading={createContact.isLoading || editContact.isLoading}
        onSubmit={handleNextStep}
        contactMapLocalition={contactMapLocalition}
        setContactMapLocalition={setContactMapLocalition}
      />
    ),
    2: (
      <CompanyFromStep
        activeStep={activeStep}
        control={control}
        errors={errors}
        handlePreviousStep={handlePreviousStep}
        handleSubmit={handleSubmit}
        isLoading={createContact.isLoading || editContact.isLoading}
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
