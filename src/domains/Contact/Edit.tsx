import { IContact } from '&operations/queries/fetchContacts'
import { Table } from '&components/Table/Table'
import { Input } from '&components/Input/Input'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useContacts } from '&contexts/contactsContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'

export function EditContact() {
  const navigate = useNavigate()
  const { id } = useParams()

  // const { contactsQuery, removeContact } = useContacts()
  function onSubmit(formData) {
    console.log({ formData })
  }
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm()

  const { getContactById, contactsQuery } = useContacts()

  const contact = getContactById(id as string)

  if (contactsQuery.isLoading) {
    return <Loading />
  }
  if (!contact && !contactsQuery.isLoading) {
    throw new Error()
  }

  useEffect(() => {
    if (contact) {
      reset({ name: contact.name })
    }
  }, [contact])
  return (
    <div>
      <div onClick={() => navigate(routes.home.path)}>VOLTAR</div>
      <div>{contact?.name}</div>
      <div>
        <h1>Edição de contato</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input control={control} fieldName="name" />
          <button>Salvar</button>
        </form>
      </div>
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
