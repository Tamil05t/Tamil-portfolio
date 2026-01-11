export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  summary: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  gradient: string;
}

export const certifications: Certification[] = [
  {
    id: 'comptia-security-plus',
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2024-03',
    summary: 'Validates baseline cybersecurity skills including threat detection, risk management, cryptography, and network security fundamentals.',
    credentialId: 'COMP001234567',
    credentialUrl: 'https://drive.google.com/file/d/1baGu2nW4VoYJ-wCO_LtLAC7vaiq3zxS1/view?usp=sharing',
    skills: ['Network Security', 'Threat Analysis', 'Risk Management', 'Cryptography'],
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  },
  {
    id: 'aws-certified-security',
    title: 'AWS Security Specialty',
    issuer: 'Amazon Web Services',
    date: '2024-01',
    summary: 'Demonstrates expertise in securing AWS workloads, data protection, incident response, and compliance in cloud environments.',
    credentialId: 'AWS-SEC-2024-001',
    credentialUrl: 'https://drive.google.com/file/d/1baGu2nW4VoYJ-wCO_LtLAC7vaiq3zxS1/view?usp=sharing',
    skills: ['AWS Security', 'IAM', 'Cloud Security', 'Compliance'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  {
    id: 'certified-ethical-hacker',
    title: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2023-11',
    summary: 'Comprehensive ethical hacking and penetration testing certification covering advanced attack vectors and defensive strategies.',
    credentialId: 'ECC-CEH-123456',
    credentialUrl: 'https://drive.google.com/file/d/1baGu2nW4VoYJ-wCO_LtLAC7vaiq3zxS1/view?usp=sharing',
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'Web App Security', 'Network Scanning'],
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
  },
  {
    id: 'cissp',
    title: 'CISSP',
    issuer: 'ISC2',
    date: '2023-08',
    summary: 'Advanced certification demonstrating expertise across eight security domains including security operations, asset security, and software development security.',
    credentialId: 'ISC2-CISSP-789012',
    credentialUrl: 'https://drive.google.com/file/d/1baGu2nW4VoYJ-wCO_LtLAC7vaiq3zxS1/view?usp=sharing',
    skills: ['Security Architecture', 'Risk Management', 'Security Operations', 'Access Control'],
    gradient: 'linear-gradient(135deg, #f43f5e, #ef4444)',
  },
  {
    id: 'oscp',
    title: 'OSCP',
    issuer: 'Offensive Security',
    date: '2023-06',
    summary: 'Hands-on penetration testing certification focusing on practical exploitation techniques.',
    credentialId: 'OS-OSCP-456789',
    credentialUrl: 'https://drive.google.com/file/d/1baGu2nW4VoYJ-wCO_LtLAC7vaiq3zxS1/view?usp=sharing',
    skills: ['Penetration Testing', 'Exploitation', 'Privilege Escalation', 'Buffer Overflow'],
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
  },
  {
    id: 'azure-security',
    title: 'Azure Security Engineer',
    issuer: 'Microsoft',
    date: '2023-04',
    summary: 'Microsoft Azure security certification covering identity management and security operations.',
    credentialId: 'MS-AZ-500-123',
    credentialUrl: 'https://drive.google.com/file/d/1baGu2nW4VoYJ-wCO_LtLAC7vaiq3zxS1/view?usp=sharing',
    skills: ['Azure Security', 'Identity Management', 'Compliance', 'Security Operations'],
    gradient: 'linear-gradient(135deg, #f97316, #eab308)',
  },
  {
    id: 'cism',
    title: 'CISM',
    issuer: 'ISACA',
    date: '2023-02',
    summary: 'Information security management certification focusing on governance and risk management.',
    credentialId: 'ISACA-CISM-789',
    credentialUrl: 'https://drive.google.com/file/d/1baGu2nW4VoYJ-wCO_LtLAC7vaiq3zxS1/view?usp=sharing',
    skills: ['Security Governance', 'Risk Management', 'Incident Management', 'Compliance'],
    gradient: 'linear-gradient(135deg, #eab308, #84cc16)',
  },
  {
    id: 'ccsp',
    title: 'CCSP',
    issuer: 'ISC2',
    date: '2022-12',
    summary: 'Cloud security certification demonstrating expertise in cloud architecture and operations.',
    credentialId: 'ISC2-CCSP-456',
    credentialUrl: 'https://drive.google.com/file/d/1baGu2nW4VoYJ-wCO_LtLAC7vaiq3zxS1/view?usp=sharing',
    skills: ['Cloud Security', 'Architecture', 'Data Security', 'Compliance'],
    gradient: 'linear-gradient(135deg, #84cc16, #10b981)',
  },
];
