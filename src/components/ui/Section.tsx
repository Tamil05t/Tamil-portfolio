import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  spacing?: 'sm' | 'md' | 'lg';
}

export default function Section({ 
  children, 
  className, 
  title, 
  subtitle,
  spacing = 'md' 
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24',
  };

  return (
    <section className={cn('container', spacingClasses[spacing], className)}>
      {(title || subtitle) && (
        <div className="mb-12">
          {title && (
            <h2 className="text-3xl font-semibold text-white mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
