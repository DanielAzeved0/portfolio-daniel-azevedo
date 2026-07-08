import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { EXPERIENCES } from '@/constants/data';
import { SECTION_STYLES } from '@/constants/theme';

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <h2 className={SECTION_STYLES.title}>Experiência Profissional</h2>

      <div className="grid gap-6">
        {EXPERIENCES.map((experience) => (
          <Card key={`${experience.company}-${experience.role}`}>
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <Badge variant="soft" className="mb-3">
                  {experience.period}
                </Badge>
                <h3 className="text-2xl font-bold text-[#333333]">{experience.role}</h3>
                <p className="mt-1 font-semibold text-[#4A90E2]">
                  {experience.company}
                  {experience.type ? ` · ${experience.type}` : ''}
                </p>
              </div>
            </div>

            <ul className="mb-6 grid gap-3 md:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-[#333333]">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[#00B0FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <Badge key={technology}>
                  {technology}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
