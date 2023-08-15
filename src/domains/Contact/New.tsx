import { IContact } from '&operations/queries/fetchContacts'
import { Table } from '&components/Table/Table'
import { Input } from '&components/Input/Input'

import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useContacts } from '&contexts/contactsContext'
import { useNavigate } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'

export function NewContact() {
  const navigate = useNavigate()
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

  return (
    <div>
      <div onClick={() => navigate(routes.home.path)}>VOLTAR</div>

      <h1>Cadastro de contato</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} fieldName="Nome" />
        <button>Salvar</button>
      </form>
    </div>
  )
}
