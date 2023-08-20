import * as S from './style'
import type { IContact } from '&types/contact'
import { Map } from '&components/Map/Map'
import { motion } from 'framer-motion'

export function ContactAddrees({ contact }: { contact: IContact }) {
  return (
    <S.TabItemContainer data-testid={'tab-container'}>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 40
        }}
        style={{
          width: '100%',
          display: 'flex'
        }}
      >
        <S.InfonContainer>
          <S.InfoWrapper variant="white">
            <S.InfoTitle>Rua</S.InfoTitle>
            <S.InfoDescription data-testid={'info-street'}>
              {contact.address.street || '-'}
            </S.InfoDescription>
          </S.InfoWrapper>
          <S.InfoWrapper variant="gray">
            <S.InfoTitle>Número</S.InfoTitle>
            <S.InfoDescription data-testid={'info-suite'}>
              {contact.address.suite || '-'}
            </S.InfoDescription>
          </S.InfoWrapper>
          <S.InfoWrapper variant="white">
            <S.InfoTitle>Cidade</S.InfoTitle>
            <S.InfoDescription data-testid={'info-city'}>
              {contact.address.city || '-'}
            </S.InfoDescription>
          </S.InfoWrapper>
          <S.InfoWrapper variant="gray">
            <S.InfoTitle>CEP</S.InfoTitle>
            <S.InfoDescription data-testid={'info-zipcode'}>
              {contact.address.zipcode || '-'}
            </S.InfoDescription>
          </S.InfoWrapper>
        </S.InfonContainer>
      </motion.div>

      {contact.address.geo.lat && contact.address.geo.lng && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 40
          }}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            backgroundColor: 'red'
          }}
        >
          <S.MapContainer>
            <Map contacts={[contact]} showInfoWindow={false} />
          </S.MapContainer>
        </motion.div>
      )}
    </S.TabItemContainer>
  )
}
