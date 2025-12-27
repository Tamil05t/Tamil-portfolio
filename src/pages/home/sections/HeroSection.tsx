import { siteConfig } from '../../../config/site';

export default function HeroSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          {siteConfig.role}
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
      </div>
    </section>
  );
}
