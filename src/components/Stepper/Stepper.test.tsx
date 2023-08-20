import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Stepper } from './Stepper'
import {
  BuildingStorefrontIcon,
  MapPinIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    icon: <UserIcon />,
    label: 'Dados pessoais'
  },
  {
    icon: <MapPinIcon />,
    label: 'Endereço'
  },
  {
    icon: <BuildingStorefrontIcon />,
    label: 'Empresa'
  }
]

describe('Stepper', () => {
  it('should render correctly snapshot', async () => {
    const { container, findByTestId } = render(
      <Stepper steps={steps} activeStep={0} />
    )

    const stepperContainer = await findByTestId('stepper-container')

    expect(container).toMatchSnapshot()
    expect(stepperContainer).toBeTruthy()
  })
})
