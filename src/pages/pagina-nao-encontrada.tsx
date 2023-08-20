import { PageNotFound } from '&domains/PageNotFound/PageNotFound'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ width: '100%', height: '100%' }}
    >
      <PageNotFound />
    </motion.div>
  )
}
