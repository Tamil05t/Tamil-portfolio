import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export default function Card({ children, className = '', animate = true }: CardProps) {
  if (animate) {
    return (
      <motion.div 
        className={`card ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
      >
        {children}
      </motion.div>
    )
  }
  
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}
