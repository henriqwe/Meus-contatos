import { Input } from '&components/Input/Input'
import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
  UseFormHandleSubmit
} from 'react-hook-form'
import { ActionButtons } from '../ActionButtons'
import * as S from '../style'
import { Map } from '&components/Map/Map'
import { motion } from 'framer-motion'

interface props {
  isLoading: boolean
  handlePreviousStep: () => void
  activeStep: number
  control: Control<any, any>
  errors: DeepMap<FieldValues, FieldError> & { message?: string }
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
  onSubmit: () => void
  contactMapLocalition:
    | {
        lat: number
        lng: number
      }
    | undefined
  setContactMapLocalition: React.Dispatch<
    React.SetStateAction<
      | {
          lat: number
          lng: number
        }
      | undefined
    >
  >
}
export function AddressFormStep({
  isLoading,
  activeStep,
  handlePreviousStep,
  control,
  errors,
  handleSubmit,
  onSubmit,
  contactMapLocalition,
  setContactMapLocalition
}: props) {
  function onMapClick(event: google.maps.MapMouseEvent) {
    const lat = event.latLng?.lat()
    const lng = event.latLng?.lng()

    if (lat !== undefined && lng !== undefined) {
      setContactMapLocalition({ lat, lng })
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ width: '100%', height: '100%' }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        <S.InputsSection>
          <Input
            control={control}
            name="street"
            label="Rua"
            error={errors['street']}
            disabled={isLoading}
            data-testid={'input-street'}
          />
          <Input
            control={control}
            name="suite"
            label="Número"
            error={errors['suite']}
            disabled={isLoading}
            data-testid={'input-suite'}
          />
          <Input
            control={control}
            name="city"
            label="Cidade"
            error={errors['city']}
            disabled={isLoading}
            data-testid={'input-city'}
          />
          <Input
            control={control}
            name="zipcode"
            label="CEP"
            error={errors['zipcode']}
            disabled={isLoading}
            data-testid={'input-zipcode'}
          />
        </S.InputsSection>
      </motion.div>

      <S.MapContainer>
        <Map
          contacts={[]}
          showInfoWindow={false}
          onMapClick={onMapClick}
          formMarkerPosition={contactMapLocalition}
        />
      </S.MapContainer>
      <ActionButtons
        activeStep={activeStep}
        handlePreviousStep={handlePreviousStep}
        isLoading={isLoading}
      />
    </S.Form>
  )
}
