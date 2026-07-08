import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import LinkButton from '@/components/ui/LinkButton';
import type { Project } from '@/types/portfolio';

type ProjectCardProps = Project;

export default function ProjectCard({
  title,
  badge,
  icon,
  description,
  features,
  technologies,
  githubUrl,
  deployUrl,
  featured,
}: ProjectCardProps) {
  return (
    <Card variant="project">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <Badge variant="primary" className="mb-3">
            {badge}
          </Badge>
          <h3 className="text-3xl font-bold text-[var(--foreground)] mb-3">
            {icon} {title}
          </h3>
        </div>

        {featured && (
          <Badge variant="outline" className="hidden sm:inline-flex">
            Destaque
          </Badge>
        )}
      </div>

      <p className="text-[var(--foreground)] text-lg mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="text-[var(--accent-primary)] font-semibold mb-3 text-lg">Funcionalidades:</h4>
        <ul className="grid md:grid-cols-2 gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-[var(--foreground)]">
              <svg className="w-5 h-5 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-[var(--accent-primary)] font-semibold mb-3">Tecnologias:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        {deployUrl && (
          <LinkButton
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            className="flex items-center gap-2"
          >
            Ver Projeto
          </LinkButton>
        )}

        <LinkButton
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          Ver no GitHub
        </LinkButton>
      </div>
    </Card>
  );
}
