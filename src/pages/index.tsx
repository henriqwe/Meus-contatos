import { List } from '&domains/Contact/List/List'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <List />
    </motion.div>
  )
}
