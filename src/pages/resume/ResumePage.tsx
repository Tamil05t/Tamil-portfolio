export default function ResumePage() {
  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6">Resume</h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Professional experience, education, and certifications in cybersecurity
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-8">
              <h3 className="text-2xl font-semibold mb-2">Security Analyst</h3>
              <p className="text-base text-muted-foreground mb-4">Company Name | 2023 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground leading-relaxed">
                <li>Conducted security assessments and penetration testing</li>
                <li>Implemented security monitoring and incident response procedures</li>
                <li>Developed automated security scanning tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="border-l-2 border-primary pl-8">
            <h3 className="text-2xl font-semibold mb-2">Bachelor's in Computer Science</h3>
            <p className="text-base text-muted-foreground">University Name | 2019 - 2023</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-base font-medium">
                CEH - Certified Ethical Hacker
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-base font-medium">
                CompTIA Security+
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['Python', 'Burp Suite', 'Metasploit', 'Wireshark', 'AWS', 'Docker', 'Linux', 'OWASP'].map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-full border px-4 py-2 text-base"
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
