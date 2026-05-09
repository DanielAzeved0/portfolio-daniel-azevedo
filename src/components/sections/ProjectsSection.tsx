import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/constants/data';
import { SECTION_STYLES } from '@/constants/theme';

export default function ProjectsSection() {
  return (
    <section id="projects" className={`${SECTION_STYLES.container} bg-[#E0E0E0]`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={SECTION_STYLES.title}>Projetos</h2>
        <div className="mb-12 space-y-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
