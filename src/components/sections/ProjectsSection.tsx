import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/ui/Section';
import { PROJECTS } from '@/constants/data';
import { SECTION_STYLES } from '@/constants/theme';

export default function ProjectsSection() {
  return (
    <Section id="projects">
      <h2 className={SECTION_STYLES.title}>Projetos</h2>
      <div className="space-y-8 sm:space-y-10 lg:space-y-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}
