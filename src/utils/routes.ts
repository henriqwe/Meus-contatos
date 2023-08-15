export const routes = {
  home: {
    path: '/'
  },
  createContact: {
    path: '/cadastro'
  },
  editContact: {
    path: (id: string) => `/${id}`
  }
}
