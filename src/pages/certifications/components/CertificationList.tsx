import { certifications } from '../data/certifications';
import CertificationCard from './CertificationCard';

export default function CertificationList() {
  return (
    <div 
      className="grid gap-6"
      style={{ 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      }}
    >
      {certifications.map((certification, index) => (
        <CertificationCard 
          key={certification.id}
          certification={certification} 
          index={index}
        />
      ))}
    </div>
  );
}
