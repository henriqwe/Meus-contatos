import { NewContact } from '&domains/Contact/New/New'
import { motion } from 'framer-motion'

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NewContact />
    </motion.div>
  )
}
