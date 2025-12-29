import { siteConfig } from '../../../config/site';

export default function HeroSection() {
  return (
    <section className="container py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="mt-8 text-2xl font-medium text-foreground">
          {siteConfig.role}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {siteConfig.description}
        </p>
      </div>
    </section>
  );
}
