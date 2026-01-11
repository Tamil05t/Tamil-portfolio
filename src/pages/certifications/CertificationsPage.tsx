import { motion } from 'framer-motion';
import CertificationList from './components/CertificationList';

export default function CertificationsPage() {
  return (
    <div className="container py-24">
      <motion.div 
        className="mb-20 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl font-bold mb-6">Certifications</h1>
        <p className="text-2xl leading-relaxed text-gray-300">
          Professional certifications and credentials in cybersecurity
        </p>
      </motion.div>
      
      <CertificationList />
    </div>
  );
}
