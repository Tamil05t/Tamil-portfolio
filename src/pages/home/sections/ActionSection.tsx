import { Link } from 'react-router-dom';

export default function ActionSection() {
  return (
    <section className="container py-16">
      <div className="rounded-lg border bg-muted/50 p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore My Work</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Check out my projects, read my notes, or get in touch to discuss cybersecurity
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
