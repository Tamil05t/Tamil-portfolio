export default function FocusSection() {
  const focusAreas = [
    {
      title: 'Web Security',
      description: 'OWASP Top 10, vulnerability assessment, and penetration testing',
    },
    {
      title: 'Cloud Security',
      description: 'AWS/Azure security configurations and IAM best practices',
    },
    {
      title: 'Threat Intelligence',
      description: 'Security research and threat hunting techniques',
    },
  ];

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Focus Areas</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {focusAreas.map((area) => (
          <div key={area.title} className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
            <p className="text-muted-foreground">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
