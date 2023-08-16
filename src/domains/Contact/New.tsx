import { Input } from '&components/Input/Input'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { IFormData, useContacts } from '&contexts/contactsContext'
import { useNavigate } from 'react-router-dom'
import { routes } from '&utils/routes'
import { yupResolver } from '@hookform/resolvers/yup'
import { SButtonPrimary } from '&components/Button/Button'
import { notification } from '&utils/notification'

export function NewContact() {
  const navigate = useNavigate()
  const { contactSchema, addContact } = useContacts()
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(formData: IFormData) {
    try {
      setIsLoading(true)
      addContact(formData)
      notification('Contato cadastrado com sucesso!', 'success')
      reset()
      navigate(routes.home.path)
    } catch (error) {
      console.error({ error })
    } finally {
      setIsLoading(false)
    }
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(contactSchema) })

  return (
    <div>
      <div onClick={() => navigate(routes.home.path)}>VOLTAR</div>

      <h1>Cadastro de contato</h1>
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
        <SButtonPrimary disabled={isLoading}>Salvar</SButtonPrimary>
      </form>
    </div>
  )
}
