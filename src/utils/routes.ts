export const routes = {
  home: {
    path: '/'
  },
  createContact: {
    path: '/cadastrar'
  },
  viewContact: {
    path: (id: string | number) => `/${id}`
  },
  editContact: {
    path: (id: string | number) => `/editar/${id}`
  },
  map: {
    path: `/mapa`
  }
}
