export const routes = {
  home: {
    path: '/'
  },
  createContact: {
    path: '/cadastrar'
  },
  map: {
    path: `/mapa`
  },
  viewContact: {
    path: (id: string | number) => `/${id}`,
    pathWithParam: `/:id`
  },
  editContact: {
    path: (id: string | number) => `/${id}/editar`,
    pathWithParam: `/:id/editar`
  },
  pageNotFound: {
    path: `/*`
  }
}
