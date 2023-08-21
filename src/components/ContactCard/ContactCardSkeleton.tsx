import * as S from '&components/ContactCard/style'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'

export function ContactCardSkelton() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      style={{ width: '100%', height: '100%' }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <S.ContactCard data-testid={'contactcard-container-skeleton'}>
        <S.ContactCardWrapper>
          <S.AvatarContainer>
            <Skeleton
              circle
              height={48}
              width={48}
              containerClassName="avatar-skeleton"
            />
          </S.AvatarContainer>
          <S.DetailsWrapper>
            <S.DeatilContainer>
              <S.PrimaryDetail data-testid={'name-skeleton'}>
                <Skeleton width={145} />
              </S.PrimaryDetail>
            </S.DeatilContainer>
            <S.DeatilContainer>
              <S.SecondaryDetail data-testid={'phone-skeleton'}>
                <Skeleton width={85} />
              </S.SecondaryDetail>
            </S.DeatilContainer>
            <S.DeatilContainer>
              <S.SecondaryDetail data-testid={'email-skeleton'}>
                <Skeleton width={125} />
              </S.SecondaryDetail>
            </S.DeatilContainer>
          </S.DetailsWrapper>
        </S.ContactCardWrapper>
        <S.IconWrapper></S.IconWrapper>
      </S.ContactCard>
    </motion.div>
  )
}
