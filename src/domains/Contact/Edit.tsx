import { Input } from '&components/Input/Input'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { IFormData, useContacts } from '&contexts/contactsContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'
import { notification } from '&utils/notification'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '&components/Button/Button'

export function EditContact() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const { contactSchema, editContact } = useContacts()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(contactSchema) })

  const { getContactById, contactsQuery } = useContacts()

  const contact = getContactById(id as string)
  function onSubmit(formData: IFormData) {
    try {
      setIsLoading(true)
      const newContact = {
        id: contact?.id as number,
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
      editContact(newContact)
      notification('Contato editado com sucesso!', 'success')
      reset()
      navigate(routes.home.path)
    } catch (error) {
      console.error({ error })
    } finally {
      setIsLoading(false)
    }
  }
  if (contactsQuery.isLoading) {
    return <Loading />
  }
  if (!contact && !contactsQuery.isLoading) {
    throw new Error()
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
    <div>
      <div onClick={() => navigate(routes.home.path)}>VOLTAR</div>

      <h1>Edição de contato</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          control={control}
          name="name"
          label="Nome *"
          error={errors['name']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="email"
          label="Email *"
          error={errors['email']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="phone"
          label="Telefone *"
          error={errors['phone']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="username"
          label="Nome de usuário"
          error={errors['username']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="street"
          label="street"
          error={errors['street']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="suite"
          label="suite"
          error={errors['suite']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="city"
          label="city"
          error={errors['city']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="zipcode"
          label="zipcode"
          error={errors['zipcode']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="lat"
          label="lat"
          error={errors['lat']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="lng"
          label="lng"
          error={errors['lng']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="website"
          label="website"
          error={errors['website']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="companyName"
          label="name"
          error={errors['companyName']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="catchPhrase"
          label="catchPhrase"
          error={errors['catchPhrase']}
          disabled={isLoading}
        />
        <Input
          control={control}
          name="bs"
          label="bs"
          error={errors['bs']}
          disabled={isLoading}
        />
        <Button disabled={isLoading} variant="primary">
          Atualizar
        </Button>
      </form>
    </div>
  )
}

export const ErrorBoundary = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div onClick={() => navigate(routes.home.path)}>VOLTAR</div>
      <h3>Some Error Boundary</h3>
    </div>
  )
}
