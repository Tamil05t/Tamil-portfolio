export interface Project {
  id: string;
  title: string;
  number: string;
  summary: string;
  tags: string[];
  image: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-code-review',
    title: 'AI-Powered Code Review Assistant',
    number: '#01',
    summary: 'An intelligent code review platform that uses machine learning to analyze pull requests, detect bugs, suggest optimizations, and enforce coding standards. Features real-time collaboration, automated testing integration, and comprehensive security scanning.',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    liveDemo: '#',
  },
  {
    id: 'collaborative-whiteboard',
    title: 'Real-time Collaborative Whiteboard',
    number: '#02',
    summary: 'A next-generation collaborative whiteboard platform with infinite canvas, real-time synchronization, and advanced drawing tools. Supports video conferencing, screen sharing, and export to multiple formats. Built for remote teams and educators.',
    tags: ['TypeScript', 'WebRTC', 'Socket.io', 'Canvas API', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop',
    liveDemo: '#',
  },
  {
    id: 'blockchain-voting',
    title: 'Blockchain Voting System',
    number: '#03',
    summary: 'A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.',
    tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    liveDemo: '#',
  },
  {
    id: 'cloud-dashboard',
    title: 'Cloud Infrastructure Dashboard',
    number: '#04',
    summary: 'A comprehensive cloud management platform for monitoring, managing, and optimizing multi-cloud infrastructure. Features real-time metrics, cost analysis, automated scaling, and security compliance monitoring across AWS, Azure, and GCP.',
    tags: ['Go', 'Kubernetes', 'Grafana', 'Prometheus', 'Terraform', 'React'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    liveDemo: '#',
  },
  {
    id: 'neural-visualizer',
    title: 'Neural Network Visualizer',
    number: '#05',
    summary: 'An interactive web application for visualizing, training, and experimenting with neural networks. Features drag-and-drop architecture builder, real-time training visualization, model comparison tools, and export capabilities for production deployment.',
    tags: ['Python', 'TensorFlow.js', 'D3.js', 'Next.js', 'WebGL', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    liveDemo: '#',
  },
  {
    id: 'web-vuln-lab',
    title: 'Web Vulnerability Lab',
    subtitle: 'Local environment for practicing web security testing',
    number: '#02',
    summary: 'Set up a local environment to practice identifying and exploiting common web vulnerabilities using OWASP WebGoat and Burp Suite.',
    tags: ['OWASP', 'Pentesting', 'Python', 'Flask'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop',
    liveDemo: '#',
    content: `# Web Vulnerability Lab Practice

## Overview

Set up a local environment to practice identifying and exploiting common web vulnerabilities. Used intentionally vulnerable applications to understand how security flaws work and how to test for them.

## What I Tested

- SQL injection in login forms and search parameters
- Cross-site scripting (XSS) in user input fields
- Authentication bypass techniques
- Session management weaknesses
- File upload vulnerabilities

## Tools Used

- OWASP WebGoat for guided exercises
- Burp Suite Community Edition for intercepting requests
- sqlmap for automated SQL injection testing
- Browser developer tools for analyzing client-side code

## What I Learned

Understanding vulnerabilities from an attacker's perspective helped me see why certain coding practices matter. I learned how to manually test for SQL injection by manipulating query parameters and saw firsthand how unsanitized input can break application logic.

Working with Burp Suite taught me how HTTP requests and responses work at a deeper level. I practiced intercepting traffic, modifying requests, and observing how applications handle unexpected input.

The most valuable lesson was recognizing that security isn't just about knowing attack types—it's about understanding how applications process data and where assumptions can be exploited.

## Next Steps

- Practice on TryHackMe and HackTheBox challenges
- Study secure coding patterns for the vulnerabilities I tested
- Learn more about automated security testing tools`,
  },
  {
    id: 'cloud-iam-misconfig',
    title: 'Cloud IAM Misconfiguration Scanner',
    subtitle: 'Automated AWS security assessment tool',
    number: '#03',
    summary: 'An automated security tool that scans AWS environments to detect common IAM misconfigurations and security risks using Python and boto3.',
    tags: ['AWS', 'IAM', 'Python', 'boto3'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop',
    liveDemo: '#',
    content: `# Cloud IAM Misconfiguration Scanner

## Overview

An automated security tool that scans AWS environments to detect common IAM misconfigurations and security risks.

## Technologies Used

- Python 3.11
- boto3 (AWS SDK)
- AWS IAM API
- JSON for reporting

## Key Features

### Detection Capabilities

1. **Overprivileged Roles**
   - Identifies roles with admin access
   - Detects wildcard permissions
   - Flags unnecessary resource access

2. **Access Key Management**
   - Finds old/unused access keys
   - Detects keys with excessive permissions
   - Identifies hardcoded credentials

3. **Policy Analysis**
   - Evaluates inline policies
   - Reviews trust relationships
   - Checks for public access

## Usage

\`\`\`bash
python iam_scanner.py --profile production --region us-east-1
\`\`\`

## Sample Output

\`\`\`json
{
  "findings": [
    {
      "severity": "HIGH",
      "type": "Overprivileged Role",
      "resource": "arn:aws:iam::123456789:role/AdminRole",
      "recommendation": "Apply least privilege principle"
    }
  ]
}
\`\`\`

## Future Enhancements

- Support for Azure and GCP
- Automated remediation suggestions
- Integration with CI/CD pipelines`,
  },
  {
    id: 'web-vuln-misconfig',
    title: 'Web Vulnerability Misconfiguration',
    subtitle: 'Common web application security misconfigurations',
    number: '#04',
    summary: 'This project demonstrates common web application misconfigurations and vulnerability patterns including security headers, CORS policies, and API misconfigurations.',
    tags: ['Web Security', 'Configuration', 'API'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop',
    liveDemo: '#',
    content: `# Web Vulnerability Misconfiguration

## Overview
This project demonstrates common web application misconfigurations and vulnerability patterns.

## Key Topics
- Security headers
- CORS policies
- Authentication flaws
- Database exposure
- API misconfiguration

## Technologies
- Web frameworks
- Server configuration
- Security tools

## Lessons Learned
Proper configuration is critical for application security. Regular audits and security testing help identify gaps.`,
  },
];
