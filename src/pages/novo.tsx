import { useNavigate } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div onClick={() => navigate('/')}>VOLTAR</div>

      <div>Novo</div>
    </div>
  )
}

export default Page
