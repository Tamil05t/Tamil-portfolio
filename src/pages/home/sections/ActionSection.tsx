import { Link } from 'react-router-dom';

export default function ActionSection() {
  return (
    <section className="container py-24">
      <div className="rounded-lg border bg-muted/50 p-16 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Explore My Work</h2>
        <p className="text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl mx-auto">
          Check out my projects, read my notes, or get in touch to discuss cybersecurity
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-4 text-base font-medium text-primary-foreground hover:bg-primary/90"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-10 py-4 text-base font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
