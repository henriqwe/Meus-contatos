import { Input } from '&components/Input/Input'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { IFormData, INewContact, useContacts } from '&contexts/contactsContext'
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
import { SContainer } from '&domains/Contact/New/style'
import { ActionButtons } from '&domains/Contact/New/ActionButtons'
import styled from 'styled-components'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fakePromise } from '&utils/fakePromise'

export function NewContact() {
  const navigate = useNavigate()
  const { contactSchema, nextId, setNextId } = useContacts()
  const [activeStep, setActiveStep] = useState(0)

  const queryClient = useQueryClient()
  const createContact = useMutation({
    mutationFn: (contact: INewContact) => fakePromise(),
    onSuccess: (result, contact) => {
      queryClient.setQueryData(['contacts'], (old: any) => [
        ...old,
        { ...contact, id: nextId }
      ])
      navigate(routes.editContact.path(nextId.toString()))
      notification('Contato cadastrado com sucesso!', 'success')
      reset()
      setNextId((old) => old + 1)
    },
    onError: (error) => {
      console.error({ error })
    }
  })

  async function onSubmit(formData: IFormData) {
    const newContact = {
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
    await createContact.mutate(newContact)
  }

  function handleNextStep() {
    if (activeStep >= 2) {
      return
    }
    setActiveStep((old) => old + 1)
  }

  function handlePreviusStep() {
    if (activeStep === 0) {
      navigate(routes.home.path)
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
  return (
    <SContainer>
      <h1>Cadastro de contato</h1>
      <Stepper steps={steps} activeStep={activeStep} />
      <div>
        {activeStep === 0 && (
          <SForm onSubmit={handleSubmit(handleNextStep)}>
            <Input
              control={control}
              name="name"
              label="Nome *"
              error={errors['name']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="email"
              label="Email *"
              error={errors['email']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="phone"
              label="Telefone *"
              error={errors['phone']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="username"
              label="Nome de usuário"
              error={errors['username']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="website"
              label="Website"
              error={errors['website']}
              disabled={createContact.isLoading}
            />
            <ActionButtons
              activeStep={activeStep}
              handlePreviusStep={handlePreviusStep}
              isLoading={createContact.isLoading}
            />
          </SForm>
        )}
        {activeStep === 1 && (
          <SForm onSubmit={handleSubmit(handleNextStep)}>
            <Input
              control={control}
              name="street"
              label="Rua"
              error={errors['street']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="suite"
              label="Número"
              error={errors['suite']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="city"
              label="Cidade"
              error={errors['city']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="zipcode"
              label="CEP"
              error={errors['zipcode']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="lat"
              label="Latitude"
              error={errors['lat']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="lng"
              label="Longitude"
              error={errors['lng']}
              disabled={createContact.isLoading}
            />
            <ActionButtons
              activeStep={activeStep}
              handlePreviusStep={handlePreviusStep}
              isLoading={createContact.isLoading}
            />
          </SForm>
        )}
        {activeStep === 2 && (
          <SForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              control={control}
              name="companyName"
              label="Nome"
              error={errors['companyName']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="catchPhrase"
              label="Frase de efeito"
              error={errors['catchPhrase']}
              disabled={createContact.isLoading}
            />
            <Input
              control={control}
              name="bs"
              label="Estratégia de negócio"
              error={errors['bs']}
              disabled={createContact.isLoading}
            />
            <ActionButtons
              activeStep={activeStep}
              handlePreviusStep={handlePreviusStep}
              isLoading={createContact.isLoading}
            />
          </SForm>
        )}
      </div>
    </SContainer>
  )
}

const SForm = styled.form`
  display: flex;
  gap: 0.3rem;
  flex: 1;
  flex-direction: column;
  width: 100vw;
  padding: 0.5rem;
`
