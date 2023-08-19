import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('Campo obrigatório'),
  phone: Yup.string().required('Campo obrigatório'),
  username: Yup.string(),
  street: Yup.string(),
  zipcode: Yup.string(),
  suite: Yup.string(),
  city: Yup.string(),
  lat: Yup.string(),
  lng: Yup.string(),
  website: Yup.string(),
  companyName: Yup.string(),
  catchPhrase: Yup.string(),
  bs: Yup.string()
})
