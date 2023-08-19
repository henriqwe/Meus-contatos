import { ViewContact } from '&domains/Contact/View/View'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      <ViewContact />
    </motion.div>
  )
}
