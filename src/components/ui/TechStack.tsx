import { motion } from 'framer-motion';

interface TechStackProps {
  tags: string[];
  animated?: boolean;
}

export default function TechStack({ tags, animated = true }: TechStackProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="tech-stack">
      {tags.map((tag, index) => {
        const Tag = animated ? motion.span : 'span';
        const animationProps = animated
          ? {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: index * 0.05, duration: 0.3 },
              whileHover: { scale: 1.08, y: -2 },
            }
          : {};

        return (
          <Tag key={tag} className="tech-tag" {...animationProps}>
            {tag}
          </Tag>
        );
      })}
    </div>
  );
}
