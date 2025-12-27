export default function ResumePage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-6">
              <h3 className="text-xl font-semibold">Security Analyst</h3>
              <p className="text-muted-foreground mb-2">Company Name | 2023 - Present</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Conducted security assessments and penetration testing</li>
                <li>Implemented security monitoring and incident response procedures</li>
                <li>Developed automated security scanning tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
            <p className="text-muted-foreground">University Name | 2019 - 2023</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">
                CEH - Certified Ethical Hacker
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium">
                CompTIA Security+
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Burp Suite', 'Metasploit', 'Wireshark', 'AWS', 'Docker', 'Linux', 'OWASP'].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
