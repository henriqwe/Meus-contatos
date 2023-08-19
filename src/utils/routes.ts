export const routes = {
  home: {
    path: '/'
  },
  createContact: {
    path: '/cadastrar'
  },
  viewContact: {
    path: (id: string | number) => `/contato/${id}`
  },
  editContact: {
    path: (id: string | number) => `/editar/${id}`
  },
  map: {
    path: `/mapa`
  }
}
