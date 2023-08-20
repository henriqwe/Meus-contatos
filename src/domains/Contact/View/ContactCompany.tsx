import * as S from './style'
import type { IContact } from '&types/contact'
import { motion } from 'framer-motion'

export function ContactCompany({ contact }: { contact: IContact }) {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 40
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <S.TabItemContainer>
        <S.InfonContainer>
          <S.InfoWrapper variant="white">
            <S.InfoTitle>Nome</S.InfoTitle>
            <S.InfoDescription>{contact.company.name || '-'}</S.InfoDescription>
          </S.InfoWrapper>
          <S.InfoWrapper variant="gray">
            <S.InfoTitle>Frase de efeito</S.InfoTitle>
            <S.InfoDescription>
              {contact.company.catchPhrase || '-'}
            </S.InfoDescription>
          </S.InfoWrapper>
          <S.InfoWrapper variant="white">
            <S.InfoTitle>Estratégia de negócio</S.InfoTitle>
            <S.InfoDescription>{contact.company.bs || '-'}</S.InfoDescription>
          </S.InfoWrapper>
        </S.InfonContainer>
      </S.TabItemContainer>
    </motion.div>
  )
}
