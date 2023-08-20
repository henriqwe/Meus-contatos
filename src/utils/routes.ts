export const routes = {
  home: {
    path: '/'
  },
  createContact: {
    path: '/cadastrar'
  },
  viewContact: {
    path: (id: string | number) => `/contato/${id}`,
    pathWithParam: `/contato/:id`
  },
  editContact: {
    path: (id: string | number) => `/editar/${id}`,
    pathWithParam: `/editar/:id`
  },
  map: {
    path: `/mapa`
  },
  pageNotFound: {
    path: `/*`
  }
}
