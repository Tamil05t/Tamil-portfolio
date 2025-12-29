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
    <section className="container py-24">
      <h2 className="text-4xl font-bold text-center mb-16">Focus Areas</h2>
      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {focusAreas.map((area) => (
          <div key={area.title} className="rounded-lg border p-8">
            <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
